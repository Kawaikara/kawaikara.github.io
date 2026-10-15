---
title: "ApplicationUpdateCheckResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the application update check result contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/ApplicationUpdateCheckResult.md"
symbolKind: "Interface"
---
## Properties

### channel

> `readonly` **channel**: [`ReleaseChannel`](/api/staging/3.0.0/app/Common/BuildConfig/type-aliases/ReleaseChannel/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/BuildConfig/type-aliases/ReleaseChannel/"><code>ReleaseChannel</code></a></span>

The channel value.

### currentVersion

> `readonly` **currentVersion**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The current version value.

***

### error?

> `readonly` `optional` **error?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The error value.

***

### latestVersion?

> `readonly` `optional` **latestVersion?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The latest version value.

***

### status

> `readonly` **status**: [`UpdateCheckStatus`](/api/staging/3.0.0/app/Common/IPC/type-aliases/UpdateCheckStatus/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/UpdateCheckStatus/"><code>UpdateCheckStatus</code></a></span>

The status value.
