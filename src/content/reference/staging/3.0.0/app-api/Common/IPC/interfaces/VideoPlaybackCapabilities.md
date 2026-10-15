---
title: "VideoPlaybackCapabilities"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the video playback capabilities contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/VideoPlaybackCapabilities.md"
symbolKind: "Interface"
---
## Properties

### arch

> `readonly` **arch**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The arch value.

### electronGpuAccelerationEnabled

> `readonly` **electronGpuAccelerationEnabled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

False when app.disableHardwareAcceleration() selected software presentation.

***

### hardwareAccelerationDisabled

> `readonly` **hardwareAccelerationDisabled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

True only when MPV_HWDEC explicitly disables native hardware decoding.

***

### nativeBackendAvailable

> `readonly` **nativeBackendAvailable**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the native backend available option is enabled.

***

### platform

> `readonly` **platform**: `Platform`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Platform</code></span>

The platform value.
