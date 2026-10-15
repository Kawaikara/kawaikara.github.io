---
title: "SingletonRegistration\\"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the singleton registration contract."
displayPath: "Main/DependencyInjection/ManagerContainer/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/DependencyInjection/ManagerContainer/InternalDeclarations/interfaces/SingletonRegistration.md"
symbolKind: "Interface"
---
## Type Parameters

### T

`T`

## Properties

### factory

> `readonly` **factory**: [`ManagerFactory`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/type-aliases/ManagerFactory/)\<`T`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/type-aliases/ManagerFactory/"><code>ManagerFactory&lt;T&gt;</code></a></span>

The factory value.

### initialized

> **initialized**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the initialized option is enabled.

***

### instance?

> `optional` **instance?**: `T`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>T</code></span>

The instance value.

***

### resolving

> **resolving**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the resolving option is enabled.
