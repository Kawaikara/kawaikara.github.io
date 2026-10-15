---
title: "ChzzkProvider"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Providers"
description: "Implements the CHZZK site provider."
displayPath: "Providers/Chzzk/Provider"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Providers/Chzzk/Provider/classes/ChzzkProvider.md"
symbolKind: "Class"
---
## Extends

- [`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/)

## Constructors

### Constructor

> **new ChzzkProvider**(`context`): `ChzzkProvider`

Creates an instance of AbstractUrlProvider.

#### Parameters

##### context

[`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)

#### Returns

`ChzzkProvider`

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`constructor`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#constructor)

## Properties

### autoAdvanceClips

> `private` **autoAdvanceClips**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `true`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The auto advance clips value.

### clipsInjectionInstalled

> `private` **clipsInjectionInstalled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The clips injection installed value.

***

### context

> `protected` `readonly` **context**: [`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/"><code>SiteContext</code></a></span>

The context value.

#### Inherited from

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`context`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#context)

***

### qualityBypassTarget

> `private` **qualityBypassTarget**: `"1080p"` \| `"720p"` \| `undefined` = `'1080p'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;1080p&quot; | &quot;720p&quot; | undefined</code></span>

The quality bypass target value.

***

### qualityRedirectCount

> `private` **qualityRedirectCount**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `0`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The quality redirect count value.

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

> `protected` `readonly` **url**: `"https://chzzk.naver.com/"` = `'https://chzzk.naver.com/'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;https://chzzk.naver.com/&quot;</code></span>

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

### clipsOptions()

> `private` **clipsOptions**(`announce`): [`ChzzkClipsInjectionOptions`](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Clips/interfaces/ChzzkClipsInjectionOptions/)

Performs the clips options operation.

#### Parameters

##### announce

`boolean`

#### Returns

[`ChzzkClipsInjectionOptions`](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Clips/interfaces/ChzzkClipsInjectionOptions/)

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

#### Overrides

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

> **onBeforeRequest**(`details`): [`SiteRequestRedirect`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`

Handles the before request.

#### Parameters

##### details

[`SiteRequestDetails`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteRequestDetails/)

#### Returns

[`SiteRequestRedirect`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteRequestRedirect/) \| `undefined`

#### Overrides

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

### runClipsCommand()

> `private` **runClipsCommand**(`command`): `Promise`\<`void`\>

Runs the clips command.

#### Parameters

##### command

`"previous"` \| `"next"` \| `"announce"`

#### Returns

`Promise`\<`void`\>

***

### setQualityBypassTarget()

> `private` **setQualityBypassTarget**(`target`, `reason`): `void`

Sets the quality bypass target.

#### Parameters

##### target

`"1080p"` \| `"720p"` \| `undefined`

##### reason

`string`

#### Returns

`void`

***

### unload()

> **unload**(): `Promise`\<`void`\>

Performs the unload operation.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AbstractUrlProvider`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/).[`unload`](/api/staging/3.0.0/builtin-sites/Providers/YouTubeMusic/Provider/InternalDeclarations/classes/AbstractUrlProvider/#unload)
