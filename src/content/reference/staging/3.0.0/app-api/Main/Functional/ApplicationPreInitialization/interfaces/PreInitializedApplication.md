---
title: "PreInitializedApplication"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the pre initialized application contract."
displayPath: "Main/Functional/ApplicationPreInitialization"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/ApplicationPreInitialization/interfaces/PreInitializedApplication.md"
symbolKind: "Interface"
---
## Extended by

- [`InitializedApplication`](/api/staging/3.0.0/app/Main/Functional/ApplicationInitialization/interfaces/InitializedApplication/)

## Properties

### applicationLog

> `readonly` **applicationLog**: `LogFunctions`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>LogFunctions</code></span>

The application log value.

### logging

> `readonly` **logging**: [`LoggingManager`](/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/LoggingManager/classes/LoggingManager/"><code>LoggingManager</code></a></span>

The logging value.

***

### preferenceFilePath

> `readonly` **preferenceFilePath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The preference file path value.
