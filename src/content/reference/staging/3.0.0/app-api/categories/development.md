---
title: "Development"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · categories"
description: "Modules and symbols in the Development area of Source API. Open an item to inspect its declaration path, contract, properties, and signatures."
displayPath: "categories/development"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "categories/development.md"
symbolKind: "Reference"
---
## Interfaces

- [BundleDevelopmentBuildResult](/api/staging/3.0.0/app/Development/BundleProjectBuilder/interfaces/BundleDevelopmentBuildResult/) — Describes the bundle development build result contract.
- [BundleProjectConfig](/api/staging/3.0.0/app/Development/BundleProjectConfig/interfaces/BundleProjectConfig/) — Describes the bundle project config contract.
- [ResolvedBundleProjectConfig](/api/staging/3.0.0/app/Development/BundleProjectConfig/interfaces/ResolvedBundleProjectConfig/) — Describes the resolved bundle project config contract.

## Functions

- [buildBundleProjectRevision()](/api/staging/3.0.0/app/Development/BundleProjectBuilder/functions/buildBundleProjectRevision/) — Builds one immutable revision. The caller activates it only after validation.
- [readBundleProjectConfig()](/api/staging/3.0.0/app/Development/BundleProjectConfig/functions/readBundleProjectConfig/) — Reads the bundle project config.
- [resolveBundleProjectDevelopmentPath()](/api/staging/3.0.0/app/Development/BundleProjectConfig/functions/resolveBundleProjectDevelopmentPath/) — Resolves the bundle project development path.

## Variables

- [DEFAULT_DEVELOPMENT_OUTPUT_DIRECTORY](/api/staging/3.0.0/app/Development/BundleProjectConfig/variables/DEFAULT_DEVELOPMENT_OUTPUT_DIRECTORY/) — Defines the shared default development output directory constant.
- [DEVELOPMENT_CONFIG_NAME](/api/staging/3.0.0/app/Development/BundleProjectConfig/variables/DEVELOPMENT_CONFIG_NAME/) — Defines the shared development config name constant.

## Modules

- [BundleProjectBuilder](/api/staging/3.0.0/app/Development/BundleProjectBuilder/)
- [BundleProjectConfig](/api/staging/3.0.0/app/Development/BundleProjectConfig/)
