---
title: "KawaiKeyboardManager"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/keyboard_manager.ts:21"
displayPath: "manager/keyboard_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/keyboard_manager/classes/KawaiKeyboardManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> `private` **new KawaiKeyboardManager**(): `KawaiKeyboardManager`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:38](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L38)

#### Returns

`KawaiKeyboardManager`

## Properties

### action\_mode

> `private` **action\_mode**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Defined in: [typescript\_src/manager/keyboard\_manager.ts:27](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L27)

### m\_action\_states

> `private` **m\_action\_states**: [`KawaiKeyState`](/api/stable/2.3.1/app/definitions/keyboard/type-aliases/KawaiKeyState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/keyboard/type-aliases/KawaiKeyState/"><code>KawaiKeyState</code></a></span>

Defined in: [typescript\_src/manager/keyboard\_manager.ts:26](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L26)

***

### m\_key\_preference

> `private` **m\_key\_preference**: [`KawaiActionPreference`](/api/stable/2.3.1/app/definitions/action/type-aliases/KawaiActionPreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/action/type-aliases/KawaiActionPreference/"><code>KawaiActionPreference</code></a></span>

Defined in: [typescript\_src/manager/keyboard\_manager.ts:24](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L24)

***

### m\_keystates

> `private` **m\_keystates**: [`KawaiKeyState`](/api/stable/2.3.1/app/definitions/keyboard/type-aliases/KawaiKeyState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/definitions/keyboard/type-aliases/KawaiKeyState/"><code>KawaiKeyState</code></a></span>

Defined in: [typescript\_src/manager/keyboard\_manager.ts:25](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L25)

***

### \_\_instance

> `private` `static` **\_\_instance**: `KawaiKeyboardManager` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/stable/2.3.1/app/manager/keyboard_manager/classes/KawaiKeyboardManager/"><code>KawaiKeyboardManager | undefined</code></a></span>

Defined in: [typescript\_src/manager/keyboard\_manager.ts:22](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L22)

## Methods

### addKeyListener()

> **addKeyListener**(`target_name`, `listener`): `void`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:80](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L80)

#### Parameters

##### target\_name

`string`

view name.

##### listener

[`KeyEventListenable`](/api/stable/2.3.1/app/definitions/keyboard/interfaces/KeyEventListenable/)

First

#### Returns

`void`

***

### checkVaildActionInput()

> `protected` **checkVaildActionInput**(): `boolean`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:103](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L103)

#### Returns

`boolean`

***

### keyboard\_logics()

> **keyboard\_logics**(`type`, `key_event`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/manager/keyboard\_manager.ts:54](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L54)

#### Parameters

##### type

`string`

##### key\_event

[`KawaiKeyEvent`](/api/stable/2.3.1/app/definitions/keyboard/type-aliases/KawaiKeyEvent/)

#### Returns

`Promise`\<`boolean`\>

***

### keyRleaseAll()

> **keyRleaseAll**(): `void`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:47](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L47)

#### Returns

`void`

***

### onKeyClicked()

> **onKeyClicked**(`key`): `Promise`\<`boolean`\>

Defined in: [typescript\_src/manager/keyboard\_manager.ts:143](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L143)

emit once when key presssed.

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`boolean`\>

***

### onKeyPressed()

> **onKeyPressed**(): `boolean`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:147](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L147)

#### Returns

`boolean`

***

### onKeyReleased()

> **onKeyReleased**(`key`): `void`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:151](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L151)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### sendInputEvent()

> **sendInputEvent**(): `void`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:158](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L158)

do not use it. it's used for test.

#### Returns

`void`

***

### setActionDelayTime()

> **setActionDelayTime**(`new_delay`): `void`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:135](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L135)

#### Parameters

##### new\_delay

`number`

#### Returns

`void`

***

### getInstance()

> `static` **getInstance**(): `KawaiKeyboardManager`

Defined in: [typescript\_src/manager/keyboard\_manager.ts:31](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/keyboard_manager.ts#L31)

#### Returns

`KawaiKeyboardManager`
