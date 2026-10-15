---
title: "DeveloperLinksProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the developer links props contract."
displayPath: "Renderer/Component/DeveloperLinks"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/DeveloperLinks/interfaces/DeveloperLinksProps.md"
symbolKind: "Interface"
---
## Properties

### messages

> `readonly` **messages**: [`DeveloperLinkMessages`](/api/staging/3.0.0/app/Renderer/Component/DeveloperLinks/interfaces/DeveloperLinkMessages/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Renderer/Component/DeveloperLinks/interfaces/DeveloperLinkMessages/"><code>DeveloperLinkMessages</code></a></span>

The messages value.

### onOpen

> `readonly` **onOpen**: (`id`) => `void` \| `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(id) =&gt; void | Promise&lt;void&gt;</code></a></span>

Callback used to handle on open.

#### Parameters

##### id

[`ApplicationLinkId`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationLinkId/)

#### Returns

`void` \| `Promise`\<`void`\>

***

### youtubeStatus?

> `readonly` `optional` **youtubeStatus?**: [`DeveloperYouTubeStatus`](/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/DeveloperYouTubeStatus/"><code>DeveloperYouTubeStatus</code></a></span>

The YouTube status value.
