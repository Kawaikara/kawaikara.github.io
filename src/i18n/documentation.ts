import type { Locale } from './messages';

const kindLabels: Record<Locale, Record<string, string>> = {
  ko: {
    Class: '클래스', Enumeration: '열거형', Function: '함수', Guide: '가이드',
    Interface: '인터페이스', Method: '메서드', Module: '모듈', Namespace: '네임스페이스',
    Overview: '개요', Property: '속성', Reference: '참조', 'Type Alias': '타입 별칭', Variable: '변수',
  },
  en: {
    Class: 'Class', Enumeration: 'Enumeration', Function: 'Function', Guide: 'Guide',
    Interface: 'Interface', Method: 'Method', Module: 'Module', Namespace: 'Namespace',
    Overview: 'Overview', Property: 'Property', Reference: 'Reference', 'Type Alias': 'Type Alias', Variable: 'Variable',
  },
  ja: {
    Class: 'クラス', Enumeration: '列挙型', Function: '関数', Guide: 'ガイド',
    Interface: 'インターフェース', Method: 'メソッド', Module: 'モジュール', Namespace: '名前空間',
    Overview: '概要', Property: 'プロパティ', Reference: '参照', 'Type Alias': '型エイリアス', Variable: '変数',
  },
};

const pluralKindLabels: Record<Locale, Record<string, string>> = {
  ko: {
    Classes: '클래스', Enumerations: '열거형', Functions: '함수', Interfaces: '인터페이스',
    Methods: '메서드', Modules: '모듈', Namespaces: '네임스페이스', Properties: '속성',
    References: '참조', 'Type Aliases': '타입 별칭', Variables: '변수',
  },
  en: {
    Classes: 'Classes', Enumerations: 'Enumerations', Functions: 'Functions', Interfaces: 'Interfaces',
    Methods: 'Methods', Modules: 'Modules', Namespaces: 'Namespaces', Properties: 'Properties',
    References: 'References', 'Type Aliases': 'Type Aliases', Variables: 'Variables',
  },
  ja: {
    Classes: 'クラス', Enumerations: '列挙型', Functions: '関数', Interfaces: 'インターフェース',
    Methods: 'メソッド', Modules: 'モジュール', Namespaces: '名前空間', Properties: 'プロパティ',
    References: '参照', 'Type Aliases': '型エイリアス', Variables: '変数',
  },
};

