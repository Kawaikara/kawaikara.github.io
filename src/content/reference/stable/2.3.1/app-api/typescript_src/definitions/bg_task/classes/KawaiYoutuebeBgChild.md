---
title: "KawaiYoutuebeBgChild"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · definitions"
description: "Defined in: typescript_src/definitions/bg_task.ts:149"
displayPath: "definitions/bg_task"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/definitions/bg_task/classes/KawaiYoutuebeBgChild.md"
symbolKind: "Class"
---
lazy initialize

NOTICE
https://github.com/yt-dlp/yt-dlp/issues/8227
I first tried to export cookies and use --cookies "%~dp0\cookies.txt" to specify cookies, but after a few minutes, 
it became invalid. When I downloaded member-only videos, it prompted me to need a higher level. permission.

## Implements

- [`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/)

## Constructors

### Constructor

> **new KawaiYoutuebeBgChild**(`url`, `args?`): `KawaiYoutuebeBgChild`

Defined in: [typescript\_src/definitions/bg\_task.ts:166](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L166)

#### Parameters

##### url

`string`

##### args?

[`KawaiYoutubeBgTaskArgs`](/api/stable/2.3.1/app/definitions/bg_task/InternalDeclarations/type-aliases/KawaiYoutubeBgTaskArgs/)

#### Returns

`KawaiYoutuebeBgChild`

## Properties

### m\_args

> `private` **m\_args**: [`KawaiYoutubeBgTaskArgs`](/api/stable/2.3.1/app/definitions/bg_task/InternalDeclarations/type-aliases/KawaiYoutubeBgTaskArgs/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/bg_task/InternalDeclarations/type-aliases/KawaiYoutubeBgTaskArgs/"><code>KawaiYoutubeBgTaskArgs</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:153](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L153)

### m\_close\_callbacks

> `private` **m\_close\_callbacks**: `any`[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>any[]</code></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:164](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L164)

***

### m\_donwload\_regex

> `private` **m\_donwload\_regex**: [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:156](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L156)

***

### m\_filenamePattern

> `private` **m\_filenamePattern**: [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:158](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L158)

***

### m\_obj

> `private` **m\_obj**: `ChildProcessWithoutNullStreams` \| `null`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>ChildProcessWithoutNullStreams | null</code></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:150](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L150)

***

### m\_output\_filename

> `private` **m\_output\_filename**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `''`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:159](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L159)

***

### m\_pregress\_callbacks

> `private` **m\_pregress\_callbacks**: `any`[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>any[]</code></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:161](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L161)

***

### m\_prog

> `private` **m\_prog**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:151](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L151)

***

### m\_state

> `private` **m\_state**: [`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/"><code>BackgroundState</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:154](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L154)

***

### m\_stderr\_callbacks

> `private` **m\_stderr\_callbacks**: `any`[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>any[]</code></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:163](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L163)

***

### m\_stdout\_callbacks

> `private` **m\_stdout\_callbacks**: `any`[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>any[]</code></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:162](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L162)

***

### m\_url

> `private` **m\_url**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:152](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L152)

## Methods

### \_attachCallback()

> `protected` **\_attachCallback**(): `void`

Defined in: [typescript\_src/definitions/bg\_task.ts:305](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L305)

#### Returns

`void`

***

### \_check\_yt\_dlp\_updated()

> `protected` **\_check\_yt\_dlp\_updated**(): `Promise`\<`void`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:236](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L236)

#### Returns

`Promise`\<`void`\>

***

### \_inflateArgs()

> `protected` **\_inflateArgs**(): `Promise`\<`string`[]\>

Defined in: [typescript\_src/definitions/bg\_task.ts:205](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L205)

#### Returns

`Promise`\<`string`[]\>

***

### \_parseStdoutString()

> **\_parseStdoutString**(`str`): `void`

Defined in: [typescript\_src/definitions/bg\_task.ts:203](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L203)

#### Parameters

##### str

`string`

#### Returns

`void`

***

### attachCloseCallback()

> **attachCloseCallback**(`callback`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:499](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L499)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`attachCloseCallback`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#attachclosecallback)

***

### attachStderrCallback()

> **attachStderrCallback**(`callback`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:494](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L494)

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

Defined in: [typescript\_src/definitions/bg\_task.ts:488](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L488)

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

Defined in: [typescript\_src/definitions/bg\_task.ts:423](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L423)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`finalize`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#finalize)

***

### getState()

> **getState**(): `Promise`\<[`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/)\>

Defined in: [typescript\_src/definitions/bg\_task.ts:184](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L184)

#### Returns

`Promise`\<[`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/)\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`getState`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#getstate)

***

### meta()

> **meta**(): `Promise`\<[`BgTaskMeta`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BgTaskMeta/)\>

Defined in: [typescript\_src/definitions/bg\_task.ts:177](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L177)

#### Returns

`Promise`\<[`BgTaskMeta`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BgTaskMeta/)\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`meta`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#meta)

***

### pause()

> **pause**(): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:193](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L193)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`pause`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#pause)

***

### progressCallback()

> **progressCallback**(`callback`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/definitions/bg\_task.ts:483](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L483)

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

Defined in: [typescript\_src/definitions/bg\_task.ts:369](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L369)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`KawaiBackgrounRunnable`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/).[`run`](/api/stable/2.3.1/app/definitions/bg_task/interfaces/KawaiBackgrounRunnable/#run)
