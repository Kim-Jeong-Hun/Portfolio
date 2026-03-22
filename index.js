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
    { threshold: 0.3 } // 섹션의 30%가 보일 때 감지
  );

  sections.forEach((section) => observer.observe(section));
});