---
title: "createLoginControlInjection()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · SiteUtilities"
description: "Builds the standard external-login control bridge used by remote pages. createExternalLoginFlow() in site-api/ExternalLoginFlow.ts is the only runtime caller: it registers the result with the active Provider's SitePagePipeline. Built-in Netflix and CoupangPlay Providers construct that flow, but do not execute installLoginControl() directly."
displayPath: "SiteUtilities"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "SiteUtilities/functions/createLoginControlInjection.md"
symbolKind: "Function"
---
> **createLoginControlInjection**(`options`): `string`

Builds the standard external-login control bridge used by remote pages.
createExternalLoginFlow() in site-api/ExternalLoginFlow.ts is the only
runtime caller: it registers the result with the active Provider's
SitePagePipeline. Built-in Netflix and CoupangPlay Providers construct that
flow, but do not execute installLoginControl() directly.

## Parameters

### options

[`SiteLoginControlInjectionOptions`](/api/staging/3.0.0/site-api/SiteUtilities/interfaces/SiteLoginControlInjectionOptions/)

## Returns

`string`
