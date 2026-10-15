---
title: "BundleDevelopmentManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates bundle development behavior."
displayPath: "Main/Manager/BundleDevelopmentManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/BundleDevelopmentManager/classes/BundleDevelopmentManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new BundleDevelopmentManager**(`bundles`, `stateFilePath`, `logging`): `BundleDevelopmentManager`

Creates an instance of BundleDevelopmentManager.

#### Parameters

##### bundles

[`BundleManager`](/api/staging/3.0.0/app/Main/Manager/BundleManager/classes/BundleManager/)

The bundles value.

##### stateFilePath

`string`

The state file path value.

##### logging

[`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)

#### Returns

`BundleDevelopmentManager`

## Properties

### bundles

> `private` `readonly` **bundles**: [`BundleManager`](/api/staging/3.0.0/app/Main/Manager/BundleManager/classes/BundleManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/BundleManager/classes/BundleManager/"><code>BundleManager</code></a></span>

The bundles value.

### debugger

> `private` `readonly` **debugger**: [`MainProcessDebugger`](/api/staging/3.0.0/app/Debug/MainProcessDebugger/classes/MainProcessDebugger/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Debug/MainProcessDebugger/classes/MainProcessDebugger/"><code>MainProcessDebugger</code></a></span>

The debugger value.

***

### disposed

> `private` **disposed**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The disposed value.

***

### enabled

> `private` **enabled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the enabled option is enabled.

***

### initialized

> `private` **initialized**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The initialized value.

***

### listeners

> `private` `readonly` **listeners**: `Set`\<(`state`) => `void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;(state) =&gt; void&gt;</code></a></span>

The listeners value.

***

### logger

> `private` `readonly` **logger**: `LogFunctions`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>LogFunctions</code></span>

The logger value.

***

### projects

> `private` `readonly` **projects**: `Map`\<`string`, [`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/"><code>Map&lt;string, DevelopmentProjectRuntime&gt;</code></a></span>

The projects value.

***

### stateFilePath

> `private` `readonly` **stateFilePath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The state file path value.

## Methods

### assertEnabled()

> `private` **assertEnabled**(): `void`

Asserts the enabled.

#### Returns

`void`

***

### attachFromDialog()

> **attachFromDialog**(`locale`): `Promise`\<[`DevelopmentBundleAttachResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevelopmentBundleAttachResult/)\>

Attaches the from dialog.

#### Parameters

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`DevelopmentBundleAttachResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevelopmentBundleAttachResult/)\>

***

### buildProject()

> `private` **buildProject**(`project`): `Promise`\<`void`\>

Builds the project.

#### Parameters

##### project

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

#### Returns

`Promise`\<`void`\>

***

### configure()

> **configure**(`preferences`): `Promise`\<`void`\>

Performs the configure operation.

#### Parameters

##### preferences

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

#### Returns

`Promise`\<`void`\>

***

### createVsCodeConfiguration()

> **createVsCodeConfiguration**(): `string`

Creates the vs code configuration.

#### Returns

`string`

***

### detach()

> **detach**(`projectId`): `Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

Detaches the operation.

#### Parameters

##### projectId

`string`

#### Returns

`Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Releases the operation.

#### Returns

`Promise`\<`void`\>

***

### emitState()

> `private` **emitState**(): `void`

Performs the emit state operation.

#### Returns

`void`

***

### enqueueBuild()

> `private` **enqueueBuild**(`project`): `Promise`\<`void`\>

Performs the enqueue build operation.

#### Parameters

##### project

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

#### Returns

`Promise`\<`void`\>

***

### getState()

> **getState**(): [`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)

Returns the state.

#### Returns

[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)

***

### initialize()

> **initialize**(`preferences`): `Promise`\<`void`\>

Initializes the operation.

#### Parameters

##### preferences

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

#### Returns

`Promise`\<`void`\>

***

### persist()

> `private` **persist**(): `Promise`\<`void`\>

Performs the persist operation.

#### Returns

`Promise`\<`void`\>

***

### prepareProject()

> `private` **prepareProject**(`project`, `buildImmediately`): `Promise`\<`void`\>

Prepares the project.

#### Parameters

##### project

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

##### buildImmediately

`boolean`

#### Returns

`Promise`\<`void`\>

***

### readStoredProjects()

> `private` **readStoredProjects**(): `Promise`\<[`StoredDevelopmentProject`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/StoredDevelopmentProject/)[]\>

Reads the stored projects.

#### Returns

`Promise`\<[`StoredDevelopmentProject`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/StoredDevelopmentProject/)[]\>

***

### rebuild()

> **rebuild**(`projectId`): `Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

Performs the rebuild operation.

#### Parameters

##### projectId

`string`

#### Returns

`Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

***

### requireProject()

> `private` **requireProject**(`id`): [`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

Performs the require project operation.

#### Parameters

##### id

`string`

#### Returns

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

***

### setHotReload()

> **setHotReload**(`projectId`, `enabled`): `Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

Sets the hot reload.

#### Parameters

##### projectId

`string`

##### enabled

`boolean`

#### Returns

`Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

***

### setProjectFailure()

> `private` **setProjectFailure**(`project`, `error`): `void`

Sets the project failure.

#### Parameters

##### project

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

##### error

`unknown`

#### Returns

`void`

***

### shouldHandleWatchEvent()

> `private` **shouldHandleWatchEvent**(`fileName`): `boolean`

Determines whether the handle watch event condition applies.

#### Parameters

##### fileName

`string` \| `undefined`

#### Returns

`boolean`

***

### startWatching()

> `private` **startWatching**(`project`): `Promise`\<`void`\>

Starts the watching.

#### Parameters

##### project

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

#### Returns

`Promise`\<`void`\>

***

### stopProject()

> `private` **stopProject**(`project`): `Promise`\<`void`\>

Stops the project.

#### Parameters

##### project

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

#### Returns

`Promise`\<`void`\>

***

### stopWatching()

> `private` **stopWatching**(`project`): `void`

Stops the watching.

#### Parameters

##### project

[`DevelopmentProjectRuntime`](/api/staging/3.0.0/app/Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime/)

#### Returns

`void`

***

### subscribe()

> **subscribe**(`listener`): () => `void`

Subscribes to the operation.

#### Parameters

##### listener

(`state`) => `void`

#### Returns

() => `void`
