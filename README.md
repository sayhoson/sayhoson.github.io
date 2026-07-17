# Seho Son Research Portfolio

Seho Son의 회전체 기계 Physics-informed AI 연구를 소개하는 개인 연구 포트폴리오입니다.

**Live site:** [https://sayhoson.github.io/](https://sayhoson.github.io/)

## Overview

이 사이트는 다음 연구 주제와 산출물을 한국어·영어로 소개합니다.

- Physics-informed machine learning
- Multiphysics digital twins
- Deep operator networks
- Full-field virtual sensing
- Rotating machinery PHM
- Engineering agent systems

프레임워크나 빌드 단계 없이 GitHub Pages에서 동작하는 정적 HTML, CSS, JavaScript 프로젝트입니다.

## Features

- 한국어·영어 전환
- 연구자 소개와 연구 정체성
- 핵심 역량 및 연구 분야
- 대표 프로젝트와 정량 지표
- 실제 PDF 첫 페이지로 소개하는 검증 논문 목록
- 논문·발표 자료 탭
- GitHub 및 Google Scholar 연결
- 반응형 데스크톱·모바일 레이아웃
- Open Graph 및 Twitter 공유 미리보기
- 키보드 포커스와 reduced-motion 대응

## Project Structure

```text
.
├── index.html                  # 문서 메타데이터와 앱 진입점
├── 404.html                    # GitHub Pages 오류 페이지
├── assets/
│   ├── app.mjs                 # 화면 렌더링과 인터랙션
│   ├── content.mjs             # 프로필, 연구, 프로젝트, 논문 콘텐츠
│   ├── styles.css              # 디자인 토큰과 반응형 스타일
│   ├── favicon.svg             # 사이트 아이콘
│   ├── og-preview.png          # 소셜 공유 미리보기
│   ├── paper-covers/           # 공개 논문의 실제 첫 페이지 이미지
│   └── image-data/             # 섹션별 이미지 데이터 모듈
├── tests/
│   └── site.test.mjs           # 메타데이터·구조·접근성 회귀 검사
└── package.json                # 로컬 테스트 명령
```

## Local Preview

ES module을 사용하므로 `index.html`을 직접 열기보다 로컬 HTTP 서버로 확인합니다.

```powershell
python -m http.server 8000
```

브라우저에서 [http://localhost:8000/](http://localhost:8000/)을 엽니다.

Node.js만 사용하는 경우에는 원하는 정적 파일 서버를 저장소 루트에서 실행해도 됩니다.

## Validation

Node.js 20 이상을 권장합니다.

```powershell
npm test
node --check assets/app.mjs
node --check assets/content.mjs
```

## Updating Content

- 연구자 정보, 연구 분야, 프로젝트, 수치, 논문 목록: `assets/content.mjs`
- 화면 구조와 인터랙션: `assets/app.mjs`
- 색상, 타이포그래피, 레이아웃: `assets/styles.css`
- 검색 및 공유 메타데이터: `index.html`

연구 성과와 정량 지표는 검증된 출처와 일치하는 경우에만 변경합니다.

## Main-based Workflow

프로덕션 사이트는 `main` 브랜치를 기준으로 관리합니다.

```powershell
git switch main
git pull --ff-only origin main
git switch -c agent/<change-description>
```

변경 후 검증을 통과시키고 `main`을 base로 하는 Pull Request를 생성합니다. PR이 `main`에 병합되면 GitHub Pages가 배포를 갱신합니다.

## License and Content

이 저장소에는 별도의 오픈소스 라이선스가 아직 명시되어 있지 않습니다. 코드, 이미지 또는 연구 콘텐츠를 재사용하려면 사전에 문의해 주세요.
