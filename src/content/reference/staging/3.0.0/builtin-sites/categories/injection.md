---
title: "Injection"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Built-in Sites · categories"
description: "Modules and symbols in the Injection area of Built-in Sites. Open an item to inspect its declaration path, contract, properties, and signatures."
displayPath: "categories/injection"
section: "builtin-sites"
sourceRef: "working-tree"
sourcePath: "categories/injection.md"
symbolKind: "Reference"
---
## Interfaces

- [ChzzkClipsInjectionOptions](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Clips/interfaces/ChzzkClipsInjectionOptions/) — CHZZK Clips page-world implementation. ChzzkProvider.load() registers createChzzkClipsInjectionScript() in every frame, while ChzzkProvider.runClipsCommand() uses createChzzkClipsCommandScript(). The Provider file is the sole caller of both serialized factories.
- [ChzzkQualityInjectionOptions](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/PlaybackCompatibility/interfaces/ChzzkQualityInjectionOptions/) — Describes the CHZZK quality injection options contract.
- [ChzzkQualityInjectionOptions](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Quality/interfaces/ChzzkQualityInjectionOptions/) — CHZZK quality-menu page-world implementation. ChzzkProvider.beforeLoad() in Providers/Chzzk/Provider.ts constructs the action URLs and registers createChzzkQualityEnhancementScript() with SitePagePipeline. No Main-process Manager or other Provider executes this injection.
- [YouTubeShortsInjectionOptions](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/interfaces/YouTubeShortsInjectionOptions/) — YouTube Shorts page-world implementation used only by YouTubeProvider in Providers/YouTube/Provider.ts. beforeLoad() registers installation, runShortsCommand() executes navigation/status commands, and getShortFormVideoPublisher() executes the publisher reader. The three exported factories below are the only serialization boundary.

## Functions

- [createAppleStorefrontPersistenceScript()](/api/staging/3.0.0/builtin-sites/Providers/AppleTv/Inject/StorefrontPersistence/functions/createAppleStorefrontPersistenceScript/) — Creates the apple storefront persistence script.
- [createChzzkClipsCommandScript()](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Clips/functions/createChzzkClipsCommandScript/) — Creates the CHZZK clips command script.
- [createChzzkClipsInjectionScript()](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Clips/functions/createChzzkClipsInjectionScript/) — Creates the CHZZK clips injection script.
- [createChzzkQualityEnhancementScript()](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Quality/functions/createChzzkQualityEnhancementScript/) — Creates the CHZZK quality enhancement script.
- [createYouTubeShortsCommandScript()](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/functions/createYouTubeShortsCommandScript/) — Creates the you tube shorts command script.
- [createYouTubeShortsInjectionScript()](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/functions/createYouTubeShortsInjectionScript/) — Creates the you tube shorts injection script.
- [createYouTubeShortsPublisherScript()](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/functions/createYouTubeShortsPublisherScript/) — Creates the you tube shorts publisher script.

## Type Aliases

- [ChzzkClipsCommand](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Clips/type-aliases/ChzzkClipsCommand/) — Defines the CHZZK clips command type.
- [YouTubeShortsCommand](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/type-aliases/YouTubeShortsCommand/) — Defines the you tube shorts command type.

## Variables

- [CHZZK_AD_RESPONSE_BLOCKER_SCRIPT](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/PlaybackCompatibility/variables/CHZZK_AD_RESPONSE_BLOCKER_SCRIPT/) — Defines the shared CHZZK ad response blocker script constant.
- [CHZZK_AD_SKIPPER_SCRIPT](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/PlaybackCompatibility/variables/CHZZK_AD_SKIPPER_SCRIPT/) — Defines the shared CHZZK ad skipper script constant.
- [WAVVE_RESPONSIVE_VIEWPORT_SCRIPT](/api/staging/3.0.0/builtin-sites/Providers/Wavve/Inject/ResponsiveViewport/variables/WAVVE_RESPONSIVE_VIEWPORT_SCRIPT/) — Defines the shared wavve responsive viewport script constant.

## Modules

- [Clips](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Clips/)
- [Inject entry point](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Index/) — Re-exports CHZZKADRESPONSEBLOCKERSCRIPT
- [PlaybackCompatibility](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/PlaybackCompatibility/)
- [Quality](/api/staging/3.0.0/builtin-sites/Providers/Chzzk/Inject/Quality/)
- [ResponsiveViewport](/api/staging/3.0.0/builtin-sites/Providers/Wavve/Inject/ResponsiveViewport/)
- [Shorts](/api/staging/3.0.0/builtin-sites/Providers/YouTube/Inject/Shorts/)
- [StorefrontPersistence](/api/staging/3.0.0/builtin-sites/Providers/AppleTv/Inject/StorefrontPersistence/)
