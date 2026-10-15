---
title: "BundleUpdateDefinition"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Validated runtime form of Bundle update metadata."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/type-aliases/BundleUpdateDefinition.md"
symbolKind: "Type Alias"
---
> **BundleUpdateDefinition** = \{ `type`: `"archive"`; `url`: `string`; \} \| \{ `resolve`: [`BundleUpdateResolver`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/BundleUpdateResolver/); `type`: `"resolver"`; \}

Validated runtime form of Bundle update metadata.

## Union Members

### Type Literal

\{ `type`: `"archive"`; `url`: `string`; \}

#### type

> `readonly` **type**: `"archive"`

The type value.

#### url

> `readonly` **url**: `string`

The URL value.

### Type Literal

\{ `resolve`: [`BundleUpdateResolver`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/BundleUpdateResolver/); `type`: `"resolver"`; \}

#### resolve

> `readonly` **resolve**: [`BundleUpdateResolver`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/BundleUpdateResolver/)

The resolve value.

#### type

> `readonly` **type**: `"resolver"`

The type value.
