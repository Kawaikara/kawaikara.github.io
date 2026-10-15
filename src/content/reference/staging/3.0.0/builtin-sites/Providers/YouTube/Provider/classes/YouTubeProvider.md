---
title: "YouTubeProvider"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Providers"
description: "Implements the you tube site provider."
displayPath: "Providers/YouTube/Provider"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Providers/YouTube/Provider/classes/YouTubeProvider.md"
symbolKind: "Class"
---
## Extends

- [`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/)

## Constructors

### Constructor

> **new YouTubeProvider**(`context`): `YouTubeProvider`

Creates an instance of AbstractUrlProvider.

#### Parameters

##### context

[`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)

#### Returns

`YouTubeProvider`

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`constructor`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#constructor)

## Properties

### autoAdvanceShorts

> `private` **autoAdvanceShorts**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `true`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The auto advance shorts value.

### bannedPublishers

> `private` **bannedPublishers**: readonly [`ProviderSettingListItem`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ProviderSettingListItem/)[] = `[]`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ProviderSettingListItem/"><code>readonly ProviderSettingListItem[]</code></a></span>

The banned publishers value.

***

### context

> `protected` `readonly` **context**: [`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/"><code>SiteContext</code></a></span>

The context value.

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`context`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#context)

***

### injectionInstalled

> `private` **injectionInstalled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The injection installed value.

***

### subscriptions

> `protected` `readonly` **subscriptions**: [`DisposableStore`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/DisposableStore/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/classes/DisposableStore/"><code>DisposableStore</code></a></span>

The subscriptions value.

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`subscriptions`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#subscriptions)

***

### url

> `protected` `readonly` **url**: `"https://www.youtube.com/"` = `'https://www.youtube.com/'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;https://www.youtube.com/&quot;</code></span>

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

> **allowPictureInPicture**(`value`): `boolean`

Performs the allow picture in picture operation.

#### Parameters

##### value

`string`

#### Returns

`boolean`

#### Overrides

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`allowPictureInPicture`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#allowpictureinpicture)

***

### beforeLoad()

> `protected` **beforeLoad**(): `Promise`\<`void`\>

Performs the before load operation.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`beforeLoad`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#beforeload)

***

### getShortFormVideoPublisher()

> **getShortFormVideoPublisher**(): `Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

Returns the short form video publisher.

#### Returns

`Promise`\<[`ShortFormVideoPublisher`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoPublisher/) \| `undefined`\>

#### Overrides

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

> **onAction**(`action`): `Promise`\<`boolean`\>

Handles the action.

#### Parameters

##### action

`string`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

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

> **onSettingsChanged**(`settings`): `Promise`\<`void`\>

Handles the settings changed.

#### Parameters

##### settings

[`ProviderSettings`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/ProviderSettings/)

#### Returns

`Promise`\<`void`\>

#### Overrides

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

### runShortsCommand()

> `private` **runShortsCommand**(`command`): `Promise`\<`void`\>

Runs the shorts command.

#### Parameters

##### command

`"previous"` \| `"next"` \| `"announce"` \| `"ban"`

#### Returns

`Promise`\<`void`\>

***

### shortsOptions()

> `private` **shortsOptions**(`announce`): [`YouTubeShortsInjectionOptions`](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/interfaces/YouTubeShortsInjectionOptions/)

Performs the shorts options operation.

#### Parameters

##### announce

`boolean`

#### Returns

[`YouTubeShortsInjectionOptions`](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/interfaces/YouTubeShortsInjectionOptions/)

***

### unload()

> **unload**(): `Promise`\<`void`\>

Performs the unload operation.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`unload`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#unload)
