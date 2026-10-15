# Kawaikara documentation snapshot contract v1

Kawaikara publishes one documentation snapshot for each App version and release
channel. The snapshot contains every source surface shipped or supported by that
App revision:

- authored App design guides;
- the complete App source reference;
- the Site API source reference and schemas;
- Bundle authoring contracts;
- source references for Bundles included with the App, including Built-in Sites.

The Astro site owns presentation, navigation, search, shared generated wording,
and locale selection. The App repository owns the exact source snapshot from
which all of those sections are generated.

## Snapshot identity

The only public version identity is:

```text
App channel + App version + source commit
```

Site API and included Bundle versions remain visible as component metadata, but
they do not create independent documentation selectors. Selecting App `3.0.0`
always selects the Site API and Built-in Bundle sources contained in the same
App snapshot.

- Stable snapshots come from an immutable App tag whose name matches the App
  package version.
- Staging and Nightly snapshots record the exact App commit SHA. A moving branch
  name alone is not a valid published identity.
- A snapshot records the Site API package version, manifest API version, and the
  id and version of every included Bundle.
- Regenerating the same identity is allowed only when every exported file hash
  is unchanged.

## Source boundaries

The current App monorepo maps to documentation sections as follows:

| Section | Source | Visibility |
| --- | --- | --- |
| App design | `docs/Developer` and `docs/build` | Authored guides |
| App source | `src` | Public, protected, and private declarations |
| Site API | `packages/site-api/src` and `packages/site-api/schemas` | Public consumer contract |
| Built-in Bundle | `packages/builtin-sites/src` | Public, protected, and private declarations |

Bundle interfaces declared by Site API and Bundles physically included in the
App are part of the same export. Third-party Bundles that are not shipped in the
App are outside this snapshot; their separate project documentation does not
change the Kawaikara App selector.

The dedicated `kawai-site-api` repository may still publish installable package
artifacts. For App documentation, the authoritative source is the
`packages/site-api` snapshot actually compiled by that App commit. This prevents
the website from accidentally documenting a newer API than the selected App can
run.

## Artifact layout

One App release or preview produces one content-only archive:

```text
documentation-snapshot/
  export.json
  app-design/
    en/
      ... canonical Markdown
    ko/
      ... translated Markdown
    ja/
      ... translated Markdown
  app-reference/
    ... generated reference Markdown and indexes
  site-api-reference/
    ... generated reference Markdown and indexes
  bundle-reference/
    kawaikara.builtin-sites/
      ... generated reference Markdown and indexes
  reference-i18n/
    app/
      ko.json
      ja.json
    site-api/
      ko.json
      ja.json
    bundles/
      kawaikara.builtin-sites/
        ko.json
        ja.json
  schemas/
    ... Site API-owned JSON schemas
```

Only `export.json` and paths declared by it belong in the archive. Dependencies,
build caches, credentials, local paths, repository settings, and Astro
components must not be included.

Recommended archive names are:

```text
kawaikara-docs-3.0.0-stable.tgz
kawaikara-docs-3.0.0-staging.<short-sha>.tgz
kawaikara-docs-3.0.0-nightly.<short-sha>.tgz
```

## Manifest

`export.json` validates against
`schemas/documentation-export-v1.schema.json`. It contains:

- the App id, version, channel, source repository, ref, and commit;
- the pinned generator name and version;
- Site API package and contract versions;
- every included Bundle id, version, and Built-in status;
- roots and visibility for all generated sections;
- locale roots and reference translation catalogs;
- a SHA-256 digest for every exported file.

Component versions are descriptive metadata inside the App snapshot. They do
not create an independent URL version tree.

## Authored guides and translations

English is canonical. Korean and Japanese guides mirror the canonical relative
path below `docs/Developer/i18n/<locale>`. A missing translation is valid, but
the site must clearly state that it is showing the English source.

A translation may be written by a person or an AI-assisted workflow. Both use
the same rules:

- preserve identifiers, signatures, literal values, versions, paths, commands,
  links, diagrams, and code blocks;
- preserve heading structure and behavior claims;
- store translations in the App source tree, never in generated website output;
- track the canonical source hash so stale translations can be detected.

If Site API or an included Bundle gains authored guides, those guides live next
to that component inside the App monorepo and are collected into the same App
snapshot. They do not require a separate publishing workflow.

## Generated source reference

Generated Markdown is disposable. It is rebuilt from the selected App commit
and is never manually edited or copied into locale directories.

Reference text is handled in three layers:

1. Symbol names, signatures, types, literals, and source paths are not
   translated.
2. Shared generated UI such as kind badges, Properties, Parameters, and Returns
   is translated by the website locale catalog.
3. Source-authored TSDoc prose is translated through section-specific Sidecar
   catalogs under `reference-i18n`.

A Sidecar entry uses a stable Symbol Key and the hash of its canonical prose:

```json
{
  "schemaVersion": 1,
  "locale": "ko",
  "entries": {
    "@kawaikara/site-api::Provider::interface:ProviderMetadata.property:title": {
      "sourceHash": "sha256:<canonical-prose-hash>",
      "summary": "메뉴와 환경설정에 표시되는 Provider 제목입니다."
    }
  }
}
```

The default Symbol Key contains the owning package id, normalized module path,
symbol kind, qualified symbol name, and member name. TypeDoc reflection ids and
source line numbers are forbidden because they are not stable. Missing or stale
entries fall back to canonical English and are marked accordingly.

## Publication flow

1. The App workflow checks guide structure, source comments, component versions,
   locale mirrors, and links.
2. One pinned exporter generates App, Site API, Bundle, and Built-in Bundle
   sections from the same checkout.
3. The exporter writes `export.json`, hashes every file, and produces one
   archive.
4. Stable releases attach the archive to the App release. Development channels
   upload it as a workflow artifact and record the exact commit.
5. The website importer validates the schema and hashes, imports every section
   below one App version, and rebuilds navigation and search.
6. The Astro build performs no network fetches and executes no producer code.

The existing `docs:import` behavior already follows the correct product model:
one App checkout produces App design, App source, Site API, and Built-in Sites
sections together. The reusable Action should wrap this model instead of
splitting it into independently versioned documentation products.

## Website selectors

The website exposes only channel and App version selectors for versioned source
documentation. Site API and Bundle versions appear as contextual metadata in
their section headers.

Changing from App `3.0.0` to another App version switches all generated sections
atomically. A page must never combine App source from one commit with Site API or
Built-in Bundle source from another commit.