const exactTranslations: Record<Exclude<Locale, 'en'>, Record<string, string>> = {
  ko: {
    'Architecture Overview': '아키텍처 개요',
    'Logging and Diagnostics': '로깅과 진단',
    'Runtime and Lifecycle': '런타임과 생명주기',
    'Security Boundaries': '보안 경계',
    'Bundle, Provider, and Plugin': 'Bundle, Provider와 Plugin',
    'Branches and Release Channels': '브랜치와 릴리스 채널',
    'Built-in Integrations': '내장 연동',
    'Overlay and Preferences': '오버레이와 환경설정',
    'Unified Picture in Picture': '통합 Picture in Picture',
    'Video View and External Downloader': '비디오 뷰와 외부 다운로더',
    'Bundle System Overview': 'Bundle 시스템 개요',
    'Provider Development Guide': 'Provider 개발 가이드',
    'Bundle Development Host': 'Bundle 개발 호스트',
    'Bundle Packaging and Distribution': 'Bundle 패키징과 배포',
    'Build and Release Guide': '빌드와 릴리스 가이드',
    'Application startup, managers, windows, site lifecycle, and main-process coordination.': '애플리케이션 시작, Manager, Window, 사이트 생명주기와 Main 프로세스 조정을 다룹니다.',
    'Shared IPC contracts, types, build configuration, and cross-process values.': '공유 IPC 계약, 타입, 빌드 설정과 프로세스 간 값을 다룹니다.',
    'Application-owned views, UI behavior, and renderer-side integrations.': '애플리케이션 소유 View, UI 동작과 Renderer 측 연동을 다룹니다.',
    'Restricted bridges between isolated pages and application capabilities.': '격리된 페이지와 애플리케이션 기능 사이의 제한된 Bridge를 다룹니다.',
    'Development-mode helpers, inspection, and local tooling integration.': '개발 모드 Helper, 검사 기능과 로컬 도구 연동을 다룹니다.',
    'Debugger startup and diagnostic configuration.': 'Debugger 시작과 진단 설정을 다룹니다.',
    'Site-specific navigation, login, playback, shortcut, and compatibility policies.': '사이트별 탐색, 로그인, 재생, 단축키와 호환성 정책을 다룹니다.',
    'Scripts executed inside supported service pages.': '지원 서비스 페이지 안에서 실행되는 스크립트입니다.',
    'Built-in bundle manifest, registration, icons, and update entry points.': '내장 Bundle manifest, 등록, 아이콘과 업데이트 진입점을 다룹니다.',
    'Reusable runtime base classes and stores.': '재사용 가능한 런타임 기반 클래스와 Store입니다.',
    'Provider, Plugin, viewer, context, and contribution contracts.': 'Provider, Plugin, Viewer, Context와 Contribution 계약입니다.',
    'Factories, guards, serializers, decorators, and shared helpers.': 'Factory, Guard, Serializer, Decorator와 공용 Helper입니다.',
    'Union types and callable contracts used across the Site API.': 'Site API 전반에서 사용하는 Union 타입과 호출 계약입니다.',
    'Published constants and supported action lists.': '공개 상수와 지원 Action 목록입니다.',
    'Module-level exports grouped by source file.': '소스 파일별로 묶은 모듈 수준 Export입니다.',
    'Re-exported symbols whose canonical declaration lives in another module.': '원본 선언이 다른 모듈에 있는 재Export 심볼입니다.',
    'Choose an area from the category cards or the left navigation, then narrow the list by class, interface, function, or type. A symbol page shows its kind, module path, signatures, and linked type references.': '카테고리 카드나 왼쪽 탐색에서 영역을 선택한 뒤 클래스, 인터페이스, 함수 또는 타입으로 범위를 좁히세요. 심볼 페이지에서는 종류, 모듈 경로, 시그니처와 연결된 타입 레퍼런스를 확인할 수 있습니다.',
    'Defines the shared pause document media script constant.': '문서 안의 미디어를 일시정지하는 공용 스크립트 상수를 정의합니다.',
    'Internal declarations': '내부 선언',
  },
  ja: {
    'Architecture Overview': 'アーキテクチャ概要',
    'Logging and Diagnostics': 'ログと診断',
    'Runtime and Lifecycle': 'ランタイムとライフサイクル',
    'Security Boundaries': 'セキュリティ境界',
    'Bundle, Provider, and Plugin': 'Bundle、Provider、Plugin',
    'Branches and Release Channels': 'ブランチとリリースチャンネル',
    'Built-in Integrations': '組み込み連携',
    'Overlay and Preferences': 'オーバーレイと環境設定',
    'Unified Picture in Picture': '統合 Picture in Picture',
    'Video View and External Downloader': 'ビデオビューと外部ダウンローダー',
    'Bundle System Overview': 'Bundle システム概要',
    'Provider Development Guide': 'Provider 開発ガイド',
    'Bundle Development Host': 'Bundle 開発ホスト',
    'Bundle Packaging and Distribution': 'Bundle のパッケージ化と配布',
    'Build and Release Guide': 'ビルドとリリースガイド',
    'Application startup, managers, windows, site lifecycle, and main-process coordination.': 'アプリの起動、Manager、Window、サイトのライフサイクル、Main プロセスの連携を扱います。',
    'Shared IPC contracts, types, build configuration, and cross-process values.': '共有 IPC 契約、型、ビルド設定、プロセス間の値を扱います。',
    'Application-owned views, UI behavior, and renderer-side integrations.': 'アプリ所有の View、UI 動作、Renderer 側の連携を扱います。',
    'Restricted bridges between isolated pages and application capabilities.': '隔離されたページとアプリ機能の間の制限付き Bridge を扱います。',
    'Development-mode helpers, inspection, and local tooling integration.': '開発モードの Helper、検査、ローカルツール連携を扱います。',
    'Debugger startup and diagnostic configuration.': 'Debugger の起動と診断設定を扱います。',
    'Site-specific navigation, login, playback, shortcut, and compatibility policies.': 'サイト別のナビゲーション、ログイン、再生、ショートカット、互換性ポリシーを扱います。',
    'Scripts executed inside supported service pages.': '対応サービスのページ内で実行されるスクリプトです。',
    'Built-in bundle manifest, registration, icons, and update entry points.': '組み込み Bundle の manifest、登録、アイコン、更新エントリーポイントを扱います。',
    'Reusable runtime base classes and stores.': '再利用可能なランタイム基底クラスと Store です。',
    'Provider, Plugin, viewer, context, and contribution contracts.': 'Provider、Plugin、Viewer、Context、Contribution の契約です。',
    'Factories, guards, serializers, decorators, and shared helpers.': 'Factory、Guard、Serializer、Decorator、共通 Helper です。',
    'Union types and callable contracts used across the Site API.': 'Site API 全体で使用する Union 型と呼び出し契約です。',
    'Published constants and supported action lists.': '公開定数と対応 Action の一覧です。',
    'Module-level exports grouped by source file.': 'ソースファイル別にまとめたモジュールレベルの Export です。',
    'Re-exported symbols whose canonical declaration lives in another module.': '元の宣言が別モジュールにある再 Export シンボルです。',
    'Choose an area from the category cards or the left navigation, then narrow the list by class, interface, function, or type. A symbol page shows its kind, module path, signatures, and linked type references.': 'カテゴリカードまたは左側ナビゲーションから領域を選び、クラス、インターフェース、関数、型で絞り込みます。シンボルページでは種類、モジュールパス、シグネチャ、リンクされた型リファレンスを確認できます。',
    'Defines the shared pause document media script constant.': 'ドキュメント内のメディアを一時停止する共有スクリプト定数を定義します。',
    'Internal declarations': '内部宣言',
  },
};

