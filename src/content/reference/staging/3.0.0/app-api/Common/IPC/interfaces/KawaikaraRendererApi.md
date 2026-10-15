---
title: "KawaikaraRendererApi"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the Kawaikara renderer API contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/KawaikaraRendererApi.md"
symbolKind: "Interface"
---
## Properties

### application

> **application**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The application value.

#### checkForUpdates()

> **checkForUpdates**(): `Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

Performs the check for updates operation.

##### Returns

`Promise`\<[`ApplicationUpdateCheckResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdateCheckResult/)\>

#### copyText()

> **copyText**(`value`): `Promise`\<`void`\>

Copies the text.

##### Parameters

###### value

`string`

##### Returns

`Promise`\<`void`\>

#### downloadUpdate()

> **downloadUpdate**(): `Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)\>

Performs the download update operation.

##### Returns

`Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)\>

#### exitFullScreen()

> **exitFullScreen**(): `Promise`\<`void`\>

Performs the exit full screen operation.

##### Returns

`Promise`\<`void`\>

#### getDeveloperYouTubeStatus()

> **getDeveloperYouTubeStatus**(): `Promise`\<[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)\>

Returns the developer you tube status.

##### Returns

`Promise`\<[`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)\>

#### getInfo()

> **getInfo**(): `Promise`\<[`ApplicationInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationInfo/)\>

Returns the info.

##### Returns

`Promise`\<[`ApplicationInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationInfo/)\>

#### getMessages()

> **getMessages**(`locale?`): `Promise`\<[`RendererMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/RendererMessages/)\>

Returns the messages.

##### Parameters

###### locale?

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`RendererMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/RendererMessages/)\>

#### getUpdateState()

> **getUpdateState**(): `Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/) \| `undefined`\>

Returns the update state.

##### Returns

`Promise`\<[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/) \| `undefined`\>

#### installUpdate()

> **installUpdate**(): `Promise`\<`void`\>

Installs the update.

##### Returns

`Promise`\<`void`\>

#### isFullScreen()

> **isFullScreen**(): `Promise`\<`boolean`\>

Determines whether the full screen condition applies.

##### Returns

`Promise`\<`boolean`\>

#### listDisplays()

> **listDisplays**(): `Promise`\<[`DisplayInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DisplayInfo/)[]\>

Lists the displays.

##### Returns

`Promise`\<[`DisplayInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DisplayInfo/)[]\>

#### onUpdateStateChanged()

> **onUpdateStateChanged**(`handler`): () => `void`

Handles the update state changed.

##### Parameters

###### handler

(`state`) => `void`

##### Returns

() => `void`

#### openDevTools()

> **openDevTools**(`mode`): `Promise`\<`void`\>

Opens the dev tools.

##### Parameters

###### mode

[`DevToolsMode`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/)

##### Returns

`Promise`\<`void`\>

#### openLink()

> **openLink**(`id`): `Promise`\<`void`\>

Opens the link.

##### Parameters

###### id

[`ApplicationLinkId`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationLinkId/)

##### Returns

`Promise`\<`void`\>

#### openLogDirectory()

> **openLogDirectory**(): `Promise`\<`void`\>

Opens the log directory.

##### Returns

`Promise`\<`void`\>

### bundles

> **bundles**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The bundles value.

#### install()

> **install**(`locale`): `Promise`\<[`BundleInstallResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleInstallResult/)\>

Installs the operation.

##### Parameters

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`BundleInstallResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleInstallResult/)\>

#### list()

> **list**(): `Promise`\<[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)[]\>

Lists the operation.

##### Returns

`Promise`\<[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)[]\>

#### remove()

> **remove**(`id`, `locale`): `Promise`\<[`BundleRemoveResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleRemoveResult/)\>

Removes the operation.

##### Parameters

###### id

`string`

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`BundleRemoveResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleRemoveResult/)\>

#### runtime()

> **runtime**(): `Promise`\<[`BundleRuntimeInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleRuntimeInfo/)[]\>

Performs the runtime operation.

##### Returns

`Promise`\<[`BundleRuntimeInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleRuntimeInfo/)[]\>

#### update()

> **update**(`id`, `locale`): `Promise`\<[`BundleUpdateResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleUpdateResult/)\>

Updates the operation.

##### Parameters

###### id

`string`

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`BundleUpdateResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleUpdateResult/)\>

***

### data

> **data**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The data value.

#### clearAllBrowserProfiles()

