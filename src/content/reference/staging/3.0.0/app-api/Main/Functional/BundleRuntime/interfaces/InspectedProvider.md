---
title: "InspectedProvider"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the inspected provider contract."
displayPath: "Main/Functional/BundleRuntime"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/interfaces/InspectedProvider.md"
symbolKind: "Interface"
---
## Properties

### directoryPath

> `readonly` **directoryPath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The directory path value.

### localization?

> `readonly` `optional` **localization?**: `Readonly`\<`Record`\<`string`, `Readonly`\<`Record`\<`string`, `string`\>\>\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>Readonly&lt;Record&lt;string, Readonly&lt;Record&lt;string, string&gt;&gt;&gt;&gt;</code></a></span>

The localization value.

***

### manifest

> `readonly` **manifest**: [`ProviderManifest`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderManifest/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderManifest/"><code>ProviderManifest</code></a></span>

The manifest value.

***

### plugins

> `readonly` **plugins**: readonly [`InspectedPlugin`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/interfaces/InspectedPlugin/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/interfaces/InspectedPlugin/"><code>readonly InspectedPlugin[]</code></a></span>

The plugins value.
