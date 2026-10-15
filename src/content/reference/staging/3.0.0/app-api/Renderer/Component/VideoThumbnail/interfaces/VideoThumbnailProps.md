---
title: "VideoThumbnailProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the video thumbnail props contract."
displayPath: "Renderer/Component/VideoThumbnail"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/VideoThumbnail/interfaces/VideoThumbnailProps.md"
symbolKind: "Interface"
---
## Properties

### alt?

> `readonly` `optional` **alt?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The alt value.

### className?

> `readonly` `optional` **className?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The class name value.

***

### loadThumbnail

> `readonly` **loadThumbnail**: (`path`) => `Promise`\<`string` \| `undefined`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(path) =&gt; Promise&lt;string | undefined&gt;</code></a></span>

Callback used to handle load thumbnail.

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### path

> `readonly` **path**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The path value.
