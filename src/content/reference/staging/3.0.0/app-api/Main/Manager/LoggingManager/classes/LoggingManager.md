---
title: "LoggingManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates logging behavior."
displayPath: "Main/Manager/LoggingManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/LoggingManager/classes/LoggingManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new LoggingManager**(): `LoggingManager`

#### Returns

`LoggingManager`

## Properties

### initialized

> `private` **initialized**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The initialized value.

### sessionId

> `private` `readonly` **sessionId**: `` `${string}-${string}-${string}-${string}-${string}` ``
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>${string}-${string}-${string}-${string}-${string}</code></a></span>

The session ID value.

## Accessors

### updaterLogger

#### Get Signature

> **get** **updaterLogger**(): `MainLogger` & `object`

Returns the updater logger.

##### Returns

`MainLogger` & `object`

## Methods

### attachRenderer()

> **attachRenderer**(`webContents`, `scope`, `includeMessage?`): () => `void`

Attaches the renderer.

#### Parameters

##### webContents

`WebContents`

##### scope

`string`

##### includeMessage?

(`message`) => `boolean`

#### Returns

() => `void`

***

### configureLevel()

> **configureLevel**(`level`): `void`

Performs the configure level operation.

#### Parameters

##### level

[`LogLevelPreference`](/api/staging/3.0.0/app/Common/IPC/type-aliases/LogLevelPreference/)

#### Returns

`void`

***

### createLogger()

> **createLogger**(`scope`): `LogFunctions`

Creates the logger.

#### Parameters

##### scope

`string`

#### Returns

`LogFunctions`

***

### finish()

> **finish**(): `void`

Performs the finish operation.

#### Returns

`void`

***

### getLogFilePath()

> **getLogFilePath**(): `string`

Returns the log file path.

#### Returns

`string`

***

### initialize()

> **initialize**(): `void`

Initializes the operation.

#### Returns

`void`

***

### openDirectory()

> **openDirectory**(): `Promise`\<`void`\>

Opens the directory.

#### Returns

`Promise`\<`void`\>
