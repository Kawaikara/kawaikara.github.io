---
title: "BundleDefinition"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "The only installable extension unit. A Bundle must contain one or more Providers. Bundle-level Plugins may be global or filtered with providerIds."
displayPath: "Main/Plugin/PluginHost/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition.md"
symbolKind: "Interface"
---
## Properties

### apiVersion

> `readonly` **apiVersion**: `1`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>1</code></span>

The API version value.

### browserProfiles?

> `readonly` `optional` **browserProfiles?**: readonly [`BundleBrowserProfileContribution`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/BundleBrowserProfileContribution/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/BundleBrowserProfileContribution/"><code>readonly BundleBrowserProfileContribution[]</code></a></span>

The browser profiles value.

***

### description?

> `readonly` `optional` **description?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The description value.

***

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### kind

> `readonly` **kind**: `"bundle"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;bundle&quot;</code></span>

The kind value.

***

### locale?

> `readonly` `optional` **locale?**: [`BundleLocaleContribution`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/BundleLocaleContribution/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/BundleLocaleContribution/"><code>BundleLocaleContribution</code></a></span>

The locale value.

***

### name?

> `readonly` `optional` **name?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The name value.

***

### permissions

> `readonly` **permissions**: readonly [`SitePermission`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/SitePermission/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/SitePermission/"><code>readonly SitePermission[]</code></a></span>

The permissions value.

***

### plugins

> `readonly` **plugins**: readonly [`PluginDefinition`](/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/PluginDefinition/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/PluginDefinition/"><code>readonly PluginDefinition[]</code></a></span>

The plugins value.

***

### providers

> `readonly` **providers**: readonly \[[`ProviderDefinition`](/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/ProviderDefinition/), [`ProviderDefinition`](/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/ProviderDefinition/)\]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/InternalDeclarations/interfaces/ProviderDefinition/"><code>readonly [ProviderDefinition, ProviderDefinition]</code></a></span>

The providers value.

***

### update?

> `readonly` `optional` **update?**: [`BundleUpdateDefinition`](/api/staging/3.0.0/app/Main/Manager/BundleManager/InternalDeclarations/type-aliases/BundleUpdateDefinition/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/BundleManager/InternalDeclarations/type-aliases/BundleUpdateDefinition/"><code>BundleUpdateDefinition</code></a></span>

The update value.

***

### ~~updateUrl?~~

> `readonly` `optional` **updateUrl?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

#### Deprecated

Use update instead.

***

### version

> `readonly` **version**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The version value.
