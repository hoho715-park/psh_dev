/**
 * PSH.DEV Portfolio - Scroll Management
 * 스크롤 기반 네비게이션 활성화 처리
 */

document.addEventListener('DOMContentLoaded', function() {
    initActiveNavOnScroll();
});

/**
 * 스크롤 위치에 따라 네비게이션 활성화 상태 변경
 */
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', updateActiveNav);

    // 초기 실행
    updateActiveNav();
}
