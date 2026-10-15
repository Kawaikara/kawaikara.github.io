---
title: "KawaiAbstractSiteDescriptor"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · definitions"
description: "Defined in: typescript_src/definitions/SiteDescriptor.ts:12"
displayPath: "definitions/SiteDescriptor"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/definitions/SiteDescriptor/classes/KawaiAbstractSiteDescriptor.md"
symbolKind: "Class"
---
## Extended by

- [`KawaiNetflixDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiNetflixDesc/)
- [`KawaiLaftelDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiLaftelDesc/)
- [`KawaiDisneyDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiDisneyDesc/)
- [`KawaiYoutubeDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiYoutubeDesc/)
- [`KawaiAmazonPrimeDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiAmazonPrimeDesc/)
- [`KawaiWavveDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiWavveDesc/)
- [`KawaiWatchaDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiWatchaDesc/)
- [`KawaiCoupangPlayDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiCoupangPlayDesc/)
- [`KawaiTvingDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiTvingDesc/)
- [`KawaiTwitchDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiTwitchDesc/)
- [`KawaiAppleTvDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiAppleTvDesc/)
- [`KawaiChzzkDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiChzzkDesc/)
- [`KawaiAppleMusicDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiAppleMusicDesc/)
- [`KawaiSpotifyDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiSpotifyDesc/)
- [`KawaiYoutubeMusicDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiYoutubeMusicDesc/)
- [`KawaiMainDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiMainDesc/)
- [`KawaiCrunchyrollDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiCrunchyrollDesc/)
- [`KawaiRidibooksDesc`](/api/stable/2.3.1/app/data/site_descriptor/classes/KawaiRidibooksDesc/)

## Constructors

### Constructor

> **new KawaiAbstractSiteDescriptor**(): `KawaiAbstractSiteDescriptor`

#### Returns

`KawaiAbstractSiteDescriptor`

## Properties

### category

> `readonly` **category**: `string` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string | undefined</code></a></span>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:14](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L14)

### id

> `readonly` **id**: `string` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string | undefined</code></a></span>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:13](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L13)

***

### shortcut\_id

> `readonly` **shortcut\_id**: `string` \| `undefined`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string | undefined</code></a></span>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:15](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L15)

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

***

### LoadFaviconUrl()

> **LoadFaviconUrl**(): `string`

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:76](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L76)

#### Returns

`string`

***

### loadUrl()

> **loadUrl**(`borwser`): `Promise`\<`void`\>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:70](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L70)

#### Parameters

##### borwser

`BrowserWindow`

#### Returns

`Promise`\<`void`\>

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

***

### onBeforeSendHeaders()

> **onBeforeSendHeaders**(`details`): `void`

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:17](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L17)

#### Parameters

##### details

`OnBeforeSendHeadersListenerDetails`

#### Returns

`void`

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

***

### unload()

> **unload**(`browser`): `Promise`\<`void`\>

Defined in: [typescript\_src/definitions/SiteDescriptor.ts:74](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/SiteDescriptor.ts#L74)

#### Parameters

##### browser

`BrowserWindow`

#### Returns

`Promise`\<`void`\>
