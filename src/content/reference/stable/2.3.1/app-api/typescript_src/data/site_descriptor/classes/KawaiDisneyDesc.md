---
title: "KawaiDisneyDesc"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · data"
description: "Defined in: typescript_src/data/site_descriptor.ts:246"
displayPath: "data/site_descriptor"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/data/site_descriptor/classes/KawaiDisneyDesc.md"
symbolKind: "Class"
---
## Extends

- [`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/)

## Constructors

### Constructor

> **new KawaiDisneyDesc**(): `KawaiDisneyDesc`

#### Returns

`KawaiDisneyDesc`

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`constructor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#constructor)

## Properties

### category

> `readonly` **category**: `string` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string | undefined</code></a></span>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:14](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L14)

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`category`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#category)

### id

> **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `'disneyplus'`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/data/site\_descriptor.ts:247](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L247)

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

Defined in: [typescript\_src/data/site\_descriptor.ts:251](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L251)

#### Returns

`string`

#### Overrides

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`LoadFaviconUrl`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#loadfaviconurl)

***

### loadUrl()

> **loadUrl**(`browser`): `Promise`\<`void`\>

Defined in: [typescript\_src/data/site\_descriptor.ts:248](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/data/site_descriptor.ts#L248)

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

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:17](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L17)

#### Parameters

##### details

`OnBeforeSendHeadersListenerDetails`

#### Returns

`void`

#### Inherited from

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

### unload()

> **unload**(`browser`): `Promise`\<`void`\>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:74](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L74)

#### Parameters

##### browser

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KawaiAbstractSiteDescriptor`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/).[`unload`](/api/stable/2.3.1/app/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor/#unload)
