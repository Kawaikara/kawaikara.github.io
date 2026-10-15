---
title: "SiteMenuButtonProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the site menu button props contract."
displayPath: "Renderer/Component/SiteMenuButton"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/SiteMenuButton/interfaces/SiteMenuButtonProps.md"
symbolKind: "Interface"
---
## Properties

### isSelected?

> `readonly` `optional` **isSelected?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the selected option is enabled.

### onOpen

> `readonly` **onOpen**: (`id`) => `void` \| `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(id) =&gt; void | Promise&lt;void&gt;</code></a></span>

Callback used to handle on open.

#### Parameters

##### id

`string`

#### Returns

`void` \| `Promise`\<`void`\>

***

### selectedLabel

> `readonly` **selectedLabel**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The selected label value.

***

### site

> `readonly` **site**: [`SiteMenuItem`](/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/"><code>SiteMenuItem</code></a></span>

The site value.
