/**
 * PSH.DEV Portfolio - Skills Filter
 * 기술 스택 필터링 기능 - 순차 등장 애니메이션
 */

document.addEventListener('DOMContentLoaded', function() {
    initSkillsFilter();
});

/**
 * Skills 섹션 필터 기능 초기화
 */
function initSkillsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    if (filterBtns.length === 0 || skillCards.length === 0) {
        console.warn('Skills filter elements not found');
        return;
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');

            // 활성 버튼 업데이트
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 먼저 모든 카드 숨기기
            skillCards.forEach(card => {
                card.classList.add('hidden');
                card.style.animation = 'none';
            });

            // 선택된 카테고리 카드만 순차적으로 표시
            let visibleIndex = 0;
            skillCards.forEach((card) => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    setTimeout(() => {
                        card.classList.remove('hidden');
                        // 애니메이션 재실행을 위한 트릭
                        card.style.animation = 'none';
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                card.style.animation = '';
                                card.style.animationDelay = `${visibleIndex * 0.05}s`;
                            });
                        });
                    }, 10);
                    visibleIndex++;
                }
            });
        });
    });

    console.log(`Skills filter initialized: ${filterBtns.length} buttons, ${skillCards.length} cards`);
}
