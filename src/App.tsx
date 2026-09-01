import { useEffect, useState } from 'react'
import coverImg from './assets/portfolio_background_image.png'
import graduatesIcon from './assets/graduates.svg'
import certificatesIcon from './assets/certificates.svg'
import workExperienceIcon from './assets/work_experience.svg'
import educationAndTrainingIcon from './assets/education_and_training.svg'
import githubIcon from './assets/github.svg'
import externalLinkIcon from './assets/external_link.svg'
import html5Icon from 'devicon/icons/html5/html5-original.svg'
import css3Icon from 'devicon/icons/css3/css3-original.svg'
import javascriptIcon from 'devicon/icons/javascript/javascript-original.svg'
import reactIcon from 'devicon/icons/react/react-original.svg'
import nodejsIcon from 'devicon/icons/nodejs/nodejs-original.svg'
import nextjsIcon from 'devicon/icons/nextjs/nextjs-original.svg'
import expressIcon from 'devicon/icons/express/express-original.svg'
import pythonIcon from 'devicon/icons/python/python-original.svg'
import javaIcon from 'devicon/icons/java/java-original.svg'
import cIcon from './assets/c.png'
import mysqlIcon from 'devicon/icons/mysql/mysql-original.svg'
import firebaseIcon from 'devicon/icons/firebase/firebase-original.svg'
import vercelIcon from 'devicon/icons/vercel/vercel-original.svg'
import tailwindcssIcon from 'devicon/icons/tailwindcss/tailwindcss-original.svg'
import figmaIcon from 'devicon/icons/figma/figma-original.svg'
import gitIcon from 'devicon/icons/git/git-original.svg'
import githubTechIcon from 'devicon/icons/github/github-original.svg'
import notionIcon from 'devicon/icons/notion/notion-original.svg'
import pandasIcon from 'devicon/icons/pandas/pandas-original.svg'
import numpyIcon from 'devicon/icons/numpy/numpy-original.svg'
import scikitlearnIcon from 'devicon/icons/scikitlearn/scikitlearn-original.svg'
import './App.css'

type ProfileTabKey =
  | 'education'
  | 'certificates'
  | 'work_experience'
  | 'training'

type ExtrasTabKey = 'github' | 'interest'

const EXTRAS_TABS: { key: ExtrasTabKey; label: string }[] = [
  { key: 'github', label: 'GitHub 활동' },
  { key: 'interest', label: '요즘 관심있는 것' },
]

const PROFILE_TABS: { key: ProfileTabKey; label: string; icon: string }[] = [
  { key: 'education', label: '학력', icon: graduatesIcon },
  { key: 'certificates', label: '자격증 및 어학', icon: certificatesIcon },
  { key: 'work_experience', label: '경력', icon: workExperienceIcon },
  { key: 'training', label: '교육/훈련', icon: educationAndTrainingIcon },
]

type ProfileEntry = {
  title: string
  period: string
  description?: string
  githubUrl?: string
  deployUrl?: string
}

const EDUCATION_ENTRIES: ProfileEntry[] = [
  {
    title: '경성대학교',
    period: '2019.03 - 2026.02',
    description: '전공 : 영어영문학, 소프트웨어학',
  },
  {
    title: '거제고등학교',
    period: '2016.03 - 2019.02',
    description: '문과',
  },
]

const CERTIFICATE_ENTRIES: ProfileEntry[] = [
  {
    title: 'ADsP',
    period: '2026.08',
    description: '한국데이터베이스진흥센터',
  },
  {
    title: 'SQLD',
    period: '2025.09',
    description: '한국데이터베이스진흥센터',
  },
  {
    title: '정보처리기사',
    period: '2025.06',
    description: '한국산업인력공단',
  },
  {
    title: 'OPIc | Advanced Low',
    period: '2024.09 - 2026.09',
    description: '미국 외국어교육위원회(ACTFL)',
  },
]

