---
title: "package.json"
channel: "stable"
appVersion: "2.3.1"
siteApiVersion: null
category: "APP Design · package.json"
description: "package.json guide reference."
displayPath: "package.json"
section: "app-design"
sourceRef: "v2.3.1"
sourcePath: "package.json.md"
symbolKind: "Guide"
---
## general key
repository : github repositiory ssh address

## scripts key
- "web": 
- "start:remote": 
- "start:electron": 
- "compile:remote": 
- "start:local": 
- "compile:local": 
- "debug": 
- "build": 
- "web:build": 
- "build:webpack": 
- "release:not_yet": 
- "release": 
- "make-cert:win": 
- "make-cert:mac": 
- "lint": 
- "test": 

## semantic-release key
    "private": "true",

## electron-builder key

### build
    - files : 
    - extends:
    - appId:
    - copyright
    - electronDownload
    - afterSign
    - win 
    - mac
    -publish
