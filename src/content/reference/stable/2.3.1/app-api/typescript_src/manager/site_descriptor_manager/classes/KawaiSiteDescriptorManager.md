---
title: "KawaiSiteDescriptorManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/site_descriptor_manager.ts:10"
displayPath: "manager/site_descriptor_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/site_descriptor_manager/classes/KawaiSiteDescriptorManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> `private` **new KawaiSiteDescriptorManager**(): `KawaiSiteDescriptorManager`

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:16](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L16)

#### Returns

`KawaiSiteDescriptorManager`

## Properties

### m\_event\_emitter

> `private` **m\_event\_emitter**: `EventEmitter`\<`DefaultEventMap`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>EventEmitter&lt;DefaultEventMap&gt;</code></span>

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:14](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L14)

### m\_meta\_map

> `private` **m\_meta\_map**: `Map`\<`string`, `string`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map&lt;string, string&gt;</code></a></span>

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:15](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L15)

***

### m\_registered\_descriptors

> `private` **m\_registered\_descriptors**: `Map`\<`string`, [`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/"><code>Map&lt;string, KawaiAbstractSiteDescriptor&gt;</code></a></span>

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:13](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L13)

***

### \_instance

> `private` `static` **\_instance**: [`KawaiSiteDescriptorManager`](/api/stable/2.3.1/app/manager/site_descriptor_manager/classes/KawaiSiteDescriptorManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/site_descriptor_manager/classes/KawaiSiteDescriptorManager/"><code>KawaiSiteDescriptorManager</code></a></span>

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:12](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L12)

## Methods

### \_RegisterConnection()

> **\_RegisterConnection**(`key`, `value`): `void`

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:67](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L67)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`void`

***

### getRegisteredDescriptorIds()

> **getRegisteredDescriptorIds**(): `object`[]

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:50](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L50)

#### Returns

`object`[]

***

### initializeDefaultSitesDescriptor()

> **initializeDefaultSitesDescriptor**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:25](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L25)

#### Returns

`Promise`\<`void`\>

***

### qeury\_site\_descriptor\_by\_name()

> **qeury\_site\_descriptor\_by\_name**(`id`): [`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/) \| `undefined`

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:41](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L41)

#### Parameters

##### id

`string`

#### Returns

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/) \| `undefined`

***

### register()

> **register**(`cls`): `void`

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:36](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L36)

#### Parameters

##### cls

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/)

#### Returns

`void`

***

### runEventLogic()

> **runEventLogic**(`id`): `void`

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:74](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L74)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): `KawaiSiteDescriptorManager`

Defined in: [typescript\_src/manager/site\_descriptor\_manager.ts:28](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/site_descriptor_manager.ts#L28)

#### Returns

`KawaiSiteDescriptorManager`
