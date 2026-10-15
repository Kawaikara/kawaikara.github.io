import manifestData from './documentation-versions.json';

export type DocumentationChannel = 'stable' | 'staging';
export type DocumentationSection = 'app-design' | 'app-api' | 'builtin-sites' | 'site-api';

export interface DocumentationNavigationItem {
  href: string;
  title: string;
}

export interface DocumentationNavigationGroup {
  items: DocumentationNavigationItem[];
  title: string;
}

export interface DocumentationBundleVersion {
  builtin: boolean;
  id: string;
  version: string;
}

export interface DocumentationVersion {
  id: string;
  channel: DocumentationChannel;
  version: string;
  sourceRef: string;
  sourceCommit?: string;
  sourceDirty?: boolean;
  siteApiVersion: string | null;
  bundles?: DocumentationBundleVersion[];
  sections: Partial<Record<DocumentationSection, number>>;
  navigation?: Partial<Record<DocumentationSection, DocumentationNavigationGroup[]>>;
}

interface DocumentationManifest {
  default: string | null;
  versions: DocumentationVersion[];
}

export const documentationManifest = manifestData as DocumentationManifest;
export const documentationVersions = documentationManifest.versions;

export const defaultDocumentationVersion =
  documentationVersions.find(({ id }) => id === documentationManifest.default)
  ?? documentationVersions[0];

export function getDocumentationVersion(
  channel: string | undefined,
  version: string | undefined,
): DocumentationVersion | undefined {
  return documentationVersions.find(
    (candidate) => candidate.channel === channel && candidate.version === version,
  );
}

export function getReferenceRoot(
  version: DocumentationVersion,
  section: DocumentationSection,
): string {
  if (section === 'app-design') {
    return `/docs/${version.channel}/${version.version}/app/`;
  }

  const kind = section === 'site-api'
    ? 'site-api'
    : section === 'builtin-sites'
      ? 'builtin-sites'
      : 'app';
  return `/api/${version.channel}/${version.version}/${kind}/`;
}

export function hasSection(
  version: DocumentationVersion | undefined,
  section: DocumentationSection,
): boolean {
  return Boolean(version?.sections[section]);
}

export function getDocumentationDestination(
  version: DocumentationVersion,
  preferredSection: DocumentationSection,
): string {
  const fallbacks: DocumentationSection[] = [
    preferredSection,
    'app-design',
    'app-api',
    'builtin-sites',
    'site-api',
  ];
  const available = fallbacks.find((section) => hasSection(version, section));
  return available ? getReferenceRoot(version, available) : '/docs/';
}

export function getVersionsForChannel(channel: DocumentationChannel): DocumentationVersion[] {
  return documentationVersions.filter((version) => version.channel === channel);
}
