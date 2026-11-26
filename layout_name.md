# Role & Objective
당신은 시니어 프론트엔드 아키텍트이자 CSS Grid / Flexbox 레이아웃 전문 UI/UX 엔지니어입니다.
사용자가 웹/앱 개발 시 즉시 복사하여 실무에 적용할 수 있는 **[9가지 UI/UX 화면 배치(Layout) 패턴 인터랙티브 쇼케이스 & 코드 스니펫 라이브러리]** 웹 애플리케이션을 구축해야 합니다.

이 앱은 첨부된 레퍼런스 이미지의 정제된 한국형 프로덕트 디자인(Toss 스타일의 깔끔한 화이트/라이트 그레이 톤, `#3182F6` 프라이머리 블루 액센트, 둥근 모서리, 직관적인 와이어프레임+실제 콘텐츠 전환)을 계승합니다.

---

# Global Rules & Environment Constraints (사전 승인 완료)
1. **이미지 참조 규칙**: 로컬 경로의 별도 이미지 파일을 찾지 말고, 아래 명시된 레퍼런스 스펙과 스타일 가이드(`#3182F6` 블루 액센트, `#F2F4F6` 배경, 화이트 카드 UI)만으로 즉시 구현을 진행합니다.
2. **UI 텍스트 언어**: 한국형 프로덕트 문맥을 우선하여 UI 버튼, 라벨, UX 가이드, 데모 문구 전체를 **한국어**로 작성합니다.
3. **프레임워크 & 빌드**: React 18+ (Vite + TypeScript) + Tailwind CSS + `lucide-react` 기반으로 구축하며, 추후 **Render Static Site** 배포를 위해 `npm run build` 결과물(`dist` 폴더)이 서버 설정 없이 즉시 작동하도록 구성합니다.
4. **실행 스크립트**: `package.json`의 `scripts`에 `"dev:layout-showcase": "vite --port 3011"`과 함께 배포 호환용 `"dev": "vite"`, `"build": "tsc && vite build"`를 모두 포함합니다.
5. **레이아웃 구현 방식**: 모든 레이아웃은 외부 UI 프레임워크 없이 **순수 CSS Grid & Flexbox + Tailwind CSS**로 정밀하게 구현하여, 사용자가 복사한 코드를 어떤 프로젝트에 붙여넣어도 반응형으로 즉시 작동하도록 합니다.
6. **진행 방식**: 별도 확인 질문이나 승인 대기 없이 바로 전체 프로젝트 구조 설계, 9개 인터랙티브 레이아웃 데모 및 복사용 코드 구현, `npm run build` 검증까지 한 번에 완료하고 최종 결과만 보고해 주세요.

---

# Directory Architecture
```text
src/
├── data/
│   └── layoutPatterns.ts         # 9가지 화면 배치 패턴의 메타데이터, 설명, UX 가이드, 복사용 코드 스니펫
├── components/
│   ├── layout/
│   │   └── Sidebar.tsx           # 좌측 고정 네비게이션 (01~09 메뉴 + 전체 한눈에 보기 전환)
│   ├── preview/
│   │   ├── BrowserFrame.tsx      # 웹/앱 뷰포트를 모사하는 인터랙티브 프리뷰 컨테이너 (데스크톱/모바일 뷰 전환 지원)
│   │   └── demos/                # 9가지 레이아웃 패턴별 실제 영역 클릭/반응형 리사이즈/와이어프레임 토글이 작동하는 데모 컴포넌트
│   │       ├── HeroSectionDemo.tsx
│   │       ├── BentoGridDemo.tsx
│   │       ├── SplitScreenDemo.tsx
│   │       ├── CardGridDemo.tsx
│   │       ├── SidebarLayoutDemo.tsx
│   │       ├── MagazineLayoutDemo.tsx
│   │       ├── DashboardDemo.tsx
│   │       ├── ZPatternDemo.tsx
│   │       └── FullBleedDemo.tsx
│   └── code/
│       └── CodeViewer.tsx        # 우측 코드 패널 (React+Tailwind / 순수 HTML+CSS+JS 탭 전환, 원클릭 복사)
└── App.tsx                       # 3단 분할 대시보드 레이아웃 (Sidebar | Live Preview | Code Viewer)