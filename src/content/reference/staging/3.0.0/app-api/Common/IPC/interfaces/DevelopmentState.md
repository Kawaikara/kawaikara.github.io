---
title: "DevelopmentState"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the development state contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/DevelopmentState.md"
symbolKind: "Interface"
---
## Properties

### debugger

> `readonly` **debugger**: [`DevelopmentDebuggerInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentDebuggerInfo/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentDebuggerInfo/"><code>DevelopmentDebuggerInfo</code></a></span>

The debugger value.

### enabled

> `readonly` **enabled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the enabled option is enabled.

***

### projects

> `readonly` **projects**: readonly [`DevelopmentBundleProjectInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentBundleProjectInfo/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/DevelopmentBundleProjectInfo/"><code>readonly DevelopmentBundleProjectInfo[]</code></a></span>

The projects value.
