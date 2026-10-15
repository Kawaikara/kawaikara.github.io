---
title: "ApplicationDataManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates application data behavior."
displayPath: "Main/Manager/ApplicationDataManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/ApplicationDataManager/classes/ApplicationDataManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new ApplicationDataManager**(`sites`): `ApplicationDataManager`

Creates an instance of ApplicationDataManager.

#### Parameters

##### sites

[`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)

The sites value.

#### Returns

`ApplicationDataManager`

## Properties

### relaunchScheduled

> `private` **relaunchScheduled**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The relaunch scheduled value.

### sites

> `private` `readonly` **sites**: [`SiteManager`](/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Manager/SiteManager/classes/SiteManager/"><code>SiteManager</code></a></span>

The sites value.

## Methods

### clearAllBrowserProfiles()

> **clearAllBrowserProfiles**(`locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the all browser profiles.

#### Parameters

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

***

### clearApplicationCache()

> **clearApplicationCache**(`locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the application cache.

#### Parameters

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

***

### clearBrowserProfile()

> **clearBrowserProfile**(`profileId`, `locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the browser profile.

#### Parameters

##### profileId

`string`

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

***

### clearIsolatedSite()

> **clearIsolatedSite**(`siteId`, `locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Clears the isolated site.

#### Parameters

##### siteId

`string`

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

***

### resetApplication()

> **resetApplication**(`locale`): `Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

Resets the application.

#### Parameters

##### locale

[`AppLocale`](/api/staging/3.0.0/app/Common/IPC/type-aliases/AppLocale/)

#### Returns

`Promise`\<[`ApplicationDataActionResult`](/api/staging/3.0.0/app/Common/IPC/type-aliases/ApplicationDataActionResult/)\>

***

### scheduleRelaunch()

> `private` **scheduleRelaunch**(): `void`

Schedules the relaunch.

#### Returns

`void`
