import type { LayoutPattern } from '../types/layout';

export const LAYOUT_PATTERNS: LayoutPattern[] = [
  {
    id: 'hero',
    number: '01',
    titleKo: '히어로',
    titleEn: 'Hero section',
    category: '랜딩 · 전환',
    summary: '첫 화면 상단에 핵심 가치 제안과 CTA를 배치하고, 하단에 3개 보조 요약 카드로 신뢰를 더하는 전환 중심 배치입니다.',
    cssTech: 'Flex Column + 3-Col Grid',
    uxGuide: {
      whenToUse: [
        'SaaS, 핀테크, 모바일 앱 등 첫 방문 3초 안에 서비스 가치를 각인시켜야 하는 랜딩 페이지',
        '단일 핵심 액션(가입, 무료 체험, 앱 다운로드)으로 사용자 시선을 집중시킬 때',
      ],
      keyPrinciples: [
        '상단 히어로 영역은 화면 높이의 55~70% 이내로 유지해 하단 카드가 자연스럽게 엿보이도록(Above the Fold) 설계합니다.',
        '주 CTA 버튼은 #3182F6 같은 고대비 단색 필(Pill) 스타일로 시선을 모읍니다.',
        '하단 3열 피처 카드는 핵심 근거 3가지만 짧게 배치해 인지 부하를 줄입니다.',
      ],
      responsiveTip: '모바일(< 768px)에서는 하단 3열 그리드를 1열 스택으로 전환하고 타이틀 크기를 28~32px로 축소합니다.',
      caution: '히어로 내부에 CTA 버튼을 3개 이상 나열하면 클릭률이 분산되므로 주 버튼 1개와 보조 링크 1개 이하로 제한하세요.',
    },
    zones: [
      {
        id: 'hero-banner',
        label: '상단 히어로 배너',
        role: '핵심 가치 제안 + 주 CTA 영역',
        cssRule: 'display: flex; flex-direction: column; align-items: center; padding: 56px 24px;',
        uxTip: '가장 먼저 읽히는 H1 헤드라인(1~2줄)과 행동 유도 CTA를 수직 정렬해 시선 이탈을 막습니다.',
      },
      {
        id: 'hero-cta',
        label: '프라이머리 CTA 버튼',
        role: '핵심 전환 트리거',
        cssRule: 'display: inline-flex; align-items: center; gap: 8px; border-radius: 9999px; background: #3182F6;',
        uxTip: '터치 타깃 최소 높이 44px 이상을 확보하고 호버 시 미세한 명도 변화로 클릭 가능성을 전달합니다.',
      },
      {
        id: 'hero-features',
        label: '하단 3열 핵심 요약 카드',
        role: '서비스 신뢰도 보강 섹션',
        cssRule: 'display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px;',
        uxTip: '각 카드의 텍스트 길이를 2줄 이내로 맞춰 3열 높이가 균일하게 유지되도록 합니다.',
      },
    ],
    codeReact: `import React from 'react';

interface FeatureItem {
  badge: string;
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  { badge: '01', title: '1분 만에 간편 개설', description: '복잡한 서류 없이 본인 인증만으로 바로 시작합니다.' },
  { badge: '02', title: '수수료 0원 자동이체', description: '매달 반복되는 정산과 송금을 조건 없이 무료로 지원합니다.' },
  { badge: '03', title: '실시간 이상 탐지', description: '24시간 AI 보안 엔진이 비정상 거래를 즉시 차단합니다.' },
];

export default function HeroSection() {
  return (
    <section className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto max-w-5xl space-y-5">
        {/* 상단 히어로 배너 */}
        <div className="flex flex-col items-center rounded-3xl bg-gradient-to-b from-[#E8F3FF] to-[#F4F9FF] px-6 py-14 text-center shadow-sm ring-1 ring-[#3182F6]/10 sm:py-20">
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#3182F6] shadow-xs">
            새로운 금융 경험의 시작
          </span>
          <h1 className="max-w-xl text-2xl font-bold tracking-tight text-[#191F28] sm:text-4xl sm:leading-tight">
            금융의 모든 순간을
            <br />
            가장 쉽고 투명하게
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#4E5968] sm:text-base">
            계좌 조회부터 자산 관리, 간편 송금까지 한 화면에서 3초 만에 확인하세요.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#3182F6] px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1B64DA] active:scale-[0.98]"
            >
              무료로 시작하기
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#333D4B] ring-1 ring-[#E5E8EB] transition hover:bg-[#F9FAFB]"
            >
              서비스 둘러보기
            </button>
          </div>
        </div>

        {/* 하단 3열 보조 피처 카드 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURES.map((item) => (
            <article
              key={item.badge}
              className="rounded-2xl bg-white p-5 shadow-xs ring-1 ring-black/[0.04] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-xs font-bold text-[#3182F6]">{item.badge}</span>
              <h2 className="mt-2 text-base font-bold text-[#191F28]">{item.title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6B7684]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>히어로 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .hero-wrap { max-width: 1024px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px; }
    .hero-banner {
      display: flex; flex-direction: column; align-items: center; text-align: center;
      padding: 64px 24px; border-radius: 24px;
      background: linear-gradient(180deg, #E8F3FF 0%, #F4F9FF 100%);
      border: 1px solid rgba(49, 130, 246, 0.12);
    }
    .hero-badge { background: #FFFFFF; color: #3182F6; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 999px; margin-bottom: 16px; }
    .hero-title { font-size: clamp(26px, 4vw, 40px); font-weight: 800; line-height: 1.25; letter-spacing: -0.02em; }
    .hero-desc { margin-top: 12px; max-width: 440px; font-size: 15px; line-height: 1.6; color: #4E5968; }
    .hero-actions { margin-top: 28px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
    .btn-primary {
      height: 48px; padding: 0 28px; border: none; border-radius: 999px; cursor: pointer;
      background: #3182F6; color: #FFFFFF; font-size: 15px; font-weight: 600; transition: background 0.15s;
    }
    .btn-primary:hover { background: #1B64DA; }
    .btn-secondary {
      height: 48px; padding: 0 24px; border-radius: 999px; cursor: pointer;
      background: #FFFFFF; color: #333D4B; border: 1px solid #E5E8EB; font-size: 15px; font-weight: 600;
    }
    .feature-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .feature-card { background: #FFFFFF; border-radius: 18px; padding: 20px; border: 1px solid rgba(0,0,0,0.04); }
    .feature-num { font-size: 12px; font-weight: 700; color: #3182F6; }
    .feature-card h2 { margin-top: 8px; font-size: 16px; font-weight: 700; }
    .feature-card p { margin-top: 6px; font-size: 14px; line-height: 1.5; color: #6B7684; }
    @media (max-width: 768px) {
      .feature-grid { grid-template-columns: 1fr; }
      .hero-banner { padding: 48px 20px; }
    }
  </style>
</head>
<body>
  <section class="hero-wrap">
    <div class="hero-banner">
      <span class="hero-badge">새로운 금융 경험의 시작</span>
      <h1 class="hero-title">금융의 모든 순간을<br />가장 쉽고 투명하게</h1>
      <p class="hero-desc">계좌 조회부터 자산 관리, 간편 송금까지 한 화면에서 3초 만에 확인하세요.</p>
      <div class="hero-actions">
        <button class="btn-primary" type="button" onclick="alert('무료 시작 플로우로 이동합니다.')">무료로 시작하기</button>
        <button class="btn-secondary" type="button">서비스 둘러보기</button>
      </div>
    </div>
    <div class="feature-grid">
      <article class="feature-card">
        <span class="feature-num">01</span>
        <h2>1분 만에 간편 개설</h2>
        <p>복잡한 서류 없이 본인 인증만으로 바로 시작합니다.</p>
      </article>
      <article class="feature-card">
        <span class="feature-num">02</span>
        <h2>수수료 0원 자동이체</h2>
        <p>매달 반복되는 정산과 송금을 조건 없이 무료로 지원합니다.</p>
      </article>
      <article class="feature-card">
        <span class="feature-num">03</span>
        <h2>실시간 이상 탐지</h2>
        <p>24시간 AI 보안 엔진이 비정상 거래를 즉시 차단합니다.</p>
      </article>
    </div>
  </section>
</body>
</html>`,
  },
  {
    id: 'bento',
    number: '02',
    titleKo: '벤토 그리드',
    titleEn: 'Bento grid',
    category: '콘텐츠 · 탐색',
    summary: '크기가 다른 모듈형 셀(span)을 비대칭으로 조합해 핵심 기능과 보조 지표를 한눈에 조망하는 레이아웃입니다.',
    cssTech: 'CSS Grid (col-span / row-span)',
    uxGuide: {
      whenToUse: [
        '제품의 다채로운 핵심 기능(속도, 보안, AI, 통계 등)을 한 섹션에 시각적 위계와 함께 나열할 때',
        '애플/토스 스타일의 모던한 기능 소개 쇼케이스나 개인화 홈 화면을 구성할 때',
      ],
      keyPrinciples: [
        '가장 중요한 기능 셀은 2열(col-span-2) 또는 2행(row-span-2)으로 면적을 키워 시각적 무게 중심을 만듭니다.',
        '셀 간 간격(gap)과 border-radius를 통일해 비대칭 구조 안에서도 정돈된 질서를 유지합니다.',
        '포인트 컬러(#3182F6)는 전체 셀 중 1개 우상단 하이라이트 셀에만 사용해 시선 분산을 막습니다.',
      ],
      responsiveTip: '모바일에서는 col-span / row-span을 해제하고 grid-cols-1 또는 grid-cols-2로 평탄화해 가독성을 확보합니다.',
      caution: '모든 셀에 과도한 애니메이션이나 진한 배경색을 넣으면 피로도가 급격히 올라갑니다.',
    },
    zones: [
      {
        id: 'bento-main',
        label: '좌상단 와이드 하이라이트 셀',
        role: '메인 기능 및 인터랙티브 요약',
        cssRule: 'grid-column: span 2 / span 2; background: #E8F3FF;',
        uxTip: '가장 넓은 면적을 차지하므로 핵심 수치나 핵심 제품 가치를 간결한 시각 요소와 함께 배치합니다.',
      },
      {
        id: 'bento-accent',
        label: '우상단 포인트 액센트 셀',
        role: '즉각적인 전환 또는 상태 강조',
        cssRule: 'grid-column: span 1; background: #3182F6; color: #FFFFFF;',
        uxTip: '단일 KPI나 짧은 행동 유도 문구(예: "지금 3.8% 금리 받기")에 최적화되어 있습니다.',
      },
      {
        id: 'bento-tall',
        label: '우측 세로 확장 셀',
        role: '리스트 또는 타임라인 피드',
        cssRule: 'grid-row: span 2 / span 2;',
        uxTip: '세로 공간이 넉넉하므로 최근 알림, 단계별 체크리스트 같은 수직 콘텐츠에 적합합니다.',
      },
      {
        id: 'bento-sub',
        label: '하단 보조 2열 셀',
        role: '부가 지표 및 퀵 액션',
        cssRule: 'display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;',
        uxTip: '동일 비율의 두 카드로 짝을 이뤄 하단 레이아웃의 안정감을 잡아줍니다.',
      },
    ],
    codeReact: `import React from 'react';

export default function BentoGrid() {
  return (
    <section className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[160px]">
        {/* 좌상단 와이드 메인 셀 (2x1) */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#E8F3FF] p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#3182F6]">AI 자산 리포트</span>
            <span className="text-xs font-medium text-[#4E5968]">실시간 동기화</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#191F28]">이번 달 지출을 18% 줄였어요</h2>
            <p className="mt-1 text-sm text-[#4E5968]">고정 구독료 3건이 자동으로 정리되어 매월 42,000원을 절약 중입니다.</p>
          </div>
        </div>

        {/* 우상단 포인트 블루 셀 (1x1) */}
        <div className="flex flex-col justify-between rounded-3xl bg-[#3182F6] p-6 text-white">
          <span className="text-xs font-semibold text-white/80">오늘의 적금 금리</span>
          <div>
            <p className="text-3xl font-extrabold tracking-tight">연 4.2%</p>
            <p className="mt-1 text-xs text-white/85">우대 조건 없이 바로 적용</p>
          </div>
        </div>

        {/* 좌하단 보조 셀 1 (1x1) */}
        <div className="flex flex-col justify-between rounded-3xl bg-white p-6 ring-1 ring-black/[0.04]">
          <span className="text-xs font-semibold text-[#8B95A1]">신용점수</span>
          <div>
            <p className="text-2xl font-bold text-[#191F28]">945점</p>
            <p className="mt-1 text-xs font-medium text-[#3182F6]">상위 4% 유지 중</p>
          </div>
        </div>

        {/* 중앙 하단 보조 셀 2 (1x1) */}
        <div className="flex flex-col justify-between rounded-3xl bg-white p-6 ring-1 ring-black/[0.04]">
          <span className="text-xs font-semibold text-[#8B95A1]">카드 캐시백</span>
          <div>
            <p className="text-2xl font-bold text-[#191F28]">24,800원</p>
            <p className="mt-1 text-xs text-[#6B7684]">이번 주 자동 입금 예정</p>
          </div>
        </div>

        {/* 우측 세로 확장 셀 (1x2 -> 모바일에서는 자동 높이) */}
        <div className="flex flex-col justify-between rounded-3xl bg-white p-6 ring-1 ring-black/[0.04] md:col-start-3 md:row-start-2 md:row-span-2">
          <div>
            <span className="text-xs font-semibold text-[#8B95A1]">자동 저축 내역</span>
            <h3 className="mt-1 text-base font-bold text-[#191F28]">최근 활동</h3>
          </div>
          <ul className="my-4 space-y-3 text-sm">
            <li className="flex items-center justify-between">
              <span className="text-[#4E5968]">잔돈 모으기</span>
              <span className="font-semibold text-[#3182F6]">+1,400원</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#4E5968]">주간 챌린지</span>
              <span className="font-semibold text-[#3182F6]">+30,000원</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-[#4E5968]">이자 지급</span>
              <span className="font-semibold text-[#191F28]">+8,920원</span>
            </li>
          </ul>
          <button
            type="button"
            className="w-full rounded-xl bg-[#F2F4F6] py-2.5 text-xs font-semibold text-[#333D4B] transition hover:bg-[#E5E8EB]"
          >
            전체 내역 보기
          </button>
        </div>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>벤토 그리드 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .bento-grid {
      max-width: 1024px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-auto-rows: 165px; gap: 16px;
    }
    .bento-card {
      background: #FFFFFF; border-radius: 24px; padding: 24px;
      display: flex; flex-direction: column; justify-content: space-between;
      border: 1px solid rgba(0,0,0,0.04);
    }
    .bento-wide { grid-column: span 2; background: #E8F3FF; }
    .bento-accent { background: #3182F6; color: #FFFFFF; }
    .bento-tall { grid-column: 3; grid-row: 2 / span 2; }
    .tag { display: inline-block; background: #FFFFFF; color: #3182F6; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 999px; }
    .muted { font-size: 12px; color: #8B95A1; font-weight: 600; }
    .kpi { font-size: 28px; font-weight: 800; letter-spacing: -0.02em; }
    .feed-list { list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 14px; margin: 12px 0; }
    .feed-list li { display: flex; justify-content: space-between; }
    .plus { color: #3182F6; font-weight: 700; }
    @media (max-width: 768px) {
      .bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
      .bento-wide, .bento-tall { grid-column: auto; grid-row: auto; }
    }
  </style>
</head>
<body>
  <section class="bento-grid">
    <article class="bento-card bento-wide">
      <div><span class="tag">AI 자산 리포트</span></div>
      <div>
        <h2 style="font-size:20px; margin-bottom:6px;">이번 달 지출을 18% 줄였어요</h2>
        <p style="font-size:14px; color:#4E5968;">고정 구독료 3건이 자동으로 정리되어 매월 42,000원을 절약 중입니다.</p>
      </div>
    </article>
    <article class="bento-card bento-accent">
      <span style="font-size:12px; opacity:0.85; font-weight:600;">오늘의 적금 금리</span>
      <div>
        <p class="kpi">연 4.2%</p>
        <p style="font-size:12px; opacity:0.85; margin-top:4px;">우대 조건 없이 바로 적용</p>
      </div>
    </article>
    <article class="bento-card">
      <span class="muted">신용점수</span>
      <div><p class="kpi">945점</p><p style="font-size:12px; color:#3182F6; margin-top:4px;">상위 4% 유지 중</p></div>
    </article>
    <article class="bento-card">
      <span class="muted">카드 캐시백</span>
      <div><p class="kpi">24,800원</p><p style="font-size:12px; color:#6B7684; margin-top:4px;">이번 주 입금 예정</p></div>
    </article>
    <article class="bento-card bento-tall">
      <div><span class="muted">자동 저축 내역</span><h3 style="margin-top:4px; font-size:16px;">최근 활동</h3></div>
      <ul class="feed-list">
        <li><span>잔돈 모으기</span><span class="plus">+1,400원</span></li>
        <li><span>주간 챌린지</span><span class="plus">+30,000원</span></li>
        <li><span>이자 지급</span><strong>+8,920원</strong></li>
      </ul>
      <button type="button" style="border:none; background:#F2F4F6; padding:10px; border-radius:12px; font-weight:600; cursor:pointer;">전체 내역 보기</button>
    </article>
  </section>
</body>
</html>`,
  },
  {
    id: 'split',
    number: '03',
    titleKo: '스플릿',
    titleEn: 'Split screen',
    category: '랜딩 · 전환',
    summary: '화면을 좌우 50:50으로 이분할해 브랜드 비주얼(좌)과 로그인·온보딩·비교 액션(우)을 대칭 배치하는 패턴입니다.',
    cssTech: 'CSS Grid (1fr 1fr)',
    uxGuide: {
      whenToUse: [
        '로그인 / 회원가입 / 온보딩 화면에서 좌측에 브랜드 아이덴티티를, 우측에 입력 폼을 배치할 때',
        '두 가지 상반된 옵션(개인 vs 기업, 전 vs 후)이나 제품 이미지와 상세 설명을 나란히 보여줄 때',
      ],
      keyPrinciples: [
        '좌측 패널은 단색(#3182F6) 또는 풀사이즈 비주얼로 브랜드 인상을 전달하고 텍스트를 최소화합니다.',
        '우측 패널은 충분한 여백(Padding)과 명확한 입력 폼 또는 단일 CTA 버튼을 배치해 집중도를 높입니다.',
        '양쪽 패널의 수직 중앙 정렬(items-center / justify-center)로 시각적 균형을 맞춥니다.',
      ],
      responsiveTip: '모바일에서는 1열(grid-cols-1)로 전환하며, 좌측 브랜드 패널을 상단 컴팩트 배너로 축소해 폼이 바로 보이게 합니다.',
      caution: '좌우 모두에 복잡한 텍스트와 버튼을 넣으면 시선이 충돌하므로 반드시 한쪽은 비주얼/요약, 반대쪽은 액션으로 역할을 분리하세요.',
    },
    zones: [
      {
        id: 'split-left',
        label: '좌측 브랜드 비주얼 패널',
        role: '아이덴티티 및 감성 전달 영역',
        cssRule: 'background: #3182F6; display: flex; flex-direction: column; justify-content: center; padding: 40px;',
        uxTip: '고대비 화이트 심볼과 짧은 슬로건 1줄만 배치해 우측 액션 영역을 방해하지 않도록 합니다.',
      },
      {
        id: 'split-right',
        label: '우측 액션 · 콘텐츠 패널',
        role: '로그인 폼 또는 상세 설명 + CTA',
        cssRule: 'background: #FFFFFF; display: flex; flex-direction: column; justify-content: center; padding: 40px;',
        uxTip: '폼 너비를 max-width: 360px 수준으로 제한하면 시선 이동 거리가 짧아져 입력 완료율이 올라갑니다.',
      },
    ],
    codeReact: `import React, { useState } from 'react';

export default function SplitScreen() {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.05] md:min-h-[480px] md:grid-cols-2">
        {/* 좌측 브랜드 패널 */}
        <div className="flex flex-col items-center justify-center bg-[#3182F6] px-8 py-12 text-center text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-black text-[#3182F6] shadow-md">
            T
          </div>
          <h2 className="mt-6 text-2xl font-bold tracking-tight">워크스페이스에 오신 걸 환영해요</h2>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85">
            팀원들과 실시간으로 디자인 시스템과 레이아웃 토큰을 동기화하세요.
          </p>
        </div>

        {/* 우측 액션/로그인 패널 */}
        <div className="flex flex-col justify-center bg-white px-8 py-12 sm:px-12">
          <div className="mx-auto w-full max-w-sm">
            <span className="text-xs font-bold text-[#3182F6]">10초 만에 시작하기</span>
            <h1 className="mt-1.5 text-2xl font-bold text-[#191F28]">계정 로그인</h1>
            <p className="mt-1.5 text-sm text-[#6B7684]">업무용 이메일을 입력하면 인증 링크를 보내드려요.</p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 space-y-4"
            >
              <div>
                <label htmlFor="split-email" className="block text-xs font-semibold text-[#333D4B]">
                  이메일 주소
                </label>
                <input
                  id="split-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.co.kr"
                  className="mt-1.5 w-full rounded-xl border border-[#E5E8EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#191F28] outline-none transition focus:border-[#3182F6] focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#191F28] py-3.5 text-sm font-semibold text-white transition hover:bg-[#333D4B]"
              >
                인증 메일 받기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>스플릿 스크린 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .split-container {
      max-width: 1000px; min-height: 480px; margin: 0 auto;
      display: grid; grid-template-columns: 1fr 1fr;
      border-radius: 24px; overflow: hidden; background: #FFFFFF;
      box-shadow: 0 8px 30px rgba(0,0,0,0.04);
    }
    .split-left {
      background: #3182F6; color: #FFFFFF; padding: 48px 32px;
      display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
    }
    .brand-dot {
      width: 64px; height: 64px; border-radius: 50%; background: #FFFFFF; color: #3182F6;
      display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 900;
    }
    .split-right {
      padding: 48px 40px; display: flex; flex-direction: column; justify-content: center;
    }
    .form-box { width: 100%; max-width: 340px; margin: 0 auto; }
    .input-field {
      width: 100%; padding: 12px 14px; margin-top: 8px; border-radius: 12px;
      border: 1px solid #E5E8EB; background: #F9FAFB; font-size: 14px;
    }
    .btn-dark {
      width: 100%; margin-top: 16px; padding: 14px; border: none; border-radius: 12px;
      background: #191F28; color: #FFFFFF; font-size: 14px; font-weight: 600; cursor: pointer;
    }
    @media (max-width: 768px) {
      .split-container { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <section class="split-container">
    <div class="split-left">
      <div class="brand-dot">T</div>
      <h2 style="margin-top: 20px; font-size: 22px;">워크스페이스에 오신 걸 환영해요</h2>
      <p style="margin-top: 8px; font-size: 14px; opacity: 0.85; max-width: 260px; line-height: 1.5;">
        팀원들과 실시간으로 디자인 시스템과 레이아웃 토큰을 동기화하세요.
      </p>
    </div>
    <div class="split-right">
      <div class="form-box">
        <span style="font-size: 12px; font-weight: 700; color: #3182F6;">10초 만에 시작하기</span>
        <h1 style="margin-top: 6px; font-size: 24px;">계정 로그인</h1>
        <p style="margin-top: 6px; font-size: 14px; color: #6B7684;">업무용 이메일을 입력하면 인증 링크를 보내드려요.</p>
        <form onsubmit="event.preventDefault(); alert('인증 메일이 발송되었습니다.');" style="margin-top: 24px;">
          <label style="font-size: 12px; font-weight: 600; color: #333D4B;">이메일 주소</label>
          <input class="input-field" type="email" placeholder="name@company.co.kr" required />
          <button class="btn-dark" type="submit">인증 메일 받기</button>
        </form>
      </div>
    </div>
  </section>
</body>
</html>`,
  },
  {
    id: 'card-grid',
    number: '04',
    titleKo: '카드 그리드',
    titleEn: 'Card grid',
    category: '콘텐츠 · 탐색',
    summary: '동일한 규격의 카드를 균일한 격자(Grid)로 반복 배치해 상품, 템플릿, 강의, 포트폴리오를 빠르게 탐색하게 합니다.',
    cssTech: 'CSS Grid (auto-fill / repeat(3, 1fr))',
    uxGuide: {
      whenToUse: [
        '이커머스 상품 목록, SaaS 템플릿 갤러리, 강의 리스트처럼 동등한 위계의 항목들을 탐색할 때',
        '사용자가 카드들을 상호 비교하며 하나를 선택(활성 보더 표시)해야 하는 화면',
      ],
      keyPrinciples: [
        '모든 카드의 내부 정보 구조(썸네일 → 카테고리 → 제목 → 메타정보) 순서를 동일하게 통일합니다.',
        '선택되거나 추천되는 카드 1개에 #3182F6 보더/배지를 적용해 탐색 기준점을 제시합니다.',
        '카드 내부 정보는 3~4개 요소 이하로 제한해 스캔 속도를 높입니다.',
      ],
      responsiveTip: 'repeat(auto-fill, minmax(240px, 1fr))을 사용하면 별도 미디어쿼리 없이도 3열 → 2열 → 1열로 자연스럽게 반응합니다.',
      caution: '카드마다 제목 줄 수가 달라 높이가 어긋나지 않도록 line-clamp로 말줄임을 처리하고 flex-1로 하단 정렬을 맞춥니다.',
    },
    zones: [
      {
        id: 'card-grid-container',
        label: '균일 격자 컨테이너',
        role: '반응형 다열 카드 배치',
        cssRule: 'display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;',
        uxTip: 'gap을 16px~20px로 유지해 카드 경계가 또렷하면서도 답답하지 않게 구성합니다.',
      },
      {
        id: 'card-grid-active',
        label: '선택(Active) 하이라이트 카드',
        role: '현재 선택 또는 추천 항목 강조',
        cssRule: 'border: 2px solid #3182F6; box-shadow: 0 8px 24px rgba(49, 130, 246, 0.12);',
        uxTip: '호버 시 미세한 상승(-translate-y-0.5)과 클릭 시 명확한 2px 블루 링으로 선택 피드백을 제공합니다.',
      },
    ],
    codeReact: `import React, { useState } from 'react';

interface PlanCard {
  id: string;
  category: string;
  title: string;
  price: string;
  recommended?: boolean;
}

const ITEMS: PlanCard[] = [
  { id: 'c1', category: '금융', title: '매일 이자 통장', price: '연 3.5%' },
  { id: 'c2', category: '투자', title: '주식 모으기 자동화', price: '수수료 무료' },
  { id: 'c3', category: '인기', title: '올인원 체크카드', price: '최대 5% 적립', recommended: true },
  { id: 'c4', category: '보험', title: '미니 여행자 보험', price: '하루 900원' },
  { id: 'c5', category: '대출', title: '비상금 한도 조회', price: '1분 완료' },
  { id: 'c6', category: '혜택', title: '브랜드 캐시백 쿠폰', price: '매주 지급' },
];

export default function CardGrid() {
  const [selectedId, setSelectedId] = useState('c3');

  return (
    <section className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={\`group flex flex-col rounded-2xl bg-white p-4 text-left transition hover:-translate-y-0.5 \${
                  isSelected
                    ? 'ring-2 ring-[#3182F6] shadow-md shadow-[#3182F6]/10'
                    : 'ring-1 ring-black/[0.05] hover:shadow-sm'
                }\`}
              >
                <div
                  className={\`flex h-24 w-full items-center justify-between rounded-xl p-3 \${
                    item.recommended ? 'bg-[#E8F3FF]' : 'bg-[#F2F4F6]'
                  }\`}
                >
                  <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-[#3182F6]">
                    {item.category}
                  </span>
                  {item.recommended && (
                    <span className="rounded-full bg-[#3182F6] px-2 py-0.5 text-[10px] font-bold text-white">
                      추천
                    </span>
                  )}
                </div>
                <h3 className="mt-3.5 text-base font-bold text-[#191F28]">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#6B7684]">{item.price}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>카드 그리드 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .card-grid {
      max-width: 1000px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px;
    }
    .card-item {
      background: #FFFFFF; border-radius: 18px; padding: 16px; cursor: pointer;
      border: 1.5px solid rgba(0,0,0,0.05); transition: transform 0.15s, border-color 0.15s;
    }
    .card-item:hover { transform: translateY(-2px); }
    .card-item.active { border-color: #3182F6; box-shadow: 0 8px 20px rgba(49, 130, 246, 0.12); }
    .card-thumb { height: 88px; border-radius: 12px; background: #F2F4F6; padding: 12px; display: flex; justify-content: space-between; align-items: flex-start; }
    .card-item.active .card-thumb { background: #E8F3FF; }
    .badge { background: #FFFFFF; color: #3182F6; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; }
    .card-title { margin-top: 14px; font-size: 16px; font-weight: 700; }
    .card-sub { margin-top: 4px; font-size: 14px; color: #6B7684; }
  </style>
</head>
<body>
  <section class="card-grid" id="grid">
    <article class="card-item" onclick="selectCard(this)"><div class="card-thumb"><span class="badge">금융</span></div><h3 class="card-title">매일 이자 통장</h3><p class="card-sub">연 3.5%</p></article>
    <article class="card-item" onclick="selectCard(this)"><div class="card-thumb"><span class="badge">투자</span></div><h3 class="card-title">주식 모으기 자동화</h3><p class="card-sub">수수료 무료</p></article>
    <article class="card-item active" onclick="selectCard(this)"><div class="card-thumb"><span class="badge">인기</span></div><h3 class="card-title">올인원 체크카드</h3><p class="card-sub">최대 5% 적립</p></article>
    <article class="card-item" onclick="selectCard(this)"><div class="card-thumb"><span class="badge">보험</span></div><h3 class="card-title">미니 여행자 보험</h3><p class="card-sub">하루 900원</p></article>
    <article class="card-item" onclick="selectCard(this)"><div class="card-thumb"><span class="badge">대출</span></div><h3 class="card-title">비상금 한도 조회</h3><p class="card-sub">1분 완료</p></article>
    <article class="card-item" onclick="selectCard(this)"><div class="card-thumb"><span class="badge">혜택</span></div><h3 class="card-title">브랜드 캐시백 쿠폰</h3><p class="card-sub">매주 지급</p></article>
  </section>
  <script>
    function selectCard(el) {
      document.querySelectorAll('.card-item').forEach(c => c.classList.remove('active'));
      el.classList.add('active');
    }
  </script>
</body>
</html>`,
  },
  {
    id: 'sidebar',
    number: '05',
    titleKo: '사이드바 레이아웃',
    titleEn: 'Sidebar layout',
    category: '앱 · 데이터',
    summary: '좌측 고정 내비게이션 사이드바와 우측 가변 콘텐츠 영역을 분리해 깊은 계층의 웹 앱/관리자 도구를 효율적으로 탐색합니다.',
    cssTech: 'Flex / Grid (240px 1fr)',
    uxGuide: {
      whenToUse: [
        'SaaS 워크스페이스, 백오피스 어드민, 문서 포털처럼 메뉴 이동이 잦은 웹 애플리케이션',
        '현재 위치(Active 메뉴)를 항상 인지시키면서 우측 넓은 작업 공간을 확보해야 할 때',
      ],
      keyPrinciples: [
        '사이드바 너비는 220px~260px로 고정하고, 우측 메인 영역만 flex-1 / 1fr로 유연하게 늘어나게 합니다.',
        '현재 활성 메뉴는 #3182F6 블루 필 배경으로 명확히 구분해 위치 감각을 제공합니다.',
        '다크 사이드바(#262C35) + 라이트 콘텐츠 조합은 작업 공간과 메뉴 영역의 경계를 직관적으로 나눕니다.',
      ],
      responsiveTip: '모바일에서는 사이드바를 상단 탭 바 또는 슬라이드 드로어(Drawer)로 숨겨 본문 폭을 100% 확보합니다.',
      caution: '사이드바 메뉴가 10개를 넘어가면 그룹 헤더를 나누고 접기/펼치기 기능을 제공해 스크롤 피로를 줄이세요.',
    },
    zones: [
      {
        id: 'sidebar-nav',
        label: '좌측 고정 내비게이션',
        role: '전역 메뉴 전환 영역',
        cssRule: 'width: 220px; flex-shrink: 0; background: #262C35;',
        uxTip: '고정 너비(shrink-0)를 지정해 화면 크기가 변해도 메뉴 텍스트가 줄바꿈되지 않게 유지합니다.',
      },
      {
        id: 'sidebar-content',
        label: '우측 가변 작업 영역',
        role: '선택된 메뉴의 본문 뷰포트',
        cssRule: 'flex: 1; min-width: 0; background: #FFFFFF; padding: 24px;',
        uxTip: 'min-width: 0을 반드시 추가해야 내부 테이블이나 코드 블록이 사이드바를 밀어내지 않습니다.',
      },
    ],
    codeReact: `import React, { useState } from 'react';

const MENUS = [
  { id: 'overview', label: '대시보드 홈', desc: '전체 서비스 지표와 오늘의 처리 현황을 확인합니다.' },
  { id: 'users', label: '회원 관리', desc: '신규 가입자 승인 및 권한 등급을 관리합니다.' },
  { id: 'settlement', label: '정산 내역', desc: '일별/월별 정산 금액과 입금 상태를 조회합니다.' },
  { id: 'settings', label: '시스템 설정', desc: '웹훅, API 키, 알림 채널을 구성합니다.' },
];

export default function SidebarLayout() {
  const [activeId, setActiveId] = useState('users');
  const current = MENUS.find((m) => m.id === activeId) ?? MENUS[0];

  return (
    <div className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.05] md:min-h-[420px] md:flex-row">
        {/* 좌측 고정 사이드바 */}
        <aside className="flex shrink-0 flex-row gap-1 overflow-x-auto bg-[#262C35] p-3 text-white md:w-56 md:flex-col md:p-4">
          <div className="hidden px-3 pb-3 text-xs font-bold tracking-wider text-white/50 md:block">
            WORKSPACE
          </div>
          {MENUS.map((menu) => {
            const active = menu.id === activeId;
            return (
              <button
                key={menu.id}
                type="button"
                onClick={() => setActiveId(menu.id)}
                className={\`shrink-0 rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition \${
                  active
                    ? 'bg-[#3182F6] text-white shadow-sm'
                    : 'text-[#B0B8C1] hover:bg-white/10 hover:text-white'
                }\`}
              >
                {menu.label}
              </button>
            );
          })}
        </aside>

        {/* 우측 메인 콘텐츠 */}
        <main className="min-w-0 flex-1 bg-white p-6 sm:p-8">
          <div className="border-b border-[#F2F4F6] pb-4">
            <span className="text-xs font-bold text-[#3182F6]">ADMIN CONSOLE</span>
            <h1 className="mt-1 text-xl font-bold text-[#191F28]">{current.label}</h1>
            <p className="mt-1 text-sm text-[#6B7684]">{current.desc}</p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#E8F3FF]/70 p-6">
            <p className="text-sm font-semibold text-[#1B64DA]">선택된 메뉴: {current.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4E5968]">
              좌측 내비게이션은 고정 폭을 유지하고, 우측 콘텐츠 패널만 유연하게 확장되어
              데이터 테이블이나 차트를 안정적으로 배치할 수 있습니다.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>사이드바 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .app-shell {
      max-width: 1000px; min-height: 420px; margin: 0 auto;
      display: flex; border-radius: 24px; overflow: hidden; background: #FFFFFF;
      box-shadow: 0 8px 30px rgba(0,0,0,0.04);
    }
    .sidebar { width: 220px; flex-shrink: 0; background: #262C35; padding: 16px; display: flex; flex-direction: column; gap: 6px; }
    .nav-btn {
      border: none; background: transparent; color: #B0B8C1; padding: 10px 14px; border-radius: 10px;
      text-align: left; font-size: 14px; font-weight: 500; cursor: pointer;
    }
    .nav-btn:hover { background: rgba(255,255,255,0.08); color: #FFFFFF; }
    .nav-btn.active { background: #3182F6; color: #FFFFFF; font-weight: 600; }
    .main-area { flex: 1; min-width: 0; padding: 28px; }
    .panel { margin-top: 20px; background: #E8F3FF; border-radius: 16px; padding: 24px; color: #1B64DA; }
    @media (max-width: 768px) {
      .app-shell { flex-direction: column; }
      .sidebar { width: 100%; flex-direction: row; overflow-x: auto; }
    }
  </style>
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar">
      <button class="nav-btn" onclick="switchMenu(this, '대시보드 홈')">대시보드 홈</button>
      <button class="nav-btn active" onclick="switchMenu(this, '회원 관리')">회원 관리</button>
      <button class="nav-btn" onclick="switchMenu(this, '정산 내역')">정산 내역</button>
      <button class="nav-btn" onclick="switchMenu(this, '시스템 설정')">시스템 설정</button>
    </aside>
    <main class="main-area">
      <span style="font-size:12px; font-weight:700; color:#3182F6;">ADMIN CONSOLE</span>
      <h1 id="page-title" style="margin-top:4px; font-size:22px;">회원 관리</h1>
      <div class="panel">
        <strong id="panel-desc">현재 활성 섹션: 회원 관리</strong>
        <p style="margin-top:8px; font-size:14px; color:#4E5968;">고정 폭 사이드바와 가변 폭 본문의 2단 구조입니다.</p>
      </div>
    </main>
  </div>
  <script>
    function switchMenu(btn, title) {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('page-title').textContent = title;
      document.getElementById('panel-desc').textContent = '현재 활성 섹션: ' + title;
    }
  </script>
</body>
</html>`,
  },
  {
    id: 'magazine',
    number: '06',
    titleKo: '매거진',
    titleEn: 'Magazine layout',
    category: '콘텐츠 · 탐색',
    summary: '상단 헤드라인 바 아래로 대형 피처드 아티클(좌)과 서브 기사 리스트(우)를 비대칭 배치하는 에디토리얼 레이아웃입니다.',
    cssTech: 'CSS Grid (12-col / 7fr 5fr)',
    uxGuide: {
      whenToUse: [
        '뉴스룸, 기업 테크 블로그, 브랜드 매거진처럼 기사 중요도(커버 스토리 vs 단신)에 명확한 차등을 둘 때',
        '텍스트와 이미지를 조화롭게 배치해 읽는 즐거움을 주는 콘텐츠 허브',
      ],
      keyPrinciples: [
        '상단 풀-와이드 제호/카테고리 바 아래에 좌측 60% 피처드 이미지, 우측 40% 기사 목록을 배치합니다.',
        '우측 서브 기사들은 제목과 짧은 요약, 썸네일 아이콘만으로 밀도 있게 구성해 시선 대비를 줍니다.',
        '타이포그래피 크기 차이(커버 제목 24px+ vs 서브 제목 15px)로 읽기 순서를 자연스럽게 유도합니다.',
      ],
      responsiveTip: '모바일에서는 피처드 아티클을 맨 위에 전체 폭으로 배치하고 서브 기사들을 아래로 수직 적층합니다.',
      caution: '기사 썸네일 비율(16:9 또는 4:3)을 고정(aspect-ratio)하지 않으면 콘텐츠 로딩 시 레이아웃 흔들림(CLS)이 발생합니다.',
    },
    zones: [
      {
        id: 'magazine-masthead',
        label: '상단 매거진 헤더 바',
        role: '매체 타이틀 및 섹션 구분',
        cssRule: 'border-bottom: 2px solid #191F28; padding-bottom: 12px;',
        uxTip: '굵은 상단 바 또는 구분선으로 에디토리얼한 신문/잡지 인상을 부여합니다.',
      },
      {
        id: 'magazine-featured',
        label: '좌측 커버스토리 영역',
        role: '최우선 대표 아티클',
        cssRule: 'grid-column: span 7; aspect-ratio: 4 / 3;',
        uxTip: '강렬한 대표 비주얼과 명확한 헤드라인으로 첫 번째 클릭을 유도합니다.',
      },
      {
        id: 'magazine-list',
        label: '우측 서브 기사 큐레이션',
        role: '보조 아티클 빠른 탐색',
        cssRule: 'grid-column: span 5; display: flex; flex-direction: column; gap: 14px;',
        uxTip: '구분선(divide-y)으로 각 기사를 깔끔히 분리해 목록 가독성을 높입니다.',
      },
    ],
    codeReact: `import React from 'react';

const SUB_ARTICLES = [
  { tag: '디자인', title: '토스 스타일 컬러 시스템이 신뢰를 만드는 방식', readTime: '4분 읽기' },
  { tag: '엔지니어링', title: 'CSS Grid만으로 구현하는 0ms 반응형 아키텍처', readTime: '6분 읽기' },
  { tag: '프로덕트', title: '사용자의 첫 3초를 사로잡는 마이크로 카피 원칙', readTime: '3분 읽기' },
];

export default function MagazineLayout() {
  return (
    <section className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8">
        {/* 상단 매거진 마스트헤드 */}
        <header className="flex items-center justify-between border-b-2 border-[#191F28] pb-4">
          <h1 className="text-xl font-black tracking-tight text-[#191F28] sm:text-2xl">DESIGN JOURNAL</h1>
          <span className="text-xs font-semibold text-[#6B7684]">VOL. 24 · 프로덕트 인사이트</span>
        </header>

        {/* 비대칭 에디토리얼 그리드 (7 : 5) */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* 좌측 대형 피처드 아티클 */}
          <article className="lg:col-span-7">
            <div className="flex aspect-[16/10] w-full flex-col justify-between rounded-2xl bg-[#3182F6] p-6 text-white">
              <span className="w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">COVER STORY</span>
              <div>
                <h2 className="text-xl font-bold leading-snug sm:text-2xl">
                  좋은 화면 배치는 설명하지 않아도
                  <br />
                  사용자가 먼저 이해합니다
                </h2>
                <p className="mt-2 text-xs text-white/80">에디터 팀 · 2026. 11</p>
              </div>
            </div>
          </article>

          {/* 우측 서브 기사 큐레이션 */}
          <div className="flex flex-col justify-between divide-y divide-[#F2F4F6] lg:col-span-5">
            {SUB_ARTICLES.map((article) => (
              <article key={article.title} className="py-3.5 first:pt-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3182F6]">{article.tag}</span>
                  <span className="text-[11px] text-[#8B95A1]">{article.readTime}</span>
                </div>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-[#191F28] hover:text-[#3182F6]">
                  {article.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>매거진 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .mag-container { max-width: 1000px; margin: 0 auto; background: #FFFFFF; border-radius: 24px; padding: 32px; }
    .mag-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #191F28; padding-bottom: 14px; }
    .mag-grid { margin-top: 24px; display: grid; grid-template-columns: 7fr 5fr; gap: 24px; }
    .cover-card {
      aspect-ratio: 16 / 10; border-radius: 18px; background: #3182F6; color: #FFFFFF; padding: 24px;
      display: flex; flex-direction: column; justify-content: space-between;
    }
    .sub-list { display: flex; flex-direction: column; justify-content: space-between; }
    .sub-item { padding: 14px 0; border-bottom: 1px solid #F2F4F6; }
    .sub-item:first-child { padding-top: 0; }
    .sub-item:last-child { border-bottom: none; padding-bottom: 0; }
    @media (max-width: 768px) {
      .mag-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <section class="mag-container">
    <header class="mag-header">
      <h1 style="font-size:22px; font-weight:900;">DESIGN JOURNAL</h1>
      <span style="font-size:12px; color:#6B7684;">VOL. 24 · 프로덕트 인사이트</span>
    </header>
    <div class="mag-grid">
      <article class="cover-card">
        <span style="background:rgba(255,255,255,0.2); width:fit-content; padding:4px 12px; border-radius:999px; font-size:12px; font-weight:600;">COVER STORY</span>
        <div>
          <h2 style="font-size:22px; line-height:1.35;">좋은 화면 배치는 설명하지 않아도 사용자가 먼저 이해합니다</h2>
          <p style="margin-top:8px; font-size:12px; opacity:0.85;">에디터 팀 · 2026. 11</p>
        </div>
      </article>
      <div class="sub-list">
        <article class="sub-item">
          <span style="font-size:12px; font-weight:700; color:#3182F6;">디자인</span>
          <h3 style="margin-top:6px; font-size:16px;">토스 스타일 컬러 시스템이 신뢰를 만드는 방식</h3>
        </article>
        <article class="sub-item">
          <span style="font-size:12px; font-weight:700; color:#3182F6;">엔지니어링</span>
          <h3 style="margin-top:6px; font-size:16px;">CSS Grid만으로 구현하는 0ms 반응형 아키텍처</h3>
        </article>
        <article class="sub-item">
          <span style="font-size:12px; font-weight:700; color:#3182F6;">프로덕트</span>
          <h3 style="margin-top:6px; font-size:16px;">사용자의 첫 3초를 사로잡는 마이크로 카피 원칙</h3>
        </article>
      </div>
    </div>
  </section>
</body>
</html>`,
  },
  {
    id: 'dashboard',
    number: '07',
    titleKo: '대시보드',
    titleEn: 'Dashboard',
    category: '앱 · 데이터',
    summary: '상단에 핵심 KPI 요약 카드를 배치하고 하단에 시계열·비교 차트 영역을 배치하는 데이터 의사결정 화면입니다.',
    cssTech: 'Grid (Top KPI Row + Bottom Chart)',
    uxGuide: {
      whenToUse: [
        '매출, 주문 건수, 결제 전환율 등 핵심 지표를 5초 내에 파악해야 하는 운영 대시보드',
        '상단 요약 숫자(What)와 하단 추이 차트(Why/Trend)를 한 화면에서 연결해 보여줄 때',
      ],
      keyPrinciples: [
        'KPI 카드의 숫자에는 tabular-nums(고정폭 숫자)를 적용해 실시간 업데이트 시 글자 떨림을 방지합니다.',
        '차트에서 가장 중요한 현재/목표 막대만 #3182F6으로 강조하고 나머지는 중립 그레이(#E5E8EB)로 눌러줍니다.',
        '레이블은 작게(12px #6B7684), 핵심 숫자는 크게(24~32px Bold #191F28) 대비를 줍니다.',
      ],
      responsiveTip: '상단 KPI 카드 그리드는 모바일에서 2열을 유지하거나 1열로 확장해 숫자가 잘리지 않게 합니다.',
      caution: '한 화면에 차트와 KPI를 6개 이상 밀어 넣으면 의사결정 속도가 오히려 떨어집니다.',
    },
    zones: [
      {
        id: 'dashboard-kpi',
        label: '상단 KPI 요약 카드',
        role: '핵심 성과 지표 즉시 확인',
        cssRule: 'display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;',
        uxTip: '전일 대비 증감률 배지를 함께 표시하면 숫자의 맥락을 즉시 파악할 수 있습니다.',
      },
      {
        id: 'dashboard-chart',
        label: '하단 바 차트 위젯',
        role: '기간별 추이 및 피크 비교',
        cssRule: 'display: flex; align-items: flex-end; gap: 14px; height: 180px;',
        uxTip: '각 막대 클릭/호버 시 상세 수치를 툴팁이나 상단 요약에 반영하면 탐색성이 높아집니다.',
      },
    ],
    codeReact: `import React, { useState } from 'react';

const DAILY_DATA = [
  { day: '월', orders: 640 },
  { day: '화', orders: 820 },
  { day: '수', orders: 760 },
  { day: '목', orders: 1247 },
  { day: '금', orders: 930 },
];

export default function Dashboard() {
  const [activeDay, setActiveDay] = useState('목');
  const maxOrders = 1350;

  return (
    <section className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto max-w-4xl space-y-4">
        {/* 상단 KPI 2열 카드 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-xs ring-1 ring-black/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6B7684]">주문</span>
              <span className="rounded-full bg-[#E8F3FF] px-2.5 py-0.5 text-xs font-bold text-[#3182F6]">
                +14.2%
              </span>
            </div>
            <p className="mt-2 text-3xl font-extrabold tabular-nums text-[#191F28]">1,247</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xs ring-1 ring-black/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6B7684]">결제율</span>
              <span className="rounded-full bg-[#E8F3FF] px-2.5 py-0.5 text-xs font-bold text-[#3182F6]">
                목표 달성
              </span>
            </div>
            <p className="mt-2 text-3xl font-extrabold tabular-nums text-[#191F28]">86%</p>
          </div>
        </div>

        {/* 하단 바 차트 카드 */}
        <div className="rounded-2xl bg-white p-6 shadow-xs ring-1 ring-black/[0.04]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#191F28]">주간 주문 추이</h2>
              <p className="text-xs text-[#8B95A1]">막대를 클릭하면 요일별 상세 건수를 확인할 수 있어요</p>
            </div>
            <span className="text-sm font-bold text-[#3182F6]">
              {activeDay}요일 · {DAILY_DATA.find((d) => d.day === activeDay)?.orders.toLocaleString()}건
            </span>
          </div>

          <div className="mt-6 flex h-44 items-end justify-between gap-3 rounded-xl bg-[#F9FAFB] px-6 pb-4 pt-8">
            {DAILY_DATA.map((item) => {
              const isSelected = item.day === activeDay;
              const heightPct = Math.round((item.orders / maxOrders) * 100);
              return (
                <button
                  key={item.day}
                  type="button"
                  onClick={() => setActiveDay(item.day)}
                  className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <div
                    style={{ height: \`\${heightPct}%\` }}
                    className={\`w-full max-w-[44px] rounded-t-xl transition-all \${
                      isSelected ? 'bg-[#3182F6]' : 'bg-[#DDE3EA] group-hover:bg-[#B0C4DE]'
                    }\`}
                  />
                  <span className={\`text-xs font-semibold \${isSelected ? 'text-[#3182F6]' : 'text-[#8B95A1]'}\`}>
                    {item.day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>대시보드 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .dash-wrap { max-width: 880px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
    .kpi-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
    .card { background: #FFFFFF; border-radius: 20px; padding: 24px; border: 1px solid rgba(0,0,0,0.04); }
    .kpi-val { margin-top: 8px; font-size: 32px; font-weight: 800; font-variant-numeric: tabular-nums; }
    .badge { background: #E8F3FF; color: #3182F6; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 999px; }
    .chart-box {
      margin-top: 20px; height: 180px; background: #F9FAFB; border-radius: 14px;
      padding: 24px 20px 14px; display: flex; align-items: flex-end; gap: 14px;
    }
    .bar-col { flex: 1; height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 8px; cursor: pointer; }
    .bar { width: 100%; max-width: 44px; border-radius: 10px 10px 0 0; background: #DDE3EA; transition: background 0.15s; }
    .bar-col.active .bar { background: #3182F6; }
    .bar-col.active span { color: #3182F6; font-weight: 700; }
    @media (max-width: 600px) { .kpi-grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <section class="dash-wrap">
    <div class="kpi-grid">
      <div class="card">
        <div style="display:flex; justify-content:space-between;"><span style="font-size:12px; color:#6B7684; font-weight:600;">주문</span><span class="badge">+14.2%</span></div>
        <p class="kpi-val">1,247</p>
      </div>
      <div class="card">
        <div style="display:flex; justify-content:space-between;"><span style="font-size:12px; color:#6B7684; font-weight:600;">결제율</span><span class="badge">목표 달성</span></div>
        <p class="kpi-val">86%</p>
      </div>
    </div>
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h2 style="font-size:16px;">주간 주문 추이</h2>
        <span id="chart-readout" style="font-size:14px; font-weight:700; color:#3182F6;">목요일 · 1,247건</span>
      </div>
      <div class="chart-box">
        <div class="bar-col" onclick="pickBar(this, '월', 640)"><div class="bar" style="height:48%"></div><span style="font-size:12px;">월</span></div>
        <div class="bar-col" onclick="pickBar(this, '화', 820)"><div class="bar" style="height:62%"></div><span style="font-size:12px;">화</span></div>
        <div class="bar-col" onclick="pickBar(this, '수', 760)"><div class="bar" style="height:57%"></div><span style="font-size:12px;">수</span></div>
        <div class="bar-col active" onclick="pickBar(this, '목', 1247)"><div class="bar" style="height:92%"></div><span style="font-size:12px;">목</span></div>
        <div class="bar-col" onclick="pickBar(this, '금', 930)"><div class="bar" style="height:70%"></div><span style="font-size:12px;">금</span></div>
      </div>
    </div>
  </section>
  <script>
    function pickBar(el, day, count) {
      document.querySelectorAll('.bar-col').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      document.getElementById('chart-readout').textContent = day + '요일 · ' + count.toLocaleString() + '건';
    }
  </script>
</body>
</html>`,
  },
  {
    id: 'z-pattern',
    number: '08',
    titleKo: 'Z 패턴',
    titleEn: 'Z-pattern',
    category: '랜딩 · 전환',
    summary: '사람의 시선이 좌상단 → 우상단 → 좌하단 → 우하단(Z자)으로 흐르는 자연스러운 안구 운동에 맞춰 핵심 요소를 배치합니다.',
    cssTech: 'Flex Between + Centered Hero + Bottom CTA',
    uxGuide: {
      whenToUse: [
        '텍스트 밀도가 낮고 명확한 한 가지 전환 목표(가입, 다운로드, 문의)를 가진 심플 랜딩 페이지',
        '사용자가 스크롤 없이 4개 거점(로고 → 상단 액션 → 핵심 메시지 → 최종 CTA)을 자연스럽게 훑게 할 때',
      ],
      keyPrinciples: [
        '1번(좌상단): 브랜드 로고 / 2번(우상단): 로그인 또는 보조 버튼으로 상단 수평선을 형성합니다.',
        '대각선 중앙: 시선이 이동하는 중심부에 가장 임팩트 있는 핵심 문장을 배치합니다.',
        '3번(좌하단): 신뢰 문구·보조 정보 / 4번(우하단): 최종 전환 CTA(#3182F6)로 Z자 흐름을 완결합니다.',
      ],
      responsiveTip: '모바일 폭에서는 대각선 거리가 줄어들어 자연스러운 수직 스캔(F/I 패턴)으로 전환되도록 여백만 조정하면 됩니다.',
      caution: '정보량이 많은 블로그나 복잡한 문서에 Z 패턴을 강제하면 오히려 시선이 산만해지므로 단순 랜딩에만 사용하세요.',
    },
    zones: [
      {
        id: 'z-top',
        label: '① 좌상단 로고 → ② 우상단 액션',
        role: 'Z 흐름의 시작 수평축',
        cssRule: 'display: flex; justify-content: space-between; align-items: center;',
        uxTip: '상단 네비게이션 항목을 1~2개로 최소화해야 시선이 우상단에서 대각선 중앙으로 막힘없이 내려옵니다.',
      },
      {
        id: 'z-center',
        label: '중앙 핵심 메시지 (대각선 축)',
        role: '서비스 핵심 가치 각인',
        cssRule: 'margin: auto 0; text-align: center;',
        uxTip: '짧고 강한 한 문장으로 시선 이동 도중 핵심 메시지를 전달합니다.',
      },
      {
        id: 'z-bottom',
        label: '③ 좌하단 신뢰 요소 → ④ 우하단 최종 CTA',
        role: 'Z 흐름의 종착점(전환)',
        cssRule: 'display: flex; justify-content: space-between; align-items: center;',
        uxTip: '우하단은 Z 시선의 마지막 종착지이므로 가장 눈에 띄는 #3182F6 필 버튼을 배치합니다.',
      },
    ],
    codeReact: `import React from 'react';

export default function ZPatternLayout() {
  return (
    <section className="w-full bg-[#F2F4F6] p-4 sm:p-8">
      <div className="mx-auto flex min-h-[420px] max-w-4xl flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-10">
        {/* ① 좌상단 로고 -> ② 우상단 보조 CTA */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-12 rounded-md bg-[#191F28]" />
            <span className="text-sm font-bold text-[#191F28]">PAYFLOW</span>
          </div>
          <button
            type="button"
            className="rounded-full bg-[#F2F4F6] px-4 py-2 text-xs font-semibold text-[#333D4B] transition hover:bg-[#E5E8EB]"
          >
            로그인
          </button>
        </header>

        {/* 대각선 중앙 핵심 메시지 */}
        <div className="my-12 text-center">
          <span className="text-xs font-bold tracking-wider text-[#3182F6]">Z-PATTERN LANDING</span>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-[#191F28] sm:text-3xl">
            단 한 번의 클릭으로 시작되는 팀 정산
          </h1>
          <p className="mx-auto mt-2.5 max-w-md text-sm text-[#6B7684]">
            시선의 흐름에 맞춘 간결한 배치로 방문자의 82%가 최종 버튼까지 자연스럽게 도달합니다.
          </p>
        </div>

        {/* ③ 좌하단 신뢰 문구 -> ④ 우하단 최종 전환 CTA */}
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F2F4F6] pt-6">
          <span className="text-xs font-medium text-[#8B95A1]">
            14,000+ 기업이 선택한 자동 정산 플랫폼
          </span>
          <button
            type="button"
            className="rounded-full bg-[#3182F6] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1B64DA]"
          >
            지금 도입 문의하기
          </button>
        </footer>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Z 패턴 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; background: #F2F4F6; color: #191F28; padding: 24px; }
    .z-card {
      max-width: 900px; min-height: 420px; margin: 0 auto; background: #FFFFFF;
      border-radius: 24px; padding: 36px; display: flex; flex-direction: column; justify-content: space-between;
    }
    .z-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
    .z-center { text-align: center; margin: 40px 0; }
    .btn-ghost { border: none; background: #F2F4F6; color: #333D4B; padding: 8px 18px; border-radius: 999px; font-size: 13px; font-weight: 600; cursor: pointer; }
    .btn-cta { border: none; background: #3182F6; color: #FFFFFF; padding: 12px 26px; border-radius: 999px; font-size: 14px; font-weight: 600; cursor: pointer; }
  </style>
</head>
<body>
  <section class="z-card">
    <header class="z-row">
      <strong style="font-size:16px;">PAYFLOW</strong>
      <button class="btn-ghost" type="button">로그인</button>
    </header>
    <div class="z-center">
      <span style="font-size:12px; font-weight:700; color:#3182F6;">Z-PATTERN LANDING</span>
      <h1 style="margin-top:8px; font-size:28px;">단 한 번의 클릭으로 시작되는 팀 정산</h1>
      <p style="margin-top:10px; font-size:14px; color:#6B7684;">시선의 자연스러운 Z자 흐름에 맞춘 고효율 전환 레이아웃입니다.</p>
    </div>
    <footer class="z-row" style="border-top:1px solid #F2F4F6; padding-top:20px;">
      <span style="font-size:12px; color:#8B95A1;">14,000+ 기업이 선택한 자동 정산 플랫폼</span>
      <button class="btn-cta" type="button">지금 도입 문의하기</button>
    </footer>
  </section>
</body>
</html>`,
  },
  {
    id: 'full-bleed',
    number: '09',
    titleKo: '풀블리드',
    titleEn: 'Full bleed',
    category: '랜딩 · 전환',
    summary: '좌우 여백이나 카드 테두리를 없애 화면 끝에서 끝(Edge-to-Edge)까지 꽉 채워 압도적인 몰입감을 전달합니다.',
    cssTech: 'Full-Width Edge-to-Edge Container',
    uxGuide: {
      whenToUse: [
        '브랜드 필름, 신제품 런칭 쇼케이스, 인터랙티브 스토리텔링처럼 화면 몰입도가 최우선일 때',
        '여백이 많은 콘텐츠 섹션 사이에서 리듬감을 환기시키는 풀스크린 브레이크 배너',
      ],
      keyPrinciples: [
        '컨테이너의 max-width와 좌우 패딩을 제거하고 100vw / w-full로 뷰포트 경계까지 확장합니다.',
        '배경 그라데이션이나 그래픽 오브젝트 위에 놓이는 텍스트는 4.5:1 이상의 명도 대비를 확보합니다.',
        '시각적 압도감을 주되 하단 인디케이터나 스크롤 유도를 통해 다음 콘텐츠 존재를 알립니다.',
      ],
      responsiveTip: '높이는 고정 px 대신 min-h-[420px] 또는 svh(Small Viewport Height) 단위를 써서 모바일 주소창 변화를 대응합니다.',
      caution: '본문 기사나 폼처럼 읽고 입력하는 구간까지 풀블리드로 채우면 시선 이동이 너무 길어져 가독성이 떨어집니다.',
    },
    zones: [
      {
        id: 'fullbleed-canvas',
        label: 'Edge-to-Edge 풀블리드 캔버스',
        role: '여백 없는 전체 폭 비주얼 무대',
        cssRule: 'width: 100%; margin: 0; border-radius: 0; overflow: hidden;',
        uxTip: '부모 컨테이너의 패딩을 뚫고 나갈 때는 w-screen 또는 전용 풀블리드 섹션으로 분리합니다.',
      },
      {
        id: 'fullbleed-overlay',
        label: '전경 타이포그래피 & 오브젝트',
        role: '몰입형 메시지 및 인터랙션',
        cssRule: 'position: relative; z-index: 10; color: #FFFFFF;',
        uxTip: '배경 도형이나 이미지가 밝은 부분과 겹칠 경우 은은한 그라데이션 스크림을 덧대어 글자를 선명하게 유지합니다.',
      },
    ],
    codeReact: `import React from 'react';

export default function FullBleedSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#3182F6] via-[#2272EB] to-[#1B64DA] text-white">
      {/* 장식용 배경 그래픽 오브젝트 */}
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute right-10 top-10 h-20 w-20 rounded-full bg-white/25 blur-[1px]" />

      {/* Edge-to-Edge 전경 콘텐츠 */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl flex-col justify-between px-6 py-14 sm:px-12 sm:py-20">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold backdrop-blur-xs">
            2026 NEXT GENERATION
          </span>
          <span className="text-xs font-medium text-white/75">EDGE-TO-EDGE EXPERIENCE</span>
        </div>

        <div className="my-10 max-w-2xl">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            경계 없는 화면이
            <br />
            더 깊은 몰입을 만듭니다
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
            뷰포트 끝에서 끝까지 이어지는 풀블리드 캔버스로 브랜드의 핵심 메시지를
            가장 강렬하게 전달하세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1B64DA] shadow-md transition hover:bg-[#F2F4F6]"
            >
              쇼케이스 경험하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    codeHtml: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>풀블리드 레이아웃</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif; }
    .full-bleed {
      position: relative; width: 100%; min-height: 440px; overflow: hidden; color: #FFFFFF;
      background: linear-gradient(135deg, #3182F6 0%, #1B64DA 100%);
      display: flex; align-items: center;
    }
    .orb-large { position: absolute; bottom: -90px; left: -60px; width: 280px; height: 280px; border-radius: 50%; background: rgba(255,255,255,0.12); }
    .orb-small { position: absolute; top: 44px; right: 56px; width: 72px; height: 72px; border-radius: 50%; background: rgba(255,255,255,0.28); }
    .inner { position: relative; z-index: 10; width: 100%; max-width: 1120px; margin: 0 auto; padding: 64px 32px; }
    .btn-white {
      margin-top: 28px; border: none; border-radius: 999px; background: #FFFFFF; color: #1B64DA;
      padding: 14px 28px; font-size: 14px; font-weight: 700; cursor: pointer;
    }
  </style>
</head>
<body>
  <section class="full-bleed">
    <div class="orb-large"></div>
    <div class="orb-small"></div>
    <div class="inner">
      <span style="display:inline-block; background:rgba(255,255,255,0.16); padding:6px 14px; border-radius:999px; font-size:12px; font-weight:600;">2026 NEXT GENERATION</span>
      <h1 style="margin-top:20px; font-size:clamp(28px, 5vw, 48px); font-weight:800; line-height:1.2;">경계 없는 화면이<br />더 깊은 몰입을 만듭니다</h1>
      <p style="margin-top:16px; max-width:520px; font-size:15px; line-height:1.6; opacity:0.88;">
        뷰포트 끝에서 끝까지 이어지는 풀블리드 캔버스로 브랜드의 핵심 메시지를 가장 강렬하게 전달하세요.
      </p>
      <button class="btn-white" type="button">쇼케이스 경험하기</button>
    </div>
  </section>
</body>
</html>`,
  },
];