const technicalPhraseTranslations: Record<Exclude<Locale, 'en'>, Array<[string, string]>> = {
  ko: [
    ['picture in picture', 'Picture in Picture'],
    ['short form video', '쇼트폼 비디오'],
    ['external browser', '외부 브라우저'],
    ['browser profile', '브라우저 프로필'],
    ['new window policy', '새 창 정책'],
    ['release channel', '릴리스 채널'],
    ['update resolver', '업데이트 Resolver'],
    ['page injection', '페이지 Injection'],
    ['request redirect', '요청 Redirect'],
    ['cookie clear', '쿠키 삭제'],
    ['localized text', '지역화 텍스트'],
    ['setting contribution', '설정 Contribution'],
    ['plugin view panel', 'Plugin View 패널'],
    ['site action shortcut', '사이트 Action 단축키'],
    ['browser identity', '브라우저 식별자'],
    ['application update', '애플리케이션 업데이트'],
    ['development bundle project', '개발 Bundle 프로젝트'],
    ['development debugger', '개발 Debugger'],
    ['video directory', '비디오 디렉터리'],
    ['video library', '비디오 라이브러리'],
    ['shared pause document media script', '문서 미디어 일시정지 공용 스크립트'],
    ['application', '애플리케이션'],
    ['provider', 'Provider'],
    ['plugin', 'Plugin'],
    ['bundle', 'Bundle'],
    ['site', '사이트'],
    ['browser', '브라우저'],
    ['document', '문서'],
    ['media', '미디어'],
    ['script', '스크립트'],
    ['setting', '설정'],
    ['boolean', '불리언'],
    ['contribution', 'Contribution'],
    ['metadata', '메타데이터'],
    ['manifest', 'Manifest'],
    ['permission', '권한'],
    ['locale', '로케일'],
    ['context', 'Context'],
    ['logger', 'Logger'],
    ['viewer', 'Viewer'],
    ['request', '요청'],
    ['response', '응답'],
    ['result', '결과'],
    ['options', '옵션'],
    ['option', '옵션'],
    ['state', '상태'],
    ['action', 'Action'],
    ['shortcut', '단축키'],
    ['content', '콘텐츠'],
    ['function', '함수'],
    ['value', '값'],
  ],
  ja: [
    ['picture in picture', 'Picture in Picture'],
    ['short form video', 'ショートフォーム動画'],
    ['external browser', '外部ブラウザ'],
    ['browser profile', 'ブラウザプロファイル'],
    ['new window policy', '新規ウィンドウポリシー'],
    ['release channel', 'リリースチャンネル'],
    ['update resolver', '更新 Resolver'],
    ['page injection', 'ページ Injection'],
    ['request redirect', 'リクエスト Redirect'],
    ['cookie clear', 'Cookie 削除'],
    ['localized text', 'ローカライズ済みテキスト'],
    ['setting contribution', '設定 Contribution'],
    ['plugin view panel', 'Plugin View パネル'],
    ['site action shortcut', 'サイト Action ショートカット'],
    ['browser identity', 'ブラウザ識別子'],
    ['application update', 'アプリ更新'],
    ['development bundle project', '開発 Bundle プロジェクト'],
    ['development debugger', '開発 Debugger'],
    ['video directory', '動画ディレクトリ'],
    ['video library', '動画ライブラリ'],
    ['shared pause document media script', 'ドキュメントメディア一時停止共有スクリプト'],
    ['application', 'アプリ'],
    ['provider', 'Provider'],
    ['plugin', 'Plugin'],
    ['bundle', 'Bundle'],
    ['site', 'サイト'],
    ['browser', 'ブラウザ'],
    ['document', 'ドキュメント'],
    ['media', 'メディア'],
    ['script', 'スクリプト'],
    ['setting', '設定'],
    ['boolean', '真偽値'],
    ['contribution', 'Contribution'],
    ['metadata', 'メタデータ'],
    ['manifest', 'Manifest'],
    ['permission', '権限'],
    ['locale', 'ロケール'],
    ['context', 'Context'],
    ['logger', 'Logger'],
    ['viewer', 'Viewer'],
    ['request', 'リクエスト'],
    ['response', 'レスポンス'],
    ['result', '結果'],
    ['options', 'オプション'],
    ['option', 'オプション'],
    ['state', '状態'],
    ['action', 'Action'],
    ['shortcut', 'ショートカット'],
    ['content', 'コンテンツ'],
    ['function', '関数'],
    ['value', '値'],
  ],
};

