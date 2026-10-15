---
title: "ManagerContainer"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Application-scoped manager composition container."
displayPath: "Main/DependencyInjection/ManagerContainer"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/DependencyInjection/ManagerContainer/classes/ManagerContainer.md"
symbolKind: "Class"
---
Managers receive their dependencies through constructors. They must not keep
or resolve this container themselves; only the application composition root
should use it.

## Implements

- [`ManagerResolver`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerResolver/)

## Constructors

### Constructor

> **new ManagerContainer**(): `ManagerContainer`

#### Returns

`ManagerContainer`

## Properties

### registrations

> `private` `readonly` **registrations**: `Map`\<`symbol`, [`SingletonRegistration`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/InternalDeclarations/interfaces/SingletonRegistration/)\<`unknown`\>\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/InternalDeclarations/interfaces/SingletonRegistration/"><code>Map&lt;symbol, SingletonRegistration&lt;unknown&gt;&gt;</code></a></span>

The registrations value.

## Methods

### has()

> **has**(`token`): `boolean`

Determines whether the unnamed declaration condition applies.

#### Parameters

##### token

[`ManagerToken`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerToken/)\<`unknown`\>

#### Returns

`boolean`

### registerSingleton()

> **registerSingleton**\<`T`\>(`token`, `factory`): `this`

Registers the singleton.

#### Type Parameters

##### T

`T`

#### Parameters

##### token

[`ManagerToken`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerToken/)\<`T`\>

##### factory

[`ManagerFactory`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/type-aliases/ManagerFactory/)\<`T`\>

#### Returns

`this`

***

### registerValue()

> **registerValue**\<`T`\>(`token`, `instance`): `this`

Registers the value.

#### Type Parameters

##### T

`T`

#### Parameters

##### token

[`ManagerToken`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerToken/)\<`T`\>

##### instance

`T`

#### Returns

`this`

***

### replaceSingleton()

> **replaceSingleton**\<`T`\>(`token`, `factory`): `this`

Replaces the singleton.

#### Type Parameters

##### T

`T`

#### Parameters

##### token

[`ManagerToken`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerToken/)\<`T`\>

##### factory

[`ManagerFactory`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/type-aliases/ManagerFactory/)\<`T`\>

#### Returns

`this`

***

### resolve()

> **resolve**\<`T`\>(`token`): `T`

Resolves the operation.

#### Type Parameters

##### T

`T`

#### Parameters

##### token

[`ManagerToken`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerToken/)\<`T`\>

#### Returns

`T`

#### Implementation of

[`ManagerResolver`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerResolver/).[`resolve`](/api/staging/3.0.0/app/Main/DependencyInjection/ManagerContainer/interfaces/ManagerResolver/#resolve)
