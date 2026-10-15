---
title: "PictureInPicturePlacementControlProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the picture in picture placement control props contract."
displayPath: "Renderer/Component/PictureInPicturePlacementControl"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/PictureInPicturePlacementControl/interfaces/PictureInPicturePlacementControlProps.md"
symbolKind: "Interface"
---
## Properties

### disabled?

> `readonly` `optional` **disabled?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the disabled option is enabled.

### displays

> `readonly` **displays**: readonly [`DisplayInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DisplayInfo/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/DisplayInfo/"><code>readonly DisplayInfo[]</code></a></span>

The displays value.

***

### messages

> `readonly` **messages**: [`PictureInPicturePlacementControlMessages`](/api/staging/3.0.0/app/Renderer/Component/PictureInPicturePlacementControl/interfaces/PictureInPicturePlacementControlMessages/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Renderer/Component/PictureInPicturePlacementControl/interfaces/PictureInPicturePlacementControlMessages/"><code>PictureInPicturePlacementControlMessages</code></a></span>

The messages value.

***

### onChange

> `readonly` **onChange**: (`value`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(value) =&gt; void</code></a></span>

Callback used to handle on change.

#### Parameters

##### value

[`PictureInPicturePlacementPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/)

#### Returns

`void`

***

### value

> `readonly` **value**: [`PictureInPicturePlacementPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/"><code>PictureInPicturePlacementPreference</code></a></span>

The value value.
