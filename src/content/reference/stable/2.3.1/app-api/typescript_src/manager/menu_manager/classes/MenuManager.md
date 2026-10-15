---
title: "MenuManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/menu_manager.ts:16"
displayPath: "manager/menu_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/menu_manager/classes/MenuManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> `private` **new MenuManager**(): `MenuManager`

Defined in: [typescript\_src/manager/menu\_manager.ts:25](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L25)

#### Returns

`MenuManager`

## Properties

### m\_category\_items

> `private` **m\_category\_items**: `Map`\<`string`, [`KawaiCategoryBase`](/api/stable/2.3.1/app/definitions/menu_def/classes/KawaiCategoryBase/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/menu_def/classes/KawaiCategoryBase/"><code>Map&lt;string, KawaiCategoryBase&gt;</code></a></span>

Defined in: [typescript\_src/manager/menu\_manager.ts:18](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L18)

### m\_category\_menu\_map

> `private` **m\_category\_menu\_map**: `Map`\<`string`, `string`[]\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map&lt;string, string[]&gt;</code></a></span>

Defined in: [typescript\_src/manager/menu\_manager.ts:20](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L20)

***

### m\_event\_emitter

> `private` **m\_event\_emitter**: `EventEmitter`\<`DefaultEventMap`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>EventEmitter&lt;DefaultEventMap&gt;</code></span>

Defined in: [typescript\_src/manager/menu\_manager.ts:23](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L23)

***

### m\_favicon\_meta

> `private` **m\_favicon\_meta**: `Map`\<`string`, `string`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map&lt;string, string&gt;</code></a></span>

Defined in: [typescript\_src/manager/menu\_manager.ts:22](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L22)

***

### m\_menu\_item

> `private` **m\_menu\_item**: `Map`\<`string`, [`IKawaiMenu`](/api/stable/2.3.1/app/definitions/menu_def/interfaces/IKawaiMenu/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/menu_def/interfaces/IKawaiMenu/"><code>Map&lt;string, IKawaiMenu&gt;</code></a></span>

Defined in: [typescript\_src/manager/menu\_manager.ts:19](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L19)

***

### \_\_instance

> `static` **\_\_instance**: `MenuManager` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/menu_manager/classes/MenuManager/"><code>MenuManager | undefined</code></a></span>

Defined in: [typescript\_src/manager/menu\_manager.ts:17](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L17)

## Methods

### \_add\_meta()

> **\_add\_meta**(`key`, `value`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:160](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L160)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`void`

***

### \_connectManager()

> **\_connectManager**(`event_literal`, `callback`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:233](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L233)

#### Parameters

##### event\_literal

[`EventLiteral`](/api/stable/2.3.1/app/manager/menu_manager/InternalDeclarations/type-aliases/EventLiteral/)

##### callback

(`id`) => `void`

#### Returns

`void`

***

### add\_category()

> **add\_category**(`item`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:146](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L146)

#### Parameters

##### item

`string` \| [`KawaiCategoryBase`](/api/stable/2.3.1/app/definitions/menu_def/classes/KawaiCategoryBase/)

#### Returns

`void`

***

### add\_menuitem()

> **add\_menuitem**(`item`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:164](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L164)

#### Parameters

##### item

[`KawaiMenuBase`](/api/stable/2.3.1/app/definitions/menu_def/classes/KawaiMenuBase/)

#### Returns

`void`

***

### addFavorites()

> **addFavorites**(`menu_id`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:51](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L51)

#### Parameters

##### menu\_id

`string`

#### Returns

`void`

***

### addToCategory()

> `protected` **addToCategory**(`item`, `category_id`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:176](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L176)

#### Parameters

##### item

[`KawaiMenuBase`](/api/stable/2.3.1/app/definitions/menu_def/classes/KawaiMenuBase/)

##### category\_id

`string`

#### Returns

`void`

***

### closeMenu()

> **closeMenu**(): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:229](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L229)

#### Returns

`void`

***

### deleteFavorites()

> **deleteFavorites**(`menu_id`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:64](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L64)

#### Parameters

##### menu\_id

`string`

#### Returns

`void`

***

### getFavorites()

> **getFavorites**(): `object`[]

Defined in: [typescript\_src/manager/menu\_manager.ts:79](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L79)

#### Returns

`object`[]

***

### getMenuItemsByJson()

> **getMenuItemsByJson**(): `string`

Defined in: [typescript\_src/manager/menu\_manager.ts:104](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L104)

#### Returns

`string`

***

### hasCategory()

> **hasCategory**(`category_id`): `boolean`

Defined in: [typescript\_src/manager/menu\_manager.ts:45](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L45)

#### Parameters

##### category\_id

`string`

#### Returns

`boolean`

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/menu\_manager.ts:40](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L40)

#### Returns

`Promise`\<`void`\>

***

### onSelectItem()

> **onSelectItem**(`category_id`, `id`): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:203](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L203)

#### Parameters

##### category\_id

`string`

##### id

`string`

#### Returns

`void`

***

### openMenu()

> **openMenu**(): `void`

Defined in: [typescript\_src/manager/menu\_manager.ts:224](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L224)

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): `MenuManager`

Defined in: [typescript\_src/manager/menu\_manager.ts:33](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/menu_manager.ts#L33)

#### Returns

`MenuManager`
