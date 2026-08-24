import { useEffect, useState } from 'react'
import coverImg from './assets/portfolio_background_image.png'
import educationIcon from './assets/education.svg'
import certificateIcon from './assets/certificate.svg'
import workExperienceIcon from './assets/work_experience.svg'
import './App.css'

type ProfileTabKey =
  | 'education'
  | 'certificates'
  | 'work_experience'
  | 'training'
  | 'projects'

const PROFILE_TABS: { key: ProfileTabKey; label: string; icon: string }[] = [
  { key: 'education', label: '학력', icon: educationIcon },
  { key: 'certificates', label: '자격증 및 어학', icon: certificateIcon },
  { key: 'work_experience', label: '경력', icon: workExperienceIcon },
  { key: 'training', label: '교육/훈련', icon: educationIcon },
  { key: 'projects', label: '프로젝트', icon: workExperienceIcon },
]

type ProfileEntry = {
  title: string
  period: string
  description?: string
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
    description: '문과계열',
  },
]

const CERTIFICATE_ENTRIES: ProfileEntry[] = [
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

function ProfileEntryList({ entries }: { entries: ProfileEntry[] }) {
  return (
    <ul className="profile_entry_list">
      {entries.map((entry) => (
        <li key={entry.title} className="profile_entry">
          <div className="profile_entry_header">
            <span className="profile_entry_title">{entry.title}</span>
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

function App() {
  const [activeProfileTab, setActiveProfileTab] =
    useState<ProfileTabKey>('education')

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
                <p className="profile_description">
                  아직 등록된 교육/훈련이 없습니다.
                </p>
              )}
              {activeProfileTab === 'projects' && (
                <p className="profile_description">
                  아직 등록된 프로젝트가 없습니다.
                </p>
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
            <div id="tech_stacks_category">
              <div id="tech_stacks_category_bar">
                <p>기획 및 디자인</p>
                <p>프론트엔드</p>
                <p>백엔드</p>
                <p>라이브러리</p>
                <p>환경 및 배포</p>
              </div>
            </div>
            <div id="tech_stacks_proficiency">
              <div id="tech_stacks_proficiency_bar">
                <p>초급</p>
                <p>중급</p>
                <p>고급</p>
              </div>
            </div>
            <div id="tech_stacks_image_container">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>TypeScript</p>
            </div>
          </div>
        </div>
        {/* 4. 프로젝트(진행 중 / 완료) */}
        <div id="projects">프로젝트</div>
        {/* 5. 기타(깃허브 잔디, 현재 관심사) */}
        <div id="extras">
          <a href="https://github.com/Kim-Jeong-Hun">깃허브 방문하기</a>
          <a href="https://velog.io/@rlawjdgns213/posts">블로그 방문하기</a>
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