const TRAINING_ENTRIES: ProfileEntry[] = [
  {
    title: '삼성중공업 스마트조선소 AI전문가 양성과정',
    period: '2026.07 - 2026.12',
    description:
      'Python, DB, Web, 데이터 분석 등 프로그래밍 교육과 기업 수요 맞춤형 프로젝트 과제 수행',
  },
]

type ProjectStatus = 'in_progress' | 'completed'

type ProjectEntry = ProfileEntry & { status: ProjectStatus }

const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
  in_progress: '진행 중',
  completed: '완료',
}

const PROJECT_ENTRIES: ProjectEntry[] = [
  {
    title: '여기담다',
    period: '2025.09 - 2026.02',
    status: 'completed',
    description: '가족 여행 사진 공유 사이트',
    githubUrl: 'https://github.com/Kim-Jeong-Hun/family-travel-photo-site',
    deployUrl: 'https://family-travel-photo-site.vercel.app/',
  },
]

function ProjectCardGrid({ entries }: { entries: ProjectEntry[] }) {
  return (
    <ul id="project_card_grid">
      {entries.map((entry) => (
        <li key={entry.title} className="project_card">
          <div className="project_card_header">
            <span
              className={`project_status_badge project_status_badge--${entry.status}`}
            >
              {PROJECT_STATUS_LABEL[entry.status]}
            </span>
            <span className="profile_entry_period">{entry.period}</span>
          </div>
          <span className="profile_entry_title_group">
            <span className="profile_entry_title">{entry.title}</span>
            {entry.githubUrl && (
              <a
                className="profile_entry_link_icon"
                href={entry.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${entry.title} GitHub 저장소`}
              >
                <img src={githubIcon} alt="" />
              </a>
            )}
            {entry.deployUrl && (
              <a
                className="profile_entry_link_icon"
                href={entry.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${entry.title} 배포 사이트`}
              >
                <img src={externalLinkIcon} alt="" />
              </a>
            )}
          </span>
          {entry.description && (
            <p className="profile_entry_description">{entry.description}</p>
          )}
        </li>
      ))}
    </ul>
  )
}

function ProfileEntryList({
  entries,
  tinted = false,
}: {
  entries: ProfileEntry[]
  tinted?: boolean
}) {
  const itemClassName = tinted
    ? 'profile_entry profile_entry--tinted'
    : 'profile_entry'

  return (
    <ul className="profile_entry_list">
      {entries.map((entry) => (
        <li key={entry.title} className={itemClassName}>
          <div className="profile_entry_header">
            <span className="profile_entry_title_group">
              <span className="profile_entry_title">{entry.title}</span>
              {entry.githubUrl && (
                <a
                  className="profile_entry_link_icon"
                  href={entry.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${entry.title} GitHub 저장소`}
                >
                  <img src={githubIcon} alt="" />
                </a>
              )}
              {entry.deployUrl && (
                <a
                  className="profile_entry_link_icon"
                  href={entry.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${entry.title} 배포 사이트`}
                >
                  <img src={externalLinkIcon} alt="" />
                </a>
              )}
            </span>
            <span className="profile_entry_period">{entry.period}</span>
          </div>
          {entry.description && (
            <p className="profile_entry_description">{entry.description}</p>
          )}
        </li>
      ))}
    </ul>
  )
}

type TechCategoryKey =
  | 'planning'
  | 'frontend'
  | 'backend'
  | 'language'
  | 'data_analysis'
  | 'library'
  | 'infra'

type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced'

const TECH_CATEGORIES: { key: TechCategoryKey; label: string }[] = [
  { key: 'language', label: '언어' },
  { key: 'planning', label: '기획 및 디자인' },
  { key: 'frontend', label: '프론트엔드' },
  { key: 'backend', label: '백엔드' },
  { key: 'library', label: '라이브러리' },
  { key: 'infra', label: '환경 및 배포' },
  { key: 'data_analysis', label: '데이터 분석' },
]

const PROFICIENCY_LEVELS: { key: ProficiencyLevel; label: string }[] = [
  { key: 'advanced', label: '고급' },
  { key: 'intermediate', label: '중급' },
  { key: 'beginner', label: '초급' },
]

