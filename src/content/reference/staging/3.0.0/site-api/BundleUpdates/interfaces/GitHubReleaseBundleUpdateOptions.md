---
title: "GitHubReleaseBundleUpdateOptions"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · BundleUpdates"
description: "Describes the git hub release bundle update options contract."
displayPath: "BundleUpdates"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "BundleUpdates/interfaces/GitHubReleaseBundleUpdateOptions.md"
symbolKind: "Interface"
---
## Properties

### assetName

> `readonly` **assetName**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The asset name value.

### repositories

> `readonly` **repositories**: `Readonly`\<`Record`\<[`BundleReleaseChannel`](/api/staging/3.0.0/site-api/Plugin/type-aliases/BundleReleaseChannel/), `string`\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Plugin/type-aliases/BundleReleaseChannel/"><code>Readonly&lt;Record&lt;BundleReleaseChannel, string&gt;&gt;</code></a></span>

The repositories value.

***

### userAgent?

> `readonly` `optional` **userAgent?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The user agent value.
