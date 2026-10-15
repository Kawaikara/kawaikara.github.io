---
title: "ExternalDownloaderManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates external downloader behavior."
displayPath: "Main/Manager/ExternalDownloaderManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/ExternalDownloaderManager/classes/ExternalDownloaderManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new ExternalDownloaderManager**(): `ExternalDownloaderManager`

#### Returns

`ExternalDownloaderManager`

## Properties

### installPromise?

> `private` `optional` **installPromise?**: `Promise`\<[`ExternalDownloaderInstallResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/"><code>Promise&lt;ExternalDownloaderInstallResult&gt;</code></a></span>

The install promise value.

## Methods

### getStatus()

> **getStatus**(`message?`): `Promise`\<[`ExternalDownloaderStatus`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/)\>

Returns the status.

#### Parameters

##### message?

`string`

#### Returns

`Promise`\<[`ExternalDownloaderStatus`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/)\>

### install()

> **install**(`value?`): `Promise`\<[`ExternalDownloaderInstallResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/)\>

Installs the operation.

#### Parameters

##### value?

`unknown`

#### Returns

`Promise`\<[`ExternalDownloaderInstallResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/)\>

***

### installOnce()

> `private` **installOnce**(`value?`): `Promise`\<[`ExternalDownloaderInstallResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/)\>

Installs the once.

#### Parameters

##### value?

`unknown`

#### Returns

`Promise`\<[`ExternalDownloaderInstallResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/)\>

***

### open()

> **open**(`value`): `Promise`\<[`ExternalDownloaderOpenResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderOpenResult/)\>

Opens the operation.

#### Parameters

##### value

`unknown`

#### Returns

`Promise`\<[`ExternalDownloaderOpenResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderOpenResult/)\>

***

### openReleasePage()

> **openReleasePage**(): `Promise`\<`void`\>

Opens the release page.

#### Returns

`Promise`\<`void`\>