type TechStackItem = {
  name: string
  categories: TechCategoryKey[]
  level: ProficiencyLevel
  icon?: string
}

// 숙련도(level)는 임시값 - 실제 숙련도로 교체 필요
const TECH_STACK_ITEMS: TechStackItem[] = [
  // HTML5, CSS3, JavaScript는 고정 순서
  { name: 'HTML5', categories: ['frontend'], level: 'intermediate', icon: html5Icon },
  { name: 'CSS3', categories: ['frontend'], level: 'intermediate', icon: css3Icon },
  {
    name: 'JavaScript',
    categories: ['language', 'frontend'],
    level: 'intermediate',
    icon: javascriptIcon,
  },
  // 이후 언어 → 기획 및 디자인 → 프론트엔드 → 백엔드 → 라이브러리 → 환경 및 배포 → 데이터 분석 순
  { name: 'Python', categories: ['language'], level: 'intermediate', icon: pythonIcon },
  { name: 'Java', categories: ['language'], level: 'intermediate', icon: javaIcon },
  { name: 'C', categories: ['language'], level: 'intermediate', icon: cIcon },
  { name: 'Figma', categories: ['planning'], level: 'intermediate', icon: figmaIcon },
  { name: 'Notion', categories: ['planning'], level: 'intermediate', icon: notionIcon },
  { name: 'React', categories: ['frontend'], level: 'intermediate', icon: reactIcon },
  {
    name: 'Next.js',
    categories: ['frontend', 'backend'],
    level: 'intermediate',
    icon: nextjsIcon,
  },
  {
    name: 'Node.js',
    categories: ['backend'],
    level: 'intermediate',
    icon: nodejsIcon,
  },
  {
    name: 'Express.js',
    categories: ['backend'],
    level: 'intermediate',
    icon: expressIcon,
  },
  {
    name: 'MySQL',
    categories: ['data_analysis', 'backend'],
    level: 'intermediate',
    icon: mysqlIcon,
  },
  {
    name: 'Firebase',
    categories: ['infra', 'backend'],
    level: 'intermediate',
    icon: firebaseIcon,
  },
  {
    name: 'Tailwind CSS',
    categories: ['library'],
    level: 'intermediate',
    icon: tailwindcssIcon,
  },
  { name: 'Vercel', categories: ['infra'], level: 'intermediate', icon: vercelIcon },
  { name: 'Git', categories: ['infra'], level: 'intermediate', icon: gitIcon },
  {
    name: 'GitHub',
    categories: ['infra'],
    level: 'intermediate',
    icon: githubTechIcon,
  },
  {
    name: 'pandas',
    categories: ['data_analysis'],
    level: 'intermediate',
    icon: pandasIcon,
  },
  {
    name: 'NumPy',
    categories: ['data_analysis'],
    level: 'intermediate',
    icon: numpyIcon,
  },
  {
    name: 'scikit-learn',
    categories: ['data_analysis'],
    level: 'intermediate',
    icon: scikitlearnIcon,
  },
]

