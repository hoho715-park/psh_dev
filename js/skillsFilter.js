/**
 * PSH.DEV Portfolio - Skills Filter
 * 기술 스택 필터링 기능
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

            console.log('Filter clicked:', category); // 디버깅용

            // 활성 버튼 업데이트
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 카드 필터링 (부드러운 전환)
            skillCards.forEach((card, index) => {
                const cardCategory = card.getAttribute('data-category');

                // 약간의 지연을 두어 순차적 애니메이션 효과
                setTimeout(() => {
                    if (category === 'all' || cardCategory === category) {
                        card.classList.remove('filtered');
                    } else {
                        card.classList.add('filtered');
                    }
                }, index * 20); // 각 카드마다 20ms 지연
            });
        });
    });

    console.log(`Skills filter initialized: ${filterBtns.length} buttons, ${skillCards.length} cards`);
}
