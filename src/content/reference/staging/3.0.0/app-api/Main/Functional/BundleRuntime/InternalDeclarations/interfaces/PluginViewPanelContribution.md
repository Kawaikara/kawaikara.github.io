---
title: "PluginViewPanelContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the plugin view panel contribution contract."
displayPath: "Main/Functional/BundleRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/InternalDeclarations/interfaces/PluginViewPanelContribution.md"
symbolKind: "Interface"
---
## Properties

### content

> `readonly` **content**: [`PluginViewPanelContent`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/PluginViewPanelContent/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/PluginViewPanelContent/"><code>PluginViewPanelContent</code></a></span>

The content value.

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Stable id scoped to the contributing Provider or Plugin.

***

### order?

> `readonly` `optional` **order?**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The order value.

***

### title

> `readonly` **title**: [`ProviderLocalizedText`](/api/staging/3.0.0/app/Common/IPC/InternalDeclarations/type-aliases/ProviderLocalizedText/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/InternalDeclarations/type-aliases/ProviderLocalizedText/"><code>ProviderLocalizedText</code></a></span>

Display title. Duplicate titles are allowed because selection uses the scoped id.
