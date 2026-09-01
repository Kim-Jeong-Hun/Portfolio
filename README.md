# 김정훈 | Portfolio

React + TypeScript로 만든 1페이지 인터랙티브 포트폴리오입니다. 별도 UI 프레임워크 없이 순수 CSS로 스크롤 연동 네비게이션, 섹션별 애니메이션, 반응형 레이아웃을 직접 구현했습니다.

**🔗 [Live Demo](https://kim-jeong-hun.github.io/Portfolio/)**

## 주요 기능

- **스크롤 연동 네비게이션** — `IntersectionObserver`로 현재 보이는 섹션을 감지해 네비게이션 밑줄을 자동으로 옮깁니다.
- **섹션 fade-in 애니메이션** — 프로필·기술 스택 헤드라인이 뷰포트에 일정 비율 이상 노출되면 슬라이드 업 되며 나타납니다.
- **프로필 탭 패널** — 학력 · 자격증/어학 · 경력 · 교육/훈련을 탭으로 전환하며 확인할 수 있습니다.
- **기술 스택 매트릭스** — 카테고리(언어/프론트엔드/백엔드/데이터 분석 등) × 숙련도 두 축으로 필터링해 원하는 조건의 기술만 강조합니다.
- **프로젝트 카드 그리드** — 진행 상태(진행 중/완료) 배지가 있는 카드로 프로젝트를 소개합니다.
- **반응형 레이아웃** — 태블릿(~1024px)·모바일(~640px) 브레이크포인트를 두어, 2열 그리드였던 기술 스택 매트릭스가 모바일에서는 1열로 재구성되는 등 화면 크기에 맞게 레이아웃이 바뀝니다.

## 기술 스택

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/GitHub_Pages-live-222?logo=githubpages&logoColor=white" alt="GitHub Pages" />
</p>

## 프로젝트 구조

```
src/
  App.tsx     # 페이지 전체 마크업, 콘텐츠 데이터, 탭/필터 상태
  App.css     # 섹션별 스타일 + 태블릿/모바일 미디어쿼리
  index.css   # 전역 리셋
  assets/     # 배경 이미지, 아이콘
```

콘텐츠(학력, 자격증, 프로젝트, 기술 스택 등)는 모두 `App.tsx` 상단의 배열 상수로 관리되어, 마크업을 건드리지 않고 데이터만 수정해 갱신할 수 있습니다.

## 실행 방법

```bash
npm install
npm run dev       # http://localhost:5173/Portfolio/
```

```bash
npm run build      # dist/ 에 정적 파일 생성
npm run preview    # 빌드 결과 로컬 미리보기
npm run lint        # ESLint 검사
```

## 배포

`main` 브랜치에 push되면 [GitHub Actions 워크플로우](.github/workflows/deploy.yml)가 자동으로 빌드 후 GitHub Pages에 배포합니다.
