---
title: "KawaikaraVideoApi"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the Kawaikara video API contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/KawaikaraVideoApi.md"
symbolKind: "Interface"
---
## Properties

### application

> **application**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The application value.

#### exitFullScreen()

> **exitFullScreen**(): `Promise`\<`void`\>

Performs the exit full screen operation.

##### Returns

`Promise`\<`void`\>

#### getMessages()

> **getMessages**(`locale?`): `Promise`\<[`RendererMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/RendererMessages/)\>

Returns the messages.

##### Parameters

###### locale?

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`RendererMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/RendererMessages/)\>

#### isFullScreen()

> **isFullScreen**(): `Promise`\<`boolean`\>

Determines whether the full screen condition applies.

##### Returns

`Promise`\<`boolean`\>

#### onFullScreenChanged()

> **onFullScreenChanged**(`handler`): () => `void`

Handles the full screen changed.

##### Parameters

###### handler

(`fullScreen`) => `void`

##### Returns

() => `void`

#### onPictureInPictureChanged()

> **onPictureInPictureChanged**(`handler`): () => `void`

Handles the picture in picture changed.

##### Parameters

###### handler

(`active`) => `void`

##### Returns

() => `void`

#### onVisibilityChanged()

> **onVisibilityChanged**(`handler`): () => `void`

Handles the visibility changed.

##### Parameters

###### handler

(`visible`) => `void`

##### Returns

() => `void`

#### recoverPlaybackRenderer()

> **recoverPlaybackRenderer**(): `Promise`\<`boolean`\>

Performs the recover playback renderer operation.

##### Returns

`Promise`\<`boolean`\>

#### togglePictureInPicture()

> **togglePictureInPicture**(): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Toggles the picture in picture.

##### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

### downloads

> **downloads**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The downloads value.

#### getStatus()

> **getStatus**(): `Promise`\<[`ExternalDownloaderStatus`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/)\>

Reads the detected downloader installation and platform capabilities.

##### Returns

`Promise`\<[`ExternalDownloaderStatus`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderStatus/)\>

#### install()

> **install**(`url?`): `Promise`\<[`ExternalDownloaderInstallResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/)\>

Starts the supported installation flow and optionally opens `url`.

##### Parameters

###### url?

`string`

##### Returns

`Promise`\<[`ExternalDownloaderInstallResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderInstallResult/)\>

#### open()

> **open**(`url`): `Promise`\<[`ExternalDownloaderOpenResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderOpenResult/)\>

Opens a validated YouTube URL in the installed external downloader.

##### Parameters

###### url

`string`

##### Returns

`Promise`\<[`ExternalDownloaderOpenResult`](/api/staging/3.0.0/app/Common/Download/interfaces/ExternalDownloaderOpenResult/)\>

#### openReleasePage()

> **openReleasePage**(): `Promise`\<`void`\>

Opens the downloader release page for manual installation.

##### Returns

`Promise`\<`void`\>

***

### preferences

> **preferences**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The preferences value.

#### get()

> **get**(): `Promise`\<[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)\>

Returns the operation.

##### Returns

`Promise`\<[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)\>

#### setVideoVolume()

> **setVideoVolume**(`value`): `Promise`\<`number`\>

Sets the video volume.

##### Parameters

###### value

`number`

##### Returns

`Promise`\<`number`\>

***

### presentation

> **presentation**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The presentation value.

#### update()

> **update**(`state`): `void`

Updates the operation.

##### Parameters

###### state

[`VideoPresentationState`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoPresentationState/)

##### Returns

`void`

***

### source

> **source**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The source value.

#### activateLocalFile()

> **activateLocalFile**(`path`): `Promise`\<\{ `directory`: `string`; `displayName`: `string`; `kind`: `"local"`; `path`: `string`; `url`: `string`; \}\>

Performs the activate local file operation.

##### Parameters

###### path

`string`

##### Returns

`Promise`\<\{ `directory`: `string`; `displayName`: `string`; `kind`: `"local"`; `path`: `string`; `url`: `string`; \}\>

#### getOpenRequest()

> **getOpenRequest**(): `Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>

Returns the open request.

##### Returns

`Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>

#### getPlaybackCapabilities()

> **getPlaybackCapabilities**(): `Promise`\<[`VideoPlaybackCapabilities`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoPlaybackCapabilities/)\>

Returns the playback capabilities.

##### Returns

`Promise`\<[`VideoPlaybackCapabilities`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoPlaybackCapabilities/)\>

#### onOpenRequest()

> **onOpenRequest**(`handler`): () => `void`

Handles the open request.

##### Parameters

###### handler

(`request`) => `void`

##### Returns

() => `void`

#### selectLocalFile()

> **selectLocalFile**(): `Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>

Selects the local file.

##### Returns

`Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>

***

### videoLibrary

> **videoLibrary**: [`VideoLibraryApi`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryApi/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryApi/"><code>VideoLibraryApi</code></a></span>

The video library value.
