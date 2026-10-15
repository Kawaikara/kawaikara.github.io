---
title: "createOrderedSiteGroups()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Creates the ordered site groups."
displayPath: "Renderer/Domain/MenuOrder"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Domain/MenuOrder/functions/createOrderedSiteGroups.md"
symbolKind: "Function"
---
> **createOrderedSiteGroups**(`sites`, `preferences?`): [`SiteMenuGroup`](/api/staging/3.0.0/app/Renderer/Domain/MenuOrder/type-aliases/SiteMenuGroup/)[]

Creates the ordered site groups.

## Parameters

### sites

readonly [`SiteMenuItem`](/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/)[]

### preferences?

`Pick`\<[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/), `"menuCategoryOrder"` \| `"menuSiteOrder"`\>

## Returns

[`SiteMenuGroup`](/api/staging/3.0.0/app/Renderer/Domain/MenuOrder/type-aliases/SiteMenuGroup/)[]
