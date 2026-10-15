---
title: "PictureInPictureSizeControlProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the picture in picture size control props contract."
displayPath: "Renderer/Component/PictureInPictureSizeControl"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/PictureInPictureSizeControl/interfaces/PictureInPictureSizeControlProps.md"
symbolKind: "Interface"
---
## Properties

### disabled?

> `readonly` `optional` **disabled?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the disabled option is enabled.

### limits?

> `readonly` `optional` **limits?**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The limits value.

#### maxHeight

> `readonly` **maxHeight**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The max height value.

#### maxWidth

> `readonly` **maxWidth**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The max width value.

#### minHeight

> `readonly` **minHeight**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The min height value.

#### minWidth

> `readonly` **minWidth**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The min width value.

***

### messages

> `readonly` **messages**: [`PictureInPictureSizeControlMessages`](/api/staging/3.0.0/app/Renderer/Component/PictureInPictureSizeControl/interfaces/PictureInPictureSizeControlMessages/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Renderer/Component/PictureInPictureSizeControl/interfaces/PictureInPictureSizeControlMessages/"><code>PictureInPictureSizeControlMessages</code></a></span>

The messages value.

***

### onChange

> `readonly` **onChange**: (`value`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(value) =&gt; void</code></a></span>

Callback used to handle on change.

#### Parameters

##### value

[`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)

#### Returns

`void`

***

### presets?

> `readonly` `optional` **presets?**: `Readonly`\<`Record`\<`"compact"` \| `"medium"` \| `"large"`, \{ `height`: `number`; `width`: `number`; \}\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>Readonly&lt;Record&lt;&quot;compact&quot; | &quot;medium&quot; | &quot;large&quot;, { height: number; width: number; }&gt;&gt;</code></a></span>

The presets value.

***

### value

> `readonly` **value**: [`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/"><code>PictureInPictureSizePreference</code></a></span>

The value value.
