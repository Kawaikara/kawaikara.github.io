---
title: "SiteAddressOpenResult"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the site address open result type."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/type-aliases/SiteAddressOpenResult.md"
symbolKind: "Type Alias"
---
> **SiteAddressOpenResult** = \{ `siteId`: `string`; `status`: `"opened"`; \} \| \{ `status`: `"unsupported"`; \}

Defines the site address open result type.

## Union Members

### Type Literal

\{ `siteId`: `string`; `status`: `"opened"`; \}

#### siteId

> `readonly` **siteId**: `string`

The site ID value.

#### status

> `readonly` **status**: `"opened"`

The status value.

### Type Literal

\{ `status`: `"unsupported"`; \}

#### status

> `readonly` **status**: `"unsupported"`

The status value.
