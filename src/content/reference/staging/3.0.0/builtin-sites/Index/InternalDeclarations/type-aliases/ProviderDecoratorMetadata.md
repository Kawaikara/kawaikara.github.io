---
title: "ProviderDecoratorMetadata"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Code-owned Provider contributions. Keep installation/discovery metadata in the manifest; settings and site-specific runtime policy belong here, with translated copy imported from the Provider's locale resource."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/type-aliases/ProviderDecoratorMetadata.md"
symbolKind: "Type Alias"
---
> **ProviderDecoratorMetadata** = `Partial`\<`Omit`\<[`ProviderMetadata`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ProviderMetadata/), `"id"` \| `"title"` \| `"description"` \| `"permissions"` \| `"menu"` \| `"shortcut"` \| `"settings"`\>\> & `object`

Code-owned Provider contributions. Keep installation/discovery metadata in
the manifest; settings and site-specific runtime policy belong here, with
translated copy imported from the Provider's locale resource.

## Type Declaration

### menu?

> `readonly` `optional` **menu?**: `Omit`\<[`SiteMenuContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteMenuContribution/), `"panels"`\> & `object`

The menu value.

#### Type Declaration

##### panels?

> `readonly` `optional` **panels?**: readonly `Omit`\<[`PluginViewPanelContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/PluginViewPanelContribution/), `"title"`\> & `object`[]

The panels value.

### settings?

> `readonly` `optional` **settings?**: `object`

The settings value.

#### settings.categories

> `readonly` **categories**: readonly `Omit`\<[`ProviderSettingCategoryContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/ProviderSettingCategoryContribution/), `"title"` \| `"settings"`\> & `object`[]

The categories value.

### shortcut?

> `readonly` `optional` **shortcut?**: `Omit`\<[`SiteShortcutContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteShortcutContribution/), `"actions"`\> & `object`

The shortcut value.

#### Type Declaration

##### actions?

> `readonly` `optional` **actions?**: readonly `Omit`\<[`SiteActionShortcutContribution`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteActionShortcutContribution/), `"title"`\> & `object`[]

The actions value.