function TechStackGrid({
  items,
  activeCategory,
  activeLevel,
}: {
  items: TechStackItem[]
  activeCategory: TechCategoryKey | 'all'
  activeLevel: ProficiencyLevel | 'all'
}) {
  return (
    <ul id="tech_stacks_image_container">
      {items.map((item) => {
        const isMatch =
          (activeCategory === 'all' ||
            item.categories.includes(activeCategory)) &&
          (activeLevel === 'all' || item.level === activeLevel)

        return (
          <li
            key={item.name}
            className={`tech_stack_card${
              item.icon ? ' tech_stack_card--icon-only' : ''
            }${isMatch ? '' : ' tech_stack_card--dimmed'}`}
          >
            {item.icon ? (
              <img
                className="tech_stack_icon_image"
                src={item.icon}
                alt={item.name}
                title={item.name}
              />
            ) : (
              <>
                <span className="tech_stack_icon_placeholder">
                  {item.name.charAt(0)}
                </span>
                <span className="tech_stack_name">{item.name}</span>
                <span className="tech_stack_level">
                  <span className={`level_dot level_dot--${item.level}`} />
                  {PROFICIENCY_LEVELS.find((level) => level.key === item.level)
                    ?.label}
                </span>
              </>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function App() {
  const [activeProfileTab, setActiveProfileTab] =
    useState<ProfileTabKey>('education')
  const [activeTechCategory, setActiveTechCategory] = useState<
    TechCategoryKey | 'all'
  >('all')
  const [activeTechLevel, setActiveTechLevel] = useState<
    ProficiencyLevel | 'all'
  >('all')
  const [activeExtrasTab, setActiveExtrasTab] =
    useState<ExtrasTabKey>('github')

  useEffect(() => {
    // 현재 보이는 섹션에 맞춰 네비게이션 밑줄 표시
    const sections = document.querySelectorAll(
      'nav#home, #profile, #tech_stacks, #projects, #extras',
    )
    const navLinks = document.querySelectorAll('#navbar a')

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id
            navLinks.forEach((link) => link.classList.remove('active'))
            const activeLink = document.querySelector(
              `#navbar a[href="#${currentId}"]`,
            )
            activeLink?.classList.add('active')
          }
        })
      },
      { threshold: 0.3 },
    )
    sections.forEach((section) => sectionObserver.observe(section))

    // 프로필/기술 스택 카드 fade-in-up 애니메이션
    const fadeContainers = document.querySelectorAll(
      '#profile_headline_container, #profile_panel_container, #tech_stacks_headline_container',
    )

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
            fadeObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    fadeContainers.forEach((container) => fadeObserver.observe(container))

    return () => {
      sectionObserver.disconnect()
      fadeObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* 0. 네비게이션 */}
      <nav id="home">
        <div id="navbar">
          <a href="#home">홈</a>
          <a href="#profile">프로필</a>
          <a href="#tech_stacks">기술 스택</a>
          <a href="#projects">프로젝트</a>
          <a href="#extras">기타</a>
        </div>
      </nav>
      {/* 1. 헤드라인 */}
      <header>
        <div>
          <img id="cover_img" src={coverImg} alt="" />
          <div id="headline_background"></div>
          <div id="headline_text_container">
            <p className="headline_title">
              <span id="finding">Finding </span>
              <span id="the">the </span>
              <span id="best_balance_title">Best Balance</span>
            </p>
          </div>
        </div>
      </header>
      {/* 메인 */}
      <main>
        {/* 2. 프로필 */}
        <div id="profile">
          <div id="profile_headline_container">
            <p id="profile_headline">
              <span>
                안녕하세요,
                <br />
              </span>
              <span>UX와 코드 사이에서</span>
              <span id="best_balance_desc">{' '}최고의 균형</span>
              <span>
                을 찾는 <br />
                개발자{' '}
              </span>
              <span id="name">김정훈</span>
              <span>입니다.</span>
            </p>
          </div>
          <div id="profile_panel_container">
            <div id="profile_tab_buttons">
              {PROFILE_TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`profile_tab_button${
                    activeProfileTab === tab.key ? ' active' : ''
                  }`}
                  onClick={() => setActiveProfileTab(tab.key)}
                >
                  <img src={tab.icon} alt="" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div id="profile_tab_content" key={activeProfileTab}>
              {activeProfileTab === 'education' && (
                <ProfileEntryList entries={EDUCATION_ENTRIES} />
              )}
              {activeProfileTab === 'certificates' && (
                <ProfileEntryList entries={CERTIFICATE_ENTRIES} />
              )}
              {activeProfileTab === 'work_experience' && (
                <p className="profile_description">
                  아직 등록된 경력이 없습니다.
                </p>
              )}
              {activeProfileTab === 'training' && (
                <ProfileEntryList entries={TRAINING_ENTRIES} />
              )}
            </div>
          </div>
        </div>

        {/* 3. 기술 스택 */}
        <div id="tech_stacks">
          <div id="tech_stacks_headline_container">
            <p id="tech_stacks_headline">
              <span>아래의 기술을 사용할 수 있습니다.</span>
            </p>
          </div>
          <div id="tech_stacks_container">
            <div id="tech_stacks_matrix">
              <div id="tech_stacks_matrix_corner" />
              <div id="tech_stacks_category_bar">
                <button
                  type="button"
                  className={`tech_category_button${
                    activeTechCategory === 'all' ? ' active' : ''
                  }`}
                  onClick={() => setActiveTechCategory('all')}
                >
                  전체
                </button>
                {TECH_CATEGORIES.map((category) => (
                  <button
                    key={category.key}
                    type="button"
                    className={`tech_category_button${
                      activeTechCategory === category.key ? ' active' : ''
                    }`}
                    onClick={() => setActiveTechCategory(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <div id="tech_stacks_level_bar">
                <button
                  type="button"
                  className={`tech_level_button${
                    activeTechLevel === 'all' ? ' active' : ''
                  }`}
                  onClick={() => setActiveTechLevel('all')}
                >
                  전체
                </button>
                {PROFICIENCY_LEVELS.map((level) => (
                  <button
                    key={level.key}
                    type="button"
                    className={`tech_level_button${
                      activeTechLevel === level.key ? ' active' : ''
                    }`}
                    onClick={() => setActiveTechLevel(level.key)}
                  >
                    <span className={`level_dot level_dot--${level.key}`} />
                    {level.label}
                  </button>
                ))}
              </div>
              <TechStackGrid
                items={TECH_STACK_ITEMS}
                activeCategory={activeTechCategory}
                activeLevel={activeTechLevel}
              />
            </div>
          </div>
        </div>
        {/* 4. 프로젝트(진행 중 / 완료) */}
        <div id="projects">
          <div id="projects_headline_container">
            <p id="projects_headline">
              <span>진행 중이거나 완료한 프로젝트를 소개합니다.</span>
            </p>
          </div>
          <div id="projects_container">
            <ProjectCardGrid entries={PROJECT_ENTRIES} />
          </div>
        </div>
        {/* 5. 기타(깃허브 잔디, 현재 관심사) */}
        <div id="extras">
          <div id="extras_headline_container">
            <p id="extras_headline">
              <span>제 근황을 살펴보세요.</span>
            </p>
          </div>
          <div id="extras_container">
            <div id="extras_panel_container">
              <div id="extras_tab_buttons">
                {EXTRAS_TABS.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    className={`extras_tab_button${
                      activeExtrasTab === tab.key ? ' active' : ''
                    }`}
                    onClick={() => setActiveExtrasTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div id="extras_tab_content" key={activeExtrasTab}>
                {activeExtrasTab === 'github' && (
                  <>
                    <img
                      className="github_stat_image"
                      src="https://ghchart.rshah.org/40c463/Kim-Jeong-Hun"
                      alt="Kim-Jeong-Hun GitHub 컨트리뷰션 그래프"
                    />
                    <img
                      className="github_stat_image github_stat_image--stats"
                      src="https://github-readme-stats.vercel.app/api?username=Kim-Jeong-Hun&show_icons=true&theme=default&hide_border=true"
                      alt="Kim-Jeong-Hun GitHub 통계"
                    />
                    <a
                      className="extras_card_link"
                      href="https://github.com/Kim-Jeong-Hun"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      깃허브 방문하기
                    </a>
                  </>
                )}
                {activeExtrasTab === 'interest' && (
                  <>
                    <p className="extras_card_description">
                      여기에 요즘 관심 있는 주제를 적어주세요.
                    </p>
                    <a
                      className="extras_card_link"
                      href="https://velog.io/@rlawjdgns213/posts"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      블로그 방문하기
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* 6. 꼬리말(저작권/다른 페이지) */}
      <footer>
        <div>
          <p>© 2026 Kim Jeong Hun. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
