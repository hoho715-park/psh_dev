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

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // 활성 버튼 업데이트
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 카드 필터링
            skillCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('filtered');
                } else {
                    card.classList.add('filtered');
                }
            });
        });
    });
}
