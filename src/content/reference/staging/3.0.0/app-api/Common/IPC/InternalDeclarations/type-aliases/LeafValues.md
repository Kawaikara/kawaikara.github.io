---
title: "LeafValues\\"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Defines the leaf values type."
displayPath: "Common/IPC/InternalDeclarations"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/IPC/InternalDeclarations/type-aliases/LeafValues.md"
symbolKind: "Type Alias"
---
> **LeafValues**\<`T`\> = `T` *extends* [`IpcChannelName`](/api/staging/3.0.0/app/Common/IPC/InternalDeclarations/type-aliases/IpcChannelName/) ? `T` : `T` *extends* `object` ? `{ [K in keyof T]: LeafValues<T[K]> }`\[keyof `T`\] : `never`

Defines the leaf values type.

## Type Parameters

### T

`T`
