---
title: "PluginMetadata"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Plugin"
description: "Describes the plugin metadata contract."
displayPath: "Plugin"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Plugin/interfaces/PluginMetadata.md"
symbolKind: "Interface"
---
## Properties

### description?

> `readonly` `optional` **description?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The description value.

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### name?

> `readonly` `optional` **name?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The name value.

***

### panels?

> `readonly` `optional` **panels?**: readonly [`PluginViewPanelContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/PluginViewPanelContribution/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/PluginViewPanelContribution/"><code>readonly PluginViewPanelContribution[]</code></a></span>

Sandboxed panels added to the selected Provider's shared PluginView area.

***

### providerIds?

> `readonly` `optional` **providerIds?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Omit to activate a Bundle-level Plugin for every Provider.
