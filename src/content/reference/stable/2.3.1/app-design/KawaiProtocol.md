---
title: "Kawai Protocol"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "APP Design · KawaiProtocol"
description: "Electron doesn't support file:// protocol in Browsers. I introduce our custom file protocol named kawai."
displayPath: "KawaiProtocol"
section: "app-design"
sourceRef: "v2.3.1"
sourcePath: "KawaiProtocol.md"
symbolKind: "Guide"
---
Root Directory is Kawaikara project root.
```
${kawaikara_project_root}/your-path/your-file.ext
```

## For example

if someone want to reach resource and icons.
then write like that in renderer code.
```
<img src="kawai://resources/icons/discord.ico">
```

simple and super easy. right?
