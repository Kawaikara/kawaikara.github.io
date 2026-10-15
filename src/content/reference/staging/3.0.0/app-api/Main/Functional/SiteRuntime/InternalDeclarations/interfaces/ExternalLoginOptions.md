---
title: "ExternalLoginOptions"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the external login options contract."
displayPath: "Main/Functional/SiteRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/InternalDeclarations/interfaces/ExternalLoginOptions.md"
symbolKind: "Interface"
---
## Properties

### autoActivate?

> `readonly` `optional` **autoActivate?**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

Activate a login control once the temporary browser has rendered the
start page. This avoids asking the user to repeat the click that already
initiated external login in Kawaikara.

#### fallbackLabels?

> `readonly` `optional` **fallbackLabels?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

The fallback labels value.

#### selector

> `readonly` **selector**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The selector value.

### awaitBrowserCleanup?

> `readonly` `optional` **awaitBrowserCleanup?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Wait for the external browser process to close before restoring the viewer.

***

### completionUrlFlags?

> `readonly` `optional` **completionUrlFlags?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The completion URL flags value.

***

### completionUrlPattern

> `readonly` **completionUrlPattern**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

A regular-expression source matched against the external page URL.

***

### cookieImportMode?

> `readonly` `optional` **cookieImportMode?**: `"preserve-source"` \| `"domain-scoped-https"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;preserve-source&quot; | &quot;domain-scoped-https&quot;</code></span>

Cookie conversion used while importing the completed browser cookie jar.
`domain-scoped-https` matches the legacy main-branch behavior required by
services whose anti-bot cookies depend on Chromium's HTTPS source scope.

***

### cookieSettleMs?

> `readonly` `optional` **cookieSettleMs?**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

Milliseconds the captured cookie jar must remain unchanged before import.

***

### locale?

> `readonly` `optional` **locale?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Locale used by the temporary login view.

***

### replaceSessionCookies?

> `readonly` `optional` **replaceSessionCookies?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Replace every cookie in the target Electron Session with the completed
external browser's cookie jar. The external browser remains temporary;
no browser storage other than cookies is transferred.

***

### resetSessionOrigins?

> `readonly` `optional` **resetSessionOrigins?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

HTTPS origins whose existing site data is cleared before the external
browser's cookies are imported. Use only for sites whose login state is
not safe to merge with an existing embedded-browser session.

***

### returnUrl?

> `readonly` `optional` **returnUrl?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Viewer URL restored after the external login browser closes.

***

### seedSessionCookies?

> `readonly` `optional` **seedSessionCookies?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Seed the temporary external browser with the target Session's cookies.
Use only with a dedicated authentication profile. This preserves existing
accounts when a service opens an add-account flow.

***

### siteTitle?

> `readonly` `optional` **siteTitle?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Human-readable site name displayed by the temporary login view.

***

### startUrl

> `readonly` **startUrl**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The start URL value.
