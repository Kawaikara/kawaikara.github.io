---
title: "Kawaikara Developer Documentation"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "APP Design"
description: "This documentation describes the active dev branch and the version 3.0 implementation. These documents are intended for contributors working on the application, built-in Providers, or installable Bundles."
displayPath: ""
section: "app-design"
sourceRef: "working-tree"
sourcePath: "README.md"
symbolKind: "Guide"
---
The documentation distinguishes shipped behavior from incomplete design work. A capability described as **planned** is not available to users yet.

## Architecture

- [Architecture overview](/docs/staging/3.0.0/app/Architecture/Overview/): repository ownership, dependency direction, composition, and IPC contracts
- [Logging and diagnostics](/docs/staging/3.0.0/app/Architecture/Logging/): file rotation, scopes, crash capture, renderer logging, and redaction
- [Runtime and lifecycle](/docs/staging/3.0.0/app/Architecture/Runtime/): windows, sessions, site loading, shortcuts, navigation, and cleanup
- [Security boundaries](/docs/staging/3.0.0/app/Architecture/Security/): renderer isolation, remote pages, cookies, plugins, and permissions
- [Bundle, Provider, and Plugin](/docs/staging/3.0.0/app/Architecture/Bundle/): extension units, lifecycle, validation, compatibility, and current limits
- [Branches and release channels](/docs/staging/3.0.0/app/BranchesAndChannels/): `main` versus `dev`, Stable/Staging/Nightly, and the difference between a documentation preview and a published build

## Plugin development

- [Plugin system overview](/docs/staging/3.0.0/app/Plugins/Overview/): the current Bundle model, browser profiles, locales, and implementation status
- [Provider development guide](/docs/staging/3.0.0/app/Plugins/Provider/): metadata, loading, injection, login handling, PiP guards, and request hooks
- [Bundle development host](/docs/staging/3.0.0/app/Plugins/Development/): in-app builds, hot reload, local projects, and VS Code attach debugging
- [Bundle packaging and distribution](/docs/staging/3.0.0/app/Plugins/Packaging/): `.kawai` installation, validation, and the trust boundary

## Implemented features

- [Built-in integrations](/docs/staging/3.0.0/app/Features/BuiltInSites/): bundled sites and the site-specific compatibility behavior currently implemented
- [Overlay and preferences](/docs/staging/3.0.0/app/Features/OverlayAndPreferences/): full-window preferences, menu ordering, profiles, locales, shortcuts, and app information
- [Unified Picture in Picture](/docs/staging/3.0.0/app/Features/PictureInPicture/): dedicated frameless PiP, video selection, placement, focus restoration, and shortcut scope
- [Video view and external downloader](/docs/staging/3.0.0/app/Features/VideoAndDownloads/): file drops, local/HLS playback, and YT Section Downloader integration

## Build and UI development

- [Build and release guide](/docs/staging/3.0.0/app/build/BuildAndRelease/): prerequisites, development commands, Storybook, Widevine, packaging, and release channels
- Run `pnpm storybook` to open the component and view stories on port `6006`.

## Source reference

Functional and architectural explanations stay in this `docs/Developer`
tree. Classes, interfaces, types, functions, methods, and declared values use
TSDoc beside their source declarations so editors can show the same reference
through autocomplete.

- Run `pnpm docs:source:check` to reject undocumented declarations.
- Run `pnpm docs:source` to generate the application and package HTML reference in
  `docs/Reference`.

## Source map

- Application code: [`src`](/api/staging/3.0.0/app/)
- Stable site contract: [`packages/site-api`](/api/staging/3.0.0/site-api/)
- Bundled integrations: [`packages/builtin-sites`](/api/staging/3.0.0/builtin-sites/)
- KawaiUI stories and mocks: [`stories`](../../stories)

## Status vocabulary

| Status | Meaning |
| --- | --- |
| Implemented | Executable in the current `dev` branch codebase |
| Limited | Implemented with an intentionally restricted scope |
| Planned | Designed or documented, but no production runtime exists yet |
