---
title: "ProviderManifestContributions"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Defines the provider manifest contributions type."
displayPath: "Main/Functional/BundleRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/ProviderManifestContributions.md"
symbolKind: "Type Alias"
---
> **ProviderManifestContributions** = `Partial`\<`Omit`\<[`ProviderMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderMetadata/), `"id"` \| `"title"` \| `"description"` \| `"permissions"` \| `"menu"` \| `"shortcut"` \| `"pictureInPicture"` \| `"settings"`\>\> & `object`

Defines the provider manifest contributions type.

## Type Declaration

### menu

> `readonly` **menu**: `NonNullable`\<[`ProviderDecoratorMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/ProviderDecoratorMetadata/)\[`"menu"`\]\>

The menu value.

### pictureInPicture?

> `readonly` `optional` **pictureInPicture?**: [`ProviderManifestPictureInPictureContribution`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/ProviderManifestPictureInPictureContribution/)

Enables the shared PiP action; selectors and policies are code-owned.

### shortcut?

> `readonly` `optional` **shortcut?**: [`ProviderDecoratorMetadata`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/ProviderDecoratorMetadata/)\[`"shortcut"`\]

The shortcut value.
