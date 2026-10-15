---
title: "InitializedApplication"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the initialized application contract."
displayPath: "Main/Functional/ApplicationInitialization"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/ApplicationInitialization/interfaces/InitializedApplication.md"
symbolKind: "Interface"
---
## Extends

- [`PreInitializedApplication`](/api/staging/3.0.0/app/Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication/)

## Properties

### applicationLog

> `readonly` **applicationLog**: `LogFunctions`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>LogFunctions</code></span>

The application log value.

#### Inherited from

[`PreInitializedApplication`](/api/staging/3.0.0/app/Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication/).[`applicationLog`](/api/staging/3.0.0/app/Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication/#applicationlog)

### development

> `readonly` **development**: [`BundleDevelopmentManager`](/api/staging/3.0.0/app/Main/Manager/BundleDevelopmentManager/classes/BundleDevelopmentManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/BundleDevelopmentManager/classes/BundleDevelopmentManager/"><code>BundleDevelopmentManager</code></a></span>

The development value.

***

### discordPresence

> `readonly` **discordPresence**: [`DiscordPresenceManager`](/api/staging/3.0.0/app/Main/Manager/DiscordPresenceManager/classes/DiscordPresenceManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/DiscordPresenceManager/classes/DiscordPresenceManager/"><code>DiscordPresenceManager</code></a></span>

The discord presence value.

***

### ipc

> `readonly` **ipc**: [`IpcManager`](/api/staging/3.0.0/app/Main/Manager/IPCManager/classes/IpcManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/IPCManager/classes/IpcManager/"><code>IpcManager</code></a></span>

The IPC value.

***

### logging

> `readonly` **logging**: [`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/"><code>LoggingManager</code></a></span>

The logging value.

#### Inherited from

[`PreInitializedApplication`](/api/staging/3.0.0/app/Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication/).[`logging`](/api/staging/3.0.0/app/Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication/#logging)

***

### preferenceFilePath

> `readonly` **preferenceFilePath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The preference file path value.

#### Inherited from

[`PreInitializedApplication`](/api/staging/3.0.0/app/Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication/).[`preferenceFilePath`](/api/staging/3.0.0/app/Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication/#preferencefilepath)

***

### preferences

> `readonly` **preferences**: [`PreferenceManager`](/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/PreferenceManager/classes/PreferenceManager/"><code>PreferenceManager</code></a></span>

The preferences value.

***

### shortcuts

> `readonly` **shortcuts**: [`ShortcutManager`](/api/staging/3.0.0/app/Main/Manager/ShortcutManager/classes/ShortcutManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/ShortcutManager/classes/ShortcutManager/"><code>ShortcutManager</code></a></span>

The shortcuts value.

***

### sites

> `readonly` **sites**: [`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/"><code>SiteManager</code></a></span>

The sites value.

***

### updates

> `readonly` **updates**: [`UpdateManager`](/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/UpdateManager/classes/UpdateManager/"><code>UpdateManager</code></a></span>

The updates value.

***

### windows

> `readonly` **windows**: [`WindowManager`](/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/WindowManager/classes/WindowManager/"><code>WindowManager</code></a></span>

The Windows value.

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Releases the operation.

#### Returns

`Promise`\<`void`\>
