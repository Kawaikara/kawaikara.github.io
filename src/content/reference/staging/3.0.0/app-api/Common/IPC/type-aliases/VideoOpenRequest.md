---
title: "VideoOpenRequest"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the video open request type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/VideoOpenRequest.md"
symbolKind: "Type Alias"
---
> **VideoOpenRequest** = \{ `directory`: `string`; `displayName`: `string`; `kind`: `"local"`; `path`: `string`; `url`: `string`; \} \| \{ `displayName`: `string`; `kind`: `"folder"`; `path`: `string`; \} \| \{ `kind`: `"youtube"`; `url`: `string`; \}

Defines the video open request type.

## Union Members

### Type Literal

\{ `directory`: `string`; `displayName`: `string`; `kind`: `"local"`; `path`: `string`; `url`: `string`; \}

#### directory

> `readonly` **directory**: `string`

The directory value.

#### displayName

> `readonly` **displayName**: `string`

The display name value.

#### kind

> `readonly` **kind**: `"local"`

The kind value.

#### path

> `readonly` **path**: `string`

The path value.

#### url

> `readonly` **url**: `string`

The URL value.

### Type Literal

\{ `displayName`: `string`; `kind`: `"folder"`; `path`: `string`; \}

#### displayName

> `readonly` **displayName**: `string`

The display name value.

#### kind

> `readonly` **kind**: `"folder"`

The kind value.

#### path

> `readonly` **path**: `string`

The path value.

***

### Type Literal

\{ `kind`: `"youtube"`; `url`: `string`; \}

#### kind

> `readonly` **kind**: `"youtube"`

The kind value.

#### url

> `readonly` **url**: `string`

The URL value.
