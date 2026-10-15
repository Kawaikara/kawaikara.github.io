---
title: "createBundleInfo()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Creates the bundle info."
displayPath: "Main/Functional/BundleRuntime"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/functions/createBundleInfo.md"
symbolKind: "Function"
---
> **createBundleInfo**(`bundle`, `source`, `status`, `permissions?`): [`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)

Creates the bundle info.

## Parameters

### bundle

[`BundleDefinition`](/api/staging/3.0.0/app/Main/Plugin/PluginHost/InternalDeclarations/interfaces/BundleDefinition/)

### source

[`BundleSource`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleSource/)

### status

[`BundleStatus`](/api/staging/3.0.0/app/Common/IPC/type-aliases/BundleStatus/)

### permissions?

readonly [`SitePermission`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/type-aliases/SitePermission/)[] = `...`

## Returns

[`BundleInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BundleInfo/)
