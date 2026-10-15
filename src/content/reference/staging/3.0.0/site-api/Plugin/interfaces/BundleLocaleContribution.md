---
title: "BundleLocaleContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Plugin"
description: "Describes the bundle locale contribution contract."
displayPath: "Plugin"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Plugin/interfaces/BundleLocaleContribution.md"
symbolKind: "Interface"
---
## Properties

### defaultLocale?

> `readonly` `optional` **defaultLocale?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Falls back to the app locale when omitted or set to inherit.

### supportedLocales?

> `readonly` `optional` **supportedLocales?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

The supported locales value.
