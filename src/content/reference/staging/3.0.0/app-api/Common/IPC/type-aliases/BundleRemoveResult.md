---
title: "BundleRemoveResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the bundle remove result type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/BundleRemoveResult.md"
symbolKind: "Type Alias"
---
> **BundleRemoveResult** = \{ `status`: `"cancelled"`; \} \| \{ `bundleId`: `string`; `status`: `"removed"`; \}

Defines the bundle remove result type.

## Union Members

### Type Literal

\{ `status`: `"cancelled"`; \}

#### status

> `readonly` **status**: `"cancelled"`

The status value.

### Type Literal

\{ `bundleId`: `string`; `status`: `"removed"`; \}

#### bundleId

> `readonly` **bundleId**: `string`

The bundle ID value.

#### status

> `readonly` **status**: `"removed"`

The status value.
