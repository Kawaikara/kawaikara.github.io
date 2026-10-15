---
title: "SiteContext"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Describes the site context contract."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/SiteContext.md"
symbolKind: "Interface"
---
## Properties

### actions

> `readonly` **actions**: [`SiteActions`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteActions/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteActions/"><code>SiteActions</code></a></span>

The actions value.

### browser?

> `readonly` `optional` **browser?**: [`SiteBrowser`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteBrowser/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteBrowser/"><code>SiteBrowser</code></a></span>

Available only with the network-interception permission.

***

### cookies?

> `readonly` `optional` **cookies?**: [`SiteCookieStore`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteCookieStore/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteCookieStore/"><code>SiteCookieStore</code></a></span>

Available only to Providers that declare the cookies permission.

***

### externalBrowser

> `readonly` **externalBrowser**: [`SiteExternalBrowser`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteExternalBrowser/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteExternalBrowser/"><code>SiteExternalBrowser</code></a></span>

The external browser value.

***

### locale?

> `readonly` `optional` **locale?**: [`SiteLocaleContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteLocaleContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteLocaleContext/"><code>SiteLocaleContext</code></a></span>

Optional in Site API v1 for source compatibility.

***

### logger

> `readonly` **logger**: [`SiteLogger`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteLogger/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteLogger/"><code>SiteLogger</code></a></span>

The logger value.

***

### page?

> `readonly` `optional` **page?**: [`SitePagePipeline`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePagePipeline/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SitePagePipeline/"><code>SitePagePipeline</code></a></span>

Available only to Providers that declare the script-injection permission.

***

### viewer

> `readonly` **viewer**: [`SiteViewer`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteViewer/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteViewer/"><code>SiteViewer</code></a></span>

The viewer value.

## Methods

### openExternal()

> **openExternal**(`url`): `Promise`\<`void`\>

Opens the external.

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`void`\>
