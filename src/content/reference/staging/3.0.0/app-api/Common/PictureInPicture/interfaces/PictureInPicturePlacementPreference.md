---
title: "PictureInPicturePlacementPreference"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the picture in picture placement preference contract."
displayPath: "Common/PictureInPicture"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/PictureInPicture/interfaces/PictureInPicturePlacementPreference.md"
symbolKind: "Interface"
---
## Properties

### lastPlacement?

> `readonly` `optional` **lastPlacement?**: [`PictureInPictureLastPlacement`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureLastPlacement/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureLastPlacement/"><code>PictureInPictureLastPlacement</code></a></span>

The last placement value.

### monitor

> `readonly` **monitor**: [`PictureInPictureMonitorPreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureMonitorPreference/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureMonitorPreference/"><code>PictureInPictureMonitorPreference</code></a></span>

The monitor value.

***

### position

> `readonly` **position**: `"top-left"` \| `"top-right"` \| `"bottom-left"` \| `"bottom-right"` \| `"last"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;top-left&quot; | &quot;top-right&quot; | &quot;bottom-left&quot; | &quot;bottom-right&quot; | &quot;last&quot;</code></span>

The position value.
