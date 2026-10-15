---
title: "BgTaskMeta"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "Source API · manager"
description: "Defined in: typescript_src/manager/background_task_manager.ts:60"
displayPath: "manager/background_task_manager"
section: "app-api"
sourceRef: "v2.3.1"
sourcePath: "typescript_src/manager/background_task_manager/type-aliases/BgTaskMeta.md"
symbolKind: "Type Alias"
---
> **BgTaskMeta** = `object`

Defined in: [typescript\_src/manager/background\_task\_manager.ts:60](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L60)

Background Task message

prefix : "bg"
separator : ":"

example : bg:some:thing.

//searching tasks

## See

KawaiBgTaskManager._getTasks
bg:tasks := listing all task.
bg:tasks:{id} get task which has specific idenitifer.
bg:tasks:{category} := listing all task belong to category.

bg:tasks:created
bg:tasks:completed
c *
task manipulation

bg:delete:{id} := delete task
bg:pause:{id} := pause task
bg:resume:{id} := resume task

RECV callback data on Renderer Process
bg:progress := recv all progress data.
bg:progress:{id} : recv specific progress data
bg:progress:{category} recv specific category progress data.

Recv stdout or stdErr and Task End(Close) Msg.

bg:stdout :=
bg:stdout:{id} :=
bg:stderr
bg:stderr:{id}
bg:close
bg:close:{id} := specific id

## Properties

### content

> **content**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:63](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L63)

### id

> **id**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:61](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L61)

***

### name

> **name**: [`string`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
>
> <span class="type-reference"><span class="type-reference-label">TYPE · TypeScript</span><a class="type-reference-link" href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"><code>string</code></a></span>

Defined in: [typescript\_src/manager/background\_task\_manager.ts:62](https://github.com/fabyday/kawaikara/blob/v2.3.1/typescript_src/manager/background_task_manager.ts#L62)
