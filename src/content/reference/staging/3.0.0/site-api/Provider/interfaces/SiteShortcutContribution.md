---
title: "SiteShortcutContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Provider"
description: "Describes the site shortcut contribution contract."
displayPath: "Provider"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Provider/interfaces/SiteShortcutContribution.md"
symbolKind: "Interface"
---
## Properties

### actions?

> `readonly` `optional` **actions?**: readonly [`SiteActionShortcutContribution`](/api/staging/3.0.0/site-api/Provider/interfaces/SiteActionShortcutContribution/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/site-api/Provider/interfaces/SiteActionShortcutContribution/"><code>readonly SiteActionShortcutContribution[]</code></a></span>

Provider-local actions added to the shared Shortcut preference page.

### defaultKey?

> `readonly` `optional` **defaultKey?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Electron accelerator used until the user supplies an override.
