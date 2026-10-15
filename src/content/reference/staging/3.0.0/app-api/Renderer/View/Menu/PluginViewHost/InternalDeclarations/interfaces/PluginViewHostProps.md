---
title: "PluginViewHostProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the plugin view host props contract."
displayPath: "Renderer/View/Menu/PluginViewHost/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/View/Menu/PluginViewHost/InternalDeclarations/interfaces/PluginViewHostProps.md"
symbolKind: "Interface"
---
## Properties

### locale

> `readonly` **locale**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The locale value.

### onError

> `readonly` **onError**: (`message`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(message) =&gt; void</code></a></span>

Callback used to handle on error.

#### Parameters

##### message

`string`

#### Returns

`void`

***

### panels

> `readonly` **panels**: readonly [`PluginViewPanelInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/PluginViewPanelInfo/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/PluginViewPanelInfo/"><code>readonly PluginViewPanelInfo[]</code></a></span>

The panels value.

***

### refreshKey

> `readonly` **refreshKey**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The refresh key value.

***

### videoLibraryLabels

> `readonly` **videoLibraryLabels**: [`VideoLibraryMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/VideoLibraryMessages/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/VideoLibraryMessages/"><code>VideoLibraryMessages</code></a></span>

The video library labels value.
