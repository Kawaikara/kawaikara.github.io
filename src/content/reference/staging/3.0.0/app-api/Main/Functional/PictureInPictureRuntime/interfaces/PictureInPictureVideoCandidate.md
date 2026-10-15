---
title: "PictureInPictureVideoCandidate"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the picture in picture video candidate contract."
displayPath: "Main/Functional/PictureInPictureRuntime"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/PictureInPictureRuntime/interfaces/PictureInPictureVideoCandidate.md"
symbolKind: "Interface"
---
## Properties

### aspectRatio?

> `readonly` `optional` **aspectRatio?**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The aspect ratio value.

### frame

> `readonly` **frame**: `WebFrameMain`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>WebFrameMain</code></span>

The frame value.

***

### score

> `readonly` **score**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The score value.

***

### status

> `readonly` **status**: `"not-ready"` \| `"ready"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;not-ready&quot; | &quot;ready&quot;</code></span>

The status value.
