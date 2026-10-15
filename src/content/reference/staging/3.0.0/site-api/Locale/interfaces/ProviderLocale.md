---
title: "ProviderLocale\\"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · Locale"
description: "Describes the provider locale contract."
displayPath: "Locale"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "Locale/interfaces/ProviderLocale.md"
symbolKind: "Interface"
---
## Type Parameters

### Resource

`Resource` *extends* [`ProviderLocaleResource`](/api/staging/3.0.0/site-api/Locale/type-aliases/ProviderLocaleResource/)

## Methods

### resolve()

> **resolve**(`locale`, `key`, `defaultLocale?`): `string`

Resolves one message for page injection and other runtime behavior.

#### Parameters

##### locale

`string` \| `undefined`

##### key

`Extract`\<\{ \[Locale in string \| number \| symbol\]: keyof Resource\[Locale\] \}\[keyof `Resource`\]\>

##### defaultLocale?

`string`

#### Returns

`string`

### text()

> **text**(`key`): [`ProviderLocalizedText`](/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/)

Returns the locale map consumed by Provider presentation contributions.

#### Parameters

##### key

`Extract`\<\{ \[Locale in string \| number \| symbol\]: keyof Resource\[Locale\] \}\[keyof `Resource`\]\>

#### Returns

[`ProviderLocalizedText`](/api/staging/3.0.0/site-api/Provider/type-aliases/ProviderLocalizedText/)
