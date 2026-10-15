---
title: "disable_current_viewmode()"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · logics"
description: "Defined in: typescript_src/logics/mainview_logic.ts:15"
displayPath: "logics/mainview_logic"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/logics/mainview_logic/functions/disable_current_viewmode.md"
symbolKind: "Function"
---
> **disable\_current\_viewmode**(`view`, `context`): `void`

Defined in: [typescript\_src/logics/mainview\_logic.ts:15](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/logics/mainview_logic.ts#L15)

rollback to default view mode.
it doesn't modify view sizes and location.
it only manipulate modes.

## Parameters

### view

`BrowserWindow`

### context

[`KawaiContext`](/api/stable/2.3.1/app/definitions/context/type-aliases/KawaiContext/)

## Returns

`void`

## See

 - save_view_bounds
 - rollback_bounds
