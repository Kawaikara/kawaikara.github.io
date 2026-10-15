---
title: "WindowManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates window behavior."
displayPath: "Main/Manager/WindowManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/WindowManager/classes/WindowManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new WindowManager**(`externalBrowser`, `createPictureInPicture`, `logging`): `WindowManager`

Creates an instance of WindowManager.

#### Parameters

##### externalBrowser

[`ExternalBrowserManager`](/api/staging/3.0.0/app/Main/Manager/ExternalBrowserManager/classes/ExternalBrowserManager/)

##### createPictureInPicture

[`PictureInPictureManagerFactory`](/api/staging/3.0.0/app/Main/Functional/WindowRuntime/type-aliases/PictureInPictureManagerFactory/)

##### logging

[`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)

The logging value.

#### Returns

`WindowManager`

## Properties

### appAlwaysOnTop

> `private` **appAlwaysOnTop**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The app always on top value.

### appLocale

> `private` **appLocale**: [`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/) = `'system'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/"><code>AppLocale</code></a></span>

The app locale value.

***

### appTheme

> `private` **appTheme**: [`AppTheme`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/) = `'dark'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/"><code>AppTheme</code></a></span>

The app theme value.

***

### appTitle

> `private` **appTitle**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The app title value.

***

### closeMenuOnEscape

> `private` **closeMenuOnEscape**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `true`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The close menu on escape value.

***

### closeMenuOnOutsideClick

> `private` **closeMenuOnOutsideClick**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `true`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The close menu on outside click value.

***

### configuredDevToolsContents

> `private` `readonly` **configuredDevToolsContents**: `WeakSet`\<`WebContents`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet&lt;WebContents&gt;</code></a></span>

The configured dev tools contents value.

***

### configuredDevToolsWindows

> `private` `readonly` **configuredDevToolsWindows**: `WeakSet`\<`BrowserWindow`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet&lt;BrowserWindow&gt;</code></a></span>

The configured dev tools Windows value.

***

### configuredSiteSessions

> `private` `readonly` **configuredSiteSessions**: `WeakSet`\<`Session`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet"><code>WeakSet&lt;Session&gt;</code></a></span>

The configured site sessions value.

***

### currentVideoOpenRequest

