---
title: "VideoPathOpenResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the video path open result type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/VideoPathOpenResult.md"
symbolKind: "Type Alias"
---
> **VideoPathOpenResult** = \{ `kind`: `"directory"`; `listing`: [`VideoDirectoryListing`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryListing/); \} \| \{ `directory`: `string`; `kind`: `"video"`; `request`: `Extract`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/), \{ `kind`: `"local"`; \}\>; \}

Defines the video path open result type.

## Union Members

### Type Literal

\{ `kind`: `"directory"`; `listing`: [`VideoDirectoryListing`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryListing/); \}

#### kind

> `readonly` **kind**: `"directory"`

The kind value.

#### listing

> `readonly` **listing**: [`VideoDirectoryListing`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryListing/)

The listing value.

### Type Literal

\{ `directory`: `string`; `kind`: `"video"`; `request`: `Extract`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/), \{ `kind`: `"local"`; \}\>; \}

#### directory

> `readonly` **directory**: `string`

The directory value.

#### kind

> `readonly` **kind**: `"video"`

The kind value.

#### request

> `readonly` **request**: `Extract`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/), \{ `kind`: `"local"`; \}\>

The request value.
