---
title: "Abstract Class: AbstractProvider"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Provider"
description: "Implements the abstract site provider."
displayPath: "Provider"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Provider/classes/AbstractProvider.md"
symbolKind: "Reference"
---
## Extended by

- [`AbstractUrlProvider`](/api/staging/3.0.0/site-api/Provider/classes/AbstractUrlProvider/)

## Constructors

### Constructor

> `protected` **new AbstractProvider**(`context`): `AbstractProvider`

Creates an instance of AbstractProvider.

#### Parameters

##### context

[`SiteContext`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteContext/)

The context value.

#### Returns

`AbstractProvider`

## Properties

### context

> `protected` `readonly` **context**: [`SiteContext`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteContext/"><code>SiteContext</code></a></span>

The context value.

### subscriptions

> `protected` `readonly` **subscriptions**: [`DisposableStore`](/api/staging/3.0.0/site-api/Disposable/classes/DisposableStore/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Disposable/classes/DisposableStore/"><code>DisposableStore</code></a></span>

The subscriptions value.

## Methods

### allowNavigation()

> **allowNavigation**(`_url`): `boolean`

Block a main-frame navigation before Electron commits it.

#### Parameters

##### \_url

`string`

#### Returns

`boolean`

***

### allowPictureInPicture()

> **allowPictureInPicture**(`_url`): `boolean`

Decide whether PiP may start for the current page URL.

#### Parameters

##### \_url

`string`

#### Returns

`boolean`

***

### getShortFormVideoPublisher()

> **getShortFormVideoPublisher**(): `Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/site-api/ShortFormVideo/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

Resolve the active short video's publisher for the standard quick-ban action.

#### Returns

`Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/site-api/ShortFormVideo/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

***

### load()

> `abstract` **load**(): `Promise`\<`void`\>

Loads the operation.

#### Returns

`Promise`\<`void`\>

***

### onAction()

> **onAction**(`_action`): `Promise`\<`boolean`\>

Handle an action URL created with context.actions.createUrl().

#### Parameters

##### \_action

`string`

#### Returns

`Promise`\<`boolean`\>

***

### onBeforeRequest()

> **onBeforeRequest**(`_details`): [`SiteRequestRedirect`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteRequestRedirect/) \| `undefined`

Optionally cancel or redirect a network request before it is sent.

#### Parameters

##### \_details

[`SiteRequestDetails`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestRedirect`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteRequestRedirect/) \| `undefined`

***

### onBeforeSendHeaders()

> **onBeforeSendHeaders**(`_details`): [`SiteRequestHeaders`](/api/staging/3.0.0/site-api/Provider/type-aliases/SiteRequestHeaders/) \| `undefined`

Optionally replace request headers for the current site.

#### Parameters

##### \_details

[`SiteRequestDetails`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestHeaders`](/api/staging/3.0.0/site-api/Provider/type-aliases/SiteRequestHeaders/) \| `undefined`

***

### onNewWindow()

> **onNewWindow**(`url`): [`NewWindowPolicy`](/api/staging/3.0.0/site-api/SiteContext/type-aliases/NewWindowPolicy/)

Decide how a target=_blank/window.open navigation should be handled.

#### Parameters

##### url

`string`

#### Returns

[`NewWindowPolicy`](/api/staging/3.0.0/site-api/SiteContext/type-aliases/NewWindowPolicy/)

***

### onSettingsChanged()

> **onSettingsChanged**(`_settings`): `Promise`\<`void`\>

Receive this Provider's namespaced settings before load and whenever the
user saves a change. Providers should treat missing keys as defaults.

#### Parameters

##### \_settings

[`ProviderSettings`](/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderSettings/)

#### Returns

`Promise`\<`void`\>

***

### requirePage()

> `protected` **requirePage**(): [`SitePagePipeline`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SitePagePipeline/)

Performs the require page operation.

#### Returns

[`SitePagePipeline`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SitePagePipeline/)

***

### unload()

> **unload**(): `Promise`\<`void`\>

Performs the unload operation.

#### Returns

`Promise`\<`void`\>
