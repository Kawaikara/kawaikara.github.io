---
title: "Abstract Class: AbstractPlugin"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Plugin"
description: "Represents the abstract plugin."
displayPath: "Plugin"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Plugin/classes/AbstractPlugin.md"
symbolKind: "Reference"
---
## Constructors

### Constructor

> **new AbstractPlugin**(`context`): `AbstractPlugin`

Creates an instance of AbstractPlugin.

#### Parameters

##### context

[`PluginContext`](/api/staging/3.0.0/site-api/Plugin/interfaces/PluginContext/)

The context value.

#### Returns

`AbstractPlugin`

## Properties

### context

> `protected` `readonly` **context**: [`PluginContext`](/api/staging/3.0.0/site-api/Plugin/interfaces/PluginContext/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Plugin/interfaces/PluginContext/"><code>PluginContext</code></a></span>

The context value.

### subscriptions

> `protected` `readonly` **subscriptions**: [`DisposableStore`](/api/staging/3.0.0/site-api/Disposable/classes/DisposableStore/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Disposable/classes/DisposableStore/"><code>DisposableStore</code></a></span>

The subscriptions value.

## Methods

### activate()

> `abstract` **activate**(): `void` \| `Promise`\<`void`\>

Performs the activate operation.

#### Returns

`void` \| `Promise`\<`void`\>

***

### deactivate()

> **deactivate**(): `Promise`\<`void`\>

Performs the deactivate operation.

#### Returns

`Promise`\<`void`\>
