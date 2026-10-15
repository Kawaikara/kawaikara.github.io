---
title: "IpcManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates IPC behavior."
displayPath: "Main/Manager/IPCManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/IPCManager/classes/IpcManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new IpcManager**(`bundles`, `sites`, `windows`, `preferences`, `downloads`, `developerLinks`, `updates`, `shortcuts`, `videoLibrary`, `logging`, `data`, `development`): `IpcManager`

Creates an instance of IpcManager.

#### Parameters

##### bundles

[`BundleManager`](/api/staging/3.0.0/app/Main/Manager/BundleManager/classes/BundleManager/)

The bundles value.

##### sites

[`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)

The sites value.

##### windows

[`WindowManager`](/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/)

The Windows value.

##### preferences

[`PreferenceManager`](/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/)

The preferences value.

##### downloads

[`ExternalDownloaderManager`](/api/staging/3.0.0/app/Main/Manager/ExternalDownloaderManager/classes/ExternalDownloaderManager/)

The downloads value.

##### developerLinks

[`DeveloperLinkManager`](/api/staging/3.0.0/app/Main/Manager/DeveloperLinkManager/classes/DeveloperLinkManager/)

The developer links value.

##### updates

[`UpdateManager`](/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/)

The updates value.

##### shortcuts

[`ShortcutManager`](/api/staging/3.0.0/app/Main/Manager/ShortcutManager/classes/ShortcutManager/)

The shortcuts value.

##### videoLibrary

[`VideoLibraryManager`](/api/staging/3.0.0/app/Main/Manager/VideoLibraryManager/classes/VideoLibraryManager/)

The video library value.

##### logging

[`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)

The logging value.

##### data

[`ApplicationDataManager`](/api/staging/3.0.0/app/Main/Manager/ApplicationDataManager/classes/ApplicationDataManager/)

The data value.

##### development

[`BundleDevelopmentManager`](/api/staging/3.0.0/app/Main/Manager/BundleDevelopmentManager/classes/BundleDevelopmentManager/)

The development value.

#### Returns

`IpcManager`

## Properties

### bundles

> `private` `readonly` **bundles**: [`BundleManager`](/api/staging/3.0.0/app/Main/Manager/BundleManager/classes/BundleManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/BundleManager/classes/BundleManager/"><code>BundleManager</code></a></span>

The bundles value.

### data

> `private` `readonly` **data**: [`ApplicationDataManager`](/api/staging/3.0.0/app/Main/Manager/ApplicationDataManager/classes/ApplicationDataManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/ApplicationDataManager/classes/ApplicationDataManager/"><code>ApplicationDataManager</code></a></span>

The data value.

***

### developerLinks

> `private` `readonly` **developerLinks**: [`DeveloperLinkManager`](/api/staging/3.0.0/app/Main/Manager/DeveloperLinkManager/classes/DeveloperLinkManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/DeveloperLinkManager/classes/DeveloperLinkManager/"><code>DeveloperLinkManager</code></a></span>

The developer links value.

***

### development

> `private` `readonly` **development**: [`BundleDevelopmentManager`](/api/staging/3.0.0/app/Main/Manager/BundleDevelopmentManager/classes/BundleDevelopmentManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/BundleDevelopmentManager/classes/BundleDevelopmentManager/"><code>BundleDevelopmentManager</code></a></span>

The development value.

***

### disposeDevelopmentSubscription?

> `private` `optional` **disposeDevelopmentSubscription?**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle dispose development subscription.

#### Returns

`void`

***

### downloads

> `private` `readonly` **downloads**: [`ExternalDownloaderManager`](/api/staging/3.0.0/app/Main/Manager/ExternalDownloaderManager/classes/ExternalDownloaderManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/ExternalDownloaderManager/classes/ExternalDownloaderManager/"><code>ExternalDownloaderManager</code></a></span>

The downloads value.

***

### logging

> `private` `readonly` **logging**: [`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/"><code>LoggingManager</code></a></span>

The logging value.

***

### preferences

> `private` `readonly` **preferences**: [`PreferenceManager`](/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/"><code>PreferenceManager</code></a></span>

The preferences value.

***

### relaunchScheduled

> `private` **relaunchScheduled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The relaunch scheduled value.

***

### shortcuts

> `private` `readonly` **shortcuts**: [`ShortcutManager`](/api/staging/3.0.0/app/Main/Manager/ShortcutManager/classes/ShortcutManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/ShortcutManager/classes/ShortcutManager/"><code>ShortcutManager</code></a></span>

The shortcuts value.

***

### sites

> `private` `readonly` **sites**: [`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/"><code>SiteManager</code></a></span>

The sites value.

***

### updates

> `private` `readonly` **updates**: [`UpdateManager`](/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/"><code>UpdateManager</code></a></span>

The updates value.

***

### videoLibrary

> `private` `readonly` **videoLibrary**: [`VideoLibraryManager`](/api/staging/3.0.0/app/Main/Manager/VideoLibraryManager/classes/VideoLibraryManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/VideoLibraryManager/classes/VideoLibraryManager/"><code>VideoLibraryManager</code></a></span>

The video library value.

***

### windows

> `private` `readonly` **windows**: [`WindowManager`](/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/"><code>WindowManager</code></a></span>

The Windows value.

## Methods

### dispose()

> **dispose**(): `void`

Releases the operation.

#### Returns

`void`

***

### handleEditingChanged()

> `private` `readonly` **handleEditingChanged**(`event`, `editing`): `void`

The handle editing changed value.

#### Parameters

##### event

`IpcMainEvent`

##### editing

`unknown`

#### Returns

`void`

***

### handleVideoPresentationChanged()

> `private` `readonly` **handleVideoPresentationChanged**(`event`, `state`): `void`

The handle video presentation changed value.

#### Parameters

##### event

`IpcMainEvent`

##### state

`unknown`

#### Returns

`void`

***

### initialize()

> **initialize**(): `void`

Initializes the operation.

#### Returns

`void`

***

### scheduleApplicationRelaunch()

> `private` **scheduleApplicationRelaunch**(): `void`

Schedules the application relaunch.

#### Returns

`void`
