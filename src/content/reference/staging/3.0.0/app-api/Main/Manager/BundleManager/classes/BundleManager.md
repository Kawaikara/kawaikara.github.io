---
title: "BundleManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates bundle behavior."
displayPath: "Main/Manager/BundleManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/BundleManager/classes/BundleManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new BundleManager**(`siteManager`, `bundleDirectoryPath`): `BundleManager`

Creates an instance of BundleManager.

#### Parameters

##### siteManager

[`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)

The site manager value.

##### bundleDirectoryPath

`string`

The bundle directory path value.

#### Returns

`BundleManager`

## Properties

### activatedBundleIds

> `private` `readonly` **activatedBundleIds**: `Set`\<`string`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;string&gt;</code></a></span>

The activated bundle IDs value.

### bundledDefinitions

> `private` `readonly` **bundledDefinitions**: `Map`\<`string`, [`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/"><code>Map&lt;string, BundleDefinition&gt;</code></a></span>

The bundled definitions value.

***

### bundleDirectoryPath

> `private` `readonly` **bundleDirectoryPath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The bundle directory path value.

***

### developmentOperationChain

> `private` **developmentOperationChain**: `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;void&gt;</code></a></span>

The development operation chain value.

***

### developmentOwners

> `private` `readonly` **developmentOwners**: `Map`\<`string`, `string`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map&lt;string, string&gt;</code></a></span>

The development owners value.

***

### developmentRoots

> `private` `readonly` **developmentRoots**: `Map`\<`string`, `string`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map&lt;string, string&gt;</code></a></span>

The development roots value.

***

### host

> `private` `readonly` **host**: [`PluginHost`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/classes/PluginHost/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Plugin/PluginHost/classes/PluginHost/"><code>PluginHost</code></a></span>

The host value.

***

### records

> `private` `readonly` **records**: `Map`\<`string`, [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/"><code>Map&lt;string, BundleInfo&gt;</code></a></span>

The records value.

***

### siteManager

> `private` `readonly` **siteManager**: [`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/"><code>SiteManager</code></a></span>

The site manager value.

***

### updateDefinitions

> `private` `readonly` **updateDefinitions**: `Map`\<`string`, [`BundleUpdateDefinition`](/api/staging/3.0.0/app/Main/Manager/BundleManager/InternalDeclarations/type-aliases/BundleUpdateDefinition/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/BundleManager/InternalDeclarations/type-aliases/BundleUpdateDefinition/"><code>Map&lt;string, BundleUpdateDefinition&gt;</code></a></span>

The update definitions value.

## Methods

### activateDevelopmentBundle()

> **activateDevelopmentBundle**(`rootPath`, `ownerId`, `expectedBundleId?`): `Promise`\<[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)\>

Validates and activates one immutable local development revision.

#### Parameters

##### rootPath

`string`

##### ownerId

`string`

##### expectedBundleId?

`string`

#### Returns

`Promise`\<[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)\>

***

### activateDevelopmentBundleRevision()

> `private` **activateDevelopmentBundleRevision**(`rootPath`, `ownerId`, `expectedBundleId?`): `Promise`\<[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)\>

Performs the activate development bundle revision operation.

#### Parameters

##### rootPath

`string`

##### ownerId

`string`

##### expectedBundleId?

`string`

#### Returns

`Promise`\<[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)\>

***

### detachDevelopmentBundle()

> **detachDevelopmentBundle**(`id`, `restoreFallback?`, `ownerId?`): `Promise`\<`void`\>

Detaches the development bundle.

#### Parameters

##### id

`string`

##### restoreFallback?

`boolean` = `true`

##### ownerId?

`string`

#### Returns

`Promise`\<`void`\>

***

### detachDevelopmentBundleRevision()

> `private` **detachDevelopmentBundleRevision**(`id`, `restoreFallback`, `ownerId?`): `Promise`\<`void`\>

Detaches the development bundle revision.

#### Parameters

##### id

`string`

##### restoreFallback

`boolean`

##### ownerId?

`string`

#### Returns

`Promise`\<`void`\>

***

### enqueueDevelopmentOperation()

> `private` **enqueueDevelopmentOperation**\<`T`\>(`operation`): `Promise`\<`T`\>

Performs the enqueue development operation operation.

#### Type Parameters

##### T

`T`

#### Parameters

##### operation

() => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### installBundled()

> **installBundled**(`bundle`): `void`

Installs the bundled.

#### Parameters

##### bundle

[`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)

#### Returns

`void`

***

### installFromDialog()

> **installFromDialog**(`locale`): `Promise`\<[`BundleInstallResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleInstallResult/)\>

Installs the from dialog.

#### Parameters

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`BundleInstallResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleInstallResult/)\>

***

### list()

> **list**(): [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)[]

Lists the operation.

#### Returns

[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)[]

***

### loadInstalled()

> **loadInstalled**(): `Promise`\<`void`\>

Loads the installed.

#### Returns

`Promise`\<`void`\>

***

### loadInstalledDirectory()

> `private` **loadInstalledDirectory**(`rootPath`, `directoryName`): `Promise`\<`void`\>

Loads the installed directory.

#### Parameters

##### rootPath

`string`

##### directoryName

`string`

#### Returns

`Promise`\<`void`\>

***

### remove()

> **remove**(`id`, `locale`): `Promise`\<[`BundleRemoveResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleRemoveResult/)\>

Removes the operation.

#### Parameters

##### id

`string`

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`BundleRemoveResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleRemoveResult/)\>

***

### requireBundle()

> `private` **requireBundle**(`id`): [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)

Performs the require bundle operation.

#### Parameters

##### id

`string`

#### Returns

[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)

***

### requireUserBundle()

> `private` **requireUserBundle**(`id`): [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)

Performs the require user bundle operation.

#### Parameters

##### id

`string`

#### Returns

[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)

***

### setUpdateDefinition()

> `private` **setUpdateDefinition**(`id`, `definition`): `void`

Sets the update definition.

#### Parameters

##### id

`string`

##### definition

[`BundleUpdateDefinition`](/api/staging/3.0.0/app/Main/Manager/BundleManager/InternalDeclarations/type-aliases/BundleUpdateDefinition/) \| `undefined`

#### Returns

`void`

***

### update()

> **update**(`id`, `locale`): `Promise`\<[`BundleUpdateResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleUpdateResult/)\>

Updates the operation.

#### Parameters

##### id

`string`

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`BundleUpdateResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleUpdateResult/)\>
