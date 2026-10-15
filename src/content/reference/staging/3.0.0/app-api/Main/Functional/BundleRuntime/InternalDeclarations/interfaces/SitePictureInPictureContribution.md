---
title: "SitePictureInPictureContribution"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the site picture in picture contribution contract."
displayPath: "Main/Functional/BundleRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/BundleRuntime/InternalDeclarations/interfaces/SitePictureInPictureContribution.md"
symbolKind: "Interface"
---
## Properties

### contentOverlaySelectors?

> `readonly` `optional` **contentOverlaySelectors?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Page-rendered overlays that remain visible above the video in unified PiP.
Use this for subtitle/caption containers rendered outside the video element.

### enabled?

> `readonly` `optional` **enabled?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Exposes Kawaikara's unified PiP action for this provider. Disable it for
integrations that never present video (for example, books or music-only
services). Route-level eligibility still belongs in
allowPictureInPicture().

***

### pageControlSelectors?

> `readonly` `optional` **pageControlSelectors?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

Provider-specific selectors added to Kawaikara's generic PiP controls.

***

### pageRequestPolicy?

> `readonly` `optional` **pageRequestPolicy?**: `"block"` \| `"transient"` \| `"allow"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;block&quot; | &quot;transient&quot; | &quot;allow&quot;</code></span>

Controls page-originated HTML video PiP requests while page controls are
suppressed. `block` is the default. `transient` lets a site's automatic
request enter briefly and then closes it, preserving SPA enter/leave
cleanup hooks without exposing a second user-controlled PiP lifecycle.

***

### suppressPageControls?

> `readonly` `optional` **suppressPageControls?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Hides and disables the Provider page's own PiP controls so every PiP
transition stays inside Kawaikara's unified window lifecycle. Defaults to
true independently of whether the Provider exposes Kawaikara PiP.
