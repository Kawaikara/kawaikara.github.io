---
title: "BundleRuntimeInfo"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the bundle runtime info contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/BundleRuntimeInfo.md"
symbolKind: "Interface"
---
## Properties

### browserProfiles

> `readonly` **browserProfiles**: readonly [`BrowserProfileInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/BrowserProfileInfo/"><code>readonly BrowserProfileInfo[]</code></a></span>

The browser profiles value.

### defaultLocale

> `readonly` **defaultLocale**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The default locale value.

***

### description?

> `readonly` `optional` **description?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The description value.

***

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The ID value.

***

### kind

> `readonly` **kind**: `"bundle"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;bundle&quot;</code></span>

The kind value.

***

### name

> `readonly` **name**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The name value.

***

### pluginCount

> `readonly` **pluginCount**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The plugin count value.

***

### providerCount

> `readonly` **providerCount**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The provider count value.

***

### providers

> `readonly` **providers**: readonly [`ProviderRuntimeInfo`](/api/staging/3.0.0/app/Common/IPC/interfaces/ProviderRuntimeInfo/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/ProviderRuntimeInfo/"><code>readonly ProviderRuntimeInfo[]</code></a></span>

The providers value.

***

### supportedLocales

> `readonly` **supportedLocales**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

The supported locales value.

***

### version

> `readonly` **version**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The version value.
