import { getCollection } from 'astro:content';

export const prerender = true;

function stripOrderPrefix(segment: string): string {
  return segment.replace(/^\d+[._-]/, '');
}

function referenceHref(id: string): string {
  const [channel, version, section, ...rawParts] = id.split('/');
  const pathParts = rawParts.map(stripOrderPrefix);
  if (pathParts.at(-1) === 'README') pathParts.pop();

  if (section === 'app-design') {
    return `/docs/${channel}/${version}/app/${pathParts.length ? `${pathParts.join('/')}/` : ''}`;
  }
  if (section === 'app-api' && ['src', 'typescript_src'].includes(pathParts[0])) {
    pathParts.shift();
  }
  if (section === 'builtin-sites' && pathParts.slice(0, 3).join('/') === 'packages/builtin-sites/src') {
    pathParts.splice(0, 3);
  }
  if (section === 'site-api' && pathParts.slice(0, 3).join('/') === 'packages/site-api/src') {
    pathParts.splice(0, 3);
  }

  const kind = section === 'site-api'
    ? 'site-api'
    : section === 'builtin-sites'
      ? 'builtin-sites'
      : 'app';
  return `/api/${channel}/${version}/${kind}/${pathParts.length ? `${pathParts.join('/')}/` : ''}`;
}

export async function GET() {
  const entries = await getCollection('reference');
  const references = entries
    .filter((entry) => !entry.id.includes('/app-design/i18n/'))
    .map((entry) => ({
    category: entry.data.category,
    channel: entry.data.channel,
    description: entry.data.description,
    href: referenceHref(entry.id),
    kind: entry.data.symbolKind ?? (entry.data.section === 'app-design' ? 'Guide' : 'Reference'),
    path: entry.data.displayPath,
    section: entry.data.section,
    title: entry.data.title,
    version: entry.data.appVersion,
    versionId: `${entry.data.channel}/${entry.data.appVersion}`,
    }));
  const guides = [
    {
      category: 'Introduction',
      channel: 'docs',
      description: 'Kawaikara 문서와 개발 레퍼런스를 시작하는 위치입니다.',
      href: '/docs/',
      kind: 'Guide',
      path: 'Introduction',
      section: 'app-design',
      title: 'Kawaikara 문서',
      version: 'all',
      versionId: 'docs',
    },
    {
      category: 'Introduction',
      channel: 'docs',
      description: 'Windows와 macOS에서 Kawaikara를 설치하고 처음 실행합니다.',
      href: '/docs/install/',
      kind: 'Guide',
      path: 'Introduction/Install',
      section: 'app-design',
      title: 'Kawaikara 설치',
      version: 'all',
      versionId: 'docs',
    },
    {
      category: 'Introduction',
      channel: 'docs',
      description: '브라우저에서 Kawaikara로 연결하는 WebExtension 안내입니다.',
      href: '/docs/extension/',
      kind: 'Guide',
      path: 'Introduction/WebExtension',
      section: 'app-design',
      title: 'WebExtension',
      version: 'all',
      versionId: 'docs',
    },
    {
      category: 'Introduction',
      channel: 'docs',
      description: 'YouTube 영상의 필요한 구간을 저장하는 도구 안내입니다.',
      href: '/docs/yt-downloader/',
      kind: 'Guide',
      path: 'Introduction/YT Downloader',
      section: 'app-design',
      title: 'YT Section Downloader',
      version: 'all',
      versionId: 'docs',
    },
  ];

  return new Response(JSON.stringify([...guides, ...references]), {
    headers: {
      'Cache-Control': 'public, max-age=300',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
