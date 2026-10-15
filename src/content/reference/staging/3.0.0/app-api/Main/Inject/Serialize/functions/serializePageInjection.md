---
title: "serializePageInjection()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Serialize a self-contained, typed function for Electron's remote page world. Main/Inject modules use this boundary before their scripts reach WebContents.executeJavaScript or WebFrameMain.executeJavaScript. Entry functions must not close over runtime values; pass those through the options overload so TypeScript and JSON serialization keep the boundary explicit."
displayPath: "Main/Inject/Serialize"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Inject/Serialize/functions/serializePageInjection.md"
symbolKind: "Function"
---
> **serializePageInjection**(`entryPoint`): `string`

Serialize a self-contained, typed function for Electron's remote page world.
Main/Inject modules use this boundary before their scripts reach
WebContents.executeJavaScript or WebFrameMain.executeJavaScript. Entry
functions must not close over runtime values; pass those through the options
overload so TypeScript and JSON serialization keep the boundary explicit.

## Parameters

### entryPoint

() => `unknown`

## Returns

`string`
