---
title: "buildBundleProjectRevision()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Development"
description: "Builds one immutable revision. The caller activates it only after validation."
displayPath: "Development/BundleProjectBuilder"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Development/BundleProjectBuilder/functions/buildBundleProjectRevision.md"
symbolKind: "Function"
---
> **buildBundleProjectRevision**(`config`, `outputPath?`): `Promise`\<[`BundleDevelopmentBuildResult`](/api/staging/3.0.0/app/Development/BundleProjectBuilder/interfaces/BundleDevelopmentBuildResult/)\>

Builds one immutable revision. The caller activates it only after validation.

## Parameters

### config

[`ResolvedBundleProjectConfig`](/api/staging/3.0.0/app/Development/BundleProjectConfig/interfaces/ResolvedBundleProjectConfig/)

### outputPath?

`string` = `config.outputPath`

## Returns

`Promise`\<[`BundleDevelopmentBuildResult`](/api/staging/3.0.0/app/Development/BundleProjectBuilder/interfaces/BundleDevelopmentBuildResult/)\>
