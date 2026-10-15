---
title: "SiteExternalBrowser"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the site external browser contract."
displayPath: "Main/Functional/SiteRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteExternalBrowser.md"
symbolKind: "Interface"
---
## Methods

### close()

> **close**(): `Promise`\<`void`\>

Closes the operation.

#### Returns

`Promise`\<`void`\>

### login()

> **login**(`options`): `Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>

Performs the login operation.

#### Parameters

##### options

[`ExternalLoginOptions`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/ExternalLoginOptions/)

#### Returns

`Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>
