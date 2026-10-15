---
title: "InspectedBundle"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the inspected bundle contract."
displayPath: "Main/Functional/BundleRuntime"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/interfaces/InspectedBundle.md"
symbolKind: "Interface"
---
## Properties

### manifest

> `readonly` **manifest**: [`BundleManifest`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/BundleManifest/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/BundleManifest/"><code>BundleManifest</code></a></span>

The manifest value.

### permissions

> `readonly` **permissions**: readonly [`SitePermission`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/SitePermission/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/SitePermission/"><code>readonly SitePermission[]</code></a></span>

The permissions value.

***

### plugins

> `readonly` **plugins**: readonly [`InspectedPlugin`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/interfaces/InspectedPlugin/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/interfaces/InspectedPlugin/"><code>readonly InspectedPlugin[]</code></a></span>

The plugins value.

***

### providers

> `readonly` **providers**: readonly \[[`InspectedProvider`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/interfaces/InspectedProvider/), [`InspectedProvider`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/interfaces/InspectedProvider/)\]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/interfaces/InspectedProvider/"><code>readonly [InspectedProvider, InspectedProvider]</code></a></span>

The providers value.

***

### rootPath

> `readonly` **rootPath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The root path value.
