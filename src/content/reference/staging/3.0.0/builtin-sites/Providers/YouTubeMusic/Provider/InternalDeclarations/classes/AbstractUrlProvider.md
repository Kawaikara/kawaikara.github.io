---
title: "Abstract Class: AbstractUrlProvider"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Providers"
description: "Standard URL-backed Provider lifecycle with application-owned page hooks."
displayPath: "Providers/YouTubeMusic/Provider/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider.md"
symbolKind: "Reference"
---
## Extends

- [`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/)

## Extended by

- [`AppleMusicProvider`](/api/staging/3.0.0/builtin-sites/Providers/AppleMusic/Provider/classes/AppleMusicProvider/)
- [`AppleTvProvider`](/api/staging/3.0.0/builtin-sites/Providers/AppleTv/Provider/classes/AppleTvProvider/)
- [`ChzzkProvider`](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Provider/classes/ChzzkProvider/)
- [`CoupangPlayProvider`](/api/staging/3.0.0/builtin-sites/Providers/CoupangPlay/Provider/classes/CoupangPlayProvider/)
- [`CrunchyrollProvider`](/api/staging/3.0.0/builtin-sites/Providers/Crunchyroll/Provider/classes/CrunchyrollProvider/)
- [`DisneyPlusProvider`](/api/staging/3.0.0/builtin-sites/Providers/DisneyPlus/Provider/classes/DisneyPlusProvider/)
- [`LaftelProvider`](/api/staging/3.0.0/builtin-sites/Providers/Laftel/Provider/classes/LaftelProvider/)
- [`NetflixProvider`](/api/staging/3.0.0/builtin-sites/Providers/Netflix/Provider/classes/NetflixProvider/)
- [`PrimeVideoProvider`](/api/staging/3.0.0/builtin-sites/Providers/PrimeVideo/Provider/classes/PrimeVideoProvider/)
- [`RidiBooksProvider`](/api/staging/3.0.0/builtin-sites/Providers/RidiBooks/Provider/classes/RidiBooksProvider/)
- [`SpotifyProvider`](/api/staging/3.0.0/builtin-sites/Providers/Spotify/Provider/classes/SpotifyProvider/)
- [`TvingProvider`](/api/staging/3.0.0/builtin-sites/Providers/Tving/Provider/classes/TvingProvider/)
- [`TwitchProvider`](/api/staging/3.0.0/builtin-sites/Providers/Twitch/Provider/classes/TwitchProvider/)
- [`WatchaProvider`](/api/staging/3.0.0/builtin-sites/Providers/Watcha/Provider/classes/WatchaProvider/)
- [`WavveProvider`](/api/staging/3.0.0/builtin-sites/Providers/Wavve/Provider/classes/WavveProvider/)
- [`YouTubeProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Provider/classes/YouTubeProvider/)
- [`YouTubeMusicProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/classes/YouTubeMusicProvider/)

## Constructors

### Constructor

> **new AbstractUrlProvider**(`context`): `AbstractUrlProvider`

Creates an instance of AbstractUrlProvider.

#### Parameters

##### context

[`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)

#### Returns

`AbstractUrlProvider`

#### Overrides

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`constructor`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#constructor)

## Properties

### context

> `protected` `readonly` **context**: [`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/"><code>SiteContext</code></a></span>

The context value.

#### Inherited from

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`context`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#context)

### subscriptions

> `protected` `readonly` **subscriptions**: [`DisposableStore`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/DisposableStore/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/DisposableStore/"><code>DisposableStore</code></a></span>

The subscriptions value.

#### Inherited from

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`subscriptions`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#subscriptions)

***

### url

> `abstract` `protected` `readonly` **url**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The URL value.

## Methods

### afterLoad()

> `protected` **afterLoad**(): `Promise`\<`void`\>

Performs the after load operation.

#### Returns

`Promise`\<`void`\>

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

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`allowNavigation`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#allownavigation)

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

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`allowPictureInPicture`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#allowpictureinpicture)

***

### beforeLoad()

> `protected` **beforeLoad**(): `Promise`\<`void`\>

Performs the before load operation.

#### Returns

`Promise`\<`void`\>

***

### getShortFormVideoPublisher()

> **getShortFormVideoPublisher**(): `Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

Resolve the active short video's publisher for the standard quick-ban action.

#### Returns

`Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

#### Inherited from

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`getShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#getshortformvideopublisher)

***

### load()

> **load**(): `Promise`\<`void`\>

Loads the operation.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`load`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#load)

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

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`onAction`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#onaction)

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

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`onBeforeRequest`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#onbeforerequest)

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

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`onBeforeSendHeaders`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#onbeforesendheaders)

***

### onNewWindow()

> **onNewWindow**(`url`): [`NewWindowPolicy`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/NewWindowPolicy/)

Decide how a target=_blank/window.open navigation should be handled.

#### Parameters

##### url

`string`

#### Returns

[`NewWindowPolicy`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/NewWindowPolicy/)

#### Inherited from

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`onNewWindow`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#onnewwindow)

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

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`onSettingsChanged`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#onsettingschanged)

***

### requirePage()

> `protected` **requirePage**(): [`SitePagePipeline`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePagePipeline/)

Performs the require page operation.

#### Returns

[`SitePagePipeline`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePagePipeline/)

#### Inherited from

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`requirePage`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#requirepage)

***

### unload()

> **unload**(): `Promise`\<`void`\>

Performs the unload operation.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AbstractProvider`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/).[`unload`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/AbstractProvider/#unload)
