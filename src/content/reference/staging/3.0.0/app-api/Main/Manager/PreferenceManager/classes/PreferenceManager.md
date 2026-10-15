---
title: "PreferenceManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates preference behavior."
displayPath: "Main/Manager/PreferenceManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/PreferenceManager/classes/PreferenceManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new PreferenceManager**(`filePath`): `PreferenceManager`

Creates an instance of PreferenceManager.

#### Parameters

##### filePath

`string`

The file path value.

#### Returns

`PreferenceManager`

## Properties

### filePath

> `private` `readonly` **filePath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The file path value.

### state

> `private` **state**: [`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/) = `DEFAULT_PREFERENCES`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/"><code>PreferenceState</code></a></span>

The state value.

## Methods

### get()

> **get**(): [`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

Returns the operation.

#### Returns

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

***

### load()

> **load**(): `Promise`\<`void`\>

Loads the operation.

#### Returns

`Promise`\<`void`\>

***

### update()

> **update**(`patch`): `Promise`\<[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)\>

Updates the operation.

#### Parameters

##### patch

`unknown`

#### Returns

`Promise`\<[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)\>
