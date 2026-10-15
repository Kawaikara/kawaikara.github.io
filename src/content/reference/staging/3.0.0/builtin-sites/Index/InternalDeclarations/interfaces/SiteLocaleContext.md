---
title: "SiteLocaleContext"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Describes the site locale context contract."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/SiteLocaleContext.md"
symbolKind: "Interface"
---
## Properties

### app

> `readonly` **app**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Resolved app locale, or system when Electron should use the OS locale.

### plugin

> `readonly` **plugin**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Resolved locale for the Bundle that owns the current Provider.

***

### site

> `readonly` **site**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Resolved locale for the current site.
