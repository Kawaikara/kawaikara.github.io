---
title: "VideoBrowserProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the video browser props contract."
displayPath: "Renderer/View/Video/VideoBrowser/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/View/Video/VideoBrowser/InternalDeclarations/interfaces/VideoBrowserProps.md"
symbolKind: "Interface"
---
## Properties

### backendLabel

> `readonly` **backendLabel**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The backend label value.

### backendWarning?

> `readonly` `optional` **backendWarning?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The backend warning value.

***

### canClose

> `readonly` **canClose**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the close option is enabled.

***

### initialDirectory?

> `readonly` `optional` **initialDirectory?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The initial directory value.

***

### labels

> `readonly` **labels**: [`VideoBrowserMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/VideoBrowserMessages/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/VideoBrowserMessages/"><code>VideoBrowserMessages</code></a></span>

The labels value.

***

### onClose

> `readonly` **onClose**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle on close.

#### Returns

`void`

***

### onOpenHls

> `readonly` **onOpenHls**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle on open hls.

#### Returns

`void`

***

### onOpenVideo

> `readonly` **onOpenVideo**: (`request`, `directory`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(request, directory) =&gt; void</code></a></span>

Callback used to handle on open video.

#### Parameters

##### request

###### directory

`string`

The directory value.

###### displayName

`string`

The display name value.

###### kind

`"local"`

The kind value.

###### path

`string`

The path value.

###### url

`string`

The URL value.

##### directory

`string`

#### Returns

`void`

***

### onSelectFile

> `readonly` **onSelectFile**: () => `Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/"><code>() =&gt; Promise&lt;VideoOpenRequest | null&gt;</code></a></span>

Callback used to handle on select file.

#### Returns

`Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>

***

### theme

> `readonly` **theme**: [`AppTheme`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/"><code>AppTheme</code></a></span>

The theme value.
