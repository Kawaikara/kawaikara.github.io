---
title: "ProviderItemListSettingContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Provider"
description: "Describes the provider item list setting contribution contract."
displayPath: "Provider"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Provider/interfaces/ProviderItemListSettingContribution.md"
symbolKind: "Interface"
---
## Extends

- [`ProviderSettingContributionBase`](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/)

## Properties

### description?

> `readonly` `optional` **description?**: [`ProviderLocalizedText`](/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/"><code>ProviderLocalizedText</code></a></span>

The description value.

#### Inherited from

[`ProviderSettingContributionBase`](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/).[`description`](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/#description)

### emptyText?

> `readonly` `optional` **emptyText?**: [`ProviderLocalizedText`](/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/"><code>ProviderLocalizedText</code></a></span>

The empty text value.

***

### key

> `readonly` **key**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The key value.

#### Inherited from

[`ProviderSettingContributionBase`](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/).[`key`](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/#key)

***

### title

> `readonly` **title**: [`ProviderLocalizedText`](/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/"><code>ProviderLocalizedText</code></a></span>

The title value.

#### Inherited from

[`ProviderSettingContributionBase`](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/).[`title`](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/#title)

***

### type

> `readonly` **type**: `"item-list"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;item-list&quot;</code></span>

The type value.
