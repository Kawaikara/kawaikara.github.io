---
title: "UnifiedPictureInPictureState"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the unified picture in picture state contract."
displayPath: "Main/Functional/PictureInPictureRuntime"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/PictureInPictureRuntime/interfaces/UnifiedPictureInPictureState.md"
symbolKind: "Interface"
---
## Properties

### closing

> **closing**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the closing option is enabled.

### consoleListener

> `readonly` **consoleListener**: (`details`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(details) =&gt; void</code></a></span>

Callback used to handle console listener.

#### Parameters

##### details

`Event`\<`WebContentsConsoleMessageEventParams`\>

#### Returns

`void`

***

### controlsVisible

> **controlsVisible**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the controls visible option is enabled.

***

### dragState?

> `optional` **dragState?**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The drag state value.

#### cursorX

> `readonly` **cursorX**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The cursor x value.

#### cursorY

> `readonly` **cursorY**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The cursor y value.

#### windowX

> `readonly` **windowX**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The window x value.

#### windowY

> `readonly` **windowY**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The window y value.

***

### frame

> **frame**: `WebFrameMain`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>WebFrameMain</code></span>

The frame value.

***

### fullscreenReassertTimers

> `readonly` **fullscreenReassertTimers**: `Set`\<`Timeout`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;Timeout&gt;</code></a></span>

The fullscreen reassert timers value.

***

### hostFrames

> **hostFrames**: readonly `WebFrameMain`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>readonly WebFrameMain[]</code></span>

The host frames value.

***

### hoverTimer?

> `optional` **hoverTimer?**: `Timeout`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>Timeout</code></span>

The hover timer value.

***

### inputListener

> `readonly` **inputListener**: (`event`, `input`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(event, input) =&gt; void</code></a></span>

Callback used to handle input listener.

#### Parameters

##### event

##### input

`Input`

#### Returns

`void`

***

### lastControlAction?

> `optional` **lastControlAction?**: [`object`](https://www.typescriptlang.org/docs/handbook/2/functions.html#object)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#object"><code>object</code></a></span>

The last control action value.

#### action

> `readonly` **action**: `"playback"` \| `"restore"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;playback&quot; | &quot;restore&quot;</code></span>

The action value.

#### at

> `readonly` **at**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The at value.

***

### mediaStartedListener

> `readonly` **mediaStartedListener**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle media started listener.

#### Returns

`void`

***

### navigationListener

> `readonly` **navigationListener**: () => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>() =&gt; void</code></a></span>

Callback used to handle navigation listener.

#### Returns

`void`

***

### pipWindow

> `readonly` **pipWindow**: `BrowserWindow`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>BrowserWindow</code></span>

The PiP window value.

***

### pointerInputListener

> `readonly` **pointerInputListener**: (`event`, `input`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(event, input) =&gt; void</code></a></span>

Callback used to handle pointer input listener.

#### Parameters

##### event

##### input

`InputEvent`

#### Returns

`void`

***

### refreshingVideo

> **refreshingVideo**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the refreshing video option is enabled.

***

### siteView

> `readonly` **siteView**: `WebContentsView`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>WebContentsView</code></span>

The site view value.

***

### videoRefreshTimers

> `readonly` **videoRefreshTimers**: `Set`\<`Timeout`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"><code>Set&lt;Timeout&gt;</code></a></span>

The video refresh timers value.

***

### viewerWindow

> `readonly` **viewerWindow**: `BrowserWindow`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>BrowserWindow</code></span>

The viewer window value.
