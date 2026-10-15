---
title: "DescriptiveSelectProps"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Describes the descriptive select props contract."
displayPath: "Renderer/Component/DescriptiveSelect"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/DescriptiveSelect/interfaces/DescriptiveSelectProps.md"
symbolKind: "Interface"
---
## Properties

### description?

> `readonly` `optional` **description?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The description value.

### disabled?

> `readonly` `optional` **disabled?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Whether the disabled option is enabled.

***

### label

> `readonly` **label**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The label value.

***

### onValueChange

> `readonly` **onValueChange**: (`value`) => `void`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/functions.html#void"><code>(value) =&gt; void</code></a></span>

Callback used to handle on value change.

#### Parameters

##### value

`string`

#### Returns

`void`

***

### options

> `readonly` **options**: readonly [`DescriptiveSelectOption`](/api/staging/3.0.0/app/Renderer/Component/DescriptiveSelect/interfaces/DescriptiveSelectOption/)[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Renderer/Component/DescriptiveSelect/interfaces/DescriptiveSelectOption/"><code>readonly DescriptiveSelectOption[]</code></a></span>

The options value.

***

### value

> `readonly` **value**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

The value value.
