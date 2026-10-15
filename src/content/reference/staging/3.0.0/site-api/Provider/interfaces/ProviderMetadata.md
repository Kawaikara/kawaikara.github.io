---
title: "ProviderMetadata"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Provider"
description: "Describes the provider metadata contract."
displayPath: "Provider"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Provider/interfaces/ProviderMetadata.md"
symbolKind: "Interface"
---
## Properties

### address?

> `readonly` `optional` **address?**: [`SiteAddressContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteAddressContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/SiteAddressContribution/"><code>SiteAddressContribution</code></a></span>

The address value.

### browserIdentity?

> `readonly` `optional` **browserIdentity?**: [`SiteBrowserIdentityOptions`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteBrowserIdentityOptions/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteBrowserIdentityOptions/"><code>SiteBrowserIdentityOptions</code></a></span>

Browser identity applied by the app before Provider.load().

***

### description?

> `readonly` `optional` **description?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The description value.

***

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### isolation?

> `readonly` `optional` **isolation?**: [`SiteIsolationContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteIsolationContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/SiteIsolationContribution/"><code>SiteIsolationContribution</code></a></span>

Whether the isolation option is enabled.

***

### locale?

> `readonly` `optional` **locale?**: [`SiteLocaleContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteLocaleContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/SiteLocaleContribution/"><code>SiteLocaleContribution</code></a></span>

The locale value.

***

### menu

> `readonly` **menu**: [`SiteMenuContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteMenuContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/SiteMenuContribution/"><code>SiteMenuContribution</code></a></span>

The menu value.

***

### permissions?

> `readonly` `optional` **permissions?**: readonly [`SitePermission`](/api/staging/3.0.0/site-api/Provider/type-aliases/SitePermission/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/type-aliases/SitePermission/"><code>readonly SitePermission[]</code></a></span>

The permissions value.

***

### pictureInPicture?

> `readonly` `optional` **pictureInPicture?**: [`SitePictureInPictureContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/SitePictureInPictureContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/SitePictureInPictureContribution/"><code>SitePictureInPictureContribution</code></a></span>

The picture in picture value.

***

### settings?

> `readonly` `optional` **settings?**: [`ProviderSettingsContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/ProviderSettingsContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/ProviderSettingsContribution/"><code>ProviderSettingsContribution</code></a></span>

The settings value.

***

### shortcut?

> `readonly` `optional` **shortcut?**: [`SiteShortcutContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteShortcutContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/SiteShortcutContribution/"><code>SiteShortcutContribution</code></a></span>

The shortcut value.

***

### shortFormVideo?

> `readonly` `optional` **shortFormVideo?**: [`ShortFormVideoContribution`](/api/staging/3.0.0/site-api/ShortFormVideo/interfaces/ShortFormVideoContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/ShortFormVideo/interfaces/ShortFormVideoContribution/"><code>ShortFormVideoContribution</code></a></span>

The short form video value.

***

### title

> `readonly` **title**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The title value.
