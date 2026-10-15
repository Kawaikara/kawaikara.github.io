---
title: "BundleInstallResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the bundle install result type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/BundleInstallResult.md"
symbolKind: "Type Alias"
---
> **BundleInstallResult** = \{ `status`: `"cancelled"`; \} \| \{ `bundle`: [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/); `status`: `"installed"`; \}

Defines the bundle install result type.

## Union Members

### Type Literal

\{ `status`: `"cancelled"`; \}

#### status

> `readonly` **status**: `"cancelled"`

The status value.

### Type Literal

\{ `bundle`: [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/); `status`: `"installed"`; \}

#### bundle

> `readonly` **bundle**: [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)

The bundle value.

#### status

> `readonly` **status**: `"installed"`

The status value.
