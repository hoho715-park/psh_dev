/**
 * PSH.DEV Portfolio - Project Modal
 * 프로젝트 상세 정보 모달 기능
 */

document.addEventListener('DOMContentLoaded', function() {
    initProjectModal();
});

/**
 * 프로젝트 모달 기능 초기화
 */
function initProjectModal() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');

    // 프로젝트 데이터 (더미 데이터)
    const projectData = {
        '1': {
            title: 'E-Commerce 플랫폼',
            tags: ['React', 'Spring Boot', 'MySQL'],
            overview: '사용자 친화적인 UI/UX를 갖춘 전자상거래 플랫폼입니다. 상품 검색, 장바구니, 결제 기능을 포함하며, 관리자 페이지에서 상품 및 주문 관리가 가능합니다.',
            tech: 'Frontend: React, Redux, Styled-components / Backend: Spring Boot, JPA, MySQL / 배포: AWS EC2, RDS',
            role: 'Full Stack 개발자로 프론트엔드와 백엔드를 모두 담당했습니다. React를 활용한 SPA 구조 설계, REST API 서버 구축, 데이터베이스 설계 및 최적화를 수행했습니다.',
            challenge: '대용량 상품 데이터 조회 시 성능 저하 문제를 겪었습니다. 페이지네이션 및 인덱싱을 적용하고, Redis 캐싱을 도입하여 응답 속도를 70% 개선했습니다.'
        },
        '2': {
            title: '팀 협업 관리 시스템',
            tags: ['React', 'WebSocket', 'Node.js'],
            overview: '실시간 채팅과 작업 관리 기능을 제공하는 협업 도구입니다. 프로젝트 생성, 작업 할당, 진행 상황 추적이 가능하며, WebSocket을 통한 실시간 업데이트를 지원합니다.',
            tech: 'Frontend: React, Socket.io-client / Backend: Node.js, Express, Socket.io / Database: MongoDB',
            role: '프론트엔드 개발을 주도하며 실시간 채팅 UI/UX를 설계하고 구현했습니다. WebSocket 연결 관리 및 상태 동기화 로직을 담당했습니다.',
            challenge: '다수의 사용자가 동시 접속 시 메시지 순서가 꼬이는 문제가 발생했습니다. 타임스탬프 기반 정렬과 낙관적 UI 업데이트를 적용하여 사용자 경험을 개선했습니다.'
        },
        '3': {
            title: '포트폴리오 빌더',
            tags: ['React', 'Vite', 'Firebase'],
            overview: '개발자가 손쉽게 포트폴리오를 제작할 수 있는 웹 서비스입니다. 다양한 템플릿과 커스터마이징 옵션을 제공하며, 실시간 미리보기 기능을 지원합니다.',
            tech: 'Frontend: React, Vite, TailwindCSS / Backend: Firebase (Auth, Firestore, Hosting)',
            role: '개인 프로젝트로 전체 기획부터 디자인, 개발, 배포까지 모든 과정을 진행했습니다. 컴포넌트 기반 아키텍처 설계 및 Firebase 연동을 담당했습니다.',
            challenge: '다양한 템플릿 간 데이터 구조 통일이 어려웠습니다. JSON Schema를 정의하고 공통 인터페이스를 설계하여 확장 가능한 구조를 구축했습니다.'
        }
    };

    // 프로젝트 카드 클릭 이벤트
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const data = projectData[projectId];

            if (data) {
                // 모달 내용 업데이트
                document.getElementById('modal-title').textContent = data.title;

                // 태그 업데이트
                const modalTags = document.getElementById('modal-tags');
                modalTags.innerHTML = '';
                data.tags.forEach(tag => {
                    const tagEl = document.createElement('span');
                    tagEl.className = 'tag';
                    tagEl.textContent = tag;
                    modalTags.appendChild(tagEl);
                });

                // 상세 정보 업데이트
                document.getElementById('modal-overview').textContent = data.overview;
                document.getElementById('modal-tech').textContent = data.tech;
                document.getElementById('modal-role').textContent = data.role;
                document.getElementById('modal-challenge').textContent = data.challenge;

                // 모달 표시
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // 모달 닫기
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}
