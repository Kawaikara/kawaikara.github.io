---
title: "ApplicationUpdatePanelState"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the application update panel state contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/ApplicationUpdatePanelState.md"
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

### origin

> `readonly` **origin**: `"manual"` \| `"automatic"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;manual&quot; | &quot;automatic&quot;</code></span>

The origin value.

***

### phase

> `readonly` **phase**: [`ApplicationUpdatePhase`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationUpdatePhase/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationUpdatePhase/"><code>ApplicationUpdatePhase</code></a></span>

The phase value.

***

### progress?

> `readonly` `optional` **progress?**: [`ApplicationUpdateProgress`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateProgress/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateProgress/"><code>ApplicationUpdateProgress</code></a></span>

The progress value.

***

### releaseNotes?

> `readonly` `optional` **releaseNotes?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The release notes value.
