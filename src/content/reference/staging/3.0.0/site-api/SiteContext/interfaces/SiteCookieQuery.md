---
title: "SiteCookieQuery"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · SiteContext"
description: "Describes the site cookie query contract."
displayPath: "SiteContext"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "SiteContext/interfaces/SiteCookieQuery.md"
symbolKind: "Interface"
---
## Extended by

- [`SiteCookieClearOptions`](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieClearOptions/)

## Properties

### domains

> `readonly` **domains**: readonly `string`[]
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>readonly string[]</code></a></span>

HTTPS host names. A parent host also includes its subdomains.
