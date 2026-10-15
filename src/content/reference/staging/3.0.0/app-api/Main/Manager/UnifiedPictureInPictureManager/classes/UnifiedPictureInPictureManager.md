---
title: "UnifiedPictureInPictureManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates unified picture in picture behavior."
displayPath: "Main/Manager/UnifiedPictureInPictureManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/UnifiedPictureInPictureManager/classes/UnifiedPictureInPictureManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new UnifiedPictureInPictureManager**(`getViewerWindow`, `getSiteView`, `getContentOverlaySelectors`, `logging`, `onStateChanged`, `onExited`, `onLastPlacementChanged?`): `UnifiedPictureInPictureManager`

Creates an instance of UnifiedPictureInPictureManager.

#### Parameters

##### getViewerWindow

() => `BrowserWindow`

Callback used to handle get viewer window.

##### getSiteView

() => `WebContentsView`

Callback used to handle get site view.

##### getContentOverlaySelectors

() => readonly `string`[]

Callback used to handle get content overlay selectors.

##### logging

[`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)

The logging value.

##### onStateChanged

(`result`) => `void`

Callback used to handle on state changed.

##### onExited

() => `void`

Callback used to handle on exited.

##### onLastPlacementChanged?

(`placement`) => `void` \| `Promise`\<`void`\>

Callback used to handle on last placement changed.

#### Returns

`UnifiedPictureInPictureManager`

## Properties

### enterPromise?

> `private` `optional` **enterPromise?**: `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/"><code>Promise&lt;PictureInPictureResult&gt;</code></a></span>

The enter promise value.

### exitPromise?

> `private` `optional` **exitPromise?**: `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/"><code>Promise&lt;PictureInPictureResult&gt;</code></a></span>

The exit promise value.

***

### getContentOverlaySelectors

> `private` `readonly` **getContentOverlaySelectors**: () => readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>() =&gt; readonly string[]</code></a></span>

Callback used to handle get content overlay selectors.

#### Returns

readonly `string`[]

***

### getSiteView

> `private` `readonly` **getSiteView**: () => `WebContentsView`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>() =&gt; WebContentsView</code></span>

Callback used to handle get site view.

#### Returns

`WebContentsView`

***

### getViewerWindow

> `private` `readonly` **getViewerWindow**: () => `BrowserWindow`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>() =&gt; BrowserWindow</code></span>

Callback used to handle get viewer window.

#### Returns

`BrowserWindow`

***

### logging

> `private` `readonly` **logging**: [`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/"><code>LoggingManager</code></a></span>

The logging value.

***

### onExited

> `private` `readonly` **onExited**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle on exited.

#### Returns

`void`

***

### onLastPlacementChanged?

> `private` `readonly` `optional` **onLastPlacementChanged?**: (`placement`) => `void` \| `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(placement) =&gt; void | Promise&lt;void&gt;</code></a></span>

Callback used to handle on last placement changed.

#### Parameters

##### placement

[`PictureInPictureLastPlacement`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureLastPlacement/)

#### Returns

`void` \| `Promise`\<`void`\>

***

### onStateChanged

> `private` `readonly` **onStateChanged**: (`result`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(result) =&gt; void</code></a></span>

Callback used to handle on state changed.

#### Parameters

##### result

[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)

#### Returns

`void`

***

### placementPreference

> `private` **placementPreference**: [`PictureInPicturePlacementPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/) = `DEFAULT_PICTURE_IN_PICTURE_PLACEMENT`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/"><code>PictureInPicturePlacementPreference</code></a></span>

The placement preference value.

***

### placementWrite

> `private` **placementWrite**: `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;void&gt;</code></a></span>

The placement write value.

***

### portraitSizePreference

> `private` **portraitSizePreference**: [`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/) = `DEFAULT_PICTURE_IN_PICTURE_PORTRAIT_SIZE`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/"><code>PictureInPictureSizePreference</code></a></span>

The portrait size preference value.

***

### sizePreference

