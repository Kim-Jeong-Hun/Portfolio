# 김정훈 | Portfolio

React + TypeScript로 만든 1페이지 인터랙티브 포트폴리오입니다.
스크롤에 반응하는 네비게이션, 섹션별 fade-in 애니메이션 등을 직접 구현했습니다.

**🔗 [Live Demo](https://kim-jeong-hun.github.io/Portfolio/)**

## 미리보기

| Home | Profile | Tech Stack |
| :--: | :--: | :--: |
| 헤드라인 + 스크롤 네비게이션 | 학력/자격증/경력 탭 | 카테고리·숙련도 필터 |

## 주요 기능

- **스크롤 연동 네비게이션**: `IntersectionObserver`로 현재 섹션을 감지해 네비게이션 밑줄을 자동으로 옮깁니다.
- **스크롤 fade-in**: 프로필 섹션 등 주요 콘텐츠는 뷰포트에 30% 이상 노출되는 시점에 나타나도록 처리했습니다.
- **프로필 탭 패널**: 학력 · 자격증/어학 · 경력을 탭으로 전환하며 확인할 수 있습니다.
- **기술 스택 매트릭스**: 카테고리(디자인/프론트엔드/언어/데이터/인프라 등) × 숙련도 축으로 스택을 배치하고, 태그를 클릭하면 해당 조건의 카드만 강조됩니다.
- **프로젝트 카드 그리드**: 진행 상태(진행 중/완료) 배지가 있는 카드로 프로젝트를 소개합니다.
- **기타 섹션**: GitHub 잔디/통계와 현재 관심사를 탭으로 확인할 수 있습니다.

## 기술 스택

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/GitHub_Pages-live-222?logo=githubpages&logoColor=white" alt="GitHub Pages" />
</p>

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 로컬 미리보기
```

## 배포

`main` 브랜치에 push되면 [GitHub Actions](.github/workflows/deploy.yml)가 자동으로 빌드 후
GitHub Pages에 배포합니다.

## 다음 계획

- [ ] 프로필 섹션 카드에 사이드 확장 애니메이션 추가
- [ ] 기술 스택 매트릭스 인터랙션 다듬기
