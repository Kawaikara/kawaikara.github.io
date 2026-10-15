---
title: "DiscordPresenceManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Publishes Kawaikara's current viewing state through Discord Rich Presence."
displayPath: "Main/Manager/DiscordPresenceManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/DiscordPresenceManager/classes/DiscordPresenceManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new DiscordPresenceManager**(): `DiscordPresenceManager`

#### Returns

`DiscordPresenceManager`

## Properties

### client?

> `private` `optional` **client?**: [`Client`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/discord-rpc/index.d.ts#L54)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · discord-rpc</span><a class="type-reference-link" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/discord-rpc/index.d.ts#L54"><code>Client</code></a></span>

Discord RPC client used to publish and clear the current activity.

### startedAt

> `private` **startedAt**: [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"><code>Date</code></a></span>

Stable activity start time reused for the lifetime of this manager.

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Clears the published activity and closes the Discord RPC connection.

#### Returns

`Promise`\<`void`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Connects to Discord and publishes the Kawaikara viewing activity.

#### Returns

`Promise`\<`void`\>
