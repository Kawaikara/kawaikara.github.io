---
title: "PageVideoCandidate"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the page video candidate contract."
displayPath: "Main/Inject/PictureInPictureVideo"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Inject/PictureInPictureVideo/interfaces/PageVideoCandidate.md"
symbolKind: "Interface"
---
## Properties

### score

> `readonly` **score**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The score value.

### status

> `readonly` **status**: `"no-video"` \| `"not-ready"` \| `"ready"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;no-video&quot; | &quot;not-ready&quot; | &quot;ready&quot;</code></span>

The status value.

***

### videoHeight?

> `readonly` `optional` **videoHeight?**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The video height value.

***

### videoWidth?

> `readonly` `optional` **videoWidth?**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The video width value.
