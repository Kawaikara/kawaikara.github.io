---
title: "webAuthenticationPolicy()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · SiteUtilities"
description: "Keep web OAuth in a child window that shares the Provider Session. Sending these URLs to the main viewer breaks opener/callback flows, while opening the system browser loses the Electron Session that must receive the result."
displayPath: "SiteUtilities"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "SiteUtilities/functions/webAuthenticationPolicy.md"
symbolKind: "Function"
---
> **webAuthenticationPolicy**(`url`, `fallback?`): [`NewWindowPolicy`](/api/staging/3.0.0/site-api/SiteContext/type-aliases/NewWindowPolicy/)

Keep web OAuth in a child window that shares the Provider Session. Sending
these URLs to the main viewer breaks opener/callback flows, while opening the
system browser loses the Electron Session that must receive the result.

## Parameters

### url

`string`

### fallback?

[`NewWindowPolicy`](/api/staging/3.0.0/site-api/SiteContext/type-aliases/NewWindowPolicy/) = `'viewer'`

## Returns

[`NewWindowPolicy`](/api/staging/3.0.0/site-api/SiteContext/type-aliases/NewWindowPolicy/)
