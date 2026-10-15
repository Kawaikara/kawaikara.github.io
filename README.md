# kawaikara.github.io

KawaiChen과 Astro로 만든 Kawaikara 공식 웹사이트입니다.

## 로컬 실행

```sh
pnpm install
pnpm dev
```

## KawaiChen 프레임워크 연결

문서 셸, 선택기와 같은 재사용 가능한 Astro UI는 이 저장소에 복제하지 않고 KawaiChen에서 가져옵니다. 이 저장소에는 Kawaikara의 버전·채널·검색 인덱스·번역 설정과 콘텐츠만 둡니다.

배포에서는 `package.json`과 `pnpm-lock.yaml`에 KawaiChen의 불변 Git 커밋을 고정합니다. 따라서 별도 로컬 폴더 없이 `pnpm install --frozen-lockfile`로 설치할 수 있습니다. 공통 UI 변경은 KawaiChen 저장소에 먼저 push한 후 의존성 커밋과 lockfile을 함께 갱신합니다.

## 공유 링크

지원 사이트 URL을 인코딩해 `/open/` 페이지에 전달합니다.

```text
https://kawaikara.faby.day/open/?url=https%3A%2F%2Fchzzk.naver.com%2Flive%2F...
```

## 배포와 도메인

`main` 브랜치에 push하면 GitHub Actions가 Node 24와 pnpm으로 정적 사이트를 빌드하여 GitHub Pages에 배포합니다. Actions 화면에서 수동 실행도 가능합니다.

- GitHub 저장소 **Settings → Pages → Source**: **GitHub Actions**
- **Custom domain**: `kawaikara.faby.day`
- DNS CNAME: `kawaikara.faby.day` → `kawaikara.github.io`
- 인증서 발급 후 **Enforce HTTPS** 활성화

Astro의 기본 `site`와 Actions의 `PUBLIC_SITE_URL`은 `https://kawaikara.faby.day`입니다. `public/CNAME`에도 도메인을 기록하지만 Actions 배포의 실제 도메인 연결은 GitHub Pages 설정에서 관리합니다.

## Locale

- 지원 언어: 한국어(`ko`), 영어(`en`), 일본어(`ja`)
- 우선순위: `?lang=` → 저장된 사용자 선택 → 브라우저/운영체제 locale → 한국어
- 헤더에서 `자동`을 선택하면 저장값을 지우고 기기 locale을 다시 감지합니다.
- 선택 언어는 `localStorage`의 `kawaikara-locale`에 저장되며 `/open/?url=…`의 주소 파라미터와 함께 사용할 수 있습니다.

## 문서 작성

`src/pages/docs/`의 문서는 Astro 페이지 대신 MDX로 작성합니다. frontmatter에서 KawaiChen 기반 공통 레이아웃과 locale metadata를 지정합니다.

```mdx
---
layout: ../../../layouts/DocsPageLayout.astro
title: 문서 제목 · Kawaikara Docs
description: 문서 설명
titleKey: meta.docs.example.title
descriptionKey: meta.docs.example.description
---

import I18n from '../../../components/I18n.astro';

# <I18n keyName="docs.example.title">문서 제목</I18n>

본문은 **Markdown** 문법으로 작성합니다.
```

### 문서 Snapshot 경계

App, Site API, Bundle 계약과 Built-in Bundle 구현은 하나의 App 문서 Snapshot으로
생성합니다. 문서 Selector는 App의 채널과 버전만 사용하며, Site API와 Bundle
버전은 선택된 App이 포함한 Component 정보로 표시합니다. 따라서 App 버전을 바꾸면
모든 소스 문서가 같은 Commit 기준으로 함께 바뀝니다.

Artifact 구조, 번역 Sidecar, 무결성 및 Action 전달 규칙은
[`docs/DOCUMENTATION_EXPORT_V1.md`](docs/DOCUMENTATION_EXPORT_V1.md)에 정의되어 있고,
기계 검증 Schema는
[`schemas/documentation-export-v1.schema.json`](schemas/documentation-export-v1.schema.json)에
있습니다.

### 앱 태그 문서 가져오기

Importer는 APP 설계 문서, 전체 내부 API, 같은 App Checkout의 Site API, Bundle
계약과 Built-in Sites를 한 번에 가져옵니다. `stable`은 Git 태그를, `staging`은
로컬 작업 트리를 사용할 수 있습니다. 공개 Snapshot은 선택한 App Commit에 포함된
모든 Section을 원자적으로 생성해야 합니다.

```sh
pnpm docs:import --source ../kawaikara/dev3 --ref v2.3.1 --channel stable
pnpm docs:import --source ../kawaikara/dev3 --ref working-tree --channel staging --version 3.0.0 --default
```

생성 결과는 `src/content/reference/<channel>/<app-version>/`에 저장됩니다. 버전
선택기는 `src/data/documentation-versions.json`을 사용하며, 각 App Snapshot에
포함된 Site API와 Bundle 버전은 Section Metadata로 별도 표시합니다.

## 문서 갱신과 웹 배포의 차이

문서 생성은 `pnpm docs:import`로 실행합니다. 현재 Pages workflow는 이 명령을 자동 실행하거나 앱 저장소를 checkout하지 않습니다.

1. 앱 저장소의 `docs/Developer`(구버전은 `docs`)와 `docs/build` Markdown을 가져옵니다.
2. 같은 앱 소스의 `src`(구버전은 `typescript_src`), `packages/site-api`, `packages/builtin-sites`를 TypeDoc으로 분석합니다. 타입·함수·클래스 선언과 문서 주석을 Markdown 레퍼런스로 생성합니다.
3. 결과를 `src/content/reference/<channel>/<version>/`에 저장하고 `src/data/documentation-versions.json`의 버전·메뉴 정보를 갱신합니다.
4. 생성 결과를 이 저장소의 `main`에 commit/push하면 Actions가 `pnpm build`로 정적 HTML을 만들고 GitHub Pages에 배포합니다.

현재 `stable/2.3.1`은 태그 기반 스냅샷이고 `staging/3.0.0`의 Dev Preview는 가져오기 당시 로컬 작업 트리 스냅샷입니다. 앱의 코드·주석만 수정해 push해도 웹 문서가 자동으로 갱신되지는 않습니다. 문서 갱신에는 importer 재실행과 생성 결과의 push가 필요합니다.

배포 시 최근 성공한 두 배포의 `_astro` 파일도 유지합니다. 캐시된 HTML이나 이미 열린 문서가 이전 CSS·JavaScript를 요청할 때 404로 화면이 깨지는 것을 줄입니다. 현재 빌드 자산 목록을 별도로 기록하여 이전 자산이 무한히 누적되지 않게 합니다. 이 보존 범위보다 오래된 탭은 새로고침이 필요할 수 있습니다.
