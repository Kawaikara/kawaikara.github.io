---
title: "SiteExternalLoginFlow"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Providers"
description: "Describes the site external login flow contract."
displayPath: "Providers/Watcha/Provider/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Providers/Watcha/Provider/InternalDeclarations/interfaces/SiteExternalLoginFlow.md"
symbolKind: "Interface"
---
## Extends

- [`Disposable`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/Disposable/)

## Methods

### dispose()

> **dispose**(): `void`

Releases the operation.

#### Returns

`void`

#### Inherited from

[`Disposable`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/Disposable/).[`dispose`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/Disposable/#dispose)

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
