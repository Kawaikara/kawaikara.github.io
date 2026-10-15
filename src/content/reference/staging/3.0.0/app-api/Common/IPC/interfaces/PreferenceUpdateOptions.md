---
title: "PreferenceUpdateOptions"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Describes the preference update options contract."
displayPath: "Common/IPC"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/interfaces/PreferenceUpdateOptions.md"
symbolKind: "Interface"
---
## Properties

### restartForGraphicsChange?

> `readonly` `optional` **restartForGraphicsChange?**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

Required when the patch changes the startup-only Electron graphics mode.
