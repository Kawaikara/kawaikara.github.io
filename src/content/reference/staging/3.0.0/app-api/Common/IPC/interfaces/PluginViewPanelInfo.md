---
title: "PluginViewPanelInfo"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the plugin view panel info contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/PluginViewPanelInfo.md"
symbolKind: "Interface"
---
## Properties

### content

> `readonly` **content**: \{ `kind`: `"internal"`; `viewId`: `string`; \} \| \{ `html`: `string`; `kind`: `"html"`; \}
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>{ kind: &quot;internal&quot;; viewId: string; } | { html: string; kind: &quot;html&quot;; }</code></a></span>

The content value.

#### Union Members

##### Type Literal

\{ `kind`: `"internal"`; `viewId`: `string`; \}

##### kind

> `readonly` **kind**: `"internal"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;internal&quot;</code></span>

The kind value.

##### viewId

> `readonly` **viewId**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The view ID value.

##### Type Literal

\{ `html`: `string`; `kind`: `"html"`; \}

##### html

> `readonly` **html**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The HTML value.

##### kind

> `readonly` **kind**: `"html"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;html&quot;</code></span>

The kind value.

***

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Runtime identity composed from owner id and its locally scoped panel id.

***

### order

> `readonly` **order**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The order value.

***

### title

> `readonly` **title**: [`ProviderLocalizedText`](/api/staging/3.0.0/app/Common/IPC/InternalDeclarations/type-aliases/ProviderLocalizedText/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/InternalDeclarations/type-aliases/ProviderLocalizedText/"><code>ProviderLocalizedText</code></a></span>

The title value.