> `private` **currentVideoOpenRequest**: [`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null` = `null`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/"><code>VideoOpenRequest | null</code></a></span>

The current video open request value.

***

### detachedDevToolsBounds?

> `private` `optional` **detachedDevToolsBounds?**: `Rectangle`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Rectangle</code></span>

The detached dev tools bounds value.

***

### devToolsMode

> `private` **devToolsMode**: [`DevToolsMode`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/) = `'detach'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/"><code>DevToolsMode</code></a></span>

The dev tools mode value.

***

### disposing

> `private` **disposing**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The disposing value.

***

### editingWebContentsIds

> `private` `readonly` **editingWebContentsIds**: `Set`\<`number`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;number&gt;</code></a></span>

The editing web contents IDs value.

***

### externalBrowser

> `private` `readonly` **externalBrowser**: [`ExternalBrowserManager`](/api/staging/3.0.0/app/Main/Manager/ExternalBrowserManager/classes/ExternalBrowserManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/ExternalBrowserManager/classes/ExternalBrowserManager/"><code>ExternalBrowserManager</code></a></span>

The external browser value.

***

### externalLoginGeneration

> `private` **externalLoginGeneration**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `0`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The external login generation value.

***

### internalVideoPictureInPicture?

> `private` `optional` **internalVideoPictureInPicture?**: [`InternalVideoPictureInPictureState`](/api/staging/3.0.0/app/Main/Functional/WindowRuntime/interfaces/InternalVideoPictureInPictureState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/WindowRuntime/interfaces/InternalVideoPictureInPictureState/"><code>InternalVideoPictureInPictureState</code></a></span>

The internal video picture in picture value.

***

### internalVideoPictureInPictureReassertTimers

> `private` `readonly` **internalVideoPictureInPictureReassertTimers**: `Set`\<`Timeout`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;Timeout&gt;</code></a></span>

The internal video picture in picture reassert timers value.

***

### internalVideoPresentation

> `private` **internalVideoPresentation**: [`VideoPresentationState`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoPresentationState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/VideoPresentationState/"><code>VideoPresentationState</code></a></span>

The internal video presentation value.

***

### internalVideoVisible

> `private` **internalVideoVisible**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The internal video visible value.

***

### keepSiteDevToolsOpen

> `private` **keepSiteDevToolsOpen**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The keep site dev tools open value.

***

### lastLocalVideoOpenRequest?

> `private` `optional` **lastLocalVideoOpenRequest?**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The last local video open request value.

#### directory

> `readonly` **directory**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The directory value.

#### displayName

> `readonly` **displayName**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The display name value.

#### kind

> `readonly` **kind**: `"local"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;local&quot;</code></span>

The kind value.

#### path

> `readonly` **path**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The path value.

#### url

> `readonly` **url**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The URL value.

***

### logging

> `private` `readonly` **logging**: [`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/"><code>LoggingManager</code></a></span>

The logging value.

***

### mpv

> `private` `readonly` **mpv**: `MpvMain`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>MpvMain</code></span>

The MPV value.

***

### navigationGuard?

> `private` `optional` **navigationGuard?**: (`url`) => `boolean`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>(url) =&gt; boolean</code></a></span>

Callback used to handle navigation guard.

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### newWindowPolicyResolver?

> `private` `optional` **newWindowPolicyResolver?**: (`url`) => [`NewWindowPolicy`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/NewWindowPolicy/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/NewWindowPolicy/"><code>(url) =&gt; NewWindowPolicy</code></a></span>

Callback used to handle new window policy resolver.

#### Parameters

##### url

`string`

#### Returns

[`NewWindowPolicy`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/NewWindowPolicy/)

***

### openDevToolsOnInitialSite

> `private` **openDevToolsOnInitialSite**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The open dev tools on initial site value.

***

### overlayRevealTimer?

> `private` `optional` **overlayRevealTimer?**: `Timeout`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Timeout</code></span>

The overlay reveal timer value.

***

### overlayView

> `private` **overlayView**: [`OverlayView`](/api/staging/3.0.0/app/Common/IPC/type-aliases/OverlayView/) = `'menu'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/OverlayView/"><code>OverlayView</code></a></span>

The overlay view value.

***

### overlayVisible

> `private` **overlayVisible**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The overlay visible value.

***

### overlayWindow?

> `private` `optional` **overlayWindow?**: `BrowserWindow`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>BrowserWindow</code></span>

The overlay window value.

***

### pendingVideoOpenRequest?

> `private` `optional` **pendingVideoOpenRequest?**: [`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/"><code>VideoOpenRequest</code></a></span>

The pending video open request value.

***

### pictureInPicture

> `private` `readonly` **pictureInPicture**: [`UnifiedPictureInPictureManager`](/api/staging/3.0.0/app/Main/Manager/UnifiedPictureInPictureManager/classes/UnifiedPictureInPictureManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/UnifiedPictureInPictureManager/classes/UnifiedPictureInPictureManager/"><code>UnifiedPictureInPictureManager</code></a></span>

The picture in picture value.

***

### pictureInPictureContentOverlaySelectors?

> `private` `optional` **pictureInPictureContentOverlaySelectors?**: () => readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>() =&gt; readonly string[]</code></a></span>

Callback used to handle picture in picture content overlay selectors.

#### Returns

readonly `string`[]

***

### pictureInPictureGuard?

> `private` `optional` **pictureInPictureGuard?**: (`url`) => `boolean`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>(url) =&gt; boolean</code></a></span>

Callback used to handle picture in picture guard.

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### pictureInPicturePlacement

> `private` **pictureInPicturePlacement**: [`PictureInPicturePlacementPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/) = `DEFAULT_PICTURE_IN_PICTURE_PLACEMENT`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/"><code>PictureInPicturePlacementPreference</code></a></span>

The picture in picture placement value.

***

### pictureInPicturePlacementRecorder?

> `private` `optional` **pictureInPicturePlacementRecorder?**: (`placement`) => `void` \| `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(placement) =&gt; void | Promise&lt;void&gt;</code></a></span>

Callback used to handle picture in picture placement recorder.

#### Parameters

##### placement

[`PictureInPictureLastPlacement`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureLastPlacement/)

#### Returns

`void` \| `Promise`\<`void`\>

***

### pictureInPicturePortraitSize

> `private` **pictureInPicturePortraitSize**: [`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/) = `DEFAULT_PICTURE_IN_PICTURE_PORTRAIT_SIZE`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/"><code>PictureInPictureSizePreference</code></a></span>

The picture in picture portrait size value.

***

### pictureInPictureSize

> `private` **pictureInPictureSize**: [`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/) = `DEFAULT_PICTURE_IN_PICTURE_SIZE`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/"><code>PictureInPictureSizePreference</code></a></span>

The picture in picture size value.

***

### pictureInPictureStateHandler?

> `private` `optional` **pictureInPictureStateHandler?**: (`active`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(active) =&gt; void</code></a></span>

Callback used to handle picture in picture state handler.

#### Parameters

##### active

`boolean`

#### Returns

`void`

***

### requestHeadersTransformer?

> `private` `optional` **requestHeadersTransformer?**: (`details`) => [`SiteRequestHeaders`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SiteRequestHeaders/) \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SiteRequestHeaders/"><code>(details) =&gt; SiteRequestHeaders | undefined</code></a></span>

Callback used to handle request headers transformer.

#### Parameters

##### details

[`SiteRequestDetails`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestHeaders`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SiteRequestHeaders/) \| `undefined`

***

### requestTransformer?

> `private` `optional` **requestTransformer?**: (`details`) => [`SiteRequestRedirect`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestRedirect/"><code>(details) =&gt; SiteRequestRedirect | undefined</code></a></span>

Callback used to handle request transformer.

#### Parameters

##### details

[`SiteRequestDetails`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestRedirect`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`

***

### restoreMenuAfterPictureInPicture

> `private` **restoreMenuAfterPictureInPicture**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The restore menu after picture in picture value.

***

### restoringPictureInPicture

> `private` **restoringPictureInPicture**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The restoring picture in picture value.

***

### shortcutHandler?

> `private` `optional` **shortcutHandler?**: (`input`, `editing`) => `boolean`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>(input, editing) =&gt; boolean</code></a></span>

Callback used to handle shortcut handler.

#### Parameters

##### input

`Input`

##### editing

`boolean`

#### Returns

`boolean`

***

### siteActionHandler?

> `private` `optional` **siteActionHandler?**: (`action`) => `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>(action) =&gt; Promise&lt;boolean&gt;</code></a></span>

Callback used to handle site action handler.

#### Parameters

##### action

`string`

#### Returns

`Promise`\<`boolean`\>

***

### siteBrowserIdentity?

> `private` `optional` **siteBrowserIdentity?**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The site browser identity value.

#### clientHints?

> `readonly` `optional` **clientHints?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The client hints value.

#### requestHosts?

> `readonly` `optional` **requestHosts?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

The request hosts value.

#### userAgent

> `readonly` **userAgent**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The user agent value.

***

### sitePopupWindows

> `private` `readonly` **sitePopupWindows**: `Set`\<`BrowserWindow`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;BrowserWindow&gt;</code></a></span>

The site popup Windows value.

***

### siteView?

> `private` `optional` **siteView?**: `WebContentsView`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>WebContentsView</code></span>

The site view value.

***

### siteViewAttached

> `private` **siteViewAttached**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The site view attached value.

***

### systemLocale

> `private` **systemLocale**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `'en-US'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The system locale value.

***

### videoRendererRecovery?

> `private` `optional` **videoRendererRecovery?**: `Promise`\<`boolean`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;boolean&gt;</code></a></span>

The video renderer recovery value.

***

### videoSoftwareRenderer

> `private` **videoSoftwareRenderer**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The video software renderer value.

***

### videoWindow?

> `private` `optional` **videoWindow?**: `BrowserWindow`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>BrowserWindow</code></span>

The video window value.

***

### videoWindowLoading?

> `private` `optional` **videoWindowLoading?**: `Promise`\<`BrowserWindow`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;BrowserWindow&gt;</code></a></span>

The video window loading value.

***

### viewerClosePreparation?

> `private` `optional` **viewerClosePreparation?**: `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;void&gt;</code></a></span>

The viewer close preparation value.

***

### viewerClosePrepared

> `private` **viewerClosePrepared**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The viewer close prepared value.

***

### viewerWindow?

> `private` `optional` **viewerWindow?**: `BrowserWindow`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>BrowserWindow</code></span>

The viewer window value.

## Methods

### activateSiteView()

> `private` **activateSiteView**(`runtime`): `Promise`\<\{ `siteSession`: `Session`; `webContents`: `WebContents`; \}\>

Performs the activate site view operation.

#### Parameters

##### runtime

[`SiteRuntimeProfile`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/SiteRuntimeProfile/)

#### Returns

`Promise`\<\{ `siteSession`: `Session`; `webContents`: `WebContents`; \}\>

***

### activateVideoOpenRequest()

> **activateVideoOpenRequest**(`webContentsId`, `request`): `boolean`

Performs the activate video open request operation.

#### Parameters

##### webContentsId

`number`

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

`boolean`

***

### applyAlwaysOnTop()

> `private` **applyAlwaysOnTop**(`viewer`, `enabled`): `void`

Applies the always on top.

#### Parameters

##### viewer

`BrowserWindow`

##### enabled

`boolean`

#### Returns

`void`

***

### attachSiteWebContents()

> `private` **attachSiteWebContents**(`webContents`, `siteSession`): `void`

Attaches the site web contents.

#### Parameters

##### webContents

`WebContents`

##### siteSession

`Session`

#### Returns

`void`

***

### cancelExternalLogin()

> `private` **cancelExternalLogin**(): `Promise`\<`void`\>

Determines whether the cel external login condition applies.

#### Returns

`Promise`\<`void`\>

***

### canEnterPictureInPicture()

> `private` **canEnterPictureInPicture**(): `boolean`

Determines whether the enter picture in picture condition applies.

#### Returns

`boolean`

***

### clearInternalVideoPictureInPictureReassertions()

> `private` **clearInternalVideoPictureInPictureReassertions**(): `void`

Clears the internal video picture in picture reassertions.

#### Returns

`void`

***

### clearOverlayRevealTimer()

> `private` **clearOverlayRevealTimer**(): `void`

Clears the overlay reveal timer.

#### Returns

`void`

***

### closeSitePopups()

> `private` **closeSitePopups**(): `void`

Closes the site popups.

#### Returns

`void`

***

### configureDevToolsWebContents()

> `private` **configureDevToolsWebContents**(`inspectedContents`, `windowLookupAttempt?`): `void`

Performs the configure dev tools web contents operation.

#### Parameters

##### inspectedContents

`WebContents`

##### windowLookupAttempt?

`number` = `0`

#### Returns

`void`

***

### configureSiteSession()

> `private` **configureSiteSession**(`siteSession`): `void`

Performs the configure site session operation.

#### Parameters

##### siteSession

`Session`

#### Returns

`void`

***

### configureStartupDevTools()

> **configureStartupDevTools**(`openOnStartup`, `mode`): `void`

Performs the configure startup dev tools operation.

#### Parameters

##### openOnStartup

`boolean`

##### mode

[`DevToolsMode`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/)

#### Returns

`void`

***

### createSiteContext()

> **createSiteContext**(`runtime`, `permissions`): `Promise`\<[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)\>

Creates the site context.

#### Parameters

##### runtime

[`SiteRuntimeProfile`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/SiteRuntimeProfile/)

##### permissions

`ReadonlySet`\<`string`\>

#### Returns

`Promise`\<[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)\>

***

### createSiteViewer()

> `private` **createSiteViewer**(`webContents`, `permissions`): [`SiteViewer`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteViewer/)

Creates the site viewer.

#### Parameters

##### webContents

`WebContents`

##### permissions

`ReadonlySet`\<`string`\>

#### Returns

[`SiteViewer`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteViewer/)

***

### createWindows()

> **createWindows**(): `void`

Creates the Windows.

#### Returns

`void`

***

### destroySiteView()

> `private` **destroySiteView**(): `void`

Performs the destroy site view operation.

#### Returns

`void`

***

### dispatchSiteAction()

> `private` **dispatchSiteAction**(`action`): `void`

Performs the dispatch site action operation.

#### Parameters

##### action

`string`

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Releases the operation.

#### Returns

`Promise`\<`void`\>

***

### ensureVideoWindow()

> `private` **ensureVideoWindow**(): `Promise`\<`BrowserWindow`\>

Ensures the video window.

#### Returns

`Promise`\<`BrowserWindow`\>

***

### exitAppFullScreen()

> **exitAppFullScreen**(): `void`

Performs the exit app full screen operation.

#### Returns

`void`

***

### exitInternalVideoPictureInPicture()

> `private` **exitInternalVideoPictureInPicture**(`notify?`): `Promise`\<`void`\>

Performs the exit internal video picture in picture operation.

#### Parameters

##### notify?

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

***

### focusViewer()

> **focusViewer**(): `void`

Performs the focus viewer operation.

#### Returns

`void`

***

### getActiveViewerWebContents()

> `private` **getActiveViewerWebContents**(): `WebContents` \| `undefined`

Returns the active viewer web contents.

#### Returns

`WebContents` \| `undefined`

***

### getCurrentSiteAddress()

> **getCurrentSiteAddress**(): `string`

Returns the current site address.

#### Returns

`string`

***

### getCurrentVideoOpenRequest()

> **getCurrentVideoOpenRequest**(): [`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`

Returns the current video open request.

#### Returns

[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`

***

### getVideoPlaybackCapabilities()

> **getVideoPlaybackCapabilities**(): [`VideoPlaybackCapabilities`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoPlaybackCapabilities/)

Returns the video playback capabilities.

#### Returns

[`VideoPlaybackCapabilities`](/api/staging/3.0.0/app/Common/IPC/interfaces/VideoPlaybackCapabilities/)

***

### goBack()

> **goBack**(): `boolean`

Performs the go back operation.

#### Returns

`boolean`

***

### goForward()

> **goForward**(): `boolean`

Performs the go forward operation.

#### Returns

`boolean`

***

### hideOverlay()

> **hideOverlay**(): `void`

Performs the hide overlay operation.

#### Returns

`void`

***

### installRemoteThemeBridge()

> `private` **installRemoteThemeBridge**(`webContents`): `void`

Installs the remote theme bridge.

#### Parameters

##### webContents

`WebContents`

#### Returns

`void`

***

### isAnyPictureInPictureActive()

> `private` **isAnyPictureInPictureActive**(): `boolean`

Determines whether the any picture in picture active condition applies.

#### Returns

`boolean`

***

### isAppFullScreen()

> **isAppFullScreen**(): `boolean`

Determines whether the app full screen condition applies.

#### Returns

`boolean`

***

### isPictureInPictureActive()

> **isPictureInPictureActive**(): `boolean`

Determines whether the picture in picture active condition applies.

#### Returns

`boolean`

***

### listDisplays()

> **listDisplays**(): [`DisplayInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DisplayInfo/)[]

Lists the displays.

#### Returns

[`DisplayInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DisplayInfo/)[]

***

### loadOverlay()

> **loadOverlay**(): `Promise`\<`void`\>

Loads the overlay.

#### Returns

`Promise`\<`void`\>

***

### notifyDevelopmentStateChanged()

> **notifyDevelopmentStateChanged**(`state`): `void`

Notifies the development state changed.

#### Parameters

##### state

[`DevelopmentState`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentState/)

#### Returns

`void`

***

### notifyPictureInPictureChanged()

> `private` **notifyPictureInPictureChanged**(`result`): `void`

Notifies the picture in picture changed.

#### Parameters

##### result

###### mode

`"window"`

The mode value.

###### status

`"entered"` \| `"exited"`

The status value.

#### Returns

`void`

***

### openActiveSiteDevTools()

> `private` **openActiveSiteDevTools**(`activate`): `void`

Opens the active site dev tools.

#### Parameters

##### activate

`boolean`

#### Returns

`void`

***

### openDevTools()

> **openDevTools**(`mode`): `void`

Opens the dev tools.

#### Parameters

##### mode

[`DevToolsMode`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/)

#### Returns

`void`

***

### parseSiteAction()

> `private` **parseSiteAction**(`url`): `string` \| `undefined`

Parses the site action.

#### Parameters

##### url

`string`

#### Returns

`string` \| `undefined`

***

### prepareMacApplicationForInternalVideoPictureInPicture()

> `private` **prepareMacApplicationForInternalVideoPictureInPicture**(): `void`

Prepares the mac application for internal video picture in picture.

#### Returns

`void`

***

### prepareOverlayForPictureInPicture()

> `private` **prepareOverlayForPictureInPicture**(): `boolean`

Prepares the overlay for picture in picture.

#### Returns

`boolean`

***

### prepareViewerTransition()

> `private` **prepareViewerTransition**(`webContents`): `Promise`\<`void`\>

Prepares the viewer transition.

#### Parameters

##### webContents

`WebContents`

#### Returns

`Promise`\<`void`\>

***

### prepareViewerWindowClose()

> `private` **prepareViewerWindowClose**(`viewer`): `Promise`\<`void`\>

Prepares the viewer window close.

#### Parameters

##### viewer

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

***

### presentInternalVideoPictureInPicture()

> `private` **presentInternalVideoPictureInPicture**(`video`): `void`

Performs the present internal video picture in picture operation.

#### Parameters

##### video

`BrowserWindow`

#### Returns

`void`

***

### queueDroppedVideoFiles()

> **queueDroppedVideoFiles**(`value`): `Promise`\<`boolean`\>

Performs the queue dropped video files operation.

#### Parameters

##### value

`unknown`

#### Returns

`Promise`\<`boolean`\>

***

### queueVideoOpenRequest()

> **queueVideoOpenRequest**(`request`): `void`

Performs the queue video open request operation.

#### Parameters

##### request

[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/)

#### Returns

`void`

***

### queueYouTubeDownloader()

> **queueYouTubeDownloader**(`url`): `void`

Performs the queue you tube downloader operation.

#### Parameters

##### url

`string`

#### Returns

`void`

***

### recoverVideoPlaybackRenderer()

> **recoverVideoPlaybackRenderer**(`webContentsId`): `Promise`\<`boolean`\>

Performs the recover video playback renderer operation.

#### Parameters

##### webContentsId

`number`

#### Returns

`Promise`\<`boolean`\>

***

### recreateVideoWindowWithSoftwareRenderer()

> `private` **recreateVideoWindowWithSoftwareRenderer**(`video`): `Promise`\<`boolean`\>

Performs the recreate video window with software renderer operation.

#### Parameters

##### video

`BrowserWindow`

#### Returns

`Promise`\<`boolean`\>

***

### reloadViewer()

> **reloadViewer**(): `void`

Performs the reload viewer operation.

#### Returns

`void`

***

### requireActiveViewerWebContents()

> `private` **requireActiveViewerWebContents**(): `WebContents`

Performs the require active viewer web contents operation.

#### Returns

`WebContents`

***

### requireOverlayWindow()

> `private` **requireOverlayWindow**(): `BrowserWindow`

Performs the require overlay window operation.

#### Returns

`BrowserWindow`

***

### requireSiteView()

> `private` **requireSiteView**(): `WebContentsView`

Performs the require site view operation.

#### Returns

`WebContentsView`

***

### requireSiteWebContents()

> `private` **requireSiteWebContents**(): `WebContents`

Performs the require site web contents operation.

#### Returns

`WebContents`

***

### requireVideoWindow()

> `private` **requireVideoWindow**(): `BrowserWindow`

Performs the require video window operation.

#### Returns

`BrowserWindow`

***

### requireViewerWindow()

> `private` **requireViewerWindow**(): `BrowserWindow`

Performs the require viewer window operation.

#### Returns

`BrowserWindow`

***

### restoreOverlayAfterPictureInPicture()

> `private` **restoreOverlayAfterPictureInPicture**(): `void`

Restores the overlay after picture in picture.

#### Returns

`void`

***

### restorePictureInPicture()

> `private` **restorePictureInPicture**(): `Promise`\<`void`\>

Restores the picture in picture.

#### Returns

`Promise`\<`void`\>

***

### restoreViewerAlwaysOnTopAfterPictureInPicture()

> `private` **restoreViewerAlwaysOnTopAfterPictureInPicture**(): `void`

Restores the viewer always on top after picture in picture.

#### Returns

`void`

***

### revealOverlay()

> `private` **revealOverlay**(`overlay`): `void`

Performs the reveal overlay operation.

#### Parameters

##### overlay

`BrowserWindow`

#### Returns

`void`

***

### runExternalLogin()

> `private` **runExternalLogin**(`options`, `webContents`, `targetSession`, `viewer`): `Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>

Runs the external login.

#### Parameters

##### options

[`ExternalLoginOptions`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/ExternalLoginOptions/)

##### webContents

`WebContents`

##### targetSession

`Session`

##### viewer

[`SiteViewer`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteViewer/)

#### Returns

`Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>

***

### scheduleInternalVideoPictureInPictureReassertion()

> `private` **scheduleInternalVideoPictureInPictureReassertion**(): `void`

Schedules the internal video picture in picture reassertion.

#### Returns

`void`

***

### selectLocalVideo()

> **selectLocalVideo**(): `Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>

Selects the local video.

#### Returns

`Promise`\<[`VideoOpenRequest`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoOpenRequest/) \| `null`\>

***

### setAlwaysOnTop()

> **setAlwaysOnTop**(`enabled`): `void`

Sets the always on top.

#### Parameters

##### enabled

`boolean`

#### Returns

`void`

***

### setAppLocale()

> **setAppLocale**(`locale`, `systemLocale`): `void`

Sets the app locale.

#### Parameters

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

##### systemLocale

`string`

#### Returns

`void`

***

### setAppTheme()

> **setAppTheme**(`theme`): `void`

Sets the app theme.

#### Parameters

##### theme

[`AppTheme`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/)

#### Returns

`void`

***

### setDevToolsMode()

> **setDevToolsMode**(`mode`): `void`

Sets the dev tools mode.

#### Parameters

##### mode

[`DevToolsMode`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/)

#### Returns

`void`

***

### setEditingState()

> **setEditingState**(`webContentsId`, `editing`): `boolean`

Sets the editing state.

#### Parameters

##### webContentsId

`number`

##### editing

`boolean`

#### Returns

`boolean`

***

### setInternalVideoPresentation()

> **setInternalVideoPresentation**(`webContentsId`, `value`): `boolean`

Sets the internal video presentation.

#### Parameters

##### webContentsId

`number`

##### value

`unknown`

#### Returns

`boolean`

***

### setMenuDismissBehavior()

> **setMenuDismissBehavior**(`closeOnEscape`, `closeOnOutsideClick`): `void`

Sets the menu dismiss behavior.

#### Parameters

##### closeOnEscape

`boolean`

##### closeOnOutsideClick

`boolean`

#### Returns

`void`

***

### setPictureInPicturePlacement()

> **setPictureInPicturePlacement**(`preference`): `void`

Sets the picture in picture placement.

#### Parameters

##### preference

[`PictureInPicturePlacementPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/)

#### Returns

`void`

***

### setPictureInPicturePlacementRecorder()

> **setPictureInPicturePlacementRecorder**(`recorder`): `void`

Sets the picture in picture placement recorder.

#### Parameters

##### recorder

(`placement`) => `void` \| `Promise`\<`void`\>

#### Returns

`void`

***

### setPictureInPicturePortraitSize()

> **setPictureInPicturePortraitSize**(`preference`): `void`

Sets the picture in picture portrait size.

#### Parameters

##### preference

[`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)

#### Returns

`void`

***

### setPictureInPictureSize()

> **setPictureInPictureSize**(`preference`): `void`

Sets the picture in picture size.

#### Parameters

##### preference

[`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)

#### Returns

`void`

***

### setPictureInPictureStateHandler()

> **setPictureInPictureStateHandler**(`handler`): `void`

Sets the picture in picture state handler.

#### Parameters

##### handler

(`active`) => `void`

#### Returns

`void`

***

### setShortcutHandler()

> **setShortcutHandler**(`handler`): `void`

Sets the shortcut handler.

#### Parameters

##### handler

(`input`, `editing`) => `boolean`

#### Returns

`void`

***

### setSiteHandlers()

> **setSiteHandlers**(`handlers`): `void`

Sets the site handlers.

#### Parameters

##### handlers

###### allowNavigation

###### allowPictureInPicture

###### getPictureInPictureContentOverlaySelectors

###### handleAction

###### resolveNewWindowPolicy

###### transformRequest

###### transformRequestHeaders

#### Returns

`void`

***

### showOverlay()

> **showOverlay**(): `void`

Performs the show overlay operation.

#### Returns

`void`

***

### showPreferencesOverlay()

> **showPreferencesOverlay**(): `void`

Performs the show preferences overlay operation.

#### Returns

`void`

***

### showUpdateOverlay()

> **showUpdateOverlay**(`state`): `void`

Performs the show update overlay operation.

#### Parameters

##### state

[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)

#### Returns

`void`

***

### suspendViewerAlwaysOnTopForPictureInPicture()

> `private` **suspendViewerAlwaysOnTopForPictureInPicture**(): `void`

Performs the suspend viewer always on top for picture in picture operation.

#### Returns

`void`

***

### syncOverlayBounds()

> `private` **syncOverlayBounds**(): `void`

Performs the sync overlay bounds operation.

#### Returns

`void`

***

### syncSiteViewBounds()

> `private` **syncSiteViewBounds**(): `void`

Performs the sync site view bounds operation.

#### Returns

`void`

***

### syncVideoWindowBounds()

> `private` **syncVideoWindowBounds**(): `void`

Performs the sync video window bounds operation.

#### Returns

`void`

***

### toggleAppFullScreen()

> **toggleAppFullScreen**(): `void`

Toggles the app full screen.

#### Returns

`void`

***

### toggleGamePictureInPicture()

> **toggleGamePictureInPicture**(): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Toggles the game picture in picture.

#### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

***

### toggleInternalVideoPictureInPicture()

> `private` **toggleInternalVideoPictureInPicture**(): `Promise`\<\{ `mode`: `"window"`; `status`: `"exited"`; \} \| \{ `mode`: `"window"`; `status`: `"no-video"`; \} \| \{ `mode`: `"window"`; `status`: `"disabled"`; \} \| \{ `mode`: `"window"`; `status`: `"entered"`; \}\>

Toggles the internal video picture in picture.

#### Returns

`Promise`\<\{ `mode`: `"window"`; `status`: `"exited"`; \} \| \{ `mode`: `"window"`; `status`: `"no-video"`; \} \| \{ `mode`: `"window"`; `status`: `"disabled"`; \} \| \{ `mode`: `"window"`; `status`: `"entered"`; \}\>

***

### toggleOverlay()

> **toggleOverlay**(): `void`

Toggles the overlay.

#### Returns

`void`

***

### togglePictureInPicture()

> **togglePictureInPicture**(): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Toggles the picture in picture.

#### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

***

### togglePictureInPictureWithOverlay()

> `private` **togglePictureInPictureWithOverlay**(`toggle`): `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

Toggles the picture in picture with overlay.

#### Parameters

##### toggle

(`beforeEnter`) => `Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

#### Returns

`Promise`\<[`PictureInPictureResult`](/api/staging/3.0.0/app/Common/IPC/interfaces/PictureInPictureResult/)\>

***

### updateUpdateOverlay()

> **updateUpdateOverlay**(`state`): `void`

Updates the update overlay.

#### Parameters

##### state

[`ApplicationUpdatePanelState`](/api/staging/3.0.0/app/Common/IPC/interfaces/ApplicationUpdatePanelState/)

#### Returns

`void`

***

### useSiteBrowserIdentity()

> `private` **useSiteBrowserIdentity**(`webContents`, `options`): [`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)

Performs the use site browser identity operation.

#### Parameters

##### webContents

`WebContents`

##### options

[`SiteBrowserIdentityOptions`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/SiteBrowserIdentityOptions/)

#### Returns

[`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)
