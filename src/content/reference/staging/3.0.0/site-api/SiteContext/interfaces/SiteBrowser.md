---
title: "SiteBrowser"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · SiteContext"
description: "Describes the site browser contract."
displayPath: "SiteContext"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "SiteContext/interfaces/SiteBrowser.md"
symbolKind: "Interface"
---
## Methods

### useIdentity()

> **useIdentity**(`options`): [`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/)

Applies the identity to the viewer, popups, and matching requests until disposed.

#### Parameters

##### options

[`SiteBrowserIdentityOptions`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteBrowserIdentityOptions/)

#### Returns

[`Disposable`](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/)
