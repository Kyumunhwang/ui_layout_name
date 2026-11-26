import { useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  Code2,
  Eye,
  LayoutTemplate,
  Monitor,
  MousePointerClick,
  Smartphone,
  Tablet,
} from 'lucide-react';
import type { LayoutPattern, LayoutZoneInfo, PreviewMode, ViewportMode } from '../../types/layout';
import HeroSectionDemo from './demos/HeroSectionDemo';
import BentoGridDemo from './demos/BentoGridDemo';
import SplitScreenDemo from './demos/SplitScreenDemo';
import CardGridDemo from './demos/CardGridDemo';
import SidebarLayoutDemo from './demos/SidebarLayoutDemo';
import MagazineLayoutDemo from './demos/MagazineLayoutDemo';
import DashboardDemo from './demos/DashboardDemo';
import ZPatternDemo from './demos/ZPatternDemo';
import FullBleedDemo from './demos/FullBleedDemo';

interface BrowserFrameProps {
  pattern: LayoutPattern;
  viewport: ViewportMode;
  onChangeViewport: (mode: ViewportMode) => void;
  previewMode: PreviewMode;
  onChangePreviewMode: (mode: PreviewMode) => void;
  selectedZone: LayoutZoneInfo | null;
  onSelectZone: (zone: LayoutZoneInfo) => void;
}

const VIEWPORT_WIDTH: Record<ViewportMode, string> = {
  desktop: 'w-full',
  tablet: 'w-full max-w-[680px]',
  mobile: 'w-full max-w-[375px]',
};

const VIEWPORT_LABEL: Record<ViewportMode, string> = {
  desktop: '데스크톱 (100%)',
  tablet: '태블릿 (680px)',
  mobile: '모바일 (375px)',
};

