---
title: "PluginViewPanelContent"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Provider"
description: "Defines the plugin view panel content type."
displayPath: "Provider"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Provider/type-aliases/PluginViewPanelContent.md"
symbolKind: "Type Alias"
---
> **PluginViewPanelContent** = \{ `kind`: `"internal"`; `viewId`: `string`; \} \| \{ `html`: `string`; `kind`: `"html"`; \}

Defines the plugin view panel content type.

## Union Members

### Type Literal

\{ `kind`: `"internal"`; `viewId`: `string`; \}

#### kind

> `readonly` **kind**: `"internal"`

An application-owned Renderer panel. Third-party Bundles cannot add view ids.

#### viewId

> `readonly` **viewId**: `string`

The view ID value.

### Type Literal

\{ `html`: `string`; `kind`: `"html"`; \}

#### html

> `readonly` **html**: `string`

The HTML value.

#### kind

> `readonly` **kind**: `"html"`

A sandboxed document with no Kawaikara IPC or parent-origin access.
