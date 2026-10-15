---
title: "BundleUpdateManifest"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Plugin"
description: "Update metadata stored in the top-level Bundle manifest."
displayPath: "Plugin"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Plugin/type-aliases/BundleUpdateManifest.md"
symbolKind: "Type Alias"
---
> **BundleUpdateManifest** = \{ `type`: `"archive"`; `url`: `string`; \} \| \{ `main`: `string`; `type`: `"resolver"`; \}

Update metadata stored in the top-level Bundle manifest.

## Union Members

### Type Literal

\{ `type`: `"archive"`; `url`: `string`; \}

#### type

> `readonly` **type**: `"archive"`

The type value.

#### url

> `readonly` **url**: `string`

Credential-free HTTPS URL returning a ZIP-compatible .kawai archive.

### Type Literal

\{ `main`: `string`; `type`: `"resolver"`; \}

#### main

> `readonly` **main**: `string`

Compiled CommonJS resolver entry relative to the Bundle root.

#### type

> `readonly` **type**: `"resolver"`

The type value.
