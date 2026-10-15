---
title: "DeveloperLinkManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Opens the fixed project links and resolves the developer channel live state."
displayPath: "Main/Manager/DeveloperLinkManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/DeveloperLinkManager/classes/DeveloperLinkManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new DeveloperLinkManager**(): `DeveloperLinkManager`

#### Returns

`DeveloperLinkManager`

## Properties

### activeStatusRequest?

> `private` `optional` **activeStatusRequest?**: `Promise`\<[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/"><code>Promise&lt;DeveloperYouTubeStatus&gt;</code></a></span>

Whether the active status request option is enabled.

### cachedStatus?

> `private` `optional` **cachedStatus?**: [`CachedDeveloperYouTubeStatus`](/api/staging/3.0.0/app/Main/Functional/DeveloperLinks/interfaces/CachedDeveloperYouTubeStatus/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/DeveloperLinks/interfaces/CachedDeveloperYouTubeStatus/"><code>CachedDeveloperYouTubeStatus</code></a></span>

The cached status value.

## Methods

### createStatus()

> `private` **createStatus**(`isLive`, `error?`): [`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)

Creates the status.

#### Parameters

##### isLive

`boolean`

##### error?

`string`

#### Returns

[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)

***

### fetchDeveloperYouTubeStatus()

> `private` **fetchDeveloperYouTubeStatus**(): `Promise`\<[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)\>

Performs the fetch developer you tube status operation.

#### Returns

`Promise`\<[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)\>

***

### getDeveloperYouTubeStatus()

> **getDeveloperYouTubeStatus**(): `Promise`\<[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)\>

Returns the developer you tube status.

#### Returns

`Promise`\<[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)\>

***

### open()

> **open**(`id`): `Promise`\<`void`\>

Opens the operation.

#### Parameters

##### id

[`ApplicationLinkId`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationLinkId/)

#### Returns

`Promise`\<`void`\>
