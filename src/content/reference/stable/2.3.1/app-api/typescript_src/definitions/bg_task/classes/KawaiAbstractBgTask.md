---
title: "KawaiAbstractBgTask"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · definitions"
description: "Defined in: typescript_src/definitions/bg_task.ts:89"
displayPath: "definitions/bg_task"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/definitions/bg_task/classes/KawaiAbstractBgTask.md"
symbolKind: "Class"
---
## Implements

- [`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/)

## Constructors

### Constructor

> **new KawaiAbstractBgTask**(): `KawaiAbstractBgTask`

Defined in: [typescript\_src/definitions/bg\_task.ts:92](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L92)

#### Returns

`KawaiAbstractBgTask`

## Properties

### m\_state

> `private` **m\_state**: [`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/) = `'idle'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/"><code>BackgroundState</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:90](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L90)

## Methods

### attachCloseCallback()

> **attachCloseCallback**(`callback`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:126](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L126)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`attachCloseCallback`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#attachclosecallback)

### attachStderrCallback()

> **attachStderrCallback**(`callback`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:123](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L123)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`attachStderrCallback`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#attachstderrcallback)

***

### attachStdoutCallback()

> **attachStdoutCallback**(`callback`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:120](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L120)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`attachStdoutCallback`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#attachstdoutcallback)

***

### finalize()

> **finalize**(): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:105](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L105)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`finalize`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#finalize)

***

### getState()

> **getState**(): `Promise`\<[`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/)\>

Defined in: [typescript\_src/definitions/bg\_task.ts:94](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L94)

#### Returns

`Promise`\<[`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/)\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`getState`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#getstate)

***

### meta()

> **meta**(): `Promise`\<[`BgTaskMeta`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BgTaskMeta/)\>

Defined in: [typescript\_src/definitions/bg\_task.ts:113](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L113)

#### Returns

`Promise`\<[`BgTaskMeta`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BgTaskMeta/)\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`meta`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#meta)

***

### pause()

> **pause**(): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:98](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L98)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`pause`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#pause)

***

### progressCallback()

> **progressCallback**(`callback`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:109](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L109)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`progressCallback`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#progresscallback)

***

### run()

> **run**(): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:102](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L102)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`run`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#run)
