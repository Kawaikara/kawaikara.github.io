---
title: "ProviderMetadata"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Describes the provider metadata contract."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/ProviderMetadata.md"
symbolKind: "Interface"
---
## Properties

### address?

> `readonly` `optional` **address?**: [`SiteAddressContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteAddressContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteAddressContribution/"><code>SiteAddressContribution</code></a></span>

The address value.

### browserIdentity?

> `readonly` `optional` **browserIdentity?**: [`SiteBrowserIdentityOptions`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteBrowserIdentityOptions/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteBrowserIdentityOptions/"><code>SiteBrowserIdentityOptions</code></a></span>

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

> `readonly` `optional` **isolation?**: [`SiteIsolationContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteIsolationContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteIsolationContribution/"><code>SiteIsolationContribution</code></a></span>

Whether the isolation option is enabled.

***

### locale?

> `readonly` `optional` **locale?**: [`SiteLocaleContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteLocaleContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteLocaleContribution/"><code>SiteLocaleContribution</code></a></span>

The locale value.

***

### menu

> `readonly` **menu**: [`SiteMenuContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteMenuContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteMenuContribution/"><code>SiteMenuContribution</code></a></span>

The menu value.

***

### permissions?

> `readonly` `optional` **permissions?**: readonly [`SitePermission`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/SitePermission/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/type-aliases/SitePermission/"><code>readonly SitePermission[]</code></a></span>

The permissions value.

***

### pictureInPicture?

> `readonly` `optional` **pictureInPicture?**: [`SitePictureInPictureContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePictureInPictureContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePictureInPictureContribution/"><code>SitePictureInPictureContribution</code></a></span>

The picture in picture value.

***

### settings?

> `readonly` `optional` **settings?**: [`ProviderSettingsContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ProviderSettingsContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ProviderSettingsContribution/"><code>ProviderSettingsContribution</code></a></span>

The settings value.

***

### shortcut?

> `readonly` `optional` **shortcut?**: [`SiteShortcutContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteShortcutContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteShortcutContribution/"><code>SiteShortcutContribution</code></a></span>

The shortcut value.

***

### shortFormVideo?

> `readonly` `optional` **shortFormVideo?**: [`ShortFormVideoContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ShortFormVideoContribution/"><code>ShortFormVideoContribution</code></a></span>

The short form video value.

***

### title

> `readonly` **title**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The title value.
