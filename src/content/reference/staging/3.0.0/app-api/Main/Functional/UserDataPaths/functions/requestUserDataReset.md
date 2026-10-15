---
title: "requestUserDataReset()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Defers deletion until the next process starts, before Chromium, logging, or PreferenceManager opens files beneath the data roots."
displayPath: "Main/Functional/UserDataPaths"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/UserDataPaths/functions/requestUserDataReset.md"
symbolKind: "Function"
---
> **requestUserDataReset**(`mode`): `void`

Defers deletion until the next process starts, before Chromium, logging, or
PreferenceManager opens files beneath the data roots.

## Parameters

### mode

[`UserDataResetMode`](/api/staging/3.0.0/app/Main/Functional/UserDataPaths/type-aliases/UserDataResetMode/)

## Returns

`void`
