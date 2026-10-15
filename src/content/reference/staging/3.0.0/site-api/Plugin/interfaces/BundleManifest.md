---
title: "BundleManifest"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Plugin"
description: "Filesystem metadata stored at the root of an installable Bundle."
displayPath: "Plugin"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Plugin/interfaces/BundleManifest.md"
symbolKind: "Interface"
---
## Properties

### apiVersion

> `readonly` **apiVersion**: `1`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>1</code></span>

The API version value.

### browserProfiles?

> `readonly` `optional` **browserProfiles?**: readonly [`BundleBrowserProfileContribution`](/api/staging/3.0.0/site-api/Plugin/interfaces/BundleBrowserProfileContribution/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Plugin/interfaces/BundleBrowserProfileContribution/"><code>readonly BundleBrowserProfileContribution[]</code></a></span>

The browser profiles value.

***

### description?

> `readonly` `optional` **description?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The description value.

***

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### locale?

> `readonly` `optional` **locale?**: [`BundleLocaleContribution`](/api/staging/3.0.0/site-api/Plugin/interfaces/BundleLocaleContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Plugin/interfaces/BundleLocaleContribution/"><code>BundleLocaleContribution</code></a></span>

The locale value.

***

### name

> `readonly` **name**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The name value.

***

### permissions?

> `readonly` `optional` **permissions?**: readonly [`SitePermission`](/api/staging/3.0.0/site-api/Provider/type-aliases/SitePermission/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/type-aliases/SitePermission/"><code>readonly SitePermission[]</code></a></span>

The permissions value.

***

### plugins?

> `readonly` `optional` **plugins?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Bundle-level Plugin directories relative to the Bundle root.

***

### providers

> `readonly` **providers**: readonly \[`string`, `string`\]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly [string, string]</code></a></span>

Provider directories relative to the Bundle root.

***

### schemaVersion

> `readonly` **schemaVersion**: `1`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>1</code></span>

The schema version value.

***

### update?

> `readonly` `optional` **update?**: [`BundleUpdateManifest`](/api/staging/3.0.0/site-api/Plugin/type-aliases/BundleUpdateManifest/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Plugin/type-aliases/BundleUpdateManifest/"><code>BundleUpdateManifest</code></a></span>

Preferred top-level update declaration.

***

### ~~updateUrl?~~

> `readonly` `optional` **updateUrl?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

#### Deprecated

Use update: { type: 'archive', url } instead.

***

### version

> `readonly` **version**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The version value.
