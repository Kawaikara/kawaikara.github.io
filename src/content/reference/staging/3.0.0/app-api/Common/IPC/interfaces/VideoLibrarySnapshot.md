---
title: "VideoLibrarySnapshot"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the video library snapshot contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/VideoLibrarySnapshot.md"
symbolKind: "Interface"
---
## Properties

### favoriteFolders

> `readonly` **favoriteFolders**: readonly [`VideoLibraryFolder`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryFolder/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryFolder/"><code>readonly VideoLibraryFolder[]</code></a></span>

The favorite folders value.

### lastDirectory?

> `readonly` `optional` **lastDirectory?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The last directory value.

***

### locations

> `readonly` **locations**: readonly [`VideoLibraryLocation`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryLocation/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryLocation/"><code>readonly VideoLibraryLocation[]</code></a></span>

The locations value.

***

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
