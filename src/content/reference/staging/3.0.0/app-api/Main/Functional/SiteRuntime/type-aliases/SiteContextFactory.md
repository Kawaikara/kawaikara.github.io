---
title: "SiteContextFactory"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Defines the site context factory type."
displayPath: "Main/Functional/SiteRuntime"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/type-aliases/SiteContextFactory.md"
symbolKind: "Type Alias"
---
> **SiteContextFactory** = (`runtime`, `permissions`) => `Promise`\<[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)\>

Defines the site context factory type.

## Parameters

### runtime

[`SiteRuntimeProfile`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/interfaces/SiteRuntimeProfile/)

### permissions

`ReadonlySet`\<`string`\>

## Returns

`Promise`\<[`SiteContext`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteContext/)\>
