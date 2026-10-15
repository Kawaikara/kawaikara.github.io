---
title: "PluginHost"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Represents the plugin host."
displayPath: "Main/Plugin/PluginHost"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Plugin/PluginHost/classes/PluginHost.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new PluginHost**(`siteManager`): `PluginHost`

Creates an instance of PluginHost.

#### Parameters

##### siteManager

[`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)

The site manager value.

#### Returns

`PluginHost`

## Properties

### installedBundles

> `private` `readonly` **installedBundles**: `Map`\<`string`, [`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/"><code>Map&lt;string, BundleDefinition&gt;</code></a></span>

The installed bundles value.

### siteManager

> `private` `readonly` **siteManager**: [`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/"><code>SiteManager</code></a></span>

The site manager value.

## Methods

### install()

> **install**(`bundle`): `void`

Installs the operation.

#### Parameters

##### bundle

[`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)

#### Returns

`void`

***

### replace()

> **replace**(`bundle`): `Promise`\<`void`\>

Replaces one Bundle transactionally and restores the previous definition on failure.

#### Parameters

##### bundle

[`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)

#### Returns

`Promise`\<`void`\>

***

### uninstall()

> **uninstall**(`bundleId`): `Promise`\<\{ `activeSiteId?`: `string`; `activeUrl?`: `string`; \}\>

Uninstalls the operation.

#### Parameters

##### bundleId

`string`

#### Returns

`Promise`\<\{ `activeSiteId?`: `string`; `activeUrl?`: `string`; \}\>
