---
title: "Interfaces"
channel: "staging"
appVersion: "3.0.0"
siteApiVersion: "1.0.0"
category: "Site API · categories"
description: "Modules and symbols in the Interfaces area of Site API. Open an item to inspect its declaration path, contract, properties, and signatures."
displayPath: "categories/interfaces"
section: "site-api"
sourceRef: "working-tree"
sourcePath: "categories/interfaces.md"
symbolKind: "Reference"
---
## Interfaces

- [BundleBrowserProfileContribution](/api/staging/3.0.0/site-api/Plugin/interfaces/BundleBrowserProfileContribution/) — A persistent browser profile contributed by one Bundle.
- [BundleDefinition](/api/staging/3.0.0/site-api/Plugin/interfaces/BundleDefinition/) — The only installable extension unit. A Bundle must contain one or more Providers. Bundle-level Plugins may be global or filtered with providerIds.
- [BundleLocaleContribution](/api/staging/3.0.0/site-api/Plugin/interfaces/BundleLocaleContribution/) — Describes the bundle locale contribution contract.
- [BundleManifest](/api/staging/3.0.0/site-api/Plugin/interfaces/BundleManifest/) — Filesystem metadata stored at the root of an installable Bundle.
- [BundleUpdateContext](/api/staging/3.0.0/site-api/Plugin/interfaces/BundleUpdateContext/) — Values provided to a trusted Bundle update resolver when Update is clicked.
- [Disposable](/api/staging/3.0.0/site-api/Disposable/interfaces/Disposable/) — Describes the disposable contract.
- [ExternalLoginOptions](/api/staging/3.0.0/site-api/SiteContext/interfaces/ExternalLoginOptions/) — Describes the external login options contract.
- [GitHubReleaseBundleUpdateOptions](/api/staging/3.0.0/site-api/BundleUpdates/interfaces/GitHubReleaseBundleUpdateOptions/) — Describes the git hub release bundle update options contract.
- [PluginContext](/api/staging/3.0.0/site-api/Plugin/interfaces/PluginContext/) — Describes the plugin context contract.
- [PluginDefinition](/api/staging/3.0.0/site-api/Plugin/interfaces/PluginDefinition/) — Describes the plugin definition contract.
- [PluginManifest](/api/staging/3.0.0/site-api/Plugin/interfaces/PluginManifest/) — Filesystem metadata owned by one Plugin directory.
- [PluginMetadata](/api/staging/3.0.0/site-api/Plugin/interfaces/PluginMetadata/) — Describes the plugin metadata contract.
- [PluginViewPanelContribution](/api/staging/3.0.0/site-api/Provider/interfaces/PluginViewPanelContribution/) — Describes the plugin view panel contribution contract.
- [ProviderBooleanSettingContribution](/api/staging/3.0.0/site-api/Provider/interfaces/ProviderBooleanSettingContribution/) — Describes the provider boolean setting contribution contract.
- [ProviderDefinition](/api/staging/3.0.0/site-api/Plugin/interfaces/ProviderDefinition/) — One Provider directory and the code loaded from its manifest entry.
- [ProviderItemListSettingContribution](/api/staging/3.0.0/site-api/Provider/interfaces/ProviderItemListSettingContribution/) — Describes the provider item list setting contribution contract.
- [ProviderLocale\](/api/staging/3.0.0/site-api/Locale/interfaces/ProviderLocale/) — Describes the provider locale contract.
- [ProviderManifest](/api/staging/3.0.0/site-api/Plugin/interfaces/ProviderManifest/) — Filesystem metadata owned by one Provider directory.
- [ProviderManifestPictureInPictureContribution](/api/staging/3.0.0/site-api/Plugin/interfaces/ProviderManifestPictureInPictureContribution/) — Manifest-owned PiP switch. Site-specific behavior belongs in @provider().
- [ProviderMetadata](/api/staging/3.0.0/site-api/Provider/interfaces/ProviderMetadata/) — Describes the provider metadata contract.
- [ProviderSettingCategoryContribution](/api/staging/3.0.0/site-api/Provider/interfaces/ProviderSettingCategoryContribution/) — Describes the provider setting category contribution contract.
- [ProviderSettingContributionBase](/api/staging/3.0.0/site-api/Provider/InternalDeclarations/interfaces/ProviderSettingContributionBase/) — Describes the provider setting contribution base contract.
- [ProviderSettingListItem](/api/staging/3.0.0/site-api/Provider/interfaces/ProviderSettingListItem/) — Describes the provider setting list item contract.
- [ProviderSettingsContribution](/api/staging/3.0.0/site-api/Provider/interfaces/ProviderSettingsContribution/) — Describes the provider settings contribution contract.
- [ShortFormVideoContribution](/api/staging/3.0.0/site-api/ShortFormVideo/interfaces/ShortFormVideoContribution/) — Standard short-form capabilities understood by Kawaikara. Providers expose these once and the app supplies local/PiP shortcuts and preference storage.
- [ShortFormVideoPublisher](/api/staging/3.0.0/site-api/ShortFormVideo/interfaces/ShortFormVideoPublisher/) — Describes the short form video publisher contract.
- [SiteActions](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteActions/) — Describes the site actions contract.
- [SiteActionShortcutContribution](/api/staging/3.0.0/site-api/Provider/interfaces/SiteActionShortcutContribution/) — Describes the site action shortcut contribution contract.
- [SiteAddressContribution](/api/staging/3.0.0/site-api/Provider/interfaces/SiteAddressContribution/) — Describes the site address contribution contract.
- [SiteBrowser](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteBrowser/) — Describes the site browser contract.
- [SiteBrowserIdentityOptions](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteBrowserIdentityOptions/) — Describes the site browser identity options contract.
- [SiteContext](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteContext/) — Describes the site context contract.
- [SiteCookieClearOptions](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieClearOptions/) — Describes the site cookie clear options contract.
- [SiteCookieMetadata](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieMetadata/) — Describes the site cookie metadata contract.
- [SiteCookieQuery](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieQuery/) — Describes the site cookie query contract.
- [SiteCookieStore](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteCookieStore/) — Describes the site cookie store contract.
- [SiteExternalBrowser](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteExternalBrowser/) — Describes the site external browser contract.
- [SiteExternalLoginFlow](/api/staging/3.0.0/site-api/ExternalLoginFlow/interfaces/SiteExternalLoginFlow/) — Describes the site external login flow contract.
- [SiteExternalLoginFlowOptions](/api/staging/3.0.0/site-api/ExternalLoginFlow/interfaces/SiteExternalLoginFlowOptions/) — Describes the site external login flow options contract.
- [SiteIsolationContribution](/api/staging/3.0.0/site-api/Provider/interfaces/SiteIsolationContribution/) — Describes the site isolation contribution contract.
- [SiteLocaleContext](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteLocaleContext/) — Describes the site locale context contract.
- [SiteLocaleContribution](/api/staging/3.0.0/site-api/Provider/interfaces/SiteLocaleContribution/) — Describes the site locale contribution contract.
- [SiteLogger](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteLogger/) — Describes the site logger contract.
- [SiteLoginControlInjectionOptions](/api/staging/3.0.0/site-api/SiteUtilities/interfaces/SiteLoginControlInjectionOptions/) — Describes the site login control injection options contract.
- [SiteMenuContribution](/api/staging/3.0.0/site-api/Provider/interfaces/SiteMenuContribution/) — Describes the site menu contribution contract.
- [SitePageInjection](/api/staging/3.0.0/site-api/SiteContext/interfaces/SitePageInjection/) — Describes the site page injection contract.
- [SitePagePipeline](/api/staging/3.0.0/site-api/SiteContext/interfaces/SitePagePipeline/) — Application-owned page pipeline. It centralizes document lifecycle retries, frame traversal, failure isolation, diagnostics, and teardown for Providers.
- [SitePictureInPictureContribution](/api/staging/3.0.0/site-api/Provider/interfaces/SitePictureInPictureContribution/) — Describes the site picture in picture contribution contract.
- [SiteRequestDetails](/api/staging/3.0.0/site-api/Provider/interfaces/SiteRequestDetails/) — Describes the site request details contract.
- [SiteRequestRedirect](/api/staging/3.0.0/site-api/Provider/interfaces/SiteRequestRedirect/) — Describes the site request redirect contract.
- [SiteShortcutContribution](/api/staging/3.0.0/site-api/Provider/interfaces/SiteShortcutContribution/) — Describes the site shortcut contribution contract.
- [SiteViewer](/api/staging/3.0.0/site-api/SiteContext/interfaces/SiteViewer/) — Describes the site viewer contract.
