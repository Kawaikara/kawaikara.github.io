---
title: "SiteBrowserIdentityOptions"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Index"
description: "Describes the site browser identity options contract."
displayPath: "Index/InternalDeclarations"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Index/InternalDeclarations/interfaces/SiteBrowserIdentityOptions.md"
symbolKind: "Interface"
---
## Properties

### clientHints?

> `readonly` `optional` **clientHints?**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

`auto` derives a matching Chromium Client Hint from the UA.

### requestHosts?

> `readonly` `optional` **requestHosts?**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

HTTPS hosts receiving the identity headers. Omit to cover every HTTPS request.

***

### userAgent

> `readonly` **userAgent**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

`chromium` removes Electron/application product tokens from the current UA.
