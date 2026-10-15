---
title: "SiteBrowser"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Describes the site browser contract."
displayPath: "Main/Functional/SiteRuntime/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Functional/SiteRuntime/InternalDeclarations/interfaces/SiteBrowser.md"
symbolKind: "Interface"
---
## Methods

### useIdentity()

> **useIdentity**(`options`): [`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)

Applies the identity to the viewer, popups, and matching requests until disposed.

#### Parameters

##### options

[`SiteBrowserIdentityOptions`](/api/staging/3.0.0/app/Main/Functional/BundleRuntime/InternalDeclarations/interfaces/SiteBrowserIdentityOptions/)

#### Returns

[`Disposable`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/Disposable/)
