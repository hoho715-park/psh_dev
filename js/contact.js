/**
 * PSH.DEV Portfolio - Contact Form
 * 연락처 폼 제출 기능
 */

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

/**
 * 연락처 폼 기능 초기화
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

/**
 * 폼 제출 처리
 * @param {Event} e - Submit 이벤트
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    // 기본 유효성 검사
    if (!validateForm(formData)) {
        return;
    }

    // 버튼 상태 변경
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '전송 중...';
    submitBtn.disabled = true;

    // EmailJS 또는 기타 이메일 전송 서비스 사용 시 여기에 구현
    // 현재는 시뮬레이션으로 처리
    simulateEmailSend(formData)
        .then(() => {
            // 성공 메시지
            showMessage('메시지가 성공적으로 전송되었습니다!', 'success');
            form.reset();
        })
        .catch((error) => {
            // 에러 메시지
            showMessage('메시지 전송에 실패했습니다. 다시 시도해주세요.', 'error');
            console.error('Form submission error:', error);
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
}

/**
 * 폼 데이터 유효성 검사
 * @param {Object} data - 폼 데이터
 * @returns {boolean} - 유효성 여부
 */
function validateForm(data) {
    if (!data.name.trim()) {
        showMessage('이름을 입력해주세요.', 'error');
        return false;
    }

    if (!data.email.trim()) {
        showMessage('이메일을 입력해주세요.', 'error');
        return false;
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showMessage('올바른 이메일 형식이 아닙니다.', 'error');
        return false;
    }

    if (!data.message.trim()) {
        showMessage('메시지를 입력해주세요.', 'error');
        return false;
    }

    return true;
}

/**
 * 이메일 전송 시뮬레이션
 * @param {Object} data - 폼 데이터
 * @returns {Promise} - 전송 결과
 */
function simulateEmailSend(data) {
    return new Promise((resolve, reject) => {
        // 실제 구현 시 EmailJS 또는 백엔드 API 호출
        console.log('Sending email with data:', data);

        setTimeout(() => {
            // 90% 확률로 성공
            if (Math.random() > 0.1) {
                resolve();
            } else {
                reject(new Error('Network error'));
            }
        }, 1500);
    });
}

/**
 * 사용자에게 메시지 표시
 * @param {string} message - 메시지 내용
 * @param {string} type - 메시지 타입 (success/error)
 */
function showMessage(message, type) {
    // 기존 메시지 제거
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 새 메시지 생성
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;

    // 스타일 적용
    messageEl.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        animation: fadeIn 0.3s ease;
        ${type === 'success'
            ? 'background: #d1fae5; color: #065f46; border: 1px solid #34d399;'
            : 'background: #fee2e2; color: #991b1b; border: 1px solid #f87171;'}
    `;

    // 폼에 메시지 추가
    const form = document.getElementById('contact-form');
    form.appendChild(messageEl);

    // 3초 후 자동 제거
    setTimeout(() => {
        messageEl.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => messageEl.remove(), 300);
    }, 3000);
}

// 페이드 아웃 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);
