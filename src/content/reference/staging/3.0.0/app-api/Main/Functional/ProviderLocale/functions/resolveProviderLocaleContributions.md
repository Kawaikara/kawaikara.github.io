---
title: "resolveProviderLocaleContributions()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Resolves the provider locale contributions."
displayPath: "Main/Functional/ProviderLocale"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/ProviderLocale/functions/resolveProviderLocaleContributions.md"
symbolKind: "Function"
---
> **resolveProviderLocaleContributions**(`metadata`, `localization`, `providerId`): [`ProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderMetadata/)

Resolves the provider locale contributions.

## Parameters

### metadata

[`UnresolvedProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/ProviderLocale/InternalDeclarations/type-aliases/UnresolvedProviderMetadata/)

### localization

`Readonly`\<`Record`\<`string`, `Readonly`\<`Record`\<`string`, `string`\>\>\>\> \| `undefined`

### providerId

`string`

## Returns

[`ProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderMetadata/)
