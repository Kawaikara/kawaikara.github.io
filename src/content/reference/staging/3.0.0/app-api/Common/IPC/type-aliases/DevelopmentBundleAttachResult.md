---
title: "DevelopmentBundleAttachResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the development bundle attach result type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/DevelopmentBundleAttachResult.md"
symbolKind: "Type Alias"
---
> **DevelopmentBundleAttachResult** = \{ `status`: `"cancelled"`; \} \| \{ `project`: [`DevelopmentBundleProjectInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentBundleProjectInfo/); `status`: `"attached"`; \}

Defines the development bundle attach result type.

## Union Members

### Type Literal

\{ `status`: `"cancelled"`; \}

#### status

> `readonly` **status**: `"cancelled"`

The status value.

### Type Literal

\{ `project`: [`DevelopmentBundleProjectInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentBundleProjectInfo/); `status`: `"attached"`; \}

#### project

> `readonly` **project**: [`DevelopmentBundleProjectInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentBundleProjectInfo/)

The project value.

#### status

> `readonly` **status**: `"attached"`

The status value.
