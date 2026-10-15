---
title: "SiteLogger"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · SiteContext"
description: "Describes the site logger contract."
displayPath: "SiteContext"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "SiteContext/interfaces/SiteLogger.md"
symbolKind: "Interface"
---
## Methods

### debug()

> **debug**(`message`, ...`args`): `void`

Performs the debug operation.

#### Parameters

##### message

`string`

##### args

...`unknown`[]

#### Returns

`void`

### error()

> **error**(`message`, ...`args`): `void`

Performs the error operation.

#### Parameters

##### message

`string`

##### args

...`unknown`[]

#### Returns

`void`

***

### info()

> **info**(`message`, ...`args`): `void`

Performs the info operation.

#### Parameters

##### message

`string`

##### args

...`unknown`[]

#### Returns

`void`

***

### warn()

> **warn**(`message`, ...`args`): `void`

Performs the warn operation.

#### Parameters

##### message

`string`

##### args

...`unknown`[]

#### Returns

`void`