> **clearAllBrowserProfiles**(`locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the all browser profiles.

##### Parameters

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

#### clearApplicationCache()

> **clearApplicationCache**(`locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the application cache.

##### Parameters

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

#### clearBrowserProfile()

> **clearBrowserProfile**(`profileId`, `locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the browser profile.

##### Parameters

###### profileId

`string`

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

#### clearIsolatedSite()

> **clearIsolatedSite**(`siteId`, `locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the isolated site.

##### Parameters

###### siteId

`string`

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

#### resetApplication()

> **resetApplication**(`locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Resets the application.

##### Parameters

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

***

### development

> **development**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The development value.

#### attach()

> **attach**(`locale`): `Promise`\<[`DevelopmentBundleAttachResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevelopmentBundleAttachResult/)\>

Attaches the operation.

##### Parameters

###### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### Returns

`Promise`\<[`DevelopmentBundleAttachResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevelopmentBundleAttachResult/)\>

#### detach()

> **detach**(`projectId`): `Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

Detaches the operation.

##### Parameters

###### projectId

`string`

##### Returns

`Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

#### getState()

> **getState**(): `Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

Returns the state.

##### Returns

`Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

#### getVsCodeConfiguration()

> **getVsCodeConfiguration**(): `Promise`\<`string`\>

Returns the vs code configuration.

##### Returns

`Promise`\<`string`\>

#### onStateChanged()

> **onStateChanged**(`handler`): () => `void`

Handles the state changed.

##### Parameters

###### handler

(`state`) => `void`

##### Returns

() => `void`

#### rebuild()

> **rebuild**(`projectId`): `Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

Performs the rebuild operation.

##### Parameters

###### projectId

`string`

##### Returns

`Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

#### setHotReload()

> **setHotReload**(`projectId`, `enabled`): `Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

Sets the hot reload.

##### Parameters

###### projectId

`string`

###### enabled

`boolean`

##### Returns

`Promise`\<[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)\>

***

### media

> **media**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The media value.

#### onPictureInPictureChanged()

> **onPictureInPictureChanged**(`handler`): () => `void`

Handles the picture in picture changed.

##### Parameters

###### handler

(`result`) => `void`

##### Returns

() => `void`

#### toggleGamePictureInPicture()

> **toggleGamePictureInPicture**(): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Toggles the game picture in picture.

##### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

#### togglePictureInPicture()

> **togglePictureInPicture**(): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Toggles the picture in picture.

##### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

***

### overlay

> **overlay**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The overlay value.

#### close()

> **close**(): `Promise`\<`void`\>

Closes the operation.

##### Returns

`Promise`\<`void`\>

#### onHidden()

> **onHidden**(`handler`): () => `void`

Handles the hidden.

##### Parameters

###### handler

() => `void`

##### Returns

() => `void`

#### onRequestClose()

> **onRequestClose**(`handler`): () => `void`

Handles the request close.

##### Parameters

###### handler

() => `void`

##### Returns

() => `void`

#### onShowMenu()

> **onShowMenu**(`handler`): () => `void`

Handles the show menu.

##### Parameters

###### handler

() => `void`

##### Returns

() => `void`

#### onShowPreferences()

> **onShowPreferences**(`handler`): () => `void`

Handles the show preferences.

##### Parameters

###### handler

() => `void`

##### Returns

() => `void`

#### onShowUpdate()

> **onShowUpdate**(`handler`): () => `void`

Handles the show update.

##### Parameters

###### handler

(`state`) => `void`

##### Returns

() => `void`

#### setView()

> **setView**(`view`): `Promise`\<`void`\>

Sets the view.

##### Parameters

###### view

[`OverlayView`](/api/staging/3.0.0/app/Common/IPC/type-aliases/OverlayView/)

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

#### previewTheme()

> **previewTheme**(`theme`): `Promise`\<`void`\>

Performs the preview theme operation.

##### Parameters

###### theme

[`AppTheme`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/)

##### Returns

`Promise`\<`void`\>

#### update()

> **update**(`patch`, `options?`): `Promise`\<[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)\>

Updates the operation.

##### Parameters

###### patch

[`PreferencePatch`](/api/staging/3.0.0/app/Common/IPC/type-aliases/PreferencePatch/)

###### options?

[`PreferenceUpdateOptions`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceUpdateOptions/)

##### Returns

`Promise`\<[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)\>

***

### sites

> **sites**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The sites value.

#### currentAddress()

> **currentAddress**(): `Promise`\<`string`\>

Performs the current address operation.

##### Returns

`Promise`\<`string`\>

#### goBack()

> **goBack**(): `Promise`\<`boolean`\>

Performs the go back operation.

##### Returns

`Promise`\<`boolean`\>

#### goForward()

> **goForward**(): `Promise`\<`boolean`\>

Performs the go forward operation.

##### Returns

`Promise`\<`boolean`\>

#### list()

> **list**(): `Promise`\<[`SiteMenuItem`](/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/)[]\>

Lists the operation.

##### Returns

`Promise`\<[`SiteMenuItem`](/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/)[]\>

#### open()

> **open**(`id`): `Promise`\<`void`\>

Opens the operation.

##### Parameters

###### id

`string`

##### Returns

`Promise`\<`void`\>

#### openAddress()

> **openAddress**(`value`): `Promise`\<[`SiteAddressOpenResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/SiteAddressOpenResult/)\>

Opens the address.

##### Parameters

###### value

`string`

##### Returns

`Promise`\<[`SiteAddressOpenResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/SiteAddressOpenResult/)\>

***

### videoLibrary

> **videoLibrary**: [`VideoLibraryApi`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryApi/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/VideoLibraryApi/"><code>VideoLibraryApi</code></a></span>

The video library value.
