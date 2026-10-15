---
title: "SiteMenuContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the site menu contribution contract."
displayPath: "Main/Functional/BundleRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/InternalDeclarations/interfaces/SiteMenuContribution.md"
symbolKind: "Interface"
---
## Properties

### category

> `readonly` **category**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The category value.

### icon?

> `readonly` `optional` **icon?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The icon value.

***

### order?

> `readonly` `optional` **order?**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The order value.

***

### ~~panel?~~

> `readonly` `optional` **panel?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

#### Deprecated

Use panels with an internal PluginView contribution.

***

### panels?

> `readonly` `optional` **panels?**: readonly [`PluginViewPanelContribution`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/PluginViewPanelContribution/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/PluginViewPanelContribution/"><code>readonly PluginViewPanelContribution[]</code></a></span>

Panels displayed in the shared PluginView area while this Provider is selected.
