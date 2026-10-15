---
title: "KawaiCoupangPlayDesc"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · data"
description: "Defined in: typescript_src/data/site_descriptor.ts:467"
displayPath: "data/site_descriptor"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/data/site_descriptor/classes/KawaiCoupangPlayDesc.md"
symbolKind: "Class"
---
## Extends

- [`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/)

## Constructors

### Constructor

> **new KawaiCoupangPlayDesc**(): `KawaiCoupangPlayDesc`

#### Returns

`KawaiCoupangPlayDesc`

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`constructor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#constructor)

## Properties

### \_customCallback

> **\_customCallback**: ((`e`, `tag`) => `void`) \| `null` = `null`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>((e, tag) =&gt; void) | null</code></a></span>

Defined in: [typescript\_src/data/site\_descriptor.ts:470](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L470)

### \_LoginBtnInjectFn

> **\_LoginBtnInjectFn**: (() => `void`) \| `null` = `null`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(() =&gt; void) | null</code></a></span>

Defined in: [typescript\_src/data/site\_descriptor.ts:469](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L469)

***

### category

> `readonly` **category**: `string` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string | undefined</code></a></span>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:14](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L14)

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`category`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#category)

***

### id

> **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `'coupangplay'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/data/site\_descriptor.ts:468](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L468)

#### Overrides

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`id`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#id)

***

### shortcut\_id

> `readonly` **shortcut\_id**: `string` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string | undefined</code></a></span>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:15](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L15)

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`shortcut_id`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#shortcut_id)

## Methods

### getDomainsForCookies()

> **getDomainsForCookies**(): `Promise`\<`string`[]\>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:92](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L92)

The caller of this method is tightly coupled to the chrome-cookies-secure library, making it browser-specific.
Returns domains whose cookies should be loaded into the main session.

#### Returns

`Promise`\<`string`[]\>

A list of cookie domains

#### Example

```ts
class MyDesc extends KawaiAbstractSiteDescriptor{

     async getDomainsForCookies(): Promise<string[]> {
         return ["www.domain1.com", "www.domain2.com"];
       }
}
```

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`getDomainsForCookies`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#getdomainsforcookies)

***

### LoadFaviconUrl()

> **LoadFaviconUrl**(): `string`

Defined in: [typescript\_src/data/site\_descriptor.ts:623](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L623)

#### Returns

`string`

#### Overrides

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`LoadFaviconUrl`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#loadfaviconurl)

***

### loadUrl()

> **loadUrl**(`browser`): `Promise`\<`void`\>

Defined in: [typescript\_src/data/site\_descriptor.ts:472](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L472)

#### Parameters

##### browser

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`loadUrl`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#loadurl)

***

### onBeforeRequest()

> **onBeforeRequest**(`details`): `object`

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:24](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L24)

#### Parameters

##### details

`OnBeforeRequestListenerDetails`

#### Returns

`object`

##### cancel?

> `optional` **cancel?**: `boolean`

##### redirectURL?

> `optional` **redirectURL?**: `string`

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`onBeforeRequest`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#onbeforerequest)

***

### onBeforeSendHeaders()

> **onBeforeSendHeaders**(`details`): `void`

Defined in: [typescript\_src/data/site\_descriptor.ts:646](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L646)

#### Parameters

##### details

`OnBeforeSendHeadersListenerDetails`

#### Returns

`void`

#### Overrides

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`onBeforeSendHeaders`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#onbeforesendheaders)

***

### onNewWindowCreated()

> **onNewWindowCreated**(`url`): `"external"` \| `"open"` \| `"suppress"` \| `"basic"`

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:38](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L38)

#### Parameters

##### url

`string`

requested url

#### Returns

`"external"` \| `"open"` \| `"suppress"` \| `"basic"`

if return external, then url will be opened in external browser(Chrome, Firefox what you selected default.)
if return "open", then url will be opended in kawaikara mainView.
if return "suppress" then do nothing.
default value is suppress

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`onNewWindowCreated`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#onnewwindowcreated)

***

### preload()

> **preload**(`view`, `action`): `Promise`\<`void`\>

Defined in: [typescript\_src/data/site\_descriptor.ts:557](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L557)

#### Parameters

##### view

`BrowserWindow`

##### action

[`KawaikaraViewAction`](/api/stable/2.3.1/app/definitions/SiteDescriptor/interfaces/KawaikaraViewAction/)

#### Returns

`Promise`\<`void`\>

***

### unload()

> **unload**(`browser`): `Promise`\<`void`\>

Defined in: [typescript\_src/data/site\_descriptor.ts:627](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L627)

#### Parameters

##### browser

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`unload`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#unload)
