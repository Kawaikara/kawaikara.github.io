---
title: "convertPlayWrightCookieToElectron()"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · logics"
description: "Defined in: typescript_src/logics/cookies.ts:129"
displayPath: "logics/cookies"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/logics/cookies/functions/convertPlayWrightCookieToElectron.md"
symbolKind: "Function"
---
> **convertPlayWrightCookieToElectron**(`cookie`): `Promise`\<\{ `domain`: `string`; `expirationDate`: `number`; `httpOnly`: `boolean`; `name`: `string`; `path`: `string`; `sameSite`: `"no_restriction"` \| `"lax"` \| `"strict"` \| `"unspecified"`; `secure`: `boolean`; `url`: `string`; `value`: `string`; \}\>

Defined in: [typescript\_src/logics/cookies.ts:129](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/logics/cookies.ts#L129)

convert playwright to electron cookie form.

## Parameters

### cookie

`Cookie`

playwright cookie Object

## Returns

`Promise`\<\{ `domain`: `string`; `expirationDate`: `number`; `httpOnly`: `boolean`; `name`: `string`; `path`: `string`; `sameSite`: `"no_restriction"` \| `"lax"` \| `"strict"` \| `"unspecified"`; `secure`: `boolean`; `url`: `string`; `value`: `string`; \}\>
