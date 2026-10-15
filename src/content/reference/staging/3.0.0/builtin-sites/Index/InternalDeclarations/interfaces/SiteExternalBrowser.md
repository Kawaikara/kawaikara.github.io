---
title: "SiteExternalBrowser"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Describes the site external browser contract."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/SiteExternalBrowser.md"
symbolKind: "Interface"
---
## Methods

### close()

> **close**(): `Promise`\<`void`\>

Closes the operation.

#### Returns

`Promise`\<`void`\>

### login()

> **login**(`options`): `Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/ExternalLoginResult/)\>

Performs the login operation.

#### Parameters

##### options

[`ExternalLoginOptions`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ExternalLoginOptions/)

#### Returns

`Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/ExternalLoginResult/)\>
