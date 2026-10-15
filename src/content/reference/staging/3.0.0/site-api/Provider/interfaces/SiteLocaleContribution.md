---
title: "SiteLocaleContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Provider"
description: "Describes the site locale contribution contract."
displayPath: "Provider"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Provider/interfaces/SiteLocaleContribution.md"
symbolKind: "Interface"
---
## Properties

### defaultLocale?

> `readonly` `optional` **defaultLocale?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Falls back to the containing plugin locale when omitted or set to inherit.

### resource?

> `readonly` `optional` **resource?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Provider-relative JSON resource containing locale -> message key -> text.

***

### supportedLocales?

> `readonly` `optional` **supportedLocales?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Locales the site integration can receive through SiteContext.locale.
