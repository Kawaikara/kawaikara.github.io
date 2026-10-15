---
title: "createPagePictureInPicturePolicyScript()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Resolves application defaults and Provider selector declarations."
displayPath: "Main/Functional/PagePictureInPicturePolicy"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/PagePictureInPicturePolicy/functions/createPagePictureInPicturePolicyScript.md"
symbolKind: "Function"
---
> **createPagePictureInPicturePolicyScript**(`options?`): `string`

Resolves application defaults and Provider selector declarations.

SiteManager.installPagePictureInPicturePolicy() is the only caller. The
executable page-world TypeScript lives in
Main/Inject/PagePictureInPicturePolicy.ts so this Functional module contains
policy selection only.

## Parameters

### options?

[`PagePictureInPicturePolicyOptions`](/api/staging/3.0.0/app/Main/Functional/PagePictureInPicturePolicy/InternalDeclarations/interfaces/PagePictureInPicturePolicyOptions/) = `{}`

## Returns

`string`
