// Intersection Observer를 사용하여 각 섹션이 화면에 보일 때 감지
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('nav#home, #profile, #tech_stacks, #projects, #extras');
  const navLinks = document.querySelectorAll('#navbar a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 현재 보이는 섹션의 id를 가져옴
          const currentId = entry.target.id;
          
          // 모든 링크의 underline 제거
          navLinks.forEach((link) => link.classList.remove('active'));
          
          // 현재 섹션에 해당하는 링크에 underline 추가
          const activeLink = document.querySelector(`#navbar a[href="#${currentId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    },
    { threshold: 0.3 } // 요소의 30%가 보일 때 감지
  );

  sections.forEach((section) => observer.observe(section));

  // 컨테이너 애니메이션 감지
  const profileContainers = document.querySelectorAll(
    '#profile_headline_container, #education_container, #certificates_container, #work_experience_container, #tech_stacks_headline_container'
  );

  const containerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 요소가 화면에 나타나면 fade-in-up 클래스 추가
          entry.target.classList.add('fade-in-up');
          // 한 번만 애니메이션 실행하므로 관찰 중지
          containerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 } // 요소의 50%가 보일 때 감지
  );

  profileContainers.forEach((container) => containerObserver.observe(container));
});