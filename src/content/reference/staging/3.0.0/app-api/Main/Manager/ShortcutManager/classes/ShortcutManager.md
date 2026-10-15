---
title: "ShortcutManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates shortcut behavior."
displayPath: "Main/Manager/ShortcutManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/ShortcutManager/classes/ShortcutManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new ShortcutManager**(`sites`, `windows`, `preferences`): `ShortcutManager`

Creates an instance of ShortcutManager.

#### Parameters

##### sites

[`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)

The sites value.

##### windows

[`WindowManager`](/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/)

The Windows value.

##### preferences

[`PreferenceManager`](/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/)

The preferences value.

#### Returns

`ShortcutManager`

## Properties

### lastAlwaysOnTopToggleAt

> `private` **lastAlwaysOnTopToggleAt**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `0`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The last always on top toggle at value.

### lastPictureInPictureToggleAt

> `private` **lastPictureInPictureToggleAt**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `0`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The last picture in picture toggle at value.

***

### pictureInPictureActive

> `private` **pictureInPictureActive**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The picture in picture active value.

***

### pictureInPictureTogglePromise?

> `private` `optional` **pictureInPictureTogglePromise?**: `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;void&gt;</code></a></span>

The picture in picture toggle promise value.

***

### preferences

> `private` `readonly` **preferences**: [`PreferenceManager`](/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/"><code>PreferenceManager</code></a></span>

The preferences value.

***

### registeredAlwaysOnTopAccelerator?

> `private` `optional` **registeredAlwaysOnTopAccelerator?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The registered always on top accelerator value.

***

### registeredPictureInPictureAccelerator?

> `private` `optional` **registeredPictureInPictureAccelerator?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The registered picture in picture accelerator value.

***

### registeredShortFormAccelerators

> `private` `readonly` **registeredShortFormAccelerators**: `Map`\<`string`, `string`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map&lt;string, string&gt;</code></a></span>

The registered short form accelerators value.

***

### sites

> `private` `readonly` **sites**: [`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/"><code>SiteManager</code></a></span>

The sites value.

***

### windows

> `private` `readonly` **windows**: [`WindowManager`](/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/"><code>WindowManager</code></a></span>

The Windows value.

## Methods

### banCurrentShortFormPublisher()

> `private` **banCurrentShortFormPublisher**(`siteId`, `contribution`): `Promise`\<`void`\>

Performs the ban current short form publisher operation.

#### Parameters

##### siteId

`string`

##### contribution

[`ShortFormVideoContribution`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ShortFormVideoContribution/)

#### Returns

`Promise`\<`void`\>

***

### dispose()

> **dispose**(): `void`

Releases the operation.

#### Returns

`void`

***

### getAlwaysOnTopAccelerator()

> `private` **getAlwaysOnTopAccelerator**(): `string`

Returns the always on top accelerator.

#### Returns

`string`

***

### getBindings()

> `private` **getBindings**(): [`ShortcutBinding`](/api/staging/3.0.0/app/Main/Functional/Shortcut/interfaces/ShortcutBinding/)[]

Returns the bindings.

#### Returns

[`ShortcutBinding`](/api/staging/3.0.0/app/Main/Functional/Shortcut/interfaces/ShortcutBinding/)[]

***

### getPictureInPictureAccelerator()

> `private` **getPictureInPictureAccelerator**(): `string`

Returns the picture in picture accelerator.

#### Returns

`string`

***

### handleInput()

> **handleInput**(`input`, `editing?`): `boolean`

Handles the input.

#### Parameters

##### input

`Input`

##### editing?

`boolean` = `false`

#### Returns

`boolean`

***

### refreshAlwaysOnTopGlobalShortcut()

> `private` **refreshAlwaysOnTopGlobalShortcut**(): `void`

Performs the refresh always on top global shortcut operation.

#### Returns

`void`

***

### refreshGlobalShortcut()

> **refreshGlobalShortcut**(): `void`

Performs the refresh global shortcut operation.

#### Returns

`void`

***

### refreshShortFormGlobalShortcuts()

> `private` **refreshShortFormGlobalShortcuts**(): `void`

Performs the refresh short form global shortcuts operation.

#### Returns

`void`

***

### runShortFormAction()

> `private` **runShortFormAction**(`shortcutId`): `Promise`\<`void`\>

Runs the short form action.

#### Parameters

##### shortcutId

`string`

#### Returns

`Promise`\<`void`\>

***

### setPictureInPictureActive()

> **setPictureInPictureActive**(`active`): `void`

Sets the picture in picture active.

#### Parameters

##### active

`boolean`

#### Returns

`void`

***

### toggleAlwaysOnTop()

> `private` **toggleAlwaysOnTop**(): `Promise`\<`void`\>

Toggles the always on top.

#### Returns

`Promise`\<`void`\>

***

### togglePictureInPicture()

> `private` **togglePictureInPicture**(): `Promise`\<`void`\>

Toggles the picture in picture.

#### Returns

`Promise`\<`void`\>

***

### unregisterAlwaysOnTopGlobalShortcut()

> `private` **unregisterAlwaysOnTopGlobalShortcut**(): `void`

Performs the unregister always on top global shortcut operation.

#### Returns

`void`

***

### unregisterPictureInPictureGlobalShortcut()

> `private` **unregisterPictureInPictureGlobalShortcut**(): `void`

Performs the unregister picture in picture global shortcut operation.

#### Returns

`void`

***

### unregisterShortFormGlobalShortcuts()

> `private` **unregisterShortFormGlobalShortcuts**(): `void`

Performs the unregister short form global shortcuts operation.

#### Returns

`void`
