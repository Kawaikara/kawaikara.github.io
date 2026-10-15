---
title: "VideoLibraryApi"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the video library API contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/VideoLibraryApi.md"
symbolKind: "Interface"
---
## Methods

### getSnapshot()

> **getSnapshot**(): `Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

Returns the snapshot.

#### Returns

`Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

### getThumbnail()

> **getThumbnail**(`path`): `Promise`\<`string` \| `undefined`\>

Returns the thumbnail.

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### listDirectory()

> **listDirectory**(`path`): `Promise`\<[`VideoDirectoryListing`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryListing/)\>

Lists the directory.

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`VideoDirectoryListing`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryListing/)\>

***

### openItem()

> **openItem**(`path`): `Promise`\<`void`\>

Opens the item.

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### openPath()

> **openPath**(`path`): `Promise`\<[`VideoPathOpenResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoPathOpenResult/)\>

Opens the path.

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`VideoPathOpenResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoPathOpenResult/)\>

***

### removeFolder()

> **removeFolder**(`path`): `Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

Removes the folder.

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

***

### searchDirectory()

> **searchDirectory**(`path`, `query`): `Promise`\<[`VideoDirectoryEntry`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryEntry/)[]\>

Performs the search directory operation.

#### Parameters

##### path

`string`

##### query

`string`

#### Returns

`Promise`\<[`VideoDirectoryEntry`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryEntry/)[]\>

***

### setFolderPinned()

> **setFolderPinned**(`path`, `pinned`): `Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

Sets the folder pinned.

#### Parameters

##### path

`string`

##### pinned

`boolean`

#### Returns

`Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>
