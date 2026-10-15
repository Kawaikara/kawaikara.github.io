---
title: "DisposableStore"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Disposable"
description: "Represents the disposable store."
displayPath: "Disposable"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Disposable/classes/DisposableStore.md"
symbolKind: "Class"
---
## Implements

- [`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/)

## Constructors

### Constructor

> **new DisposableStore**(): `DisposableStore`

#### Returns

`DisposableStore`

## Properties

### disposed

> `private` **disposed**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The disposed value.

### items

> `private` `readonly` **items**: `Set`\<[`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/)\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/"><code>Set&lt;Disposable&gt;</code></a></span>

The items value.

## Methods

### add()

> **add**\<`T`\>(`item`): `T`

Performs the add operation.

#### Type Parameters

##### T

`T` *extends* [`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/)

#### Parameters

##### item

`T`

#### Returns

`T`

***

### clear()

> **clear**(): `void`

Clears the operation.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Releases the operation.

#### Returns

`void`

#### Implementation of

[`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/).[`dispose`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/#dispose)
