# PSH.DEV - 박성호 포트폴리오

**풀스택 개발자를 꿈꾸는 박성호**의 개인 포트폴리오 웹사이트입니다.

Frontend와 Backend를 연결하는 개발자로, 사용자 경험과 시스템 안정성을 모두 고려한 웹 개발을 지향합니다.

## 🌟 프로젝트 소개

PSH.DEV는 밝고 세련된 분위기의 트렌디한 포트폴리오 웹사이트입니다. 단일 페이지 구조로 설계되어 부드러운 스크롤 경험을 제공하며, 반응형 디자인으로 모든 디바이스에서 최적의 사용자 경험을 제공합니다.

### ✨ 주요 특징

- **Single Page Application (SPA)**: 페이지 새로고침 없이 부드러운 섹션 전환
- **섹션 단위 스크롤 스냅**: CSS scroll-snap으로 구현된 자연스러운 페이지 전환
- **화려한 그라디언트 배경**: 다층 radial-gradient와 blur 효과로 트렌디한 HOME 배경
- **완전 반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **가로 정렬 레이아웃**: Skills/Archiving/Projects 섹션의 한 화면 최적화
- **실시간 필터링**: Skills 섹션 카테고리별 흐림 효과 전환
- **모듈화된 코드 구조**: 유지보수가 용이한 파일 분리 구조
- **세련된 Hover 효과**: 카드 lift, shadow, scale 효과로 인터랙티브한 UX
- **접근성 고려**: 색 대비, 가독성, 키보드 내비게이션 지원

### 🎨 최신 업데이트 (v2.0)

#### 디자인 개선
- ✅ HOME 섹션 배경을 멀티 레이어 그라디언트 + 블러 효과로 고급화
- ✅ 부드러운 floating 애니메이션 추가
- ✅ CTA 버튼 제거로 깔끔한 첫 인상

#### UX 개선
- ✅ CSS scroll-snap-type으로 섹션 단위 스크롤 구현
- ✅ Skills 필터에 순차 애니메이션 적용 (opacity + blur)
- ✅ 모든 카드에 cubic-bezier easing 적용
- ✅ 네비게이션 활성 상태 강조 (font-weight 600)

#### 레이아웃 최적화
- ✅ Skills: 7열 그리드로 한 화면 배치
- ✅ Archiving: 3열 그리드로 가로 정렬
- ✅ Projects: 3열 그리드로 가로 정렬
- ✅ About 이미지 PNG 포맷으로 변경 (100px 크기)

### 🔧 최신 업데이트 (v2.1) - 세부 완성도 개선

#### About 섹션 최적화
- ✅ **화면 높이 문제 해결**: padding 조정으로 카드 3개가 한 화면에 완전히 표시
- ✅ **이미지 크기 확대**: 290×240px 비율 유지하며 200×166px로 확대 (기존 100px 대비 2배)
- ✅ **반응형 이미지**:
  - 데스크톱: 200×166px
  - 태블릿: 180×149px
  - 모바일: 160×132px
  - 작은 모바일: 140×116px
- ✅ **카드 간격 최적화**: gap 2rem → 1.5rem, padding 2.5rem → 2rem

#### 스크롤 경험 개선
- ✅ **scroll-snap-type**: mandatory → proximity (더 자연스러운 스크롤)
- ✅ **scroll-snap-stop**: always → normal (급격한 전환 방지)
- ✅ **부드러운 애니메이션**: easeInOutCubic easing 함수 적용
- ✅ **스크롤 duration**: 800ms로 최적화
- ✅ **접근성**: prefers-reduced-motion 지원

### 🎨 최신 업데이트 (v2.2) - About 카드 구조 개선

#### About 카드 레이아웃 재설계
- ✅ **이미지 위치 변경**: 카드 내부 중앙 → 카드 상단 전체 영역으로 이동
- ✅ **시각적 위계 강화**: 이미지가 카드의 핵심 비주얼 요소로 작동
- ✅ **정보 구조 명확화**: 이미지 → 제목 → 설명 순서로 명확한 흐름 구성
- ✅ **전체 너비 활용**: 이미지가 카드 너비 100% 차지
- ✅ **라운드 처리**: 이미지 상단 모서리가 카드 border-radius(20px)와 자연스럽게 매칭
- ✅ **반응형 이미지 높이**:
  - 데스크톱: 260px
  - 태블릿: 240px
  - 모바일: 220px
  - 작은 모바일: 200px
- ✅ **Flexbox 레이아웃**: `flex-direction: column`으로 이미지-콘텐츠 명확히 분리
- ✅ **패딩 재조정**: 카드 패딩 0으로 설정, 텍스트 영역에만 개별 패딩 적용
- ✅ **object-fit: cover 적용**: 이미지가 컨테이너를 빈 공간 없이 완전히 채움
- ✅ **비주얼 완성도 최우선**: 이미지 비율 유지하며 필요 시 자연스럽게 크롭

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
