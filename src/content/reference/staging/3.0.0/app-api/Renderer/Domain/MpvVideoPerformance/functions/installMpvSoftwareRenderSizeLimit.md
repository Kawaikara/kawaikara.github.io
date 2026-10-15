---
title: "installMpvSoftwareRenderSizeLimit()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Canvas2D transports a complete RGBA frame through the main process for every libmpv update. Rendering at Retina devicePixelRatio therefore moves an unnecessary 1920x1080 buffer even when the CSS player is much smaller. Keep the GPU renderer untouched, but cap the capture-compatible software surface at CSS resolution and 720p."
displayPath: "Renderer/Domain/MpvVideoPerformance"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Domain/MpvVideoPerformance/functions/installMpvSoftwareRenderSizeLimit.md"
symbolKind: "Function"
---
> **installMpvSoftwareRenderSizeLimit**(): `void`

Canvas2D transports a complete RGBA frame through the main process for every
libmpv update. Rendering at Retina devicePixelRatio therefore moves an
unnecessary 1920x1080 buffer even when the CSS player is much smaller. Keep
the GPU renderer untouched, but cap the capture-compatible software surface
at CSS resolution and 720p.

## Returns

`void`
