import { spawnSync } from 'node:child_process';
import {
  access,
  cp,
  mkdir,
  mkdtemp,
  readFile,
  realpath,
  readdir,
  rename,
  rm,
  stat,
  symlink,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(siteRoot, 'src/content/reference');
const manifestPath = path.join(siteRoot, 'src/data/documentation-versions.json');
const typedocBin = path.join(siteRoot, 'node_modules/.bin/typedoc');
const typedocInternalSegment = '-internal-';
const internalDeclarationsSegment = 'InternalDeclarations';

function stripOrderPrefix(segment) {
  return segment.replace(/^\d+[._-]/, '');
}

function stripDocumentOrder(relativePath) {
  return relativePath
    .split('/')
    .map(stripOrderPrefix)
    .join('/');
}

function parseArguments(argv) {
  const options = {
    channel: undefined,
    default: false,
    ref: 'working-tree',
    source: undefined,
    version: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--default') {
      options.default = true;
      continue;
    }

    if (!argument.startsWith('--')) {
      throw new Error(`알 수 없는 인자입니다: ${argument}`);
    }

    const key = argument.slice(2);
    if (!['channel', 'ref', 'source', 'version'].includes(key)) {
      throw new Error(`알 수 없는 옵션입니다: ${argument}`);
    }

    const value = argv[index + 1];
    if (!value || value.startsWith('--')) {
      throw new Error(`${argument} 값이 필요합니다.`);
    }

    options[key] = value;
    index += 1;
  }

  if (!options.source) throw new Error('--source로 Kawaikara 저장소 경로를 지정해야 합니다.');
  if (!['stable', 'staging'].includes(options.channel)) {
    throw new Error('--channel은 stable 또는 staging이어야 합니다.');
  }

  return options;
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? siteRoot,
    encoding: 'utf8',
    stdio: options.quiet ? 'pipe' : 'inherit',
  });

  if (result.status !== 0) {
    const details = options.quiet ? `\n${result.stderr || result.stdout}` : '';
    throw new Error(`${command} 실행에 실패했습니다.${details}`);
  }

  return result.stdout?.trim() ?? '';
}

async function exists(target) {
  try {
    await access(target);
    return true;
  } catch {
    return false;
  }
}

async function readJson(target) {
  return JSON.parse(await readFile(target, 'utf8'));
}

async function listFiles(root, predicate = () => true) {
  if (!(await exists(root))) return [];
  const files = [];

  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) await visit(absolute);
      else if (entry.isFile() && predicate(absolute)) files.push(absolute);
    }
  }

  await visit(root);
  return files;
}

async function prepareSource(sourceRepository, sourceRef) {
  if (sourceRef === 'working-tree') {
    return { cleanup: async () => {}, root: sourceRepository };
  }

  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'kawaikara-doc-source-'));
  const archivePath = path.join(temporaryRoot, 'source.tar');
  const snapshotRoot = path.join(temporaryRoot, 'source');
  await mkdir(snapshotRoot);

  run('git', ['archive', '--format=tar', `--output=${archivePath}`, sourceRef], {
    cwd: sourceRepository,
  });
  run('tar', ['-xf', archivePath, '-C', snapshotRoot]);

  const sourceModules = path.join(sourceRepository, 'node_modules');
  const snapshotModules = path.join(snapshotRoot, 'node_modules');
  if (await exists(sourceModules)) await symlink(sourceModules, snapshotModules, 'dir');

  return {
    cleanup: () => rm(temporaryRoot, { force: true, recursive: true }),
    root: await realpath(snapshotRoot),
  };
}

