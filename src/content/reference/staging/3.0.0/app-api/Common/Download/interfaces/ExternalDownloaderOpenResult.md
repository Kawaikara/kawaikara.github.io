---
title: "ExternalDownloaderOpenResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Result of downloads.open(). Consumers use opened to determine whether a downloader process or deep link was launched and status to render the installation state when launching was not possible."
displayPath: "Common/Download"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/Download/interfaces/ExternalDownloaderOpenResult.md"
symbolKind: "Interface"
---
## Properties

### opened

> `readonly` **opened**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether Kawaikara successfully handed the source URL to the downloader.

### status

> `readonly` **status**: [`ExternalDownloaderStatus`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/"><code>ExternalDownloaderStatus</code></a></span>

Downloader status captured immediately before the launch attempt.
