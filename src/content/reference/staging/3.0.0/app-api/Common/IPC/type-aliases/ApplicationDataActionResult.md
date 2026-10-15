---
title: "ApplicationDataActionResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the application data action result type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/ApplicationDataActionResult.md"
symbolKind: "Type Alias"
---
> **ApplicationDataActionResult** = \{ `status`: `"cancelled"`; \} \| \{ `status`: `"cleared"`; \} \| \{ `status`: `"restarting"`; \}

Defines the application data action result type.

## Union Members

### Type Literal

\{ `status`: `"cancelled"`; \}

#### status

> `readonly` **status**: `"cancelled"`

The status value.

### Type Literal

\{ `status`: `"cleared"`; \}

#### status

> `readonly` **status**: `"cleared"`

The status value.

***

### Type Literal

\{ `status`: `"restarting"`; \}

#### status

> `readonly` **status**: `"restarting"`

The status value.
