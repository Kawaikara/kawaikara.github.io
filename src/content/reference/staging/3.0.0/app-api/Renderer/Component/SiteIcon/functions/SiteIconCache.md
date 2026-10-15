---
title: "SiteIconCache()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Renderer"
description: "Keep one decoded image element alive while the overlay renderer is running. The visible menu is intentionally unmounted after its close animation, but these retained elements prevent remote favicons from flashing blank when it is opened again with Tab."
displayPath: "Renderer/Component/SiteIcon"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Renderer/Component/SiteIcon/functions/SiteIconCache.md"
symbolKind: "Function"
---
> **SiteIconCache**(`__namedParameters`): `Element`

Keep one decoded image element alive while the overlay renderer is running.
The visible menu is intentionally unmounted after its close animation, but
these retained elements prevent remote favicons from flashing blank when it
is opened again with Tab.

## Parameters

### \_\_namedParameters

[`SiteIconCacheProps`](/api/staging/3.0.0/app/Renderer/Component/SiteIcon/interfaces/SiteIconCacheProps/)

## Returns

`Element`