function translateTechnicalPhrase(locale: Exclude<Locale, 'en'>, value: string): string {
  let translated = value;
  for (const [source, destination] of technicalPhraseTranslations[locale]) {
    translated = translated.replace(new RegExp(`\\b${source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'), destination);
  }
  return translated;
}

export function translateDocumentationKind(locale: Locale, kind: string): string {
  return kindLabels[locale][kind] ?? kind;
}

export function translateDocumentationText(locale: Locale, value: string): string {
  const text = value.trim();
  if (!text || locale === 'en') return text;
  const exact = exactTranslations[locale][text];
  if (exact) return exact;
  if (kindLabels.en[text]) return translateDocumentationKind(locale, text);
  if (pluralKindLabels.en[text]) return pluralKindLabels[locale][text];

  let match = text.match(/^Declarations and symbol index for the (.+) module\.$/);
  if (match) {
    return locale === 'ko'
      ? `${match[1]} 모듈의 선언과 심볼 인덱스입니다.`
      : `${match[1]} モジュールの宣言とシンボル一覧です。`;
  }

  match = text.match(/^(.+) · Internal declarations$/);
  if (match) return locale === 'ko' ? `${match[1]} · 내부 선언` : `${match[1]} · 内部宣言`;

  match = text.match(/^(.+) entry point$/);
  if (match) return locale === 'ko' ? `${match[1]} 진입점` : `${match[1]} エントリーポイント`;

  match = text.match(/^(.+) app module$/);
  if (match) return locale === 'ko' ? `${match[1]} 앱 모듈` : `${match[1]} アプリモジュール`;

  match = text.match(/^Modules and symbols in the (.+) area of (.+)\. Open an item to inspect its declaration path, contract, properties, and signatures\.$/);
  if (match) {
    return locale === 'ko'
      ? `${match[2]}의 ${match[1]} 영역에 속한 모듈과 심볼입니다. 항목을 열어 선언 경로, 계약, 속성과 시그니처를 확인할 수 있습니다.`
      : `${match[2]} の ${match[1]} 領域に含まれるモジュールとシンボルです。項目を開くと宣言パス、契約、プロパティ、シグネチャを確認できます。`;
  }

  match = text.match(/^The (.+) value\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    return locale === 'ko' ? `${phrase} 값입니다.` : `${phrase} の値です。`;
  }

  match = text.match(/^Whether the (.+) option is enabled\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    return locale === 'ko' ? `${phrase} 옵션의 활성화 여부입니다.` : `${phrase} オプションが有効かどうかを示します。`;
  }

  match = text.match(/^Defines the (.+) (constant|type)\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    const target = match[2] === 'constant'
      ? (locale === 'ko' ? '상수' : '定数')
      : (locale === 'ko' ? '타입' : '型');
    return locale === 'ko' ? `${phrase} ${target}을 정의합니다.` : `${phrase}の${target}を定義します。`;
  }

  match = text.match(/^Describes the (.+) contract\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    return locale === 'ko' ? `${phrase} 계약을 설명합니다.` : `${phrase}の契約を説明します。`;
  }

  match = text.match(/^Determines whether the (.+) condition applies\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    return locale === 'ko' ? `${phrase} 조건의 적용 여부를 판단합니다.` : `${phrase}条件が適用されるか判定します。`;
  }

  match = text.match(/^Performs the (.+) operation\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    return locale === 'ko' ? `${phrase} 작업을 수행합니다.` : `${phrase}操作を実行します。`;
  }

  match = text.match(/^Represents the (.+)\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    return locale === 'ko' ? `다음을 나타냅니다: ${phrase}.` : `次を表します: ${phrase}。`;
  }

  match = text.match(/^Implements the (.+)\.$/);
  if (match) {
    const phrase = translateTechnicalPhrase(locale, match[1]);
    return locale === 'ko' ? `${phrase}를 구현합니다.` : `${phrase}を実装します。`;
  }

  match = text.match(/^Re-exports (.+)$/);
  if (match) return locale === 'ko' ? `${match[1]}를 다시 내보냅니다.` : `${match[1]}を再エクスポートします。`;

  match = text.match(/^(.+) (class|interface|function|variable|type alias|enumeration|namespace|reference) reference\.$/i);
  if (match) {
    const sourceKind = Object.keys(kindLabels.en).find((kind) => kind.toLowerCase() === match[2].toLowerCase()) ?? match[2];
    const localizedKind = translateDocumentationKind(locale, sourceKind);
    return locale === 'ko'
      ? `${match[1]} ${localizedKind} 레퍼런스입니다.`
      : `${match[1]} ${localizedKind}のリファレンスです。`;
  }

  return text;
}

export function translateApiCountSummary(locale: Locale, value: string): string {
  return value.split(' · ').map((part) => {
    const match = part.trim().match(/^(.+) (\d+)$/);
    return match ? `${translateDocumentationKind(locale, match[1])} ${match[2]}` : part;
  }).join(' · ');
}
