---
title: "ExternalDownloaderStatus"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Snapshot returned by the downloader status API and embedded in open/install results so renderer callers can update their UI without requesting status again."
displayPath: "Common/Download"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/Download/interfaces/ExternalDownloaderStatus.md"
symbolKind: "Interface"
---
## Properties

### appPath?

> `readonly` `optional` **appPath?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Resolved application or executable path used for direct launching.

### automaticInstallSupported

> `readonly` **automaticInstallSupported**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether Kawaikara can install the downloader on the current platform.

***

### installed

> `readonly` **installed**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether a launchable downloader installation was found.

***

### message?

> `readonly` `optional` **message?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

User-facing diagnostic or next-step message for an unavailable operation.

***

### platform

> `readonly` **platform**: [`ExternalDownloaderPlatform`](/api/staging/3.0.0/app/Common/Download/type-aliases/ExternalDownloaderPlatform/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/Download/type-aliases/ExternalDownloaderPlatform/"><code>ExternalDownloaderPlatform</code></a></span>

Platform used to resolve artifacts, executable paths, and launch behavior.

***

### version?

> `readonly` `optional` **version?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Detected application version, when the installation exposes one.
