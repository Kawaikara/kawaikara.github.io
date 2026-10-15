---
title: "MainProcessDebugger"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Debug"
description: "Owns the optional Node Inspector endpoint used for trusted Bundle debugging. Hot reload remains independent: disabling this endpoint does not stop builds.ho up"
displayPath: "Debug/MainProcessDebugger"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Debug/MainProcessDebugger/classes/MainProcessDebugger.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new MainProcessDebugger**(): `MainProcessDebugger`

#### Returns

`MainProcessDebugger`

## Properties

### enabled

> `private` **enabled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the enabled option is enabled.

### error?

> `private` `optional` **error?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The error value.

***

### owned

> `private` **owned**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The owned value.

***

### port

> `private` **port**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `9230`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The port value.

## Methods

### configure()

> **configure**(`preferences`): [`DevelopmentDebuggerInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentDebuggerInfo/)

Performs the configure operation.

#### Parameters

##### preferences

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

#### Returns

[`DevelopmentDebuggerInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentDebuggerInfo/)

***

### createVsCodeConfiguration()

> **createVsCodeConfiguration**(): `string`

Creates the vs code configuration.

#### Returns

`string`

***

### disable()

> `private` **disable**(): `void`

Performs the disable operation.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Releases the operation.

#### Returns

`void`

***

### getState()

> **getState**(): [`DevelopmentDebuggerInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentDebuggerInfo/)

Returns the state.

#### Returns

[`DevelopmentDebuggerInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentDebuggerInfo/)
