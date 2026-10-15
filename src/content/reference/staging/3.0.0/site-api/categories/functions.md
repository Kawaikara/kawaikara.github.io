---
title: "Functions"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · categories"
description: "Modules and symbols in the Functions area of Site API. Open an item to inspect its declaration path, contract, properties, and signatures."
displayPath: "categories/functions"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "categories/functions.md"
symbolKind: "Reference"
---
## Functions

- [createChromiumClientHints()](/api/staging/3.0.0/site-api/SiteUtilities/functions/createChromiumClientHints/) — Creates the chromium client hints.
- [createChromiumUserAgent()](/api/staging/3.0.0/site-api/SiteUtilities/functions/createChromiumUserAgent/) — Creates the chromium user agent.
- [createExternalLoginFlow()](/api/staging/3.0.0/site-api/ExternalLoginFlow/functions/createExternalLoginFlow/) — Registers a standard login-button bridge and owns pending-state, external browser cleanup, reinjection, and diagnostics for its lifetime.
- [createGitHubReleaseBundleUpdateResolver()](/api/staging/3.0.0/site-api/BundleUpdates/functions/createGitHubReleaseBundleUpdateResolver/) — Create a credential-free GitHub Releases Bundle update resolver.
- [createLoginControlInjection()](/api/staging/3.0.0/site-api/SiteUtilities/functions/createLoginControlInjection/) — Builds the standard external-login control bridge used by remote pages. createExternalLoginFlow() in site-api/ExternalLoginFlow.ts is the only runtime caller: it registers the result with the active Provider's SitePagePipeline. Built-in Netflix and CoupangPlay Providers construct that flow, but do not execute installLoginControl() directly.
- [defineBundle()](/api/staging/3.0.0/site-api/Plugin/functions/defineBundle/) — Performs the define bundle operation.
- [definePlugin()](/api/staging/3.0.0/site-api/Plugin/functions/definePlugin/) — Performs the define plugin operation.
- [defineProvider()](/api/staging/3.0.0/site-api/Plugin/functions/defineProvider/) — Performs the define provider operation.
- [defineProviderLocale()](/api/staging/3.0.0/site-api/Locale/functions/defineProviderLocale/) — Defines a typed Provider locale resource loaded from locale.json.
- [getPluginMetadata()](/api/staging/3.0.0/site-api/Decorators/functions/getPluginMetadata/) — Returns the plugin metadata.
- [getProviderMetadata()](/api/staging/3.0.0/site-api/Decorators/functions/getProviderMetadata/) — Returns the provider metadata.
- [isBundleDefinition()](/api/staging/3.0.0/site-api/Plugin/functions/isBundleDefinition/) — Determines whether the bundle definition condition applies.
- [isSiteLoginNavigation()](/api/staging/3.0.0/site-api/SiteUtilities/functions/isSiteLoginNavigation/) — Determines whether the site login navigation condition applies.
- [matchesSiteUrlHost()](/api/staging/3.0.0/site-api/SiteUtilities/functions/matchesSiteUrlHost/) — Performs the matches site URL host operation.
- [normalizeShortFormVideoPublisher()](/api/staging/3.0.0/site-api/ShortFormVideo/functions/normalizeShortFormVideoPublisher/) — Normalizes the short form video publisher.
- [plugin()](/api/staging/3.0.0/site-api/Decorators/functions/plugin/) — Performs the plugin operation.
- [provider()](/api/staging/3.0.0/site-api/Decorators/functions/provider/) — Performs the provider operation.
- [readShortFormVideoAutoAdvance()](/api/staging/3.0.0/site-api/ShortFormVideo/functions/readShortFormVideoAutoAdvance/) — Reads the short form video auto advance.
- [readShortFormVideoBannedPublishers()](/api/staging/3.0.0/site-api/ShortFormVideo/functions/readShortFormVideoBannedPublishers/) — Reads the short form video banned publishers.
- [resolveLocaleVariant()](/api/staging/3.0.0/site-api/SiteUtilities/functions/resolveLocaleVariant/) — Resolves the locale variant.
- [resolveShortFormVideoCommand()](/api/staging/3.0.0/site-api/ShortFormVideo/functions/resolveShortFormVideoCommand/) — Resolves the short form video command.
- [serializePageInjection()](/api/staging/3.0.0/site-api/SiteUtilities/functions/serializePageInjection/) — Serialize a self-contained page-world entry point.
- [serializePageInjectionWithOptions()](/api/staging/3.0.0/site-api/SiteUtilities/functions/serializePageInjectionWithOptions/) — Serialize a self-contained page-world entry point and JSON-safe options.
- [setRequestHeader()](/api/staging/3.0.0/site-api/SiteUtilities/functions/setRequestHeader/) — Sets the request header.
- [webAuthenticationPolicy()](/api/staging/3.0.0/site-api/SiteUtilities/functions/webAuthenticationPolicy/) — Keep web OAuth in a child window that shares the Provider Session. Sending these URLs to the main viewer breaks opener/callback flows, while opening the system browser loses the Electron Session that must receive the result.
- [webPopupPolicy()](/api/staging/3.0.0/site-api/SiteUtilities/functions/webPopupPolicy/) — Performs the web popup policy operation.
