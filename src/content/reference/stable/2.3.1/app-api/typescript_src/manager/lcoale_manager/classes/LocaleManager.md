---
title: "LocaleManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/lcoale_manager.ts:17"
displayPath: "manager/lcoale_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/lcoale_manager/classes/LocaleManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> `private` **new LocaleManager**(): `LocaleManager`

Defined in: [typescript\_src/manager/lcoale\_manager.ts:20](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/lcoale_manager.ts#L20)

#### Returns

`LocaleManager`

## Properties

### \_\_instance

> `static` **\_\_instance**: `LocaleManager` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/lcoale_manager/classes/LocaleManager/"><code>LocaleManager | undefined</code></a></span>

Defined in: [typescript\_src/manager/lcoale\_manager.ts:18](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/lcoale_manager.ts#L18)

## Methods

### getLocaleMetas()

> **getLocaleMetas**(`root_path?`): [`LocaleMeta`](/api/stable/2.3.1/app/definitions/setting_types/type-aliases/LocaleMeta/)[]

Defined in: [typescript\_src/manager/lcoale\_manager.ts:34](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/lcoale_manager.ts#L34)

return locale meta

#### Parameters

##### root\_path?

`string`

#### Returns

[`LocaleMeta`](/api/stable/2.3.1/app/definitions/setting_types/type-aliases/LocaleMeta/)[]

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/lcoale\_manager.ts:29](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/lcoale_manager.ts#L29)

#### Returns

`Promise`\<`void`\>

***

### getInstance()

> `static` **getInstance**(): `LocaleManager`

Defined in: [typescript\_src/manager/lcoale\_manager.ts:22](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/lcoale_manager.ts#L22)

#### Returns

`LocaleManager`
