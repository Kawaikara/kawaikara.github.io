---
title: "ExternalDownloaderReleaseArtifact"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the external downloader release artifact contract."
displayPath: "Main/Functional/ExternalDownloader"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/ExternalDownloader/interfaces/ExternalDownloaderReleaseArtifact.md"
symbolKind: "Interface"
---
## Properties

### arch

> `readonly` **arch**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The arch value.

### kind

> `readonly` **kind**: `"exe"` \| `"dmg"` \| `"zip"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;exe&quot; | &quot;dmg&quot; | &quot;zip&quot;</code></span>

The kind value.

***

### platform

> `readonly` **platform**: [`ExternalDownloaderPlatform`](/api/staging/3.0.0/app/Common/Download/type-aliases/ExternalDownloaderPlatform/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/Download/type-aliases/ExternalDownloaderPlatform/"><code>ExternalDownloaderPlatform</code></a></span>

The platform value.

***

### sha256

> `readonly` **sha256**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The sha256 value.

***

### url

> `readonly` **url**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The URL value.
