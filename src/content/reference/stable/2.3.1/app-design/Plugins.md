---
title: "Plugin"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "APP Design · Plugins"
description: "Kawaikara Support Plugins"
displayPath: "Plugins"
section: "app-design"
sourceRef: "v2.3.1"
sourcePath: "Plugins.md"
symbolKind: "Guide"
---
## Plugin Structure

```
    ${plugin_path}/
        kawai_plugin_1/
            manifest.json
            your-plugin.js
```

## Menifest structure

```json 
{
    "entry" : "${your-plugin-name}.js"
}
```

* **entry** : plugin entry file name.
