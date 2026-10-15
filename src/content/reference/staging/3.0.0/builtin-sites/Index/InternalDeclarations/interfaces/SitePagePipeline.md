---
title: "SitePagePipeline"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Application-owned page pipeline. It centralizes document lifecycle retries, frame traversal, failure isolation, diagnostics, and teardown for Providers."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/SitePagePipeline.md"
symbolKind: "Interface"
---
## Methods

### dispose()

> **dispose**(): `void`

**`Internal`**

Kawaikara owns the pipeline lifecycle.

#### Returns

`void`

### execute()

> **execute**\<`T`\>(`id`, `source`): `Promise`\<`T`\>

Executes the operation.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### id

`string`

##### source

`string`

#### Returns

`Promise`\<`T`\>

***

### executeInAllFrames()

> **executeInAllFrames**\<`T`\>(`id`, `source`): `Promise`\<readonly `T`[]\>

Executes the in all frames.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### id

`string`

##### source

`string`

#### Returns

`Promise`\<readonly `T`[]\>

***

### on()

> **on**(`phase`, `listener`): [`Disposable`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/Disposable/)

Handles the operation.

#### Parameters

##### phase

[`SitePagePhase`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/SitePagePhase/)

##### listener

() => `void` \| `Promise`\<`void`\>

#### Returns

[`Disposable`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/Disposable/)

***

### refresh()

> **refresh**(`id`): `Promise`\<`void`\>

Performs the refresh operation.

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### register()

> **register**(`injection`): [`Disposable`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/Disposable/)

Registers the operation.

#### Parameters

##### injection

[`SitePageInjection`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePageInjection/)

#### Returns

[`Disposable`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/Disposable/)

***

### sendKeyPress()

> **sendKeyPress**(`key`): `void`

Send one trusted keyboard press to the active page.

#### Parameters

##### key

`string`

#### Returns

`void`
