---
title: "SiteCookieStore"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · SiteContext"
description: "Describes the site cookie store contract."
displayPath: "SiteContext"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "SiteContext/interfaces/SiteCookieStore.md"
symbolKind: "Interface"
---
## Methods

### clear()

> **clear**(`options`): `Promise`\<`number`\>

Clears the operation.

#### Parameters

##### options

[`SiteCookieClearOptions`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieClearOptions/)

#### Returns

`Promise`\<`number`\>

### list()

> **list**(`options`): `Promise`\<readonly [`SiteCookieMetadata`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieMetadata/)[]\>

Returns cookie names and domains only. Cookie values are never exposed.

#### Parameters

##### options

[`SiteCookieQuery`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieQuery/)

#### Returns

`Promise`\<readonly [`SiteCookieMetadata`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieMetadata/)[]\>
