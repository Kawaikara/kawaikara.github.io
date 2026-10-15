---
title: "KawaiWindowManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/window_manager.ts:13"
displayPath: "manager/window_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/window_manager/classes/KawaiWindowManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> `private` **new KawaiWindowManager**(): `KawaiWindowManager`

Defined in: [typescript\_src/manager/window\_manager.ts:146](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L146)

#### Returns

`KawaiWindowManager`

## Properties

### m\_current\_window\_bounds

> `private` **m\_current\_window\_bounds**: `Rectangle`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Rectangle</code></span>

Defined in: [typescript\_src/manager/window\_manager.ts:31](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L31)

### m\_default\_window\_size

> `private` **m\_default\_window\_size**: `Rectangle`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Rectangle</code></span>

Defined in: [typescript\_src/manager/window\_manager.ts:38](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L38)

***

### m\_pip\_bounds

> `private` **m\_pip\_bounds**: `Rectangle`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Rectangle</code></span>

Defined in: [typescript\_src/manager/window\_manager.ts:25](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L25)

***

### \_\_instance

> `static` **\_\_instance**: `KawaiWindowManager` \| `undefined` = `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/window_manager/classes/KawaiWindowManager/"><code>KawaiWindowManager | undefined</code></a></span>

Defined in: [typescript\_src/manager/window\_manager.ts:14](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L14)

***

### preset\_size

> `readonly` `static` **preset\_size**: `number`[][]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number[][]</code></a></span>

Defined in: [typescript\_src/manager/window\_manager.ts:15](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L15)

## Methods

### findCenterCoordByBounds()

> **findCenterCoordByBounds**(`b_width`, `b_height`, `monitor_label?`): `object`

Defined in: [typescript\_src/manager/window\_manager.ts:274](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L274)

#### Parameters

##### b\_width

`number`

##### b\_height

`number`

##### monitor\_label?

`string`

: monitor label from getMonitorNames()
if monitor_label is undefined then we select main monitor

#### Returns

`object`

##### x

> **x**: `number`

##### y

> **y**: `number`

***

### getConfigWindowSize()

> **getConfigWindowSize**(): `Rectangle`

Defined in: [typescript\_src/manager/window\_manager.ts:249](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L249)

#### Returns

`Rectangle`

***

### getDefaultWindowSize()

> **getDefaultWindowSize**(): `Rectangle`

Defined in: [typescript\_src/manager/window\_manager.ts:64](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L64)

#### Returns

`Rectangle`

***

### getMonitorNames()

> **getMonitorNames**(): `string`[]

Defined in: [typescript\_src/manager/window\_manager.ts:227](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L227)

#### Returns

`string`[]

get monitor names.

***

### getPictureInPicturePresetSize()

> **getPictureInPicturePresetSize**(): `number`[][]

Defined in: [typescript\_src/manager/window\_manager.ts:207](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L207)

#### Returns

`number`[][]

get PiP preset size.

***

### getPipBounds()

> **getPipBounds**(): `Rectangle`

Defined in: [typescript\_src/manager/window\_manager.ts:142](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L142)

#### Returns

`Rectangle`

***

### getPiPLocationCandidates()

> **getPiPLocationCandidates**(): [`KawaiWindowPreset`](/api/stable/2.3.1/app/definitions/setting_types/type-aliases/KawaiWindowPreset/)[]

Defined in: [typescript\_src/manager/window\_manager.ts:199](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L199)

#### Returns

[`KawaiWindowPreset`](/api/stable/2.3.1/app/definitions/setting_types/type-aliases/KawaiWindowPreset/)[]

***

### getPresetSize()

> **getPresetSize**(): `number`[][]

Defined in: [typescript\_src/manager/window\_manager.ts:164](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L164)

#### Returns

`number`[][]

return main window preset size. it depends on biggest Monitor size that belong to your machine.

***

### getPrimaryMonitorName()

> **getPrimaryMonitorName**(): `string`

Defined in: [typescript\_src/manager/window\_manager.ts:219](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L219)

#### Returns

`string`

***

### setCofigWindowSize()

> **setCofigWindowSize**(`x?`, `y?`, `width?`, `height?`): `void`

Defined in: [typescript\_src/manager/window\_manager.ts:242](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L242)

#### Parameters

##### x?

`number`

##### y?

`number`

##### width?

`number`

##### height?

`number`

#### Returns

`void`

***

### setDefaultWindowSize()

> **setDefaultWindowSize**(`width?`, `height?`): `void`

Defined in: [typescript\_src/manager/window\_manager.ts:45](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L45)

#### Parameters

##### width?

`number`

##### height?

`number`

#### Returns

`void`

***

### setPiPBounds()

> **setPiPBounds**(`width?`, `height?`, `pip_location?`, `monitor_name?`): `void`

Defined in: [typescript\_src/manager/window\_manager.ts:74](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L74)

#### Parameters

##### width?

`number`

width selected from pipPreset

##### height?

`number`

height selected from pipPreset

##### pip\_location?

[`KawaiWindowPreset`](/api/stable/2.3.1/app/definitions/setting_types/type-aliases/KawaiWindowPreset/)

location

##### monitor\_name?

`string`

if monitor name wasn't given, then we select default primary monitor.

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): `KawaiWindowManager`

Defined in: [typescript\_src/manager/window\_manager.ts:153](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/window_manager.ts#L153)

#### Returns

`KawaiWindowManager`
