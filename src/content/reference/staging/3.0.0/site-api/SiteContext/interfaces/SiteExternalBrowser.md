---
title: "SiteExternalBrowser"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · SiteContext"
description: "Describes the site external browser contract."
displayPath: "SiteContext"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "SiteContext/interfaces/SiteExternalBrowser.md"
symbolKind: "Interface"
---
## Methods

### close()

> **close**(): `Promise`\<`void`\>

Closes the operation.

#### Returns

`Promise`\<`void`\>

### login()

> **login**(`options`): `Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/site-api/SiteContext/type-aliases/ExternalLoginResult/)\>

Performs the login operation.

#### Parameters

##### options

[`ExternalLoginOptions`](/api/staging/3.0.0/site-api/SiteContext/interfaces/ExternalLoginOptions/)

#### Returns

`Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/site-api/SiteContext/type-aliases/ExternalLoginResult/)\>
