---
title: "defineProvider()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Plugin"
description: "Performs the define provider operation."
displayPath: "Plugin"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Plugin/functions/defineProvider.md"
symbolKind: "Function"
---
> **defineProvider**(`definition`): [`ProviderDefinition`](/api/staging/3.0.0/site-api/Plugin/interfaces/ProviderDefinition/)

Performs the define provider operation.

## Parameters

### definition

#### localization?

`Readonly`\<`Record`\<`string`, `Readonly`\<`Record`\<`string`, `string`\>\>\>\>

The localization value.

#### manifest

[`ProviderManifest`](/api/staging/3.0.0/site-api/Plugin/interfaces/ProviderManifest/)

The manifest value.

#### plugins?

readonly [`PluginDefinition`](/api/staging/3.0.0/site-api/Plugin/interfaces/PluginDefinition/)[]

The plugins value.

#### provider

[`ProviderConstructor`](/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderConstructor/)

The provider value.

## Returns

[`ProviderDefinition`](/api/staging/3.0.0/site-api/Plugin/interfaces/ProviderDefinition/)
