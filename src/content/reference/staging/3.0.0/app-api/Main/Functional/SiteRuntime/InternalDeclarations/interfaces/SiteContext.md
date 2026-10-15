---
title: "SiteContext"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the site context contract."
displayPath: "Main/Functional/SiteRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext.md"
symbolKind: "Interface"
---
## Properties

### actions

> `readonly` **actions**: [`SiteActions`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteActions/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteActions/"><code>SiteActions</code></a></span>

The actions value.

### browser?

> `readonly` `optional` **browser?**: [`SiteBrowser`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteBrowser/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteBrowser/"><code>SiteBrowser</code></a></span>

Available only with the network-interception permission.

***

### cookies?

> `readonly` `optional` **cookies?**: [`SiteCookieStore`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteCookieStore/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteCookieStore/"><code>SiteCookieStore</code></a></span>

Available only to Providers that declare the cookies permission.

***

### externalBrowser

> `readonly` **externalBrowser**: [`SiteExternalBrowser`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteExternalBrowser/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteExternalBrowser/"><code>SiteExternalBrowser</code></a></span>

The external browser value.

***

### locale?

> `readonly` `optional` **locale?**: [`SiteLocaleContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteLocaleContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteLocaleContext/"><code>SiteLocaleContext</code></a></span>

Optional in Site API v1 for source compatibility.

***

### logger

> `readonly` **logger**: [`SiteLogger`](/api/staging/3.0.0/app/Main/Functional/SitePagePipeline/InternalDeclarations/interfaces/SiteLogger/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SitePagePipeline/InternalDeclarations/interfaces/SiteLogger/"><code>SiteLogger</code></a></span>

The logger value.

***

### page?

> `readonly` `optional` **page?**: [`SitePagePipeline`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SitePagePipeline/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SitePagePipeline/"><code>SitePagePipeline</code></a></span>

Available only to Providers that declare the script-injection permission.

***

### viewer

> `readonly` **viewer**: [`SiteViewer`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteViewer/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteViewer/"><code>SiteViewer</code></a></span>

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
