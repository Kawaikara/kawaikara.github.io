---
title: "KawaiBackgrounRunnable"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · definitions"
description: "Defined in: typescript_src/definitions/bg_task.ts:63"
displayPath: "definitions/bg_task"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/definitions/bg_task/interfaces/KawaiBackgrounRunnable.md"
symbolKind: "Interface"
---
## Properties

### attachCloseCallback

> **attachCloseCallback**: (`callback`) => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(callback) =&gt; Promise&lt;boolean&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:73](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L73)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

### attachStderrCallback

> **attachStderrCallback**: (`callback`) => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(callback) =&gt; Promise&lt;boolean&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:72](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L72)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

***

### attachStdoutCallback

> **attachStdoutCallback**: (`callback`) => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(callback) =&gt; Promise&lt;boolean&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:71](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L71)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

***

### finalize

> **finalize**: () => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>() =&gt; Promise&lt;boolean&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:68](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L68)

#### Returns

`Promise`\<`boolean`\>

***

### getState

> **getState**: () => `Promise`\<[`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/"><code>() =&gt; Promise&lt;BackgroundState&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:65](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L65)

#### Returns

`Promise`\<[`BackgroundState`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BackgroundState/)\>

***

### meta

> **meta**: () => `Promise`\<[`BgTaskMeta`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BgTaskMeta/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BgTaskMeta/"><code>() =&gt; Promise&lt;BgTaskMeta&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:64](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L64)

#### Returns

`Promise`\<[`BgTaskMeta`](/api/stable/2.3.1/app/definitions/bg_task/type-aliases/BgTaskMeta/)\>

***

### pause

> **pause**: () => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>() =&gt; Promise&lt;boolean&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:66](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L66)

#### Returns

`Promise`\<`boolean`\>

***

### progressCallback

> **progressCallback**: (`callback`) => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(callback) =&gt; Promise&lt;boolean&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:70](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L70)

#### Parameters

##### callback

`any`

#### Returns

`Promise`\<`boolean`\>

***

### run

> **run**: () => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>() =&gt; Promise&lt;boolean&gt;</code></a></span>

Defined in: [typescript\_src/definitions/bg\_task.ts:67](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/bg_task.ts#L67)

#### Returns

`Promise`\<`boolean`\>
