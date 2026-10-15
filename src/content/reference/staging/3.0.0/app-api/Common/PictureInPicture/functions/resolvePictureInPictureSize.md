---
title: "resolvePictureInPictureSize()"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Source API · Common"
description: "Resolves the picture in picture size."
displayPath: "Common/PictureInPicture"
section: "app-api"
sourceRef: "working-tree"
sourcePath: "Common/PictureInPicture/functions/resolvePictureInPictureSize.md"
symbolKind: "Function"
---
> **resolvePictureInPictureSize**(`preference`, `videoAspectRatio?`, `orientation?`): `object`

Resolves the picture in picture size.

## Parameters

### preference

[`PictureInPictureSizePreference`](/api/staging/3.0.0/app/Common/PictureInPicture/interfaces/PictureInPictureSizePreference/)

### videoAspectRatio?

`number`

### orientation?

`"landscape"` \| `"portrait"`

## Returns

### height

> `readonly` **height**: `number`

The height value.

### width

> `readonly` **width**: `number`

The width value.
