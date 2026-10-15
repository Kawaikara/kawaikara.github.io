---
title: "PreloadController"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/view_manager.ts:30"
displayPath: "manager/view_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/view_manager/interfaces/PreloadController.md"
symbolKind: "Interface"
---
## Properties

### abort

> **abort**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Defined in: [typescript\_src/manager/view\_manager.ts:33](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L33)

#### Returns

`void`

### resume

> **resume**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Defined in: [typescript\_src/manager/view\_manager.ts:32](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L32)

#### Returns

`void`

***

### wait

> **wait**: (`abortCallback`) => `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(abortCallback) =&gt; Promise&lt;void&gt;</code></a></span>

Defined in: [typescript\_src/manager/view\_manager.ts:31](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/view_manager.ts#L31)

#### Parameters

##### abortCallback

[`abortCallbackType`](/api/stable/2.3.1/app/manager/view_manager/InternalDeclarations/type-aliases/abortCallbackType/)

#### Returns

`Promise`\<`void`\>
