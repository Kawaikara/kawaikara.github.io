---
title: "UnresolvedProviderMetadata"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Defines the unresolved provider metadata type."
displayPath: "Main/Functional/ProviderLocale/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/ProviderLocale/InternalDeclarations/type-aliases/UnresolvedProviderMetadata.md"
symbolKind: "Type Alias"
---
> **UnresolvedProviderMetadata** = `Omit`\<[`ProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderMetadata/), `"menu"` \| `"shortcut"` \| `"settings"`\> & `Required`\<`Pick`\<[`ProviderDecoratorMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/ProviderDecoratorMetadata/), `"menu"`\>\> & `Pick`\<[`ProviderDecoratorMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/ProviderDecoratorMetadata/), `"shortcut"` \| `"settings"`\>

Defines the unresolved provider metadata type.
