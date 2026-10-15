---
title: "DisposableStore"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Represents the disposable store."
displayPath: "Main/Functional/SiteRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/InternalDeclarations/classes/DisposableStore.md"
symbolKind: "Class"
---
## Implements

- [`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)

## Constructors

### Constructor

> **new DisposableStore**(): `DisposableStore`

#### Returns

`DisposableStore`

## Properties

### disposed

> `private` **disposed**: `any`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>any</code></span>

The disposed value.

### items

> `private` `readonly` **items**: `any`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>any</code></span>

The items value.

## Methods

### add()

> **add**\<`T`\>(`item`): `T`

Performs the add operation.

#### Type Parameters

##### T

`T` *extends* [`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)

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

[`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/).[`dispose`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/#dispose)
