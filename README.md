# 9가지 UI/UX 화면 배치 패턴 쇼케이스 & 코드 라이브러리

React 18 + TypeScript + Tailwind CSS + Lucide Icons 기반의 **9가지 UI/UX 레이아웃 패턴 인터랙티브 쇼케이스**입니다.  
외부 UI 컴포넌트 라이브러리 없이 순수 **CSS Grid & Flexbox**로 구현되어, 복사한 코드를 어떤 프로젝트에 붙여넣어도 즉시 반응형으로 동작합니다.

## 포함된 9가지 레이아웃 패턴
- **01 히어로 (`Hero section`)**: 상단 가치 제안 + CTA + 하단 3열 핵심 요약 카드
- **02 벤토 그리드 (`Bento grid`)**: `col-span` / `row-span` 비대칭 모듈형 그리드
- **03 스플릿 (`Split screen`)**: 50:50 브랜드 비주얼 + 로그인/온보딩 액션 분할
- **04 카드 그리드 (`Card grid`)**: 반응형 균일 격자 카드 탐색
- **05 사이드바 레이아웃 (`Sidebar layout`)**: 좌측 고정 네비게이션 + 우측 가변 작업 영역
- **06 매거진 (`Magazine layout`)**: 에디토리얼 커버스토리 + 서브 기사 큐레이션
- **07 대시보드 (`Dashboard`)**: 상단 KPI 지표 카드 + 하단 인터랙티브 차트
- **08 Z 패턴 (`Z-pattern`)**: 시선 흐름(좌상단 → 우상단 → 좌하단 → 우하단) 최적화 배치
- **09 풀블리드 (`Full bleed`)**: 여백 없는 Edge-to-Edge 몰입형 캔버스

## 주요 기능
- **전체 한눈에 보기 (3×3 그리드)** & **3단 분할 상세 워크스페이스** (`사이드바 | 라이브 프리뷰 | 코드 뷰어`)
- **데스크톱 / 태블릿 / 모바일** 뷰포트 실시간 전환
- **실제 콘텐츠 ↔ 와이어프레임** 뷰 모드 토글
- 프리뷰 내부 영역 클릭 시 **CSS Grid/Flexbox 규칙 및 UX 설계 팁** 인스펙터 표시
- **React + Tailwind** / **HTML + CSS + JS** 코드 탭 전환, 원클릭 복사 및 파일 다운로드

## 로컬 실행 방법
```bash
npm install
npm run dev:layout-showcase
```
실행 후 브라우저에서 `http://localhost:3011`로 접속합니다.

## 프로덕션 빌드
```bash
npm run build
```
빌드 결과물은 `dist/` 폴더에 정적 파일로 생성됩니다.

## Render Static Site 배포 설정
`render.yaml`이 포함되어 있어 Blueprint 배포 또는 수동 Static Site 생성 모두 바로 사용할 수 있습니다.
- **Build Command**: `npm ci && npm run build`
- **Publish Directory**: `dist`
- **Rewrite Rule**: `/*` → `/index.html`
