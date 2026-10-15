---
title: "transferWebContentsView()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Reparents a WebContentsView only after its target native window is visible, then gives Chromium time to submit frames for the new view hierarchy. Keeping this sequence platform-neutral avoids separate macOS and Windows PiP flows."
displayPath: "Main/Functional/WebContentsViewTransfer"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/WebContentsViewTransfer/functions/transferWebContentsView.md"
symbolKind: "Function"
---
> **transferWebContentsView**(`__namedParameters`): `Promise`\<`void`\>

Reparents a WebContentsView only after its target native window is visible,
then gives Chromium time to submit frames for the new view hierarchy. Keeping
this sequence platform-neutral avoids separate macOS and Windows PiP flows.

## Parameters

### \_\_namedParameters

[`WebContentsViewTransferOptions`](/api/staging/3.0.0/app/Main/Functional/WebContentsViewTransfer/interfaces/WebContentsViewTransferOptions/)

## Returns

`Promise`\<`void`\>
