---
title: "SiteIsolationContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the site isolation contribution contract."
displayPath: "Main/Functional/BundleRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/InternalDeclarations/interfaces/SiteIsolationContribution.md"
symbolKind: "Interface"
---
## Properties

### defaultBrowserProfile?

> `readonly` `optional` **defaultBrowserProfile?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Plugin-local browser profile id used by default. Omit it to isolate the
site in its own persistent Session.

### drm?

> `readonly` `optional` **drm?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Marks a DRM integration so the app can warn before sharing its Session.
