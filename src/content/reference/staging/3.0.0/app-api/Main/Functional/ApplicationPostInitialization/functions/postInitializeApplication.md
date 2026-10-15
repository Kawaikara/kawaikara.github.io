---
title: "postInitializeApplication()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Load the first UI/site and start services that depend on initialized managers."
displayPath: "Main/Functional/ApplicationPostInitialization"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/ApplicationPostInitialization/functions/postInitializeApplication.md"
symbolKind: "Function"
---
> **postInitializeApplication**(`application`, `lifecycle`): `Promise`\<`void`\>

Load the first UI/site and start services that depend on initialized managers.

## Parameters

### application

[`InitializedApplication`](/api/staging/3.0.0/app/Main/Functional/ApplicationInitialization/interfaces/InitializedApplication/)

### lifecycle

[`ApplicationLifecycleManager`](/api/staging/3.0.0/app/Main/Manager/ApplicationLifecycleManager/classes/ApplicationLifecycleManager/)

## Returns

`Promise`\<`void`\>
