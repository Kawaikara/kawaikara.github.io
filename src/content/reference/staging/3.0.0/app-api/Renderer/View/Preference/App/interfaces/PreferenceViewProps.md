---
title: "PreferenceViewProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the preference view props contract."
displayPath: "Renderer/View/Preference/App"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/View/Preference/App/interfaces/PreferenceViewProps.md"
symbolKind: "Interface"
---
## Properties

### initialMessages

> `readonly` **initialMessages**: [`AppMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/AppMessages/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/AppMessages/"><code>AppMessages</code></a></span>

The initial messages value.

### onBack

> `readonly` **onBack**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle on back.

#### Returns

`void`

***

### onBackHandlerChange?

> `readonly` `optional` **onBackHandlerChange?**: (`handler`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(handler) =&gt; void</code></a></span>

Callback used to handle on back handler change.

#### Parameters

##### handler

(() => `void`) \| `undefined`

#### Returns

`void`

***

### onMessagesChange?

> `readonly` `optional` **onMessagesChange?**: (`messages`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(messages) =&gt; void</code></a></span>

Callback used to handle on messages change.

#### Parameters

##### messages

[`AppMessages`](/api/staging/3.0.0/app/Main/Functional/RendererMessages/interfaces/AppMessages/)

#### Returns

`void`

***

### onPreferencesChange?

> `readonly` `optional` **onPreferencesChange?**: (`preferences`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(preferences) =&gt; void</code></a></span>

Callback used to handle on preferences change.

#### Parameters

##### preferences

[`PreferenceState`](/api/staging/3.0.0/app/Common/IPC/interfaces/PreferenceState/)

#### Returns

`void`

***

### onThemePreview?

> `readonly` `optional` **onThemePreview?**: (`theme`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(theme) =&gt; void</code></a></span>

Callback used to handle on theme preview.

#### Parameters

##### theme

[`AppTheme`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppTheme/)

#### Returns

`void`

***

### sites

> `readonly` **sites**: readonly [`SiteMenuItem`](/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/IPC/interfaces/SiteMenuItem/"><code>readonly SiteMenuItem[]</code></a></span>

The sites value.
