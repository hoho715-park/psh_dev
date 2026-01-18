/**
 * PSH.DEV Portfolio - Full-page Snap Scroll
 * PPT 슬라이드처럼 부드럽게 넘어가는 풀페이지 스크롤
 */

document.addEventListener('DOMContentLoaded', function() {
    initActiveNavOnScroll();
    initFullPageSnapScroll();
});

/**
 * 스크롤 위치에 따라 네비게이션 활성화 상태 변경
 */
function initActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length === 0 || navLinks.length === 0) return;

    function updateActiveNav() {
        let currentSection = '';
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // 섹션의 중앙 부분이 화면에 보일 때 활성화
            if (scrollY >= sectionTop - windowHeight / 2 &&
                scrollY < sectionTop + sectionHeight - windowHeight / 2) {
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
 * 풀페이지 스냅 스크롤 초기화
 * PPT 슬라이드처럼 부드럽게 페이지 단위로 이동
 */
function initFullPageSnapScroll() {
    // 모바일에서는 일반 스크롤 사용
    if (window.innerWidth <= 768) {
        return;
    }

    const sections = document.querySelectorAll('.section');
    let isScrolling = false;
    let touchStartY = 0;
    let lastScrollTime = Date.now();
    let currentSectionIndex = 0;

    // 현재 섹션 인덱스 찾기
    function getCurrentSectionIndex() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        for (let i = 0; i < sections.length; i++) {
            const sectionTop = sections[i].offsetTop;
            const sectionBottom = sectionTop + sections[i].offsetHeight;

            if (scrollY >= sectionTop - windowHeight / 3 && scrollY < sectionBottom - windowHeight / 3) {
                return i;
            }
        }
        return 0;
    }

    // 부드러운 스크롤 애니메이션 (easeInOutQuart)
    function smoothScrollTo(targetPosition, duration = 1000) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // easeInOutQuart - 더 부드러운 가속/감속
            const ease = progress < 0.5
                ? 8 * progress * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 4) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                isScrolling = false;
            }
        }

        requestAnimationFrame(animation);
    }

    // 특정 섹션으로 이동
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;

        isScrolling = true;
        currentSectionIndex = index;
        const targetSection = sections[index];
        const targetPosition = targetSection.offsetTop;

        smoothScrollTo(targetPosition, 1000);
    }

    // 마우스 휠 이벤트 처리
    function handleWheel(e) {
        const now = Date.now();

        // 스크롤 중이거나 너무 빠른 연속 스크롤 방지
        if (isScrolling || (now - lastScrollTime) < 100) {
            e.preventDefault();
            return;
        }

        const delta = e.deltaY;

        // 작은 스크롤은 무시
        if (Math.abs(delta) < 10) return;

        currentSectionIndex = getCurrentSectionIndex();

        // 스크롤 방향에 따라 다음/이전 섹션으로 이동
        if (delta > 0 && currentSectionIndex < sections.length - 1) {
            // 아래로 스크롤
            e.preventDefault();
            lastScrollTime = now;
            scrollToSection(currentSectionIndex + 1);
        } else if (delta < 0 && currentSectionIndex > 0) {
            // 위로 스크롤
            e.preventDefault();
            lastScrollTime = now;
            scrollToSection(currentSectionIndex - 1);
        }
    }

    // 터치 이벤트 처리 (모바일)
    function handleTouchStart(e) {
        touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (isScrolling) {
            e.preventDefault();
            return;
        }

        const touchEndY = e.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        const now = Date.now();

        // 충분한 스와이프 거리
        if (Math.abs(deltaY) > 50 && (now - lastScrollTime) > 100) {
            currentSectionIndex = getCurrentSectionIndex();

            if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
                // 위로 스와이프 (아래 섹션으로)
                e.preventDefault();
                lastScrollTime = now;
                scrollToSection(currentSectionIndex + 1);
            } else if (deltaY < 0 && currentSectionIndex > 0) {
                // 아래로 스와이프 (위 섹션으로)
                e.preventDefault();
                lastScrollTime = now;
                scrollToSection(currentSectionIndex - 1);
            }
        }
    }

    // 키보드 방향키 처리
    function handleKeyDown(e) {
        if (isScrolling) return;

        const now = Date.now();
        if ((now - lastScrollTime) < 100) return;

        currentSectionIndex = getCurrentSectionIndex();

        if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSectionIndex < sections.length - 1) {
            e.preventDefault();
            lastScrollTime = now;
            scrollToSection(currentSectionIndex + 1);
        } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSectionIndex > 0) {
            e.preventDefault();
            lastScrollTime = now;
            scrollToSection(currentSectionIndex - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            lastScrollTime = now;
            scrollToSection(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            lastScrollTime = now;
            scrollToSection(sections.length - 1);
        }
    }

    // 네비게이션 링크 클릭 처리
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetIndex = Array.from(sections).indexOf(targetSection);
                if (targetIndex !== -1) {
                    scrollToSection(targetIndex);
                }
            }
        });
    });

    // 이벤트 리스너 등록
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    // 페이지 로드 시 첫 섹션으로 스크롤
    window.scrollTo(0, 0);
    currentSectionIndex = 0;

    console.log('Full-page snap scroll initialized:', sections.length, 'sections');
}