export default function BrowserFrame({
  pattern,
  viewport,
  onChangeViewport,
  previewMode,
  onChangePreviewMode,
  selectedZone,
  onSelectZone,
}: BrowserFrameProps) {
  const [showUxGuide, setShowUxGuide] = useState(false);
  const isWireframe = previewMode === 'wireframe';

  const renderDemo = () => {
    const props = {
      isWireframe,
      viewport,
      selectedZoneId: selectedZone?.id ?? null,
      onSelectZone,
    };

    switch (pattern.id) {
      case 'hero':
        return <HeroSectionDemo {...props} />;
      case 'bento':
        return <BentoGridDemo {...props} />;
      case 'split':
        return <SplitScreenDemo {...props} />;
      case 'card-grid':
        return <CardGridDemo {...props} />;
      case 'sidebar':
        return <SidebarLayoutDemo {...props} />;
      case 'magazine':
        return <MagazineLayoutDemo {...props} />;
      case 'dashboard':
        return <DashboardDemo {...props} />;
      case 'z-pattern':
        return <ZPatternDemo {...props} />;
      case 'full-bleed':
        return <FullBleedDemo {...props} />;
    }
  };

  return (
    <div className="flex h-full flex-col gap-4">
      {/* 패턴 헤더 + UX 가이드 토글 */}
      <div className="rounded-2xl bg-white p-5 shadow-xs ring-1 ring-black/[0.04]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-[#E8F3FF] px-2 py-0.5 text-xs font-extrabold text-[#3182F6]">
                {pattern.number}
              </span>
              <h1 className="text-lg font-extrabold tracking-tight text-[#191F28] sm:text-xl">
                {pattern.titleKo}
              </h1>
              <span className="text-xs font-medium text-[#8B95A1]">{pattern.titleEn}</span>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-[#4E5968] sm:text-sm">
              {pattern.summary}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden rounded-full bg-[#F2F4F6] px-3 py-1 text-[11px] font-semibold text-[#4E5968] sm:inline-flex">
              {pattern.cssTech}
            </span>
            <button
              type="button"
              onClick={() => setShowUxGuide((v) => !v)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                showUxGuide
                  ? 'bg-[#3182F6] text-white'
                  : 'bg-[#E8F3FF] text-[#1B64DA] hover:bg-[#D5E7FF]'
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              UX 가이드 {showUxGuide ? '닫기' : '보기'}
            </button>
          </div>
        </div>

        {/* 접이식 UX 가이드 패널 */}
        {showUxGuide && (
          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-[#F2F4F6] pt-4 text-xs md:grid-cols-2">
            <div className="rounded-xl bg-[#F9FAFB] p-3.5">
              <p className="font-bold text-[#191F28]">언제 사용하면 좋나요?</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[#4E5968]">
                {pattern.uxGuide.whenToUse.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-[#F9FAFB] p-3.5">
              <p className="font-bold text-[#191F28]">핵심 설계 원칙</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[#4E5968]">
                {pattern.uxGuide.keyPrinciples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-[#E8F3FF]/60 p-3.5">
              <p className="font-bold text-[#1B64DA]">반응형 대응 포인트</p>
              <p className="mt-1 leading-relaxed text-[#333D4B]">
                {pattern.uxGuide.responsiveTip}
              </p>
            </div>
            <div className="rounded-xl bg-[#FFF4E5]/70 p-3.5">
              <p className="flex items-center gap-1 font-bold text-[#B25E09]">
                <AlertCircle className="h-3.5 w-3.5" />
                주의할 점
              </p>
              <p className="mt-1 leading-relaxed text-[#5C4426]">{pattern.uxGuide.caution}</p>
            </div>
          </div>
        )}
      </div>

      {/* 브라우저 모사 프리뷰 컨테이너 */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-xs ring-1 ring-black/[0.05]">
        {/* 브라우저 상단 툴바 */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F2F4F6] bg-[#FAFAFB] px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-medium text-[#6B7684] ring-1 ring-[#E5E8EB]">
              preview://layouts/{pattern.id} · {VIEWPORT_LABEL[viewport]}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* 라이브 UI vs 와이어프레임 전환 */}
            <div className="inline-flex rounded-xl bg-[#F2F4F6] p-0.5">
              <button
                type="button"
                onClick={() => onChangePreviewMode('live')}
                className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold transition ${
                  previewMode === 'live'
                    ? 'bg-white text-[#191F28] shadow-xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                <Eye className="h-3 w-3" />
                실제 콘텐츠
              </button>
              <button
                type="button"
                onClick={() => onChangePreviewMode('wireframe')}
                className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold transition ${
                  previewMode === 'wireframe'
                    ? 'bg-white text-[#3182F6] shadow-xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                <LayoutTemplate className="h-3 w-3" />
                와이어프레임
              </button>
            </div>

            {/* 뷰포트 전환 버튼 */}
            <div className="inline-flex rounded-xl bg-[#F2F4F6] p-0.5">
              <button
                type="button"
                onClick={() => onChangeViewport('desktop')}
                title="데스크톱 뷰"
                aria-label="데스크톱 뷰"
                className={`rounded-lg p-1.5 transition ${
                  viewport === 'desktop'
                    ? 'bg-white text-[#3182F6] shadow-xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onChangeViewport('tablet')}
                title="태블릿 뷰"
                aria-label="태블릿 뷰"
                className={`rounded-lg p-1.5 transition ${
                  viewport === 'tablet'
                    ? 'bg-white text-[#3182F6] shadow-xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                <Tablet className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onChangeViewport('mobile')}
                title="모바일 뷰"
                aria-label="모바일 뷰"
                className={`rounded-lg p-1.5 transition ${
                  viewport === 'mobile'
                    ? 'bg-white text-[#3182F6] shadow-xs'
                    : 'text-[#6B7684] hover:text-[#191F28]'
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 인터랙티브 캔버스 */}
        <div className="flex flex-1 items-start justify-center overflow-auto bg-[#E5E8EB]/50 p-3 sm:p-5">
          <div
            className={`mx-auto overflow-hidden rounded-2xl bg-[#F2F4F6] shadow-md ring-1 ring-black/[0.06] transition-all duration-300 ${VIEWPORT_WIDTH[viewport]}`}
          >
            {renderDemo()}
          </div>
        </div>

        {/* 하단 클릭 영역 인스펙터 */}
        <div className="border-t border-[#F2F4F6] bg-white px-4 py-3">
          {selectedZone ? (
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#E8F3FF] px-2 py-0.5 text-[11px] font-bold text-[#3182F6]">
                    <MousePointerClick className="h-3 w-3" />
                    {selectedZone.label}
                  </span>
                  <span className="text-xs font-semibold text-[#333D4B]">
                    {selectedZone.role}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#6B7684]">{selectedZone.uxTip}</p>
              </div>
              <code className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#191F28] px-3 py-1.5 font-mono text-[11px] text-[#E8F3FF]">
                <Code2 className="h-3 w-3 text-[#3182F6]" />
                {selectedZone.cssRule}
              </code>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-[#8B95A1]">
              <MousePointerClick className="h-3.5 w-3.5 text-[#3182F6]" />
              <span>
                프리뷰 내부의 각 영역을 클릭하면 해당 구역의 <strong>CSS Grid/Flexbox 규칙</strong>과{' '}
                <strong>UX 설계 팁</strong>이 표시됩니다.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
