---
title: "SiteExternalLoginFlowOptions"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · ExternalLoginFlow"
description: "Describes the site external login flow options contract."
displayPath: "ExternalLoginFlow"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "ExternalLoginFlow/interfaces/SiteExternalLoginFlowOptions.md"
symbolKind: "Interface"
---
## Properties

### action?

> `readonly` `optional` **action?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The action value.

### fallbackLabels?

> `readonly` `optional` **fallbackLabels?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

The fallback labels value.

***

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### login

> `readonly` **login**: [`ExternalLoginOptions`](/api/staging/3.0.0/site-api/SiteContext/interfaces/ExternalLoginOptions/) \| (() => [`ExternalLoginOptions`](/api/staging/3.0.0/site-api/SiteContext/interfaces/ExternalLoginOptions/))
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/SiteContext/interfaces/ExternalLoginOptions/"><code>ExternalLoginOptions | (() =&gt; ExternalLoginOptions)</code></a></span>

The login value.

***

### selector

> `readonly` **selector**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The selector value.
