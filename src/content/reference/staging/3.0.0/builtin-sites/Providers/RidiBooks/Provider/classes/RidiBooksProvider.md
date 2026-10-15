---
title: "RidiBooksProvider"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Providers"
description: "Implements the ridi books site provider."
displayPath: "Providers/RidiBooks/Provider"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Providers/RidiBooks/Provider/classes/RidiBooksProvider.md"
symbolKind: "Class"
---
## Extends

- [`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/)

## Constructors

### Constructor

> **new RidiBooksProvider**(`context`): `RidiBooksProvider`

Creates an instance of AbstractUrlProvider.

#### Parameters

##### context

[`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)

#### Returns

`RidiBooksProvider`

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`constructor`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#constructor)

## Properties

### context

> `protected` `readonly` **context**: [`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/"><code>SiteContext</code></a></span>

The context value.

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`context`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#context)

### subscriptions

> `protected` `readonly` **subscriptions**: [`DisposableStore`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/DisposableStore/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/DisposableStore/"><code>DisposableStore</code></a></span>

The subscriptions value.

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`subscriptions`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#subscriptions)

***

### url

> `protected` `readonly` **url**: `"https://ridibooks.com/"` = `'https://ridibooks.com/'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;https://ridibooks.com/&quot;</code></span>

The URL value.

#### Overrides

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`url`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#url)

## Methods

### afterLoad()

> `protected` **afterLoad**(): `Promise`\<`void`\>

Performs the after load operation.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`afterLoad`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#afterload)

***

### allowNavigation()

> **allowNavigation**(`_url`): `boolean`

Block a main-frame navigation before Electron commits it.

#### Parameters

##### \_url

`string`

#### Returns

`boolean`

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`allowNavigation`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#allownavigation)

***

### allowPictureInPicture()

> **allowPictureInPicture**(`_url`): `boolean`

Decide whether PiP may start for the current page URL.

#### Parameters

##### \_url

`string`

#### Returns

`boolean`

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`allowPictureInPicture`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#allowpictureinpicture)

***

### beforeLoad()

> `protected` **beforeLoad**(): `Promise`\<`void`\>

Performs the before load operation.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`beforeLoad`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#beforeload)

***

### getShortFormVideoPublisher()

> **getShortFormVideoPublisher**(): `Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

Resolve the active short video's publisher for the standard quick-ban action.

#### Returns

`Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`getShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#getshortformvideopublisher)

***

### load()

> **load**(): `Promise`\<`void`\>

Loads the operation.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`load`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#load)

***

### onAction()

> **onAction**(`_action`): `Promise`\<`boolean`\>

Handle an action URL created with context.actions.createUrl().

#### Parameters

##### \_action

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`onAction`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#onaction)

***

### onBeforeRequest()

> **onBeforeRequest**(`_details`): [`SiteRequestRedirect`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`

Optionally cancel or redirect a network request before it is sent.

#### Parameters

##### \_details

[`SiteRequestDetails`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestRedirect`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`onBeforeRequest`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#onbeforerequest)

***

### onBeforeSendHeaders()

> **onBeforeSendHeaders**(`_details`): [`SiteRequestHeaders`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/SiteRequestHeaders/) \| `undefined`

Optionally replace request headers for the current site.

#### Parameters

##### \_details

[`SiteRequestDetails`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestHeaders`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/SiteRequestHeaders/) \| `undefined`

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`onBeforeSendHeaders`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#onbeforesendheaders)

***

### onNewWindow()

> **onNewWindow**(`url`): [`NewWindowPolicy`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/NewWindowPolicy/)

Handles the new window.

#### Parameters

##### url

`string`

#### Returns

[`NewWindowPolicy`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/NewWindowPolicy/)

#### Overrides

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`onNewWindow`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#onnewwindow)

***

### onSettingsChanged()

> **onSettingsChanged**(`_settings`): `Promise`\<`void`\>

Receive this Provider's namespaced settings before load and whenever the
user saves a change. Providers should treat missing keys as defaults.

#### Parameters

##### \_settings

[`ProviderSettings`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/ProviderSettings/)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`onSettingsChanged`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#onsettingschanged)

***

### requirePage()

> `protected` **requirePage**(): [`SitePagePipeline`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePagePipeline/)

Performs the require page operation.

#### Returns

[`SitePagePipeline`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePagePipeline/)

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`requirePage`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#requirepage)

***

### unload()

> **unload**(): `Promise`\<`void`\>

Performs the unload operation.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`unload`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#unload)
