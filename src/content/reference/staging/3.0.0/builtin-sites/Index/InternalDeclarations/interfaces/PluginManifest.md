---
title: "PluginManifest"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Filesystem metadata owned by one Plugin directory."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/PluginManifest.md"
symbolKind: "Interface"
---
## Properties

### apiVersion

> `readonly` **apiVersion**: `1`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>1</code></span>

The API version value.

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### main

> `readonly` **main**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Compiled JavaScript entry relative to the Plugin directory.

***

### name

> `readonly` **name**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The name value.

***

### providerIds?

> `readonly` `optional` **providerIds?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Omit for a Bundle-global Plugin.

***

### schemaVersion

> `readonly` **schemaVersion**: `1`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>1</code></span>

The schema version value.

***

### version

> `readonly` **version**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The version value.
