---
title: "SiteManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates site behavior."
displayPath: "Main/Manager/SiteManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/SiteManager/classes/SiteManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new SiteManager**(`createContext`, `getPreferences`, `getCurrentAddress`): `SiteManager`

Creates an instance of SiteManager.

#### Parameters

##### createContext

[`SiteContextFactory`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/type-aliases/SiteContextFactory/)

The create context value.

##### getPreferences

() => [`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

Callback used to handle get preferences.

##### getCurrentAddress

() => `string`

Callback used to handle get current address.

#### Returns

`SiteManager`

## Properties

### activeContext?

> `private` `optional` **activeContext?**: [`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/"><code>SiteContext</code></a></span>

Whether the active context option is enabled.

### bundles

> `private` `readonly` **bundles**: `Map`\<`string`, [`RegisteredBundle`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredBundle/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredBundle/"><code>Map&lt;string, RegisteredBundle&gt;</code></a></span>

The bundles value.

***

### createContext

> `private` `readonly` **createContext**: [`SiteContextFactory`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/type-aliases/SiteContextFactory/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/type-aliases/SiteContextFactory/"><code>SiteContextFactory</code></a></span>

The create context value.

***

### currentLocale?

> `private` `optional` **currentLocale?**: [`SiteLocaleContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteLocaleContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteLocaleContext/"><code>SiteLocaleContext</code></a></span>

The current locale value.

***

### currentPagePipeline?

> `private` `optional` **currentPagePipeline?**: [`SitePagePipeline`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SitePagePipeline/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SitePagePipeline/"><code>SitePagePipeline</code></a></span>

The current page pipeline value.

***

### currentPagePolicyDisposables

> `private` `readonly` **currentPagePolicyDisposables**: [`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/"><code>Disposable[]</code></a></span>

The current page policy disposables value.

***

### currentPlugins

> `private` `readonly` **currentPlugins**: [`AbstractPlugin`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/classes/AbstractPlugin/)[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/classes/AbstractPlugin/"><code>AbstractPlugin[]</code></a></span>

The current plugins value.

***

### currentProvider?

> `private` `optional` **currentProvider?**: [`AbstractProvider`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/classes/AbstractProvider/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/classes/AbstractProvider/"><code>AbstractProvider</code></a></span>

The current provider value.

***

### currentRuntime?

> `private` `optional` **currentRuntime?**: [`SiteRuntimeProfile`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/SiteRuntimeProfile/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/SiteRuntimeProfile/"><code>SiteRuntimeProfile</code></a></span>

The current runtime value.

***

### currentRuntimeDisposables

> `private` `readonly` **currentRuntimeDisposables**: [`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/"><code>Disposable[]</code></a></span>

The current runtime disposables value.

***

### currentSiteId?

> `private` `optional` **currentSiteId?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The current site ID value.

***

### getCurrentAddress

> `private` `readonly` **getCurrentAddress**: () => `string`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>() =&gt; string</code></a></span>

Callback used to handle get current address.

#### Returns

`string`

***

### getPreferences

> `private` `readonly` **getPreferences**: () => [`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/"><code>() =&gt; PreferenceState</code></a></span>

Callback used to handle get preferences.

#### Returns

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

***

### pluginBrowserProfiles

> `private` `readonly` **pluginBrowserProfiles**: `Map`\<`string`, [`BrowserProfileInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/"><code>Map&lt;string, BrowserProfileInfo&gt;</code></a></span>

The plugin browser profiles value.

***

### runtimePlugins

> `private` `readonly` **runtimePlugins**: `Map`\<`string`, [`RegisteredRuntimePlugin`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredRuntimePlugin/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredRuntimePlugin/"><code>Map&lt;string, RegisteredRuntimePlugin&gt;</code></a></span>

The runtime plugins value.

***

### sites

> `private` `readonly` **sites**: `Map`\<`string`, [`RegisteredProvider`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredProvider/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredProvider/"><code>Map&lt;string, RegisteredProvider&gt;</code></a></span>

The sites value.

## Methods

### activatePlugins()

> `private` **activatePlugins**(`registration`, `context`): `Promise`\<`void`\>

Performs the activate plugins operation.

#### Parameters

##### registration

[`RegisteredProvider`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredProvider/)

##### context

[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)

#### Returns

`Promise`\<`void`\>

***

### allowNavigation()

> **allowNavigation**(`url`): `boolean`

Performs the allow navigation operation.

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### allowPictureInPicture()

> **allowPictureInPicture**(`url`): `boolean`

Performs the allow picture in picture operation.

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### applyCurrentProviderSettings()

> **applyCurrentProviderSettings**(): `Promise`\<`void`\>

Push the latest app-persisted values into the active Provider.

#### Returns

`Promise`\<`void`\>

***

### assertBundleIdAvailable()

> `private` **assertBundleIdAvailable**(`id`): `void`

Asserts the bundle ID available.

#### Parameters

##### id

`string`

#### Returns

`void`

***

### createBundleBrowserProfiles()

> `private` **createBundleBrowserProfiles**(`bundle`): [`BrowserProfileInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/)[]

Creates the bundle browser profiles.

#### Parameters

##### bundle

[`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)

#### Returns

[`BrowserProfileInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/)[]

***

### createPluginRegistration()

> `private` **createPluginRegistration**(`bundleId`, `definition`, `scopedProviderId?`): [`RegisteredRuntimePlugin`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredRuntimePlugin/)

Creates the plugin registration.

#### Parameters

##### bundleId

`string`

##### definition

[`PluginDefinition`](/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/PluginDefinition/)

##### scopedProviderId?

`string`

#### Returns

[`RegisteredRuntimePlugin`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredRuntimePlugin/)

***

### createRegistration()

> `private` **createRegistration**(`bundleId`, `definition`, `localProfileIds`, `grantedPermissions`): [`RegisteredProvider`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredProvider/)

Creates the registration.

#### Parameters

##### bundleId

`string`

##### definition

[`ProviderDefinition`](/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/ProviderDefinition/)

##### localProfileIds

`ReadonlySet`\<`string`\>

##### grantedPermissions

`ReadonlySet`\<`string`\>

#### Returns

[`RegisteredProvider`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredProvider/)

***

### currentProviderContext()

> `private` **currentProviderContext**(): [`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)

Performs the current provider context operation.

#### Returns

[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)

***

### currentProviderHasPermission()

> `private` **currentProviderHasPermission**(`permission`): `boolean`

Performs the current provider has permission operation.

#### Parameters

##### permission

[`SitePermission`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/SitePermission/)

#### Returns

`boolean`

***

### deactivateCurrentPlugins()

> `private` **deactivateCurrentPlugins**(): `Promise`\<`void`\>

Performs the deactivate current plugins operation.

#### Returns

`Promise`\<`void`\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Releases the operation.

#### Returns

`Promise`\<`void`\>

***

### disposeCurrentPagePolicy()

> `private` **disposeCurrentPagePolicy**(): `void`

Releases the current page policy.

#### Returns

`void`

***

### disposeCurrentRuntimeServices()

> `private` **disposeCurrentRuntimeServices**(): `void`

Releases the current runtime services.

#### Returns

`void`

***

### findBrowserProfile()

> `private` **findBrowserProfile**(`id`, `preferences`): [`BrowserProfileInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/) \| `undefined`

Finds the browser profile.

#### Parameters

##### id

`string`

##### preferences

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

#### Returns

[`BrowserProfileInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/) \| `undefined`

***

### getCurrentShortFormVideoContribution()

> **getCurrentShortFormVideoContribution**(): [`ShortFormVideoContribution`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ShortFormVideoContribution/) \| `undefined`

Returns the current short form video contribution.

#### Returns

[`ShortFormVideoContribution`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ShortFormVideoContribution/) \| `undefined`

***

### getCurrentShortFormVideoPublisher()

> **getCurrentShortFormVideoPublisher**(): `Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

Returns the current short form video publisher.

#### Returns

`Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

***

### getCurrentSiteId()

> **getCurrentSiteId**(): `string` \| `undefined`

Returns the current site ID.

#### Returns

`string` \| `undefined`

***

### getPictureInPictureContentOverlaySelectors()

> **getPictureInPictureContentOverlaySelectors**(): readonly `string`[]

Returns the picture in picture content overlay selectors.

#### Returns

readonly `string`[]

***

### getProviderSettings()

> `private` **getProviderSettings**(`providerId`): [`ProviderSettings`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ProviderSettings/)

Returns the provider settings.

#### Parameters

##### providerId

`string`

#### Returns

[`ProviderSettings`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ProviderSettings/)

***

### handleAction()

> **handleAction**(`action`): `Promise`\<`boolean`\>

Handles the action.

#### Parameters

##### action

`string`

#### Returns

`Promise`\<`boolean`\>

***

### has()

> **has**(`id`): `boolean`

Determines whether the unnamed declaration condition applies.

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### installBrowserIdentity()

> `private` **installBrowserIdentity**(`context`, `metadata`): `void`

Installs the browser identity.

#### Parameters

##### context

[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)

##### metadata

[`ProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderMetadata/)

#### Returns

`void`

***

### installPagePictureInPicturePolicy()

> `private` **installPagePictureInPicturePolicy**(`context`, `metadata`): () => `Promise`\<`void`\>

Installs the page picture in picture policy.

#### Parameters

##### context

[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)

##### metadata

[`ProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderMetadata/)

#### Returns

() => `Promise`\<`void`\>

***

### isCurrentSite()

> **isCurrentSite**(`id`): `boolean`

Determines whether the current site condition applies.

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### listBrowserDataPartitions()

> **listBrowserDataPartitions**(): `string`[]

Lists the browser data partitions.

#### Returns

`string`[]

***

### listBundles()

> **listBundles**(): [`BundleRuntimeInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleRuntimeInfo/)[]

Lists the bundles.

#### Returns

[`BundleRuntimeInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleRuntimeInfo/)[]

***

### listMenuItems()

> **listMenuItems**(): [`SiteMenuItem`](/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/)[]

Lists the menu items.

#### Returns

[`SiteMenuItem`](/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/)[]

***

### listPluginViewPanels()

> `private` **listPluginViewPanels**(`provider`): [`PluginViewPanelInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/PluginViewPanelInfo/)[]

Lists the plugin view panels.

#### Parameters

##### provider

[`ProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderMetadata/)

#### Returns

[`PluginViewPanelInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/PluginViewPanelInfo/)[]

***

### load()

> **load**(`id`): `Promise`\<`void`\>

Loads the operation.

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### openUrl()

> **openUrl**(`id`, `url`): `Promise`\<`void`\>

Opens the URL.

#### Parameters

##### id

`string`

##### url

`string`

#### Returns

`Promise`\<`void`\>

***

### refreshCurrentBrowserProfile()

> **refreshCurrentBrowserProfile**(): `Promise`\<`boolean`\>

Performs the refresh current browser profile operation.

#### Returns

`Promise`\<`boolean`\>

***

### registerBundle()

> **registerBundle**(`bundle`): `void`

Registers the bundle.

#### Parameters

##### bundle

[`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)

#### Returns

`void`

***

### resolveAddress()

> **resolveAddress**(`value`): [`ResolvedSiteAddress`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/ResolvedSiteAddress/) \| `undefined`

Resolves the address.

#### Parameters

##### value

`string`

#### Returns

[`ResolvedSiteAddress`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/ResolvedSiteAddress/) \| `undefined`

***

### resolveBrowserProfile()

> `private` **resolveBrowserProfile**(`registration`): [`SiteRuntimeProfile`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/SiteRuntimeProfile/)

Resolves the browser profile.

#### Parameters

##### registration

[`RegisteredProvider`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredProvider/)

#### Returns

[`SiteRuntimeProfile`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/SiteRuntimeProfile/)

***

### resolveBrowserProfileDataTarget()

> **resolveBrowserProfileDataTarget**(`profileId`): [`BrowserDataTarget`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/BrowserDataTarget/) \| `undefined`

Resolves the browser profile data target.

#### Parameters

##### profileId

`string`

#### Returns

[`BrowserDataTarget`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/BrowserDataTarget/) \| `undefined`

***

### resolveIsolatedSiteDataTarget()

> **resolveIsolatedSiteDataTarget**(`siteId`): [`BrowserDataTarget`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/BrowserDataTarget/) \| `undefined`

Resolves the isolated site data target.

#### Parameters

##### siteId

`string`

#### Returns

[`BrowserDataTarget`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/BrowserDataTarget/) \| `undefined`

***

### resolveLocales()

> `private` **resolveLocales**(`registration`): [`SiteLocaleContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteLocaleContext/)

Resolves the locales.

#### Parameters

##### registration

[`RegisteredProvider`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/RegisteredProvider/)

#### Returns

[`SiteLocaleContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteLocaleContext/)

***

### resolveNewWindowPolicy()

> **resolveNewWindowPolicy**(`url`): [`NewWindowPolicy`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/NewWindowPolicy/)

Resolves the new window policy.

#### Parameters

##### url

`string`

#### Returns

[`NewWindowPolicy`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/NewWindowPolicy/)

***

### rollbackBundleRegistration()

> **rollbackBundleRegistration**(`bundleId`): `void`

Removes staged registrations after an install failure or safe unload.

#### Parameters

##### bundleId

`string`

#### Returns

`void`

***

### transformRequest()

> **transformRequest**(`details`): [`SiteRequestRedirect`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`

Performs the transform request operation.

#### Parameters

##### details

[`SiteRequestDetails`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestRedirect`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`

***

### transformRequestHeaders()

> **transformRequestHeaders**(`details`): [`SiteRequestHeaders`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SiteRequestHeaders/) \| `undefined`

Performs the transform request headers operation.

#### Parameters

##### details

[`SiteRequestDetails`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestHeaders`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SiteRequestHeaders/) \| `undefined`

***

### unloadCurrent()

> `private` **unloadCurrent**(): `Promise`\<`void`\>

Performs the unload current operation.

#### Returns

`Promise`\<`void`\>

***

### unregisterBundle()

> **unregisterBundle**(`bundleId`): `Promise`\<\{ `activeSiteId?`: `string`; `activeUrl?`: `string`; \}\>

Removes a registered Bundle and tears down its active Provider first.
Browser Session data is intentionally preserved across development reloads.

#### Parameters

##### bundleId

`string`

#### Returns

`Promise`\<\{ `activeSiteId?`: `string`; `activeUrl?`: `string`; \}\>

***

### withPartitionSuspended()

> **withPartitionSuspended**\<`T`\>(`partition`, `operation`): `Promise`\<`T`\>

Performs the with partition suspended operation.

#### Type Parameters

##### T

`T`

#### Parameters

##### partition

`string`

##### operation

() => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>
