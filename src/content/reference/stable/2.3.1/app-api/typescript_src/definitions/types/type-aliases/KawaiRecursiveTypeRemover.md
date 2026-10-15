---
title: "KawaiRecursiveTypeRemover\\"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · definitions"
description: "Defined in: typescript_src/definitions/types.ts:28"
displayPath: "definitions/types"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/definitions/types/type-aliases/KawaiRecursiveTypeRemover.md"
symbolKind: "Type Alias"
---
> **KawaiRecursiveTypeRemover**\<`Type`, `D`\> = `{ [Property in keyof Type as Exclude<Property, keyof D>]: IsCompound<RemoveOptionalArgs<Type[Property]>> extends true ? KawaiRecursiveTypeRemover<RemoveOptionalArgs<Type[Property]>, D> : Type[Property] }`

Defined in: [typescript\_src/definitions/types.ts:28](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/definitions/types.ts#L28)

T : Source Type
D : Type You want to delete.

## Type Parameters

### Type

`Type`

### D

`D`
