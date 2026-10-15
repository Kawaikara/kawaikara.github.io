---
title: "ApplicationLifecycleManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Owns Electron process events and requests that can arrive before ready."
displayPath: "Main/Manager/ApplicationLifecycleManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/ApplicationLifecycleManager/classes/ApplicationLifecycleManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new ApplicationLifecycleManager**(`logging`, `applicationLog`): `ApplicationLifecycleManager`

Creates an instance of ApplicationLifecycleManager.

#### Parameters

##### logging

[`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)

The logging value.

##### applicationLog

`LogFunctions`

The application log value.

#### Returns

`ApplicationLifecycleManager`

## Properties

### applicationLog

> `private` `readonly` **applicationLog**: `LogFunctions`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>LogFunctions</code></span>

The application log value.

### externalOpenChain

> `private` **externalOpenChain**: `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;void&gt;</code></a></span>

The external open chain value.

***

### externalOpenHandler?

> `private` `optional` **externalOpenHandler?**: (`request`) => `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(request) =&gt; Promise&lt;void&gt;</code></a></span>

Callback used to handle external open handler.

#### Parameters

##### request

[`ExternalOpenRequest`](/api/staging/3.0.0/app/Main/Functional/ExternalOpen/interfaces/ExternalOpenRequest/)

#### Returns

`Promise`\<`void`\>

***

### logging

> `private` `readonly` **logging**: [`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/"><code>LoggingManager</code></a></span>

The logging value.

***

### pendingExternalOpenRequests

> `private` `readonly` **pendingExternalOpenRequests**: [`ExternalOpenRequest`](/api/staging/3.0.0/app/Main/Functional/ExternalOpen/interfaces/ExternalOpenRequest/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/ExternalOpen/interfaces/ExternalOpenRequest/"><code>ExternalOpenRequest[]</code></a></span>

The pending external open requests value.

***

### runtime?

> `private` `optional` **runtime?**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The runtime value.

#### dispose

> `readonly` **dispose**: () => `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>() =&gt; Promise&lt;void&gt;</code></a></span>

Callback used to handle dispose.

##### Returns

`Promise`\<`void`\>

#### updates

> `readonly` **updates**: [`UpdateManager`](/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/"><code>UpdateManager</code></a></span>

The updates value.

***

### shutdownStarted

> `private` **shutdownStarted**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The shutdown started value.

## Methods

### activateExternalOpenHandler()

> **activateExternalOpenHandler**(`handler`): `void`

Performs the activate external open handler operation.

#### Parameters

##### handler

(`request`) => `Promise`\<`void`\>

#### Returns

`void`

***

### attachRuntime()

> **attachRuntime**(`runtime`): `void`

Attaches the runtime.

#### Parameters

##### runtime

###### dispose

() => `Promise`\<`void`\>

Callback used to handle dispose.

###### updates

[`UpdateManager`](/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/)

The updates value.

#### Returns

`void`

***

### dispatchExternalOpenRequest()

> `private` **dispatchExternalOpenRequest**(`request`): `void`

Performs the dispatch external open request operation.

#### Parameters

##### request

[`ExternalOpenRequest`](/api/staging/3.0.0/app/Main/Functional/ExternalOpen/interfaces/ExternalOpenRequest/)

#### Returns

`void`

***

### handleBeforeQuit()

> `private` **handleBeforeQuit**(`event`): `void`

Handles the before quit.

#### Parameters

##### event

#### Returns

`void`

***

### start()

> **start**(): `boolean`

Starts the operation.

#### Returns

`boolean`

***

### takeStartupRequest()

> **takeStartupRequest**(): [`ExternalOpenRequest`](/api/staging/3.0.0/app/Main/Functional/ExternalOpen/interfaces/ExternalOpenRequest/) \| `undefined`

Performs the take startup request operation.

#### Returns

[`ExternalOpenRequest`](/api/staging/3.0.0/app/Main/Functional/ExternalOpen/interfaces/ExternalOpenRequest/) \| `undefined`
