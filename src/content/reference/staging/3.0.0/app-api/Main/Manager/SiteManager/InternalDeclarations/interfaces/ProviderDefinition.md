---
title: "ProviderDefinition"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "One Provider directory and the code loaded from its manifest entry."
displayPath: "Main/Manager/SiteManager/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/SiteManager/InternalDeclarations/interfaces/ProviderDefinition.md"
symbolKind: "Interface"
---
## Properties

### localization?

> `readonly` `optional` **localization?**: `Readonly`\<`Record`\<`string`, `Readonly`\<`Record`\<`string`, `string`\>\>\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>Readonly&lt;Record&lt;string, Readonly&lt;Record&lt;string, string&gt;&gt;&gt;&gt;</code></a></span>

Validated locale messages loaded from contributes.locale.resource.

### manifest

> `readonly` **manifest**: [`ProviderManifest`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderManifest/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderManifest/"><code>ProviderManifest</code></a></span>

The manifest value.

***

### plugins

> `readonly` **plugins**: readonly [`PluginDefinition`](/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/PluginDefinition/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/PluginDefinition/"><code>readonly PluginDefinition[]</code></a></span>

Plugins physically owned by this Provider and scoped to it.

***

### provider

> `readonly` **provider**: [`ProviderConstructor`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ProviderConstructor/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ProviderConstructor/"><code>ProviderConstructor</code></a></span>

The provider value.
