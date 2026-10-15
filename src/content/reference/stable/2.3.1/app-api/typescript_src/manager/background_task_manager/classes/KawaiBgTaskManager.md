---
title: "KawaiBgTaskManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/background_task_manager.ts:81"
displayPath: "manager/background_task_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/background_task_manager/classes/KawaiBgTaskManager.md"
symbolKind: "Class"
---
default mode is sequential

## Constructors

### Constructor

> `private` **new KawaiBgTaskManager**(): `KawaiBgTaskManager`

Defined in: [typescript\_src/manager/background\_task\_manager.ts:86](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L86)

#### Returns

`KawaiBgTaskManager`

## Properties

### m\_mode

> `private` **m\_mode**: [`KawaiBgTaskScheduleMode`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgTaskScheduleMode/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgTaskScheduleMode/"><code>KawaiBgTaskScheduleMode</code></a></span>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:84](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L84)

### task\_map

> `private` **task\_map**: `Map`\<`string`, [`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/"><code>Map&lt;string, KawaiBackgrounRunnable&gt;</code></a></span>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:85](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L85)

***

### \_\_id

> `private` `static` **\_\_id**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `0`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:83](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L83)

***

### \_\_instance

> `private` `static` **\_\_instance**: `KawaiBgTaskManager` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/background_task_manager/classes/KawaiBgTaskManager/"><code>KawaiBgTaskManager | undefined</code></a></span>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:82](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L82)

## Methods

### \_changeOngoingTaskMode()

> `protected` **\_changeOngoingTaskMode**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:99](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L99)

Stop all tasks except the first ongoing task.

#### Returns

`Promise`\<`void`\>

***

### \_closeLogic()

> `protected` **\_closeLogic**(`id`, `msg`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:353](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L353)

#### Parameters

##### id

`string`

##### msg

`string`

#### Returns

`Promise`\<`void`\>

***

### \_createId()

> `protected` **\_createId**(): `string`

Defined in: [typescript\_src/manager/background\_task\_manager.ts:306](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L306)

#### Returns

`string`

***

### \_deleteTask()

> `protected` **\_deleteTask**(`id_o_category?`): `Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:201](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L201)

#### Parameters

##### id\_o\_category?

`string`

#### Returns

`Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

***

### \_findAndResumeIncompleteTasks()

> `protected` **\_findAndResumeIncompleteTasks**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:102](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L102)

#### Returns

`Promise`\<`void`\>

***

### \_getTasks()

> `protected` **\_getTasks**(`id_o_category?`): `Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:263](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L263)

#### Parameters

##### id\_o\_category?

`string`

#### Returns

`Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

***

### \_initialize\_message()

> **\_initialize\_message**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:137](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L137)

#### Returns

`Promise`\<`void`\>

***

### \_meesage\_logic()

> `protected` **\_meesage\_logic**(`msg_type`, ...`args`): `Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:157](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L157)

#### Parameters

##### msg\_type

[`KawaiBgMsgType`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgType/)

##### args

...`any`[]

#### Returns

`Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

***

### \_pauseTask()

> `protected` **\_pauseTask**(`id_o_category?`): `Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:233](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L233)

#### Parameters

##### id\_o\_category?

`string`

#### Returns

`Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

***

### \_resumeTask()

> `protected` **\_resumeTask**(`id_o_category?`): `Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:181](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L181)

#### Parameters

##### id\_o\_category?

`string`

#### Returns

`Promise`\<[`KawaiBgMsgResult`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgMsgResult/)\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:129](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L129)

#### Returns

`Promise`\<`void`\>

***

### registerBgTask()

> **registerBgTask**(`bg_task`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:372](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L372)

#### Parameters

##### bg\_task

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/)

#### Returns

`Promise`\<`void`\>

***

### setMode()

> **setMode**(`mode`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:91](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L91)

#### Parameters

##### mode

[`KawaiBgTaskScheduleMode`](/api/stable/2.3.1/app/manager/background_task_manager/type-aliases/KawaiBgTaskScheduleMode/)

#### Returns

`Promise`\<`void`\>

***

### \_progressMessageLogic()

> `protected` `static` **\_progressMessageLogic**(`id`, `data`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:311](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L311)

#### Parameters

##### id

`string`

##### data

[`KawaiPrgoress`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/KawaiPrgoress/)

#### Returns

`Promise`\<`void`\>

***

### \_stderrLogic()

> `protected` `static` **\_stderrLogic**(`id`, `msg`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:341](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L341)

#### Parameters

##### id

`string`

##### msg

`string`

#### Returns

`Promise`\<`void`\>

***

### \_stdoutLogic()

> `protected` `static` **\_stdoutLogic**(`id`, `msg`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:329](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L329)

#### Parameters

##### id

`string`

##### msg

`string`

#### Returns

`Promise`\<`void`\>

***

### getInstance()

> `static` **getInstance**(): `KawaiBgTaskManager`

Defined in: [typescript\_src/manager/background\_task\_manager.ts:122](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L122)

#### Returns

`KawaiBgTaskManager`
