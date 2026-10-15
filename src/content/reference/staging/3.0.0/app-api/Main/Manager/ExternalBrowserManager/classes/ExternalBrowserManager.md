---
title: "ExternalBrowserManager"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Main"
description: "Coordinates external browser behavior."
displayPath: "Main/Manager/ExternalBrowserManager"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Main/Manager/ExternalBrowserManager/classes/ExternalBrowserManager.md"
symbolKind: "Class"
---
## Constructors

### Constructor

> **new ExternalBrowserManager**(): `ExternalBrowserManager`

#### Returns

`ExternalBrowserManager`

## Properties

### activeLogin?

> `private` `optional` **activeLogin?**: [`ActiveExternalLogin`](/api/staging/3.0.0/app/Main/Functional/ExternalBrowser/interfaces/ActiveExternalLogin/)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · Kawaikara</span><a class="type-reference-link" href="/api/staging/3.0.0/app/Main/Functional/ExternalBrowser/interfaces/ActiveExternalLogin/"><code>ActiveExternalLogin</code></a></span>

Whether the active login option is enabled.

### browserCleanup?

> `private` `optional` **browserCleanup?**: `Promise`\<`void`\>
>
> <span class="type-reference"><span class="type-reference-label">TYPE · JavaScript</span><a class="type-reference-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"><code>Promise&lt;void&gt;</code></a></span>

The browser cleanup value.

***

### removedLegacyBrowserState

> `private` **removedLegacyBrowserState**: [`boolean`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) = `false`
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>boolean</code></a></span>

The removed legacy browser state value.

## Methods

### autoActivateLoginControl()

> `private` **autoActivateLoginControl**(`page`, `options`): `Promise`\<`void`\>

Performs the auto activate login control operation.

#### Parameters

##### page

`Page`

##### options

###### fallbackLabels?

readonly `string`[]

The fallback labels value.

###### selector

`string`

The selector value.

#### Returns

`Promise`\<`void`\>

***

### captureSettledCookies()

> `private` **captureSettledCookies**(`browserContext`, `stabilityMs`): `Promise`\<`Cookie`[]\>

Performs the capture settled cookies operation.

#### Parameters

##### browserContext

`BrowserContext`

##### stabilityMs

`number`

#### Returns

`Promise`\<`Cookie`[]\>

***

### close()

> **close**(): `Promise`\<`void`\>

Closes the operation.

#### Returns

`Promise`\<`void`\>

***

### launchBrowser()

> `private` **launchBrowser**(`profilePath`): `Promise`\<`BrowserContext`\>

Performs the launch browser operation.

#### Parameters

##### profilePath

`string`

#### Returns

`Promise`\<`BrowserContext`\>

***

### login()

> **login**(`options`, `targetSession`, `targetWebContents`): `Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>

Performs the login operation.

#### Parameters

##### options

[`ExternalLoginOptions`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/interfaces/ExternalLoginOptions/)

##### targetSession

`Session`

##### targetWebContents

`WebContents`

#### Returns

`Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>

***

### removeLegacyPersistentBrowserState()

> `private` **removeLegacyPersistentBrowserState**(): `Promise`\<`void`\>

Removes the legacy persistent browser state.

#### Returns

`Promise`\<`void`\>

***

### replaceSessionLogin()

> `private` **replaceSessionLogin**(`cookies`, `targetSession`, `targetWebContents`, `resetSessionOrigins?`, `replaceSessionCookies?`, `cookieImportMode?`): `Promise`\<`void`\>

Replaces the session login.

#### Parameters

##### cookies

`Cookie`[]

##### targetSession

`Session`

##### targetWebContents

`WebContents`

##### resetSessionOrigins?

readonly `string`[]

##### replaceSessionCookies?

`boolean` = `false`

##### cookieImportMode?

`"preserve-source"` \| `"domain-scoped-https"` \| `undefined`

#### Returns

`Promise`\<`void`\>

***

### seedBrowserCookies()

> `private` **seedBrowserCookies**(`browserContext`, `targetSession`): `Promise`\<`void`\>

Performs the seed browser cookies operation.

#### Parameters

##### browserContext

`BrowserContext`

##### targetSession

`Session`

#### Returns

`Promise`\<`void`\>

***

### syncCookies()

> `private` **syncCookies**(`cookies`, `targetSession`, `targetWebContents`, `cookieImportMode`): `Promise`\<`void`\>

Performs the sync cookies operation.

#### Parameters

##### cookies

`Cookie`[]

##### targetSession

`Session`

##### targetWebContents

`WebContents`

##### cookieImportMode

`"preserve-source"` \| `"domain-scoped-https"` \| `undefined`

#### Returns

`Promise`\<`void`\>

***

### syncPartitionedCookies()

> `private` **syncPartitionedCookies**(`cookies`, `targetWebContents`): `Promise`\<`void`\>

Performs the sync partitioned cookies operation.

#### Parameters

##### cookies

`Cookie`[]

##### targetWebContents

`WebContents`

#### Returns

`Promise`\<`void`\>

***

### toBrowserCookie()

> `private` **toBrowserCookie**(`cookie`): `object`

Performs the to browser cookie operation.

#### Parameters

##### cookie

`Cookie`

#### Returns

`object`

***

### toElectronCookie()

> `private` **toElectronCookie**(`cookie`, `cookieImportMode`): `CookiesSetDetails`

Performs the to Electron cookie operation.

#### Parameters

##### cookie

`Cookie`

##### cookieImportMode

`"preserve-source"` \| `"domain-scoped-https"` \| `undefined`

#### Returns

`CookiesSetDetails`

***

### verifyCookieSynchronization()

> `private` **verifyCookieSynchronization**(`expectedCookies`, `targetSession`): `Promise`\<`void`\>

Performs the verify cookie synchronization operation.

#### Parameters

##### expectedCookies

readonly `Cookie`[]

##### targetSession

`Session`

#### Returns

`Promise`\<`void`\>

***

### waitForLogin()

> `private` **waitForLogin**(`browserContext`, `page`, `profilePath`, `completionPattern`, `startUrl`, `targetSession`, `targetWebContents`, `resetSessionOrigins?`, `replaceSessionCookies?`, `cookieImportMode?`, `awaitBrowserCleanup?`, `cookieSettleMs?`, `autoActivate?`): `Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>

Waits for the for login.

#### Parameters

##### browserContext

`BrowserContext`

##### page

`Page`

##### profilePath

`string`

##### completionPattern

`RegExp`

##### startUrl

`string`

##### targetSession

`Session`

##### targetWebContents

`WebContents`

##### resetSessionOrigins?

readonly `string`[]

##### replaceSessionCookies?

`boolean` = `false`

##### cookieImportMode?

`"preserve-source"` \| `"domain-scoped-https"` \| `undefined`

##### awaitBrowserCleanup?

`boolean` = `false`

##### cookieSettleMs?

`number` = `0`

##### autoActivate?

###### fallbackLabels?

readonly `string`[]

The fallback labels value.

###### selector

`string`

The selector value.

#### Returns

`Promise`\<[`ExternalLoginResult`](/api/staging/3.0.0/app/Main/Functional/SiteRuntime/InternalDeclarations/type-aliases/ExternalLoginResult/)\>
