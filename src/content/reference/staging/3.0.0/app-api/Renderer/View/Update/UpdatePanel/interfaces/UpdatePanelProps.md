---
title: "UpdatePanelProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the update panel props contract."
displayPath: "Renderer/View/Update/UpdatePanel"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/View/Update/UpdatePanel/interfaces/UpdatePanelProps.md"
symbolKind: "Interface"
---
## Properties

### initialView?

> `readonly` `optional` **initialView?**: `"status"` \| `"release-notes"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;status&quot; | &quot;release-notes&quot;</code></span>

The initial view value.

### locale?

> `readonly` `optional` **locale?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The locale value.

***

### onDismiss

> `readonly` **onDismiss**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle on dismiss.

#### Returns

`void`

***

### onDownload

> `readonly` **onDownload**: () => `void` \| `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void | Promise&lt;void&gt;</code></a></span>

Callback used to handle on download.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onInstall

> `readonly` **onInstall**: () => `void` \| `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void | Promise&lt;void&gt;</code></a></span>

Callback used to handle on install.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onRetry

> `readonly` **onRetry**: () => `void` \| `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void | Promise&lt;void&gt;</code></a></span>

Callback used to handle on retry.

#### Returns

`void` \| `Promise`\<`void`\>

***

### onViewChange?

> `readonly` `optional` **onViewChange?**: (`view`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(view) =&gt; void</code></a></span>

Callback used to handle on view change.

#### Parameters

##### view

`"status"` \| `"release-notes"`

#### Returns

`void`

***

### state

> `readonly` **state**: [`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/"><code>ApplicationUpdatePanelState</code></a></span>

The state value.

***

### view?

> `readonly` `optional` **view?**: `"status"` \| `"release-notes"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;status&quot; | &quot;release-notes&quot;</code></span>

The view value.
