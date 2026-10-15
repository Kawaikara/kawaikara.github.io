---
title: "VideoLibraryManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates video library behavior."
displayPath: "Main/Manager/VideoLibraryManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/VideoLibraryManager/classes/VideoLibraryManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new VideoLibraryManager**(`filePath`, `standardLocations`): `VideoLibraryManager`

Creates an instance of VideoLibraryManager.

#### Parameters

##### filePath

`string`

The file path value.

##### standardLocations

readonly [`StandardVideoLocation`](/api/staging/3.0.0/app/Main/Functional/VideoLibrary/interfaces/StandardVideoLocation/)[]

The standard locations value.

#### Returns

`VideoLibraryManager`

## Properties

### filePath

> `private` `readonly` **filePath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The file path value.

### standardLocations

> `private` `readonly` **standardLocations**: readonly [`StandardVideoLocation`](/api/staging/3.0.0/app/Main/Functional/VideoLibrary/interfaces/StandardVideoLocation/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/VideoLibrary/interfaces/StandardVideoLocation/"><code>readonly StandardVideoLocation[]</code></a></span>

The standard locations value.

***

### state

> `private` **state**: [`StoredVideoLibraryState`](/api/staging/3.0.0/app/Main/Functional/VideoLibrary/interfaces/StoredVideoLibraryState/) = `EMPTY_VIDEO_LIBRARY_STATE`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/VideoLibrary/interfaces/StoredVideoLibraryState/"><code>StoredVideoLibraryState</code></a></span>

The state value.

***

### thumbnailCache

> `private` `readonly` **thumbnailCache**: `Map`\<`string`, `string` \| `undefined`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"><code>Map&lt;string, string | undefined&gt;</code></a></span>

The thumbnail cache value.

## Methods

### collectLocations()

> `private` **collectLocations**(): `Promise`\<[`VideoLibraryLocation`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryLocation/)[]\>

Collects the locations.

#### Returns

`Promise`\<[`VideoLibraryLocation`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryLocation/)[]\>

***

### createDirectoryEntry()

> `private` **createDirectoryEntry**(`directory`, `entry`): `Promise`\<[`VideoDirectoryEntry`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryEntry/)\>

Creates the directory entry.

#### Parameters

##### directory

`string`

##### entry

`Dirent`

#### Returns

`Promise`\<[`VideoDirectoryEntry`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryEntry/)\>

***

### createFolderRequest()

> **createFolderRequest**(`value`): `object`

Creates the folder request.

#### Parameters

##### value

`string`

#### Returns

##### displayName

> `readonly` **displayName**: `string`

The display name value.

##### kind

> `readonly` **kind**: `"folder"`

The kind value.

##### path

> `readonly` **path**: `string`

The path value.

***

### createLocalRequest()

> **createLocalRequest**(`value`): `object`

Creates the local request.

#### Parameters

##### value

`string`

#### Returns

##### directory

> `readonly` **directory**: `string`

The directory value.

##### displayName

> `readonly` **displayName**: `string`

The display name value.

##### kind

> `readonly` **kind**: `"local"`

The kind value.

##### path

> `readonly` **path**: `string`

The path value.

##### url

> `readonly` **url**: `string`

The URL value.

***

### getSnapshot()

> **getSnapshot**(): `Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

Returns the snapshot.

#### Returns

`Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

***

### getThumbnail()

> **getThumbnail**(`value`): `Promise`\<`string` \| `undefined`\>

Returns the thumbnail.

#### Parameters

##### value

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### listDirectory()

> **listDirectory**(`value`): `Promise`\<[`VideoDirectoryListing`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryListing/)\>

Lists the directory.

#### Parameters

##### value

`string`

#### Returns

`Promise`\<[`VideoDirectoryListing`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryListing/)\>

***

### load()

> **load**(): `Promise`\<`void`\>

Loads the operation.

#### Returns

`Promise`\<`void`\>

***

### openPath()

> **openPath**(`value`): `Promise`\<[`VideoPathOpenResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoPathOpenResult/)\>

Opens the path.

#### Parameters

##### value

`string`

#### Returns

`Promise`\<[`VideoPathOpenResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoPathOpenResult/)\>

***

### persist()

> `private` **persist**(): `Promise`\<`void`\>

Performs the persist operation.

#### Returns

`Promise`\<`void`\>

***

### recordDirectory()

> `private` **recordDirectory**(`directory`): `Promise`\<`void`\>

Performs the record directory operation.

#### Parameters

##### directory

`string`

#### Returns

`Promise`\<`void`\>

***

### recordVideo()

> **recordVideo**(`request`): `Promise`\<`void`\>

Performs the record video operation.

#### Parameters

##### request

###### directory

`string`

The directory value.

###### displayName

`string`

The display name value.

###### kind

`"local"`

The kind value.

###### path

`string`

The path value.

###### url

`string`

The URL value.

#### Returns

`Promise`\<`void`\>

***

### removeFolder()

> **removeFolder**(`value`): `Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

Removes the folder.

#### Parameters

##### value

`string`

#### Returns

`Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

***

### searchDirectory()

> **searchDirectory**(`directoryValue`, `queryValue`): `Promise`\<[`VideoDirectoryEntry`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryEntry/)[]\>

Performs the search directory operation.

#### Parameters

##### directoryValue

`string`

##### queryValue

`string`

#### Returns

`Promise`\<[`VideoDirectoryEntry`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoDirectoryEntry/)[]\>

***

### setFolderPinned()

> **setFolderPinned**(`value`, `pinned`): `Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>

Sets the folder pinned.

#### Parameters

##### value

`string`

##### pinned

`boolean`

#### Returns

`Promise`\<[`VideoLibrarySnapshot`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibrarySnapshot/)\>
