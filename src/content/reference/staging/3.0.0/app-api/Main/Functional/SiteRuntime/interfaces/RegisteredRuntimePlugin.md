---
title: "RegisteredRuntimePlugin"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the registered runtime plugin contract."
displayPath: "Main/Functional/SiteRuntime"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/interfaces/RegisteredRuntimePlugin.md"
symbolKind: "Interface"
---
## Properties

### bundleId

> `readonly` **bundleId**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The bundle ID value.

### constructor

> `readonly` **constructor**: [`PluginConstructor`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/PluginConstructor/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/PluginConstructor/"><code>PluginConstructor</code></a></span>

The function Object() { [native code] } value.

***

### metadata

> `readonly` **metadata**: [`PluginMetadata`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/PluginMetadata/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/PluginMetadata/"><code>PluginMetadata</code></a></span>

The metadata value.

***

### scopedProviderId?

> `readonly` `optional` **scopedProviderId?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The scoped provider ID value.
