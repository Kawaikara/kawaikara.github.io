---
title: "SiteCookieStore"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Describes the site cookie store contract."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/SiteCookieStore.md"
symbolKind: "Interface"
---
## Methods

### clear()

> **clear**(`options`): `Promise`\<`number`\>

Clears the operation.

#### Parameters

##### options

[`SiteCookieClearOptions`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteCookieClearOptions/)

#### Returns

`Promise`\<`number`\>

### list()

> **list**(`options`): `Promise`\<readonly [`SiteCookieMetadata`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteCookieMetadata/)[]\>

Returns cookie names and domains only. Cookie values are never exposed.

#### Parameters

##### options

[`SiteCookieQuery`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteCookieQuery/)

#### Returns

`Promise`\<readonly [`SiteCookieMetadata`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteCookieMetadata/)[]\>
