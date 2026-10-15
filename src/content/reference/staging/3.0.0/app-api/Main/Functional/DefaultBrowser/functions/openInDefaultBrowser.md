---
title: "openInDefaultBrowser()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Open a web URL with the operating system's registered default browser. Keeping this in Main also prevents remote page content from invoking arbitrary external protocols through Electron's shell API."
displayPath: "Main/Functional/DefaultBrowser"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/DefaultBrowser/functions/openInDefaultBrowser.md"
symbolKind: "Function"
---
> **openInDefaultBrowser**(`value`): `Promise`\<`void`\>

Open a web URL with the operating system's registered default browser.
Keeping this in Main also prevents remote page content from invoking
arbitrary external protocols through Electron's shell API.

## Parameters

### value

`string`

## Returns

`Promise`\<`void`\>