function documentationRoute(channel, version, section, relativeFile) {
  let normalized = relativeFile.replaceAll(path.sep, '/').replace(/\.md$/i, '');
  if (section === 'app-design') normalized = stripDocumentOrder(normalized);
  if (section === 'app-api') normalized = normalized.replace(/^(?:src|typescript_src)\//, '');
  if (section === 'builtin-sites') normalized = normalized.replace(/^packages\/builtin-sites\/src\//, '');
  if (section === 'site-api') normalized = normalized.replace(/^packages\/site-api\/src\//, '');
  const routePath = normalized === 'README'
    ? ''
    : normalized.endsWith('/README')
      ? normalized.slice(0, -'/README'.length)
      : normalized;
  const base = section === 'app-design'
    ? `/docs/${channel}/${version}/app/`
    : `/api/${channel}/${version}/${section === 'site-api'
      ? 'site-api'
      : section === 'builtin-sites'
        ? 'builtin-sites'
        : 'app'}/`;

  return routePath ? `${base}${routePath}/` : base;
}

function plainTitle(markdown, fallback) {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1] ?? fallback;
  return stripMarkdownFormatting(heading)
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .trim();
}

function stripMarkdownFormatting(value) {
  const escapedCharacters = [];
  const protectedValue = value.replace(/\\([\\`*_[\]{}()#+.!~>-])/g, (_match, character) => {
    const index = escapedCharacters.push(character) - 1;
    return `\uE000${index}\uE001`;
  });

  return protectedValue
    .replace(/[*_`~]/g, '')
    .replace(/\uE000(\d+)\uE001/g, (_match, index) => escapedCharacters[Number(index)] ?? '');
}

function stripMarkdown(markdown) {
  return stripMarkdownFormatting(markdown
    .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ''))
    .replace(/\s+/g, ' ')
    .trim();
}

function extractDescription(markdown) {
  const blocks = markdown.trim().split(/\n\s*\n/);
  for (const block of blocks) {
    const trimmed = block.trim();
    if (!trimmed || /^(?:#|>|[-*+]\s|\d+\.\s|```|\||<)/.test(trimmed)) continue;
    const description = stripMarkdown(trimmed);
    if (description) return description;
  }
  return undefined;
}

function parseTypeDocHeading(heading, relative) {
  const kindMatch = heading.match(/^(Class|Interface|Function|Variable|Type Alias|Enumeration|Namespace):\s+(.+)$/i);
  if (kindMatch) return { kind: kindMatch[1], title: stripMarkdown(kindMatch[2]) };
  if (relative === 'README.md') return { kind: 'Overview', title: stripMarkdown(heading) };
  return {
    kind: relative.endsWith('/README.md') ? 'Module' : 'Reference',
    title: relative.endsWith('/README.md')
      ? path.basename(path.dirname(relative))
      : stripMarkdown(heading),
  };
}

function contextualModuleTitle(title, displayPath, forceContext = false) {
  const segments = displayPath.split('/').filter(Boolean);
  const leaf = segments.at(-1) ?? title;
  const owner = segments.at(-2) ?? segments.at(-1) ?? title;

  if (leaf === internalDeclarationsSegment || title === typedocInternalSegment || title === '<internal>') {
    return `${owner} · Internal declarations`;
  }
  if (title === 'Index') return segments.length === 1 ? 'Package entry point' : `${owner} entry point`;
  if (title === 'App') return `${owner} app module`;
  if (!forceContext) return title;

  const context = segments.slice(0, -1).slice(-2).join(' / ');
  return context ? `${title} · ${context}` : title;
}

function displayApiTitle(parsed, displayPath) {
  return parsed.kind === 'Module'
    ? contextualModuleTitle(parsed.title, displayPath)
    : parsed.title;
}

function qualifyDuplicateModuleTitle(parsedTitle, displayTitle, displayPath) {
  const segments = displayPath.split('/').filter(Boolean);
  if (segments.at(-1) === internalDeclarationsSegment) {
    const context = segments.slice(0, -2).slice(-2).join(' / ');
    return context ? `${displayTitle} · ${context}` : displayTitle;
  }
  return contextualModuleTitle(parsedTitle, displayPath, true);
}

function cleanSourcePath(relative, section) {
  let cleaned = relative.replaceAll(path.sep, '/').replace(/\/README\.md$/i, '').replace(/\.md$/i, '');
  if (cleaned === 'README') return '';
  if (section === 'app-design') {
    cleaned = stripDocumentOrder(cleaned);
    cleaned = cleaned.replace(/^i18n\/(?:ko|ja)\//, '');
  }
  if (section === 'app-api') cleaned = cleaned.replace(/^(?:src|typescript_src)\//, '');
  if (section === 'builtin-sites') cleaned = cleaned.replace(/^packages\/builtin-sites\/src\//, '');
  if (section === 'site-api') cleaned = cleaned.replace(/^packages\/site-api\/src\//, '');
  return cleaned.replace(/\/(?:classes|interfaces|functions|variables|type-aliases|enumerations|namespaces)\/[^/]+$/i, '');
}

function sectionLabel(section) {
  if (section === 'app-design') return 'APP Design';
  if (section === 'app-api') return 'Source API';
  if (section === 'builtin-sites') return 'Built-in Sites';
  return 'Site API';
}

function sectionDescription(section) {
  if (section === 'app-api') {
    return 'Source reference for Kawaikara application modules and their public and private symbols.';
  }
  if (section === 'builtin-sites') {
    return 'Reference for bundled Site Providers, page injections, and bundle entry points shipped with Kawaikara.';
  }
  return 'Reference for the Site API contracts used to implement Providers and Plugins.';
}

function categoryFor(section, displayPath) {
  const first = displayPath.split('/').filter(Boolean)[0];
  return first ? `${sectionLabel(section)} · ${first}` : sectionLabel(section);
}

const typeReferenceTargets = new Map([
  ['Array', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', source: 'JavaScript' }],
  ['Boolean', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean', source: 'JavaScript' }],
  ['Date', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date', source: 'JavaScript' }],
  ['Error', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error', source: 'JavaScript' }],
  ['Map', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map', source: 'JavaScript' }],
  ['Number', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', source: 'JavaScript' }],
  ['Object', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object', source: 'JavaScript' }],
  ['Promise', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise', source: 'JavaScript' }],
  ['RegExp', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp', source: 'JavaScript' }],
  ['Set', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set', source: 'JavaScript' }],
  ['String', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String', source: 'JavaScript' }],
  ['URL', { href: 'https://developer.mozilla.org/en-US/docs/Web/API/URL', source: 'Web API' }],
  ['WeakMap', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap', source: 'JavaScript' }],
  ['WeakSet', { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet', source: 'JavaScript' }],
  ['bigint', { href: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html', source: 'TypeScript' }],
  ['boolean', { href: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html', source: 'TypeScript' }],
  ['never', { href: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#never', source: 'TypeScript' }],
  ['number', { href: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html', source: 'TypeScript' }],
  ['object', { href: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#object', source: 'TypeScript' }],
  ['string', { href: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html', source: 'TypeScript' }],
  ['symbol', { href: 'https://www.typescriptlang.org/docs/handbook/symbols.html', source: 'TypeScript' }],
  ['unknown', { href: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown', source: 'TypeScript' }],
  ['void', { href: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#void', source: 'TypeScript' }],
]);

const contextualTypeReferenceTargets = [
  {
    name: 'Client',
    pathPattern: /DiscordPresenceManager/,
    target: {
      href: 'https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/discord-rpc/index.d.ts#L54',
      source: 'discord-rpc',
    },
  },
];

function parseFrontmatterValue(markdown, key) {
  const value = markdown.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1];
  if (!value) return undefined;
  try {
    return JSON.parse(value);
  } catch {
    return value.trim();
  }
}

function typeDisplayText(markdown) {
  return markdown
    .replace(/\[(`?)([^`\]]+)\1\]\([^\)]+\)/g, '$2')
    .replace(/[`\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function sourceForHref(href) {
  if (href.startsWith('/api/')) return 'Kawaikara';
  if (href.includes('developer.mozilla.org')) return 'JavaScript';
  if (href.includes('typescriptlang.org')) return 'TypeScript';
  if (href.includes('discord-rpc')) return 'discord-rpc';
  return 'External';
}

async function createSymbolReferenceIndex(incomingRoot, channel, appVersion) {
  const index = new Map();
  for (const section of ['app-api', 'builtin-sites', 'site-api']) {
    const sectionRoot = path.join(incomingRoot, section);
    const files = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
    for (const file of files) {
      const relative = path.relative(sectionRoot, file).replaceAll(path.sep, '/');
      if (relative === 'README.md' || relative.startsWith('categories/')) continue;
      const markdown = await readFile(file, 'utf8');
      const title = parseFrontmatterValue(markdown, 'title');
      const kind = parseFrontmatterValue(markdown, 'symbolKind');
      if (!title || !['Class', 'Interface', 'Type Alias', 'Enumeration'].includes(kind)) continue;
      const target = {
        href: documentationRoute(channel, appVersion, section, relative),
        source: 'Kawaikara',
      };
      const targets = index.get(title) ?? [];
      targets.push(target);
      index.set(title, targets);
    }
  }
  return index;
}

function resolveTypeReference(typeMarkdown, relative, symbolIndex) {
  const existingLink = typeMarkdown.match(/\[(`?)([^`\]]+)\1\]\(([^\)]+)\)/);
  if (existingLink) {
    return {
      href: existingLink[3],
      source: sourceForHref(existingLink[3]),
    };
  }

  const identifiers = typeDisplayText(typeMarkdown).match(/[A-Za-z_$][\w$]*/g) ?? [];
  for (const identifier of identifiers.toReversed()) {
    const internalTargets = symbolIndex.get(identifier);
    if (internalTargets?.length === 1) return internalTargets[0];
  }

  for (const contextual of contextualTypeReferenceTargets) {
    if (identifiers.includes(contextual.name) && contextual.pathPattern.test(relative)) {
      return contextual.target;
    }
  }

  for (const identifier of identifiers) {
    const target = typeReferenceTargets.get(identifier);
    if (target) return target;
  }

  return undefined;
}

function annotatePropertyTypes(markdown, relative, symbolIndex) {
  const lines = markdown.split('\n');
  const annotated = [];
  let section = '';

  for (let line of lines) {
    const sectionHeading = line.match(/^##\s+(.+)$/);
    if (sectionHeading) section = sectionHeading[1].trim();
    if (section !== 'Properties') {
      annotated.push(line);
      continue;
    }

    const property = line.match(/^(>\s+.*?\*\*[^*]+\*\*):\s+(.+)$/);
    if (!property) {
      annotated.push(line);
      continue;
    }

    const typeMarkdown = property[2].split(' = ')[0].trim();
    const displayType = typeDisplayText(typeMarkdown);
    if (!displayType) {
      annotated.push(line);
      continue;
    }

    const reference = resolveTypeReference(typeMarkdown, relative, symbolIndex);
    if (reference && /^`[A-Za-z_$][\w$]*`$/.test(typeMarkdown)) {
      line = line.replace(`: ${typeMarkdown}`, `: [${typeMarkdown}](${reference.href})`);
    }

    const source = reference ? ` · ${reference.source}` : '';
    const typeMarkup = reference
      ? `<a class="type-reference-link" href="${escapeHtml(reference.href)}"><code>${escapeHtml(displayType)}</code></a>`
      : `<code>${escapeHtml(displayType)}</code>`;
    annotated.push(
      line,
      '>',
      `> <span class="type-reference"><span class="type-reference-label">TYPE${source}</span>${typeMarkup}</span>`,
    );
  }

  return annotated.join('\n');
}

async function annotateApiPropertyTypes(incomingRoot, channel, appVersion) {
  const symbolIndex = await createSymbolReferenceIndex(incomingRoot, channel, appVersion);
  for (const section of ['app-api', 'builtin-sites', 'site-api']) {
    const sectionRoot = path.join(incomingRoot, section);
    const files = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
    for (const file of files) {
      const relative = path.relative(sectionRoot, file).replaceAll(path.sep, '/');
      if (relative === 'README.md' || relative.startsWith('categories/')) continue;
      const markdown = await readFile(file, 'utf8');
      await writeFile(file, annotatePropertyTypes(markdown, relative, symbolIndex), 'utf8');
    }
  }
}

function stripGeneratedHeading(markdown, section) {
  const match = markdown.match(/^#\s+(.+)$/m);
  if (!match) return { body: markdown.trim(), heading: '' };
  const headingEnd = match.index + match[0].length;
  const body = markdown.slice(headingEnd).replace(/^\s+/, '');
  return {
    body: section === 'app-design' ? body : body.replace(/^(?:\*\*\*|-{3,})\s*/m, '').trim(),
    heading: match[1],
  };
}

function rewriteMarkdownLinks(markdown, file, sectionRoot, channel, version, section) {
  let rewritten = markdown.replace(
    /(\]\()<?([^\s)>]+\.md)(#[^\s)>]+)?(?:>)?(\))/gi,
    (original, prefix, target, fragment = '', suffix) => {
      if (/^[a-z]+:/i.test(target)) return original;
      let decodedTarget;
      try {
        decodedTarget = decodeURIComponent(target);
      } catch {
        decodedTarget = target;
      }

      let resolved = path.resolve(path.dirname(file), decodedTarget);
      let relative = path.relative(sectionRoot, resolved);
      if (section === 'app-design' && relative.startsWith('..') && decodedTarget.startsWith('../build/')) {
        resolved = path.join(sectionRoot, 'build', decodedTarget.slice('../build/'.length));
        relative = path.relative(sectionRoot, resolved);
      }
      if (relative.startsWith('..') || path.isAbsolute(relative)) return original;
      return `${prefix}${documentationRoute(channel, version, section, relative)}${fragment}${suffix}`;
    },
  );

  if (section === 'app-design') {
    rewritten = rewritten
      .replace(/\]\((?:\.\.\/)+src\)/g, `](/api/${channel}/${version}/app/)`)
      .replace(/\]\((?:\.\.\/)+packages\/builtin-sites\)/g, `](/api/${channel}/${version}/builtin-sites/)`)
      .replace(/\]\((?:\.\.\/)+packages\/site-api\)/g, `](/api/${channel}/${version}/site-api/)`);
  }

  return rewritten;
}

async function normalizeMarkdownFiles(sectionRoot) {
  const files = await listFiles(sectionRoot, (file) => /\.md$/i.test(file));
  for (const file of files) {
    if (file.endsWith('.md')) continue;
    await rename(file, file.replace(/\.md$/i, '.md'));
  }
}

async function normalizeTypeDocOutput(sectionRoot) {
  await normalizeMarkdownFiles(sectionRoot);
  const files = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
  const internalDirectories = new Set();

  for (const file of files) {
    const segments = file.split(path.sep);
    const internalIndex = segments.lastIndexOf(typedocInternalSegment);
    if (internalIndex !== -1) internalDirectories.add(segments.slice(0, internalIndex + 1).join(path.sep));
  }

  for (const directory of [...internalDirectories].sort((left, right) => right.length - left.length)) {
    await rename(directory, path.join(path.dirname(directory), internalDeclarationsSegment));
  }

  const normalizedFiles = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
  for (const file of normalizedFiles) {
    const markdown = await readFile(file, 'utf8');
    const normalized = markdown
      .replaceAll(typedocInternalSegment, internalDeclarationsSegment)
      .replaceAll('\\<internal\\>', 'Internal declarations')
      .replaceAll('<internal>', 'Internal declarations');
    if (normalized !== markdown) await writeFile(file, normalized, 'utf8');
  }
}

async function ensureDesignIndex(sectionRoot) {
  const indexPath = path.join(sectionRoot, 'README.md');
  if (await exists(indexPath)) return;

  const files = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
  const links = [];
  for (const file of files.sort()) {
    const relative = path.relative(sectionRoot, file).replaceAll(path.sep, '/');
    const markdown = await readFile(file, 'utf8');
    links.push(`- [${plainTitle(markdown, path.basename(file, '.md'))}](./${relative})`);
  }

  await writeFile(
    indexPath,
    `# Kawaikara 설계 문서\n\n${links.join('\n')}\n`,
    'utf8',
  );
}

function catalogGroup(section, item) {
  const segments = item.displayPath.split('/').filter(Boolean);
  if (section === 'app-api') return segments[0] || 'Core';
  if (section === 'builtin-sites') {
    if (segments.includes('Inject')) return 'Injection';
    if (segments[0] === 'Providers') return 'Providers';
    return 'Bundle Core';
  }
  if (item.kind === 'Module') return 'Modules';
  return item.kind === 'Overview' ? 'Overview' : pluralKind(item.kind);
}

function pluralKind(kind) {
  if (kind === 'Class') return 'Classes';
  if (kind === 'Type Alias') return 'Type Aliases';
  return `${kind}s`;
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function kindOrder(kind) {
  const index = ['Class', 'Interface', 'Function', 'Type Alias', 'Enumeration', 'Variable', 'Module', 'Reference']
    .indexOf(kind);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function groupOrder(section, group) {
  const preferred = section === 'app-api'
    ? ['Main', 'Common', 'Renderer', 'Preload', 'Development', 'Debug']
    : section === 'builtin-sites'
      ? ['Providers', 'Injection', 'Bundle Core']
      : ['Classes', 'Interfaces', 'Functions', 'Type Aliases', 'Variables', 'Modules', 'References'];
  const index = preferred.indexOf(group);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function groupDescription(section, group) {
  const descriptions = {
    'app-api': {
      Main: 'Application startup, managers, windows, site lifecycle, and main-process coordination.',
      Common: 'Shared IPC contracts, types, build configuration, and cross-process values.',
      Renderer: 'Application-owned views, UI behavior, and renderer-side integrations.',
      Preload: 'Restricted bridges between isolated pages and application capabilities.',
      Development: 'Development-mode helpers, inspection, and local tooling integration.',
      Debug: 'Debugger startup and diagnostic configuration.',
    },
    'builtin-sites': {
      Providers: 'Site-specific navigation, login, playback, shortcut, and compatibility policies.',
      Injection: 'Scripts executed inside supported service pages.',
      'Bundle Core': 'Built-in bundle manifest, registration, icons, and update entry points.',
    },
    'site-api': {
      Classes: 'Reusable runtime base classes and stores.',
      Interfaces: 'Provider, Plugin, viewer, context, and contribution contracts.',
      Functions: 'Factories, guards, serializers, decorators, and shared helpers.',
      'Type Aliases': 'Union types and callable contracts used across the Site API.',
      Variables: 'Published constants and supported action lists.',
      Modules: 'Module-level exports grouped by source file.',
      References: 'Re-exported symbols whose canonical declaration lives in another module.',
    },
  };
  return descriptions[section]?.[group] ?? `${group} modules and symbols.`;
}

function listEntry(item) {
  return `- [${item.title}](${item.href})${item.description ? ` — ${item.description}` : ''}`;
}

async function createApiCatalog({ appVersion, channel, section, sectionRoot }) {
  const files = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
  const items = [];

  for (const file of files) {
    const relative = path.relative(sectionRoot, file).replaceAll(path.sep, '/');
    if (relative === 'README.md' || relative.startsWith('categories/')) continue;
    const markdown = await readFile(file, 'utf8');
    const extracted = stripGeneratedHeading(markdown, section);
    const parsed = parseTypeDocHeading(extracted.heading, relative);
    const displayPath = cleanSourcePath(relative, section);
    const title = displayApiTitle(parsed, displayPath);
    const isInternalModule = parsed.kind === 'Module'
      && displayPath.split('/').includes(internalDeclarationsSegment);
    const isEmptyEntryPoint = parsed.kind === 'Module'
      && parsed.title === 'Index'
      && extracted.body.trim().length === 0;
    if (isInternalModule || isEmptyEntryPoint) continue;
    items.push({
      description: extractDescription(extracted.body),
      displayPath,
      href: documentationRoute(channel, appVersion, section, relative),
      kind: parsed.kind,
      originalTitle: parsed.title,
      title,
    });
  }

  const duplicateModuleTitles = new Map();
  for (const item of items) {
    if (item.kind !== 'Module') continue;
    duplicateModuleTitles.set(item.originalTitle, (duplicateModuleTitles.get(item.originalTitle) ?? 0) + 1);
  }
  for (const item of items) {
    if (item.kind === 'Module' && (duplicateModuleTitles.get(item.originalTitle) ?? 0) > 1) {
      item.title = qualifyDuplicateModuleTitle(item.originalTitle, item.title, item.displayPath);
    }
  }

  const groups = new Map();
  for (const item of items) {
    const group = catalogGroup(section, item);
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(item);
  }

  const categoriesRoot = path.join(sectionRoot, 'categories');
  await mkdir(categoriesRoot, { recursive: true });
  const navigationItems = [{
    href: documentationRoute(channel, appVersion, section, 'README.md'),
    title: 'Overview',
  }];
  const overviewLines = [
    `# ${sectionLabel(section)}`,
    '',
    sectionDescription(section),
    '',
    '## Categories',
    '',
    '<div class="api-category-grid">',
  ];

  const orderedGroups = [...groups.entries()].sort(([left], [right]) => {
    const order = groupOrder(section, left) - groupOrder(section, right);
    return order || left.localeCompare(right);
  });
  for (const [group, groupItems] of orderedGroups) {
    const slug = slugify(group) || 'overview';
    const relative = `categories/${slug}.md`;
    const href = documentationRoute(channel, appVersion, section, relative);
    const kinds = new Map();
    for (const item of groupItems) {
      if (!kinds.has(item.kind)) kinds.set(item.kind, []);
      kinds.get(item.kind).push(item);
    }

    const countSummary = [...kinds.entries()]
      .sort(([left], [right]) => kindOrder(left) - kindOrder(right))
      .map(([kind, values]) => `${kind} ${values.length}`)
      .join(' · ');
    overviewLines.push(
      `<a class="api-category-card" href="${href}">`,
      `  <strong>${group}</strong>`,
      `  <span data-doc-i18n>${groupDescription(section, group)}</span>`,
      `  <small data-api-counts>${countSummary}</small>`,
      '</a>',
    );
    navigationItems.push({ href, title: group });

    const categoryLines = [
      `# ${group}`,
      '',
      `Modules and symbols in the ${group} area of ${sectionLabel(section)}. Open an item to inspect its declaration path, contract, properties, and signatures.`,
      '',
    ];
    for (const [kind, kindItems] of [...kinds.entries()].sort(([left], [right]) => kindOrder(left) - kindOrder(right))) {
      categoryLines.push(`## ${pluralKind(kind)}`, '');
      categoryLines.push(...kindItems
        .sort((left, right) => left.title.localeCompare(right.title))
        .map(listEntry));
      categoryLines.push('');
    }
    await writeFile(path.join(sectionRoot, relative), `${categoryLines.join('\n').trim()}\n`, 'utf8');
  }

  overviewLines.push(
    '</div>',
    '',
    '## Using this reference',
    '',
    'Choose an area from the category cards or the left navigation, then narrow the list by class, interface, function, or type. A symbol page shows its kind, module path, signatures, and linked type references.',
    '',
  );
  await writeFile(path.join(sectionRoot, 'README.md'), overviewLines.join('\n'), 'utf8');

  return [{ title: sectionLabel(section), items: navigationItems }];
}

async function createDesignNavigation({ appVersion, channel, sectionRoot }) {
  const files = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
  const groups = new Map();
  groups.set('Overview', [{
    href: documentationRoute(channel, appVersion, 'app-design', 'README.md'),
    title: 'Overview',
  }]);

  for (const file of files.sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))) {
    const relative = path.relative(sectionRoot, file).replaceAll(path.sep, '/');
    if (relative === 'README.md' || relative.startsWith('i18n/')) continue;
    const group = relative.includes('/') ? relative.split('/')[0] : 'General';
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push({
      href: documentationRoute(channel, appVersion, 'app-design', relative),
      title: plainTitle(await readFile(file, 'utf8'), path.basename(file, '.md')),
    });
  }

  const preferredGroups = [
    'Overview',
    'Architecture',
    'Documentation',
    'General',
    'Features',
    'Plugins',
    'build',
  ];
  return [...groups.entries()]
    .sort(([left], [right]) => {
      const leftOrder = preferredGroups.indexOf(left);
      const rightOrder = preferredGroups.indexOf(right);
      const normalizedLeft = leftOrder === -1 ? Number.MAX_SAFE_INTEGER : leftOrder;
      const normalizedRight = rightOrder === -1 ? Number.MAX_SAFE_INTEGER : rightOrder;
      return normalizedLeft - normalizedRight || left.localeCompare(right);
    })
    .map(([title, items]) => ({ title, items }));
}

function removeLeadingDescription(body, description) {
  if (!description) return body;
  const blocks = body.trim().split(/\n\s*\n/);
  if (blocks.length > 0 && stripMarkdown(blocks[0]) === description) blocks.shift();
  return blocks.join('\n\n').trim();
}

async function prepareMarkdownSection({
  appVersion,
  channel,
  section,
  sectionRoot,
  siteApiVersion,
  sourceRef,
}) {
  await normalizeMarkdownFiles(sectionRoot);
  const files = await listFiles(sectionRoot, (file) => file.endsWith('.md'));
  const preparedTitles = new Map();

  if (section !== 'app-design') {
    const moduleEntries = [];
    const moduleTitleCounts = new Map();
    for (const file of files) {
      const relative = path.relative(sectionRoot, file).replaceAll(path.sep, '/');
      const markdown = await readFile(file, 'utf8');
      const extracted = stripGeneratedHeading(markdown, section);
      const parsed = parseTypeDocHeading(extracted.heading, relative);
      const displayPath = cleanSourcePath(relative, section);
      const displayTitle = displayApiTitle(parsed, displayPath);
      preparedTitles.set(file, displayTitle);
      if (parsed.kind !== 'Module') continue;
      moduleEntries.push({ file, parsedTitle: parsed.title, displayPath, displayTitle });
      moduleTitleCounts.set(displayTitle, (moduleTitleCounts.get(displayTitle) ?? 0) + 1);
    }
    for (const entry of moduleEntries) {
      if ((moduleTitleCounts.get(entry.displayTitle) ?? 0) > 1) {
        preparedTitles.set(
          entry.file,
          qualifyDuplicateModuleTitle(entry.parsedTitle, entry.displayTitle, entry.displayPath),
        );
      }
    }
  }

  for (const file of files) {
    const relative = path.relative(sectionRoot, file).replaceAll(path.sep, '/');
    let markdown = await readFile(file, 'utf8');
    markdown = rewriteMarkdownLinks(markdown, file, sectionRoot, channel, appVersion, section);
    const extracted = stripGeneratedHeading(markdown, section);
    const parsed = section === 'app-design'
      ? { kind: 'Guide', title: plainTitle(markdown, path.basename(file, '.md')) }
      : parseTypeDocHeading(extracted.heading, relative);
    const displayPath = cleanSourcePath(relative, section);
    const displayTitle = section === 'app-design'
      ? parsed.title
      : preparedTitles.get(file) ?? displayApiTitle(parsed, displayPath);
    const description = extractDescription(extracted.body)
      ?? (parsed.kind === 'Module'
        ? `Declarations and symbol index for the ${displayPath || sectionLabel(section)} module.`
        : `${displayTitle} ${parsed.kind.toLowerCase()} reference.`);
    const body = removeLeadingDescription(extracted.body, description);
    const frontmatter = [
      '---',
      `title: ${JSON.stringify(displayTitle)}`,
      `channel: ${JSON.stringify(channel)}`,
      `appVersion: ${JSON.stringify(appVersion)}`,
      `siteApiVersion: ${siteApiVersion === null ? 'null' : JSON.stringify(siteApiVersion)}`,
      `category: ${JSON.stringify(categoryFor(section, displayPath))}`,
      `description: ${JSON.stringify(description)}`,
      `displayPath: ${JSON.stringify(displayPath)}`,
      `section: ${JSON.stringify(section)}`,
      `sourceRef: ${JSON.stringify(sourceRef)}`,
      `sourcePath: ${JSON.stringify(relative)}`,
      `symbolKind: ${JSON.stringify(parsed.kind)}`,
      '---',
      '',
    ].join('\n');
    await writeFile(file, `${frontmatter}${body}${body ? '\n' : ''}`, 'utf8');
  }

  return files.length;
}

function normalizeRepositoryUrl(remote) {
  if (!remote) return undefined;
  return remote
    .replace(/^git@github\.com:/, 'https://github.com/')
    .replace(/^ssh:\/\/git@github\.com\//, 'https://github.com/')
    .replace(/\.git$/, '');
}

function runTypeDoc({ entryPoints, output, repositoryUrl, sourceRef, sourceRoot, tsconfig }) {
  if (entryPoints.length === 0) return;
  const sourcePathPrefix = entryPoints.length === 1
    && path.relative(sourceRoot, entryPoints[0]).replaceAll(path.sep, '/') === 'typescript_src'
    ? 'typescript_src/'
    : '';
  const sourceOptions = sourceRef === 'working-tree' || !repositoryUrl
    ? ['--disableSources']
    : [
        '--disableGit',
        '--basePath', sourceRoot,
        '--gitRevision', sourceRef,
        '--sourceLinkTemplate', `${repositoryUrl}/blob/{gitRevision}/${sourcePathPrefix}{path}#L{line}`,
      ];
  run(typedocBin, [
    ...entryPoints,
    '--entryPointStrategy', 'expand',
    '--tsconfig', tsconfig,
    '--plugin', 'typedoc-plugin-markdown',
    '--plugin', 'typedoc-plugin-missing-exports',
    '--out', output,
    '--readme', 'none',
    '--excludePrivate', 'false',
    '--excludeProtected', 'false',
    '--excludeInternal', 'false',
    '--excludeExternals',
    ...sourceOptions,
    '--cleanOutputDir',
    '--validation.notDocumented', 'false',
    '--validation.invalidLink', 'false',
    '--validation.notExported', 'false',
  ], { cwd: sourceRoot });
}

async function updateManifest(versionEntry, makeDefault) {
  const manifest = await readJson(manifestPath);
  const versions = manifest.versions.filter(({ id }) => id !== versionEntry.id);
  versions.push(versionEntry);
  versions.sort((left, right) => {
    if (left.channel !== right.channel) return left.channel === 'stable' ? -1 : 1;
    return right.version.localeCompare(left.version, undefined, { numeric: true });
  });

  const defaultId = makeDefault || !manifest.default ? versionEntry.id : manifest.default;
  await writeFile(
    manifestPath,
    `${JSON.stringify({ default: defaultId, versions }, null, 2)}\n`,
    'utf8',
  );
}

async function main() {
  const options = parseArguments(process.argv.slice(2));
  const sourceRepository = path.resolve(options.source);
  const preparedSource = await prepareSource(sourceRepository, options.ref);

  try {
    const packageJson = await readJson(path.join(preparedSource.root, 'package.json'));
    const repositoryUrl = normalizeRepositoryUrl(run(
      'git',
      ['config', '--get', 'remote.origin.url'],
      { cwd: sourceRepository, quiet: true },
    ));
    const appVersion = options.version ?? packageJson.version;
    const siteApiPackagePath = path.join(preparedSource.root, 'packages/site-api/package.json');
    const siteApiVersion = await exists(siteApiPackagePath)
      ? (await readJson(siteApiPackagePath)).version
      : null;
    const builtinBundleManifestPath = path.join(
      preparedSource.root,
      'packages/builtin-sites/src/manifest.json',
    );
    const builtinBundleManifest = await exists(builtinBundleManifestPath)
      ? await readJson(builtinBundleManifestPath)
      : null;
    const bundles = builtinBundleManifest
      ? [{
          builtin: true,
          id: builtinBundleManifest.id,
          version: builtinBundleManifest.version,
        }]
      : [];
    const sourceCommit = run(
      'git',
      ['rev-parse', options.ref === 'working-tree' ? 'HEAD' : options.ref],
      { cwd: sourceRepository, quiet: true },
    );
    const sourceDirty = options.ref === 'working-tree'
      && Boolean(run('git', ['status', '--porcelain'], { cwd: sourceRepository, quiet: true }));
    const versionId = `${options.channel}/${appVersion}`;

    await mkdir(contentRoot, { recursive: true });
    const incomingRoot = await mkdtemp(path.join(contentRoot, '.incoming-'));
    const counts = { 'app-api': 0, 'app-design': 0, 'builtin-sites': 0, 'site-api': 0 };
    const navigation = {};

    try {
      const developerDocs = path.join(preparedSource.root, 'docs/Developer');
      const legacyDocs = path.join(preparedSource.root, 'docs');
      const designSource = await exists(developerDocs) ? developerDocs : legacyDocs;
      if (await exists(designSource)) {
        const designOutput = path.join(incomingRoot, 'app-design');
        await cp(designSource, designOutput, {
          filter: (source) => {
            try {
              return stat(source).then((value) => value.isDirectory() || /\.md$/i.test(source));
            } catch {
              return false;
            }
          },
          recursive: true,
        });
        const buildDocs = path.join(preparedSource.root, 'docs/build');
        if (designSource === developerDocs && await exists(buildDocs)) {
          await cp(buildDocs, path.join(designOutput, 'build'), {
            filter: (source) => stat(source).then((value) => value.isDirectory() || /\.md$/i.test(source)),
            recursive: true,
          });
        }
        await ensureDesignIndex(designOutput);
        navigation['app-design'] = await createDesignNavigation({
          appVersion,
          channel: options.channel,
          sectionRoot: designOutput,
        });
        counts['app-design'] = await prepareMarkdownSection({
          appVersion,
          channel: options.channel,
          section: 'app-design',
          sectionRoot: designOutput,
          siteApiVersion,
          sourceRef: options.ref,
        });
      }

      const tsconfig = await exists(path.join(preparedSource.root, 'tsconfig.docs.json'))
        ? path.join(preparedSource.root, 'tsconfig.docs.json')
        : path.join(preparedSource.root, 'tsconfig.json');
      const appEntryPoints = [];
      for (const candidate of ['src', 'typescript_src']) {
        const entryPoint = path.join(preparedSource.root, candidate);
        if (await exists(entryPoint)) {
          appEntryPoints.push(entryPoint);
          break;
        }
      }

      if (appEntryPoints.length > 0) {
        const appApiOutput = path.join(incomingRoot, 'app-api');
        runTypeDoc({
          entryPoints: appEntryPoints,
          output: appApiOutput,
          repositoryUrl,
          sourceRef: options.ref,
          sourceRoot: preparedSource.root,
          tsconfig,
        });
        await normalizeTypeDocOutput(appApiOutput);
        navigation['app-api'] = await createApiCatalog({
          appVersion,
          channel: options.channel,
          section: 'app-api',
          sectionRoot: appApiOutput,
        });
        counts['app-api'] = await prepareMarkdownSection({
          appVersion,
          channel: options.channel,
          section: 'app-api',
          sectionRoot: appApiOutput,
          siteApiVersion,
          sourceRef: options.ref,
        });
      }

      const builtinSitesEntryPoint = path.join(preparedSource.root, 'packages/builtin-sites/src');
      if (await exists(builtinSitesEntryPoint)) {
        const builtinSitesOutput = path.join(incomingRoot, 'builtin-sites');
        runTypeDoc({
          entryPoints: [builtinSitesEntryPoint],
          output: builtinSitesOutput,
          repositoryUrl,
          sourceRef: options.ref,
          sourceRoot: preparedSource.root,
          tsconfig,
        });
        await normalizeTypeDocOutput(builtinSitesOutput);
        navigation['builtin-sites'] = await createApiCatalog({
          appVersion,
          channel: options.channel,
          section: 'builtin-sites',
          sectionRoot: builtinSitesOutput,
        });
        counts['builtin-sites'] = await prepareMarkdownSection({
          appVersion,
          channel: options.channel,
          section: 'builtin-sites',
          sectionRoot: builtinSitesOutput,
          siteApiVersion,
          sourceRef: options.ref,
        });
      }

      const siteApiEntryPoint = path.join(preparedSource.root, 'packages/site-api/src');
      if (await exists(siteApiEntryPoint)) {
        const siteApiOutput = path.join(incomingRoot, 'site-api');
        runTypeDoc({
          entryPoints: [siteApiEntryPoint],
          output: siteApiOutput,
          repositoryUrl,
          sourceRef: options.ref,
          sourceRoot: preparedSource.root,
          tsconfig,
        });
        await normalizeTypeDocOutput(siteApiOutput);
        navigation['site-api'] = await createApiCatalog({
          appVersion,
          channel: options.channel,
          section: 'site-api',
          sectionRoot: siteApiOutput,
        });
        counts['site-api'] = await prepareMarkdownSection({
          appVersion,
          channel: options.channel,
          section: 'site-api',
          sectionRoot: siteApiOutput,
          siteApiVersion,
          sourceRef: options.ref,
        });
      }

      await annotateApiPropertyTypes(incomingRoot, options.channel, appVersion);

      const targetRoot = path.join(contentRoot, options.channel, appVersion);
      await mkdir(path.dirname(targetRoot), { recursive: true });
      await rm(targetRoot, { force: true, recursive: true });
      await rename(incomingRoot, targetRoot);
      await updateManifest({
        channel: options.channel,
        id: versionId,
        navigation,
        sections: counts,
        bundles,
        siteApiVersion,
        sourceCommit,
        sourceDirty,
        sourceRef: options.ref,
        version: appVersion,
      }, options.default);

      console.log(`문서 ${versionId} 가져오기 완료`, counts);
    } catch (error) {
      await rm(incomingRoot, { force: true, recursive: true });
      throw error;
    }
  } finally {
    await preparedSource.cleanup();
  }
}

await main();
