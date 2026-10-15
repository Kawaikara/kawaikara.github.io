---
title: "UpdateManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates update behavior."
displayPath: "Main/Manager/UpdateManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/UpdateManager/classes/UpdateManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new UpdateManager**(`windows`, `logging`): `UpdateManager`

Creates an instance of UpdateManager.

#### Parameters

##### windows

[`WindowManager`](/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/)

The Windows value.

##### logging

[`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)

#### Returns

`UpdateManager`

## Properties

### checkRequest?

> `private` `optional` **checkRequest?**: `Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/"><code>Promise&lt;ApplicationUpdateCheckResult&gt;</code></a></span>

The check request value.

### currentState?

> `private` `optional` **currentState?**: [`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/"><code>ApplicationUpdatePanelState</code></a></span>

The current state value.

***

### downloadRequest?

> `private` `optional` **downloadRequest?**: `Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/"><code>Promise&lt;ApplicationUpdatePanelState&gt;</code></a></span>

The download request value.

***

### installingUpdate

> `private` **installingUpdate**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The installing update value.

***

### preferences?

> `private` `optional` **preferences?**: [`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/"><code>PreferenceState</code></a></span>

The preferences value.

***

### updateLog

> `private` `readonly` **updateLog**: `LogFunctions`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>LogFunctions</code></span>

The update log value.

***

### windows

> `private` `readonly` **windows**: [`WindowManager`](/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/"><code>WindowManager</code></a></span>

The Windows value.

## Methods

### applyBuildChannel()

> `private` **applyBuildChannel**(): `void`

Applies the build channel.

#### Returns

`void`

***

### checkAtStartup()

> **checkAtStartup**(): `Promise`\<`void`\>

Performs the check at startup operation.

#### Returns

`Promise`\<`void`\>

***

### checkForUpdates()

> **checkForUpdates**(): `Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

Performs the check for updates operation.

#### Returns

`Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

***

### checkForUpdatesInternal()

> `private` **checkForUpdatesInternal**(`origin`, `downloadAutomatically`): `Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

Performs the check for updates internal operation.

#### Parameters

##### origin

`"manual"` \| `"automatic"`

##### downloadAutomatically

`boolean`

#### Returns

`Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

***

### configure()

> **configure**(`preferences`): `void`

Performs the configure operation.

#### Parameters

##### preferences

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

#### Returns

`void`

***

### downloadUpdate()

> **downloadUpdate**(): `Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)\>

Performs the download update operation.

#### Returns

`Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)\>

***

### finishCheckState()

> `private` **finishCheckState**(`state`): `void`

Performs the finish check state operation.

#### Parameters

##### state

[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)

#### Returns

`void`

***

### getState()

> **getState**(): [`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/) \| `undefined`

Returns the state.

#### Returns

[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/) \| `undefined`

***

### installUpdate()

> **installUpdate**(): `void`

Installs the update.

#### Returns

`void`

***

### isInstalling()

> **isInstalling**(): `boolean`

Determines whether the installing condition applies.

#### Returns

`boolean`

***

### performCheck()

> `private` **performCheck**(`origin`, `downloadAutomatically`): `Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

Performs the perform check operation.

#### Parameters

##### origin

`"manual"` \| `"automatic"`

##### downloadAutomatically

`boolean`

#### Returns

`Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

***

### performDownload()

> `private` **performDownload**(`available`, `presentAutomatically?`): `Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)\>

Performs the perform download operation.

#### Parameters

##### available

[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)

##### presentAutomatically?

`boolean` = `false`

#### Returns

`Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)\>

***

### presentState()

> `private` **presentState**(`state`): `void`

Performs the present state operation.

#### Parameters

##### state

[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)

#### Returns

`void`

***

### updateState()

> `private` **updateState**(`state`): `void`

Updates the state.

#### Parameters

##### state

[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)

#### Returns

`void`

***

### waitForUpdateSignal()

> `private` **waitForUpdateSignal**(): `Promise`\<[`ApplicationUpdateSignal`](/api/staging/3.0.0/app/Main/Functional/ApplicationUpdates/interfaces/ApplicationUpdateSignal/)\>

Waits for the for update signal.

#### Returns

`Promise`\<[`ApplicationUpdateSignal`](/api/staging/3.0.0/app/Main/Functional/ApplicationUpdates/interfaces/ApplicationUpdateSignal/)\>
