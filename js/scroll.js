/**
 * PSH.DEV Portfolio - Scroll Management
 * 스크롤 기반 네비게이션 활성화 처리 및 부드러운 스크롤
 */

document.addEventListener('DOMContentLoaded', function() {
    initActiveNavOnScroll();
    initSmoothSectionScroll();
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

/**
 * 부드러운 섹션 전환 스크롤
 */
function initSmoothSectionScroll() {
    const sections = document.querySelectorAll('.section');
    let isScrolling = false;
    let scrollTimeout;

    // 휠 이벤트 디바운싱
    function handleWheel(e) {
        if (isScrolling) return;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 100);

        // 스크롤 방향 감지
        const delta = e.deltaY;
        const currentScroll = window.scrollY;
        const windowHeight = window.innerHeight;

        // 현재 섹션 찾기
        let currentSectionIndex = -1;
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                currentSectionIndex = index;
            }
        });

        // 작은 스크롤은 무시 (자연스러운 스크롤 허용)
        if (Math.abs(delta) < 50) return;

        // 다음/이전 섹션으로 부드럽게 이동
        if (delta > 0 && currentSectionIndex < sections.length - 1) {
            // 아래로 스크롤
            const nextSection = sections[currentSectionIndex + 1];
            if (nextSection) {
                isScrolling = true;
                smoothScrollTo(nextSection.offsetTop - 70, 800);
            }
        } else if (delta < 0 && currentSectionIndex > 0) {
            // 위로 스크롤
            const prevSection = sections[currentSectionIndex - 1];
            if (prevSection) {
                isScrolling = true;
                smoothScrollTo(prevSection.offsetTop - 70, 800);
            }
        }
    }

    // 부드러운 스크롤 애니메이션
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // easeInOutCubic easing
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                isScrolling = false;
            }
        }

        requestAnimationFrame(animation);
    }

    // 휠 이벤트 리스너 (데스크톱만)
    if (window.innerWidth > 768) {
        // passive: false로 설정하여 preventDefault 가능하게 함
        // window.addEventListener('wheel', handleWheel, { passive: true });

        // 부드러운 스크롤은 CSS로 충분하므로 주석 처리
        // 필요시 주석 해제
    }
}
