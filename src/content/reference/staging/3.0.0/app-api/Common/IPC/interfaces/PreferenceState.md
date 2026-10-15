---
title: "PreferenceState"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the preference state contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/PreferenceState.md"
symbolKind: "Interface"
---
## Properties

### alwaysOnTop

> `readonly` **alwaysOnTop**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the always on top option is enabled.

### appLocale

> `readonly` **appLocale**: [`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/"><code>AppLocale</code></a></span>

The app locale value.

***

### appTheme

> `readonly` **appTheme**: [`AppTheme`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/"><code>AppTheme</code></a></span>

The app theme value.

***

### automaticUpdates

> `readonly` **automaticUpdates**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the automatic updates option is enabled.

***

### browserProfiles

> `readonly` **browserProfiles**: readonly [`UserBrowserProfile`](/api/staging/3.0.0/app/Common/IPC/interfaces/UserBrowserProfile/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/UserBrowserProfile/"><code>readonly UserBrowserProfile[]</code></a></span>

The browser profiles value.

***

### closeMenuOnEscape

> `readonly` **closeMenuOnEscape**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the close menu on escape option is enabled.

***

### closeMenuOnOutsideClick

> `readonly` **closeMenuOnOutsideClick**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the close menu on outside click option is enabled.

***

### defaultSiteId

> `readonly` **defaultSiteId**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The default site ID value.

***

### developmentInspectorEnabled

> `readonly` **developmentInspectorEnabled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Opens the Main-process Node Inspector while development mode is enabled.

***

### developmentInspectorPort

> `readonly` **developmentInspectorPort**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

Loopback-only Inspector port used by VS Code and compatible debuggers.

***

### developmentMode

> `readonly` **developmentMode**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Enables trusted local Bundle projects and the in-app development host.

***

### devToolsMode

> `readonly` **devToolsMode**: [`DevToolsMode`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/DevToolsMode/"><code>DevToolsMode</code></a></span>

The dev tools mode value.

***

### graphicsMode

> `readonly` **graphicsMode**: [`GraphicsMode`](/api/staging/3.0.0/app/Common/IPC/type-aliases/GraphicsMode/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/GraphicsMode/"><code>GraphicsMode</code></a></span>

Selects native GPU, capture-compatible GPU, or process-wide software rendering.

***

### logLevel

> `readonly` **logLevel**: [`LogLevelPreference`](/api/staging/3.0.0/app/Common/IPC/type-aliases/LogLevelPreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/LogLevelPreference/"><code>LogLevelPreference</code></a></span>

The log level value.

***

### menuCategoryOrder

> `readonly` **menuCategoryOrder**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Category ids in the order selected by the user. Unknown ids are ignored.

***

### menuSiteOrder

> `readonly` **menuSiteOrder**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Site ids in the order selected by the user, applied within each category.

***

### openDevToolsAutomatically

> `readonly` **openDevToolsAutomatically**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Opens site DevTools at startup and reconnects it when the active site changes.

***

### openMenuOnStartup

> `readonly` **openMenuOnStartup**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the open menu on startup option is enabled.

***

### pictureInPicturePlacement

> `readonly` **pictureInPicturePlacement**: [`PictureInPicturePlacementPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference/"><code>PictureInPicturePlacementPreference</code></a></span>

The picture in picture placement value.

***

### pictureInPicturePortraitSize

> `readonly` **pictureInPicturePortraitSize**: [`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/"><code>PictureInPictureSizePreference</code></a></span>

The picture in picture portrait size value.

***

### pictureInPictureSize

> `readonly` **pictureInPictureSize**: [`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/"><code>PictureInPictureSizePreference</code></a></span>

The picture in picture size value.

***

### ~~pluginLocales~~

> `readonly` **pluginLocales**: `Readonly`\<`Record`\<`string`, [`ScopedLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ScopedLocale/)\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/ScopedLocale/"><code>Readonly&lt;Record&lt;string, ScopedLocale&gt;&gt;</code></a></span>

#### Deprecated

Locale overrides are cleared when global preferences are saved.

***

### providerSettings

> `readonly` **providerSettings**: `Readonly`\<`Record`\<`string`, [`ProviderSettingRecord`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ProviderSettingRecord/)\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/ProviderSettingRecord/"><code>Readonly&lt;Record&lt;string, ProviderSettingRecord&gt;&gt;</code></a></span>

App-persisted values, namespaced by Provider id for Bundle extensibility.

***

### shortcuts

> `readonly` **shortcuts**: `Readonly`\<`Record`\<`string`, `string`\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>Readonly&lt;Record&lt;string, string&gt;&gt;</code></a></span>

The shortcuts value.

***

### siteBrowserProfiles

> `readonly` **siteBrowserProfiles**: `Readonly`\<`Record`\<`string`, `string`\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>Readonly&lt;Record&lt;string, string&gt;&gt;</code></a></span>

Values are "isolated", user:<id>, or plugin:<plugin-id>:<profile-id>.

***

### ~~siteLocales~~

> `readonly` **siteLocales**: `Readonly`\<`Record`\<`string`, [`ScopedLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ScopedLocale/)\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/ScopedLocale/"><code>Readonly&lt;Record&lt;string, ScopedLocale&gt;&gt;</code></a></span>

#### Deprecated

Locale overrides are cleared when global preferences are saved.

***

### updateChannel

> `readonly` **updateChannel**: [`ReleaseChannel`](/api/staging/3.0.0/app/Common/BuildConfig/type-aliases/ReleaseChannel/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/BuildConfig/type-aliases/ReleaseChannel/"><code>ReleaseChannel</code></a></span>

The update channel value.

***

### videoControlsLayout

> `readonly` **videoControlsLayout**: [`VideoControlsLayout`](/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoControlsLayout/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/VideoControlsLayout/"><code>VideoControlsLayout</code></a></span>

Inline controls reserve space below video; overlay controls float and auto-hide.

***

### videoOverlayHideSeconds

> `readonly` **videoOverlayHideSeconds**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

Delay before overlay Video controls disappear, expressed in seconds.

***

### videoSeekSeconds

> `readonly` **videoSeekSeconds**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

Base distance used by the Video view's backward/forward seek shortcuts.

***

### videoVolume

> `readonly` **videoVolume**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

Last volume selected in the Video view, from 0 through 100.
