---
title: "KawaiRecursiveTypeExtractor\\"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · definitions"
description: "Defined in: typescript_src/definitions/types.ts:36"
displayPath: "definitions/types"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/definitions/types/type-aliases/KawaiRecursiveTypeExtractor.md"
symbolKind: "Type Alias"
---
> **KawaiRecursiveTypeExtractor**\<`Type`, `RemainderType`\> = \{ \[Property in keyof Type as IsCompound\<ExtractCompound\<Type\[Property\]\>\> extends true ? Property : Property extends keyof RemainderType ? Property : never\]: IsCompound\<ExtractCompound\<Type\[Property\]\>\> extends true ? KawaiRecursiveTypeExtractor\<ExtractCompound\<Type\[Property\]\>, RemainderType\> \| ExtractLeaf\<Type\[Property\]\> : Type\[Property\] \}

Defined in: [typescript\_src/definitions/types.ts:36](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/types.ts#L36)

## Type Parameters

### Type

`Type`

### RemainderType

`RemainderType`
