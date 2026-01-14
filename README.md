# PSH.DEV - 박성호 포트폴리오

**풀스택 개발자를 꿈꾸는 박성호**의 개인 포트폴리오 웹사이트입니다.

Frontend와 Backend를 연결하는 개발자로, 사용자 경험과 시스템 안정성을 모두 고려한 웹 개발을 지향합니다.

## 🌟 프로젝트 소개

PSH.DEV는 밝고 세련된 분위기의 트렌디한 포트폴리오 웹사이트입니다. 단일 페이지 구조로 설계되어 부드러운 스크롤 경험을 제공하며, 반응형 디자인으로 모든 디바이스에서 최적의 사용자 경험을 제공합니다.

### ✨ 주요 특징

- **Single Page Application (SPA)**: 페이지 새로고침 없이 부드러운 섹션 전환
- **완전 반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **모듈화된 코드 구조**: 유지보수가 용이한 파일 분리 구조
- **트렌디한 UI/UX**: 최신 디자인 트렌드를 반영한 세련된 인터페이스
- **부드러운 애니메이션**: 과하지 않은 자연스러운 전환 효과
- **접근성 고려**: 색 대비, 가독성, 키보드 내비게이션 지원

## 📁 프로젝트 구조

```
psh_dev/
├── index.html              # 메인 HTML 파일
├── css/                    # 스타일시트 디렉토리
│   ├── common.css         # 공통 스타일 및 변수
│   ├── layout.css         # 네비게이션 및 레이아웃
│   ├── home.css           # HOME 섹션 스타일
│   ├── about.css          # About 섹션 스타일
│   ├── skills.css         # Skills 섹션 스타일
│   ├── archiving.css      # Archiving 섹션 스타일
│   ├── projects.css       # Projects 섹션 스타일
│   └── contact.css        # Contact 섹션 스타일
├── js/                     # JavaScript 디렉토리
│   ├── main.js            # 전역 초기화 및 유틸리티
│   ├── scroll.js          # 스크롤 기반 네비게이션
│   ├── skillsFilter.js    # 기술 스택 필터링
│   ├── modal.js           # 프로젝트 모달 기능
│   └── contact.js         # 연락처 폼 처리
├── images/                 # 이미지 디렉토리
│   ├── about1.svg         # Frontend 아이콘
│   ├── about2.svg         # Backend 아이콘
│   └── about3.svg         # Collaboration 아이콘
└── README.md              # 프로젝트 문서
```

## 🎨 디자인 컨셉

### 색상 팔레트

- **Primary**: `#6366f1` (Indigo)
- **Primary Light**: `#818cf8`
- **Accent**: `#f59e0b` (Amber)
- **Background**: `#ffffff`, `#f9fafb`
- **Text**: `#1f2937`, `#6b7280`

### 타이포그래피

- **영문**: Poppins (Google Fonts)
- **한글**: Noto Sans KR (Google Fonts)

## 📋 섹션 구성

### 1. HOME
- 강렬한 메인 카피와 CTA 버튼
- 스크롤 인디케이터
- 그라디언트 배경 효과

### 2. About Me
- 3개의 카드형 레이아웃
- Frontend, Backend, Collaboration 주제
- 호버 효과와 애니메이션

### 3. Skills
- 카테고리별 필터링 기능 (전체/Frontend/Backend/CMS/ETC)
- 14개 기술 스택 표시
- 선택되지 않은 항목 흐림 처리

### 4. Archiving
- GitHub 저장소
- 개발 블로그 (Tistory)
- 팀 포트폴리오 (Nodefolio)
- 외부 링크 연결

### 5. Projects
- 3개 프로젝트 카드
- 클릭 시 상세 정보 모달
- 프로젝트 개요, 사용 기술, 역할, 문제 해결 경험 포함

### 6. Contact
- 좌측: 명함 스타일 정보 카드
- 우측: 이메일 작성 폼
- 폼 유효성 검사 및 피드백

## 🚀 시작하기

### 요구사항

- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 서버 (선택사항)

### 설치 및 실행

1. 프로젝트 클론 또는 다운로드

2. 파일 열기
   - 직접 실행: `index.html` 파일을 브라우저에서 열기
   - 로컬 서버 사용 (권장):
     ```bash
     # Python 3
     python -m http.server 8000

     # Node.js (http-server)
     npx http-server

     # VS Code - Live Server 확장 프로그램 사용
     ```

3. 브라우저에서 접속
   ```
   http://localhost:8000
   ```

## ⚙️ 커스터마이징

### 개인 정보 수정

[index.html](index.html) 파일의 Contact 섹션에서 개인 정보를 수정하세요:

```html
<div class="info-header">
    <h3>박성호</h3>  <!-- 이름 변경 -->
    <p class="info-role">Fullstack Developer</p>
</div>
```

### 색상 변경

[css/common.css](css/common.css) 파일의 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #6366f1;  /* 원하는 색상으로 변경 */
    --accent-color: #f59e0b;
}
```

### 프로젝트 데이터 수정

[js/modal.js](js/modal.js) 파일의 `projectData` 객체를 수정하세요.

## 🛠️ 기술 스택

### Frontend
- HTML5
- CSS3 (CSS Variables, Grid, Flexbox)
- Vanilla JavaScript (ES6+)

### 디자인
- Google Fonts (Poppins, Noto Sans KR)
- SVG Icons
- CSS Animations

### 기능
- Intersection Observer API (스크롤 애니메이션)
- CSS Grid & Flexbox (레이아웃)
- Mobile-First Responsive Design

## 📱 반응형 브레이크포인트

- **Mobile**: ~ 480px
- **Tablet**: 481px ~ 768px
- **Desktop**: 769px ~ 1024px
- **Large Desktop**: 1025px ~

## ✅ 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 📞 연락처

- **이름**: 박성호
- **이메일**: andytjdgh@gmail.com
- **전화**: 010-2922-6844
- **GitHub**: [github.com/andytjdgh](https://github.com/andytjdgh)
- **블로그**: [andytjdgh.tistory.com](https://andytjdgh.tistory.com)
- **팀 포트폴리오**: [nodefolio.co.kr](https://nodefolio.co.kr)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 🙏 감사의 말

PSH.DEV 포트폴리오를 방문해 주셔서 감사합니다!

---

**© 2025 PSH.DEV. All rights reserved.**
