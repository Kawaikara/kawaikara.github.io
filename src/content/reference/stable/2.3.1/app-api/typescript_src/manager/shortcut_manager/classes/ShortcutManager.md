---
title: "ShortcutManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/shortcut_manager.ts:50"
displayPath: "manager/shortcut_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/shortcut_manager/classes/ShortcutManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> `private` **new ShortcutManager**(): `ShortcutManager`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:63](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L63)

#### Returns

`ShortcutManager`

## Properties

### actionDelayTime

> `private` **actionDelayTime**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:57](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L57)

### current\_view

> `private` **current\_view**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:59](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L59)

***

### ignore\_keys

> `private` **ignore\_keys**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:56](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L56)

***

### key\_states

> `private` **key\_states**: `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string[]</code></a></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:54](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L54)

***

### m\_action\_map

> `private` **m\_action\_map**: [`KawaiActionMap`](/api/stable/2.3.1/app/definitions/action/type-aliases/KawaiActionMap/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/action/type-aliases/KawaiActionMap/"><code>KawaiActionMap</code></a></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:53](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L53)

***

### m\_cur\_timeout\_object

> `private` **m\_cur\_timeout\_object**: `Timeout` \| `null` = `null`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Timeout | null</code></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:58](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L58)

***

### m\_event\_emitter

> `private` **m\_event\_emitter**: `EventEmitter`\<`DefaultEventMap`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>EventEmitter&lt;DefaultEventMap&gt;</code></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:61](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L61)

***

### pressed\_keys

> `private` **pressed\_keys**: `Set`\<`string`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;string&gt;</code></a></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:55](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L55)

***

### \_\_instance

> `static` **\_\_instance**: `ShortcutManager` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/shortcut_manager/classes/ShortcutManager/"><code>ShortcutManager | undefined</code></a></span>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:51](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L51)

## Methods

### \_connectManager()

> **\_connectManager**(`event_type`, `callback`): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:328](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L328)

#### Parameters

##### event\_type

`"activated"`

##### callback

(`id`) => `void`

#### Returns

`void`

***

### \_deleteActionCache()

> **\_deleteActionCache**(`id`): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:224](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L224)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### addActionMap()

> `protected` **addActionMap**(`id`, `targetView`, `actions`, `overwrite?`): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:335](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L335)

#### Parameters

##### id

`string`

##### targetView

`string`

##### actions

`string`[]

##### overwrite?

`boolean` = `true`

#### Returns

`void`

***

### getIgnoredKeySequence()

> **getIgnoredKeySequence**(): `Set`\<`string`\>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:432](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L432)

#### Returns

`Set`\<`string`\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:83](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L83)

#### Returns

`Promise`\<`void`\>

***

### onActivate()

> **onActivate**(`key_sequence`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:137](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L137)

#### Parameters

##### key\_sequence

`string`[]

#### Returns

`Promise`\<`boolean`\>

***

### onClicked()

> **onClicked**(`key`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:124](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L124)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`boolean`\>

***

### onReleased()

> **onReleased**(`key`): `Promise`\<`void`\>

Defined in: [typescript\_src/manager/shortcut\_manager.ts:98](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L98)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`void`\>

***

### queryAndModifyShortcut()

> **queryAndModifyShortcut**(`id`, `key_action`): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:204](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L204)

#### Parameters

##### id

`string`

##### key\_action

`string` \| `string`[]

"" empty string means delete keyAction.

#### Returns

`void`

***

### register()

> **register**(`o`, `overwrite?`): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:306](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L306)

#### Parameters

##### o

[`keyActionListenable`](/api/stable/2.3.1/app/definitions/action/interfaces/keyActionListenable/)

##### overwrite?

`boolean` = `true`

#### Returns

`void`

***

### resetStates()

> **resetStates**(): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:87](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L87)

#### Returns

`void`

***

### setActionDelay()

> **setActionDelay**(`d`): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:72](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L72)

#### Parameters

##### d

`number`

#### Returns

`void`

***

### unregister()

> **unregister**(`o`): `void`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:326](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L326)

#### Parameters

##### o

[`keyActionListenable`](/api/stable/2.3.1/app/definitions/action/interfaces/keyActionListenable/)

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): `ShortcutManager`

Defined in: [typescript\_src/manager/shortcut\_manager.ts:76](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/shortcut_manager.ts#L76)

#### Returns

`ShortcutManager`
