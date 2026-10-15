---
title: "ExternalDownloaderInstallResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Result of downloads.install(). It distinguishes a user cancellation from an installer launch and reports whether an already installed downloader was opened for the optional source URL."
displayPath: "Common/Download"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/Download/interfaces/ExternalDownloaderInstallResult.md"
symbolKind: "Interface"
---
## Properties

### canceled

> `readonly` **canceled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the user declined the installation confirmation.

### installerStarted

> `readonly` **installerStarted**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the platform installer was downloaded and started.

***

### opened

> `readonly` **opened**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether an existing or newly installed downloader opened the source URL.

***

### status

> `readonly` **status**: [`ExternalDownloaderStatus`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/"><code>ExternalDownloaderStatus</code></a></span>

Latest known downloader status after the installation flow.
