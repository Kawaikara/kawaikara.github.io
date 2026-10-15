---
title: "KawaiViewManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/view_manager.ts:44"
displayPath: "manager/view_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/view_manager/classes/KawaiViewManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> `private` **new KawaiViewManager**(): `KawaiViewManager`

Defined in: [typescript\_src/manager/view\_manager.ts:54](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L54)

#### Returns

`KawaiViewManager`

## Properties

### m\_focused\_view

> `private` **m\_focused\_view**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/manager/view\_manager.ts:46](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L46)

### m\_listeners

> `private` **m\_listeners**: () => `void`[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void[]</code></a></span>

Defined in: [typescript\_src/manager/view\_manager.ts:53](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L53)

#### Returns

`void`

***

### m\_preload\_controller

> `private` **m\_preload\_controller**: [`PreloadController`](/api/stable/2.3.1/app/manager/view_manager/interfaces/PreloadController/) \| `null`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/view_manager/interfaces/PreloadController/"><code>PreloadController | null</code></a></span>

Defined in: [typescript\_src/manager/view\_manager.ts:51](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L51)

preload controller is Pormise<void>

***

### \_\_instance

> `private` `static` **\_\_instance**: `KawaiViewManager` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/view_manager/classes/KawaiViewManager/"><code>KawaiViewManager | undefined</code></a></span>

Defined in: [typescript\_src/manager/view\_manager.ts:45](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L45)

## Methods

### \_abortCurrentController()

> **\_abortCurrentController**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:203](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L203)

#### Returns

`void`

***

### \_closeMenu()

> **\_closeMenu**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:166](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L166)

#### Returns

`void`

***

### \_createController()

> **\_createController**(): [`KawaikaraViewAction`](/api/stable/2.3.1/app/definitions/SiteDescriptor/interfaces/KawaikaraViewAction/)

Defined in: [typescript\_src/manager/view\_manager.ts:211](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L211)

create controller, if queued controller exists then abort previous controller fisrt,

#### Returns

[`KawaikaraViewAction`](/api/stable/2.3.1/app/definitions/SiteDescriptor/interfaces/KawaikaraViewAction/)

create wait function

***

### addListener()

> **addListener**(`f`): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:125](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L125)

#### Parameters

##### f

() => `void`

#### Returns

`void`

***

### alwaysOnTopMode()

> **alwaysOnTopMode**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:282](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L282)

#### Returns

`void`

***

### closeMenu()

> **closeMenu**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:155](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L155)

#### Returns

`void`

***

### fullscreen()

> **fullscreen**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:344](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L344)

#### Returns

`void`

***

### getFocusedViewName()

> **getFocusedViewName**(): `string`

Defined in: [typescript\_src/manager/view\_manager.ts:129](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L129)

#### Returns

`string`

***

### getFocusedViewObject()

> **getFocusedViewObject**(): `BrowserWindow` \| `BrowserView` \| `undefined`

Defined in: [typescript\_src/manager/view\_manager.ts:70](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L70)

#### Returns

`BrowserWindow` \| `BrowserView` \| `undefined`

***

### getViewNames()

> **getViewNames**(): `any`[]

Defined in: [typescript\_src/manager/view\_manager.ts:105](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L105)

#### Returns

`any`[]

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/view\_manager.ts:62](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L62)

initialize runtime values.

#### Returns

`Promise`\<`void`\>

***

### isMenuOpen()

> **isMenuOpen**(): `any`

Defined in: [typescript\_src/manager/view\_manager.ts:149](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L149)

#### Returns

`any`

***

### loadUrl()

> **loadUrl**(`desc_id`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/view\_manager.ts:175](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L175)

#### Parameters

##### desc\_id

`string`

#### Returns

`Promise`\<`void`\>

***

### notifyToView()

> **notifyToView**(`event_name`, `viewname?`, ...`args`): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:306](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L306)

#### Parameters

##### event\_name

`string`

##### viewname?

`string`

##### args

...`any`[]

#### Returns

`void`

***

### openMenu()

> **openMenu**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:133](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L133)

#### Returns

`void`

***

### openPreference()

> **openPreference**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:145](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L145)

#### Returns

`void`

***

### pipMode()

> **pipMode**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:256](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L256)

#### Returns

`void`

***

### resetDefaultState()

> `protected` **resetDefaultState**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:318](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L318)

#### Returns

`void`

***

### resizeWindow()

> **resizeWindow**(`width`, `height`): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:363](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L363)

#### Parameters

##### width

`number` \| `undefined`

##### height

`number` \| `undefined`

#### Returns

`void`

***

### rollbackViewState()

> `protected` **rollbackViewState**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:323](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L323)

#### Returns

`void`

***

### saveViewState()

> `protected` **saveViewState**(): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:332](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L332)

#### Returns

`void`

***

### setFocusedView()

> **setFocusedView**(`name?`): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:113](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L113)

#### Parameters

##### name?

`string`

#### Returns

`void`

***

### trackBrowserFocus()

> **trackBrowserFocus**(`view`): `void`

Defined in: [typescript\_src/manager/view\_manager.ts:81](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L81)

#### Parameters

##### view

`BrowserWindow` \| `BrowserView`

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): `KawaiViewManager`

Defined in: [typescript\_src/manager/view\_manager.ts:64](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L64)

#### Returns

`KawaiViewManager`
