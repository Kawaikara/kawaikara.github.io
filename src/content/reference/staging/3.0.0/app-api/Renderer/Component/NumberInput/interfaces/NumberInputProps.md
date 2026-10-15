---
title: "NumberInputProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the number input props contract."
displayPath: "Renderer/Component/NumberInput"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/NumberInput/interfaces/NumberInputProps.md"
symbolKind: "Interface"
---
## Extends

- `Omit`\<`InputHTMLAttributes`\<`HTMLInputElement`\>, `"max"` \| `"min"` \| `"onChange"` \| `"size"` \| `"step"` \| `"type"` \| `"value"`\>

## Properties

### containerClassName?

> `readonly` `optional` **containerClassName?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The container class name value.

### decrementLabel?

> `readonly` `optional` **decrementLabel?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The decrement label value.

***

### description?

> `readonly` `optional` **description?**: `ReactNode`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>ReactNode</code></span>

The description value.

***

### incrementLabel?

> `readonly` `optional` **incrementLabel?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The increment label value.

***

### label

> `readonly` **label**: `ReactNode`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>ReactNode</code></span>

The label value.

***

### layout?

> `readonly` `optional` **layout?**: `"inline"` \| `"stacked"`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>&quot;inline&quot; | &quot;stacked&quot;</code></span>

The layout value.

***

### max

> `readonly` **max**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The max value.

***

### min

> `readonly` **min**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The min value.

***

### onValueChange

> `readonly` **onValueChange**: (`value`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(value) =&gt; void</code></a></span>

Callback used to handle on value change.

#### Parameters

##### value

`number`

#### Returns

`void`

***

### step?

> `readonly` `optional` **step?**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The step value.

***

### unit?

> `readonly` `optional` **unit?**: `ReactNode`
>
> <span class="type-reference"><span class="type-reference-label">TYPE</span><code>ReactNode</code></span>

The unit value.

***

### value

> `readonly` **value**: [`number`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>number</code></a></span>

The value value.
