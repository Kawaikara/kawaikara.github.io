---
title: "StoredVideoLibraryState"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the stored video library state contract."
displayPath: "Main/Functional/VideoLibrary"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/VideoLibrary/interfaces/StoredVideoLibraryState.md"
symbolKind: "Interface"
---
## Properties

### lastDirectory?

> `readonly` `optional` **lastDirectory?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The last directory value.

### recentFolders

> `readonly` **recentFolders**: readonly [`VideoLibraryFolder`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryFolder/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryFolder/"><code>readonly VideoLibraryFolder[]</code></a></span>

The recent folders value.

***

### recentVideos

> `readonly` **recentVideos**: readonly [`VideoLibraryVideo`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryVideo/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryVideo/"><code>readonly VideoLibraryVideo[]</code></a></span>

The recent videos value.

***

### version

> `readonly` **version**: `1`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>1</code></span>

The version value.
