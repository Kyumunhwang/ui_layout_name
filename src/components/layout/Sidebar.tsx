import { LayoutGrid, Layers, X } from 'lucide-react';
import type { LayoutId, LayoutPattern } from '../../types/layout';

interface SidebarProps {
  patterns: LayoutPattern[];
  selectedId: LayoutId | null;
  isOverview: boolean;
  onSelectOverview: () => void;
  onSelectPattern: (id: LayoutId) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export default function Sidebar({
  patterns,
  selectedId,
  isOverview,
  onSelectOverview,
  onSelectPattern,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const navContent = (
    <div className="flex h-full flex-col bg-white">
      {/* 상단 브랜드 헤더 */}
      <div className="flex items-center justify-between border-b border-[#F2F4F6] px-5 py-4">
        <button
          type="button"
          onClick={() => {
            onSelectOverview();
            onCloseMobile();
          }}
          className="flex items-center gap-2.5 text-left"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#3182F6] text-white shadow-xs">
            <Layers className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-extrabold tracking-tight text-[#191F28]">레이아웃 9선</p>
            <p className="text-[11px] font-medium text-[#8B95A1]">UI/UX 패턴 라이브러리</p>
          </div>
        </button>
        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="메뉴 닫기"
          className="rounded-lg p-1.5 text-[#6B7684] hover:bg-[#F2F4F6] lg:hidden"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* 전체 한눈에 보기 버튼 */}
      <div className="px-3 pt-3">
        <button
          type="button"
          onClick={() => {
            onSelectOverview();
            onCloseMobile();
          }}
          className={`flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left text-xs font-bold transition ${
            isOverview
              ? 'bg-[#3182F6] text-white shadow-sm shadow-[#3182F6]/20'
              : 'bg-[#F2F4F6] text-[#333D4B] hover:bg-[#E5E8EB]'
          }`}
        >
          <LayoutGrid className="h-4 w-4 shrink-0" />
          <span>전체 한눈에 보기</span>
          <span
            className={`ml-auto rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
              isOverview ? 'bg-white/20 text-white' : 'bg-white text-[#3182F6]'
            }`}
          >
            9
          </span>
        </button>
      </div>

      {/* 01~09 패턴 목록 */}
      <div className="mt-4 px-5 pb-1.5 text-[11px] font-bold tracking-wider text-[#8B95A1]">
        화면 배치 패턴
      </div>
      <nav aria-label="레이아웃 패턴 메뉴" className="flex-1 space-y-1 overflow-y-auto px-3 pb-5">
        {patterns.map((pattern) => {
          const isActive = !isOverview && selectedId === pattern.id;
          return (
            <button
              key={pattern.id}
              type="button"
              onClick={() => {
                onSelectPattern(pattern.id);
                onCloseMobile();
              }}
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                isActive
                  ? 'bg-[#E8F3FF] text-[#1B64DA]'
                  : 'text-[#333D4B] hover:bg-[#F9FAFB]'
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-extrabold transition ${
                  isActive
                    ? 'bg-[#3182F6] text-white'
                    : 'bg-[#F2F4F6] text-[#3182F6] group-hover:bg-[#E8F3FF]'
                }`}
              >
                {pattern.number}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-xs font-bold ${
                    isActive ? 'text-[#1B64DA]' : 'text-[#191F28]'
                  }`}
                >
                  {pattern.titleKo}
                </p>
                <p className="truncate text-[11px] text-[#8B95A1]">{pattern.titleEn}</p>
              </div>
            </button>
          );
        })}
      </nav>

      {/* 하단 CSS 스펙 안내 */}
      <div className="border-t border-[#F2F4F6] px-4 py-3 text-[11px] text-[#8B95A1]">
        순수 CSS Grid · Flexbox 기반
      </div>
    </div>
  );

  return (
    <>
      {/* 데스크톱 고정 사이드바 */}
      <aside className="hidden w-64 shrink-0 border-r border-[#E5E8EB] bg-white lg:block">
        {navContent}
      </aside>

      {/* 모바일 드로어 사이드바 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            role="presentation"
            onClick={onCloseMobile}
            className="fixed inset-0 bg-[#191F28]/35 backdrop-blur-[1px]"
          />
          <aside className="relative z-10 h-full w-72 max-w-[82vw] shadow-xl">
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
