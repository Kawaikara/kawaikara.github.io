---
title: "DevelopmentProjectRuntime"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the development project runtime contract."
displayPath: "Main/Functional/BundleDevelopment"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleDevelopment/interfaces/DevelopmentProjectRuntime.md"
symbolKind: "Interface"
---
## Properties

### buildChain

> **buildChain**: `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;void&gt;</code></a></span>

The build chain value.

### bundleId?

> `optional` **bundleId?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The bundle ID value.

***

### config?

> `optional` **config?**: [`ResolvedBundleProjectConfig`](/api/staging/3.0.0/app/Development/BundleProjectConfig/interfaces/ResolvedBundleProjectConfig/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Development/BundleProjectConfig/interfaces/ResolvedBundleProjectConfig/"><code>ResolvedBundleProjectConfig</code></a></span>

The config value.

***

### debounceTimer?

> `optional` **debounceTimer?**: `Timeout`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Timeout</code></span>

The debounce timer value.

***

### error?

> `optional` **error?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The error value.

***

### hotReload

> **hotReload**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the hot reload option is enabled.

***

### id

> **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### lastBuiltAt?

> `optional` **lastBuiltAt?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The last built at value.

***

### name

> **name**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The name value.

***

### outputDirectory

> **outputDirectory**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The output directory value.

***

### projectPath

> **projectPath**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The project path value.

***

### revision?

> `optional` **revision?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The revision value.

***

### status

> **status**: [`DevelopmentBundleStatus`](/api/staging/3.0.0/app/Common/IPC/type-aliases/DevelopmentBundleStatus/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/type-aliases/DevelopmentBundleStatus/"><code>DevelopmentBundleStatus</code></a></span>

The status value.

***

### watchers

> **watchers**: `FSWatcher`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>FSWatcher[]</code></span>

The watchers value.
