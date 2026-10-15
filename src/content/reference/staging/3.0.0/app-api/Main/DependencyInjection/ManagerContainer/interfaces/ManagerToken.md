---
title: "ManagerToken\\"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the manager token contract."
displayPath: "Main/DependencyInjection/ManagerContainer"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/DependencyInjection/ManagerContainer/interfaces/ManagerToken.md"
symbolKind: "Interface"
---
## Type Parameters

### T

`T`

## Properties

### key

> `readonly` **key**: [`symbol`](https://www.typescriptlang.org/docs/handbook/symbols.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/symbols.html"><code>symbol</code></a></span>

The key value.

### managerType?

> `readonly` `optional` **managerType?**: (`manager`) => `T`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>(manager) =&gt; T</code></span>

Callback used to handle manager type.

#### Parameters

##### manager

`T`

#### Returns

`T`

***

### name

> `readonly` **name**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The name value.
