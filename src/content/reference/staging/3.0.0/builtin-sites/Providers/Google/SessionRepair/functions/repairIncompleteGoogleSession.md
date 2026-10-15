---
title: "repairIncompleteGoogleSession()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · Providers"
description: "Retired external-login builds could import only the regional Google cookie family. accounts.google.com then sees an account while YouTube and google.com do not, making BootstrapSession redirect indefinitely. Repair only that exact incomplete shape; a complete single- or multi-account Session is never cleared."
displayPath: "Providers/Google/SessionRepair"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "Providers/Google/SessionRepair/functions/repairIncompleteGoogleSession.md"
symbolKind: "Function"
---
> **repairIncompleteGoogleSession**(`context`): `Promise`\<`void`\>

Retired external-login builds could import only the regional Google cookie
family. accounts.google.com then sees an account while YouTube and
google.com do not, making BootstrapSession redirect indefinitely. Repair
only that exact incomplete shape; a complete single- or multi-account
Session is never cleared.

## Parameters

### context

[`SiteContext`](/api/staging/3.0.0/builtin-sites/Index/InternalDeclarations/interfaces/SiteContext/)

## Returns

`Promise`\<`void`\>