> `private` **sizePreference**: [`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/) = `DEFAULT_PICTURE_IN_PICTURE_SIZE`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/"><code>PictureInPictureSizePreference</code></a></span>

The size preference value.

***

### state?

> `private` `optional` **state?**: [`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/"><code>UnifiedPictureInPictureState</code></a></span>

The state value.

## Methods

### activateControl()

> `private` **activateControl**(`state`, `action`): `void`

Performs the activate control operation.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

##### action

`"playback"` \| `"restore"`

#### Returns

`void`

***

### applyMacPictureInPictureLevel()

> `private` **applyMacPictureInPictureLevel**(`pipWindow`): `void`

Applies the mac picture in picture level.

#### Parameters

##### pipWindow

`BrowserWindow`

#### Returns

`void`

***

### attachWindowEvents()

> `private` **attachWindowEvents**(`state`): `void`

Attaches the window events.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### clearFullscreenReassertions()

> `private` **clearFullscreenReassertions**(`state`): `void`

Clears the fullscreen reassertions.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### clearVideoRefreshes()

> `private` **clearVideoRefreshes**(`state`): `void`

Clears the video refreshes.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### createEnterPageScript()

> `private` **createEnterPageScript**(): `string`

Selects runtime values; the injected DOM implementation stays in Inject/.

#### Returns

`string`

***

### createPipWindow()

> `private` **createPipWindow**(`bounds`, `aspectRatio?`): `BrowserWindow`

Creates the PiP window.

#### Parameters

##### bounds

`Rectangle`

##### aspectRatio?

`number`

#### Returns

`BrowserWindow`

***

### enter()

> `private` **enter**(`beforeEnter?`): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Performs the enter operation.

#### Parameters

##### beforeEnter?

() => `boolean`

#### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

***

### enterHostFrames()

> `private` **enterHostFrames**(`videoFrame`): `Promise`\<readonly `WebFrameMain`[]\>

Performs the enter host frames operation.

#### Parameters

##### videoFrame

`WebFrameMain`

#### Returns

`Promise`\<readonly `WebFrameMain`[]\>

***

### exit()

> `private` **exit**(): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Performs the exit operation.

#### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

***

### exitAllModes()

> **exitAllModes**(): `Promise`\<`void`\>

Performs the exit all modes operation.

#### Returns

`Promise`\<`void`\>

***

### findVideoCandidate()

> `private` **findVideoCandidate**(`siteView`): `Promise`\<[`PictureInPictureVideoCandidate`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/PictureInPictureVideoCandidate/) \| `undefined`\>

Finds the video candidate.

#### Parameters

##### siteView

`WebContentsView`

#### Returns

`Promise`\<[`PictureInPictureVideoCandidate`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/PictureInPictureVideoCandidate/) \| `undefined`\>

***

### handlePointerInput()

> `private` **handlePointerInput**(`state`, `input`): `void`

Handles the pointer input.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

##### input

`InputEvent`

#### Returns

`void`

***

### handleViewerClosed()

> **handleViewerClosed**(): `void`

Handles the viewer closed.

#### Returns

`void`

***

### inspectVideoFrames()

> `private` **inspectVideoFrames**(`siteView`): `Promise`\<[`PictureInPictureVideoCandidate`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/PictureInPictureVideoCandidate/) \| `undefined`\>

Performs the inspect video frames operation.

#### Parameters

##### siteView

`WebContentsView`

#### Returns

`Promise`\<[`PictureInPictureVideoCandidate`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/PictureInPictureVideoCandidate/) \| `undefined`\>

***

### isActive()

> **isActive**(): `boolean`

Determines whether the active condition applies.

#### Returns

`boolean`

***

### performExit()

> `private` **performExit**(): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Performs the perform exit operation.

#### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

***

### prepareMacApplicationForPictureInPicture()

> `private` **prepareMacApplicationForPictureInPicture**(): `void`

Prepares the mac application for picture in picture.

#### Returns

`void`

***

### presentMacPictureInPicture()

> `private` **presentMacPictureInPicture**(`pipWindow`): `void`

Performs the present mac picture in picture operation.

#### Parameters

##### pipWindow

`BrowserWindow`

#### Returns

`void`

***

### refreshActiveVideo()

> `private` **refreshActiveVideo**(`state`): `Promise`\<`void`\>

Performs the refresh active video operation.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`Promise`\<`void`\>

***

### rememberCurrentPlacement()

> `private` **rememberCurrentPlacement**(`pipWindow`): `Promise`\<`void`\>

Performs the remember current placement operation.

#### Parameters

##### pipWindow

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

***

### resolveInitialBounds()

> `private` **resolveInitialBounds**(`viewerWindow`, `aspectRatio?`): `Rectangle`

Resolves the initial bounds.

#### Parameters

##### viewerWindow

`BrowserWindow`

##### aspectRatio?

`number`

#### Returns

`Rectangle`

***

### restoreHostFrames()

> `private` **restoreHostFrames**(`frames`): `Promise`\<`void`\>

Restores the host frames.

#### Parameters

##### frames

readonly `WebFrameMain`[]

#### Returns

`Promise`\<`void`\>

***

### restoreInjectedVideo()

> `private` **restoreInjectedVideo**(`frame`): `Promise`\<`void`\>

Restores the injected video.

#### Parameters

##### frame

`WebFrameMain`

#### Returns

`Promise`\<`void`\>

***

### restoreMacApplicationPresentation()

> `private` **restoreMacApplicationPresentation**(`pipWindow?`): `Promise`\<`void`\>

Restores the mac application presentation.

#### Parameters

##### pipWindow?

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

***

### restoreSiteView()

> `private` **restoreSiteView**(`viewerWindow`, `siteView`, `sourceWindow?`): `Promise`\<`void`\>

Restores the site view.

#### Parameters

##### viewerWindow

`BrowserWindow`

##### siteView

`WebContentsView`

##### sourceWindow?

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

***

### scheduleFullscreenReassertion()

> `private` **scheduleFullscreenReassertion**(`state`): `void`

Schedules the fullscreen reassertion.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### scheduleVideoRefresh()

> `private` **scheduleVideoRefresh**(`state`): `void`

Schedules the video refresh.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### setControlsVisible()

> `private` **setControlsVisible**(`state`, `visible`, `force?`): `void`

Sets the controls visible.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

##### visible

`boolean`

##### force?

`boolean` = `false`

#### Returns

`void`

***

### setPortraitWindowSize()

> **setPortraitWindowSize**(`preference`): `void`

Sets the portrait window size.

#### Parameters

##### preference

[`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)

#### Returns

`void`

***

### setWindowPlacement()

> **setWindowPlacement**(`preference`): `void`

Sets the window placement.

#### Parameters

##### preference

[`PictureInPicturePlacementPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/)

#### Returns

`void`

***

### setWindowSize()

> **setWindowSize**(`preference`): `void`

Sets the window size.

#### Parameters

##### preference

[`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)

#### Returns

`void`

***

### startHoverTracking()

> `private` **startHoverTracking**(`state`): `void`

Starts the hover tracking.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### stopHoverTracking()

> `private` **stopHoverTracking**(`state`): `void`

Stops the hover tracking.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### syncSiteViewBounds()

> `private` **syncSiteViewBounds**(`state`): `void`

Performs the sync site view bounds operation.

#### Parameters

##### state

[`UnifiedPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState/)

#### Returns

`void`

***

### toggle()

> **toggle**(`beforeEnter?`): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Toggles the operation.

#### Parameters

##### beforeEnter?

() => `boolean`

#### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>
