---
title: "SiteExternalLoginFlow"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · ExternalLoginFlow"
description: "Describes the site external login flow contract."
displayPath: "ExternalLoginFlow"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "ExternalLoginFlow/interfaces/SiteExternalLoginFlow.md"
symbolKind: "Interface"
---
## Extends

- [`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/)

## Methods

### dispose()

> **dispose**(): `void`

Releases the operation.

#### Returns

`void`

#### Inherited from

[`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/).[`dispose`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/#dispose)

### handleAction()

> **handleAction**(`action`): `Promise`\<`boolean`\>

Handles the action.

#### Parameters

##### action

`string`

#### Returns

`Promise`\<`boolean`\>

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Performs the refresh operation.

#### Returns

`Promise`\<`void`\>
