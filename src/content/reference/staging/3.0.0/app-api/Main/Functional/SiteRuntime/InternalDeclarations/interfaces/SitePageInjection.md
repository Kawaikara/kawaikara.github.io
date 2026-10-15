---
title: "SitePageInjection"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the site page injection contract."
displayPath: "Main/Functional/SiteRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SitePageInjection.md"
symbolKind: "Interface"
---
## Properties

### frames?

> `readonly` `optional` **frames?**: [`SitePageFrameScope`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SitePageFrameScope/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SitePageFrameScope/"><code>SitePageFrameScope</code></a></span>

Defaults to the main document.

### id

> `readonly` **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Stable, Provider-scoped name used in diagnostics.

***

### phases?

> `readonly` `optional` **phases?**: readonly [`SitePagePhase`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SitePagePhase/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/SitePagePhase/"><code>readonly SitePagePhase[]</code></a></span>

Defaults to dom-ready and did-finish-load.

***

### runImmediately?

> `readonly` `optional` **runImmediately?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Also install immediately in the current document. Defaults to false.

***

### source

> `readonly` **source**: `string` \| (() => `string` \| `Promise`\<`string`\>)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string | (() =&gt; string | Promise&lt;string&gt;)</code></a></span>

Rebuilt before every pass so settings and action URLs can stay current.
