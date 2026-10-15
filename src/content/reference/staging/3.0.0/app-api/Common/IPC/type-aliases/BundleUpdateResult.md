---
title: "BundleUpdateResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the bundle update result type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/BundleUpdateResult.md"
symbolKind: "Type Alias"
---
> **BundleUpdateResult** = \{ `status`: `"cancelled"`; \} \| \{ `bundle`: [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/); `status`: `"updated"`; \}

Defines the bundle update result type.

## Union Members

### Type Literal

\{ `status`: `"cancelled"`; \}

#### status

> `readonly` **status**: `"cancelled"`

The status value.

### Type Literal

\{ `bundle`: [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/); `status`: `"updated"`; \}

#### bundle

> `readonly` **bundle**: [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)

The bundle value.

#### status

> `readonly` **status**: `"updated"`

The status value.
