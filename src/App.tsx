import { useState } from 'react';
import { ArrowRight, Check, Copy, Menu, Search, Sparkles } from 'lucide-react';
import { LAYOUT_PATTERNS } from './data/layoutPatterns';
import type {
  LayoutCategory,
  LayoutId,
  LayoutZoneInfo,
  PreviewMode,
  ViewportMode,
} from './types/layout';
import Sidebar from './components/layout/Sidebar';
import BrowserFrame from './components/preview/BrowserFrame';
import PatternThumbnail from './components/preview/PatternThumbnail';
import CodeViewer from './components/code/CodeViewer';

const CATEGORIES: LayoutCategory[] = ['전체', '랜딩 · 전환', '콘텐츠 · 탐색', '앱 · 데이터'];

export default function App() {
  const [viewMode, setViewMode] = useState<'overview' | 'detail'>('overview');
  const [selectedId, setSelectedId] = useState<LayoutId>('hero');
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [previewMode, setPreviewMode] = useState<PreviewMode>('live');
  const [selectedZone, setSelectedZone] = useState<LayoutZoneInfo | null>(null);
  const [category, setCategory] = useState<LayoutCategory>('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<LayoutId | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const selectedPattern =
    LAYOUT_PATTERNS.find((p) => p.id === selectedId) ?? LAYOUT_PATTERNS[0];

  const handleSelectPattern = (id: LayoutId) => {
    setSelectedId(id);
    setViewMode('detail');
    setSelectedZone(null);
  };

  const handleSelectOverview = () => {
    setViewMode('overview');
    setSelectedZone(null);
  };

  const handleQuickCopy = async (id: LayoutId, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 1600);
  };

  const filteredPatterns = LAYOUT_PATTERNS.filter((item) => {
    const matchesCategory = category === '전체' || item.category === category;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      item.titleKo.toLowerCase().includes(q) ||
      item.titleEn.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.number.includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#F2F4F6] text-[#191F28] lg:h-screen lg:flex-row lg:overflow-hidden">
      {/* 모바일 상단 바 */}
      <header className="flex items-center justify-between border-b border-[#E5E8EB] bg-white px-4 py-3 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#F2F4F6] px-3 py-2 text-xs font-bold text-[#191F28]"
        >
          <Menu className="h-4 w-4" />
          패턴 메뉴
        </button>
        <button
          type="button"
          onClick={handleSelectOverview}
          className="text-sm font-extrabold text-[#191F28]"
        >
          UI/UX 레이아웃 9선
        </button>
        <span className="rounded-full bg-[#E8F3FF] px-2.5 py-1 text-[11px] font-bold text-[#3182F6]">
          {viewMode === 'overview' ? '전체' : selectedPattern.number}
        </span>
      </header>

      {/* 좌측 고정 사이드바 */}
      <Sidebar
        patterns={LAYOUT_PATTERNS}
        selectedId={selectedId}
        isOverview={viewMode === 'overview'}
        onSelectOverview={handleSelectOverview}
        onSelectPattern={handleSelectPattern}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      {/* 메인 콘텐츠 영역: 전체 한눈에 보기 OR 3단(프리뷰+코드) 상세 워크스페이스 */}
      {viewMode === 'overview' ? (
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8">
          <div className="mx-auto max-w-6xl">
            {/* 상단 히어로 타이틀 & 필터 바 */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F3FF] px-3 py-1 text-xs font-bold text-[#3182F6]">
                  <Sparkles className="h-3.5 w-3.5" />
                  실무 즉시 복사용 CSS Grid · Flexbox 라이브러리
                </div>
                <h1 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#191F28] sm:text-3xl">
                  9가지 UI/UX 화면 배치 패턴
                </h1>
                <p className="mt-1 text-sm text-[#6B7684]">
                  카드를 클릭하면 인터랙티브 뷰포트 프리뷰, 와이어프레임 전환, React/HTML 스니펫을 바로 확인할 수 있어요.
                </p>
              </div>

              <div className="relative w-full md:w-64">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B95A1]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="패턴 이름 또는 번호 검색"
                  className="w-full rounded-xl bg-white py-2.5 pl-10 pr-4 text-xs font-medium text-[#191F28] shadow-xs ring-1 ring-black/[0.06] outline-none focus:ring-2 focus:ring-[#3182F6]"
                />
              </div>
            </div>

            {/* 카테고리 필터 */}
            <div className="mb-6 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                      active
                        ? 'bg-[#191F28] text-white'
                        : 'bg-white text-[#4E5968] ring-1 ring-black/[0.05] hover:bg-[#F9FAFB]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* 3x3 레퍼런스 카드 그리드 (layout_name.png 디자인 계승) */}
            {filteredPatterns.length === 0 ? (
              <div className="rounded-3xl bg-white p-12 text-center shadow-xs">
                <p className="text-sm font-bold text-[#333D4B]">검색 조건에 맞는 패턴이 없어요.</p>
                <button
                  type="button"
                  onClick={() => {
                    setCategory('전체');
                    setSearchQuery('');
                  }}
                  className="mt-3 rounded-full bg-[#E8F3FF] px-4 py-2 text-xs font-bold text-[#3182F6]"
                >
                  필터 초기화
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPatterns.map((pattern) => {
                  const isCopied = copiedId === pattern.id;
                  return (
                    <article
                      key={pattern.id}
                      className="group flex flex-col rounded-[22px] bg-white p-4 shadow-xs ring-1 ring-black/[0.04] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-[#3182F6]/30"
                    >
                      {/* 클릭 가능한 썸네일 영역 */}
                      <button
                        type="button"
                        onClick={() => handleSelectPattern(pattern.id)}
                        className="h-44 w-full text-left focus:outline-none"
                      >
                        <PatternThumbnail id={pattern.id} />
                      </button>

                      {/* 카드 하단 타이틀 & 퀵 액션 */}
                      <div className="mt-4 flex items-end justify-between gap-2 px-1">
                        <button
                          type="button"
                          onClick={() => handleSelectPattern(pattern.id)}
                          className="text-left"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-extrabold text-[#3182F6]">
                              {pattern.number}
                            </span>
                            <h2 className="text-base font-extrabold tracking-tight text-[#191F28] group-hover:text-[#3182F6]">
                              {pattern.titleKo}
                            </h2>
                          </div>
                          <p className="mt-0.5 text-xs font-medium text-[#8B95A1]">
                            {pattern.titleEn}
                          </p>
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleQuickCopy(pattern.id, pattern.codeReact)}
                            title="React 코드 바로 복사"
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-bold transition ${
                              isCopied
                                ? 'bg-[#28C840]/15 text-[#147A29]'
                                : 'bg-[#F2F4F6] text-[#4E5968] hover:bg-[#E8F3FF] hover:text-[#3182F6]'
                            }`}
                          >
                            {isCopied ? (
                              <>
                                <Check className="h-3 w-3" />
                                복사됨
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                복사
                              </>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleSelectPattern(pattern.id)}
                            aria-label={`${pattern.titleKo} 자세히 보기`}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F3FF] text-[#3182F6] transition group-hover:bg-[#3182F6] group-hover:text-white"
                          >
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </main>
      ) : (
        /* 3단 분할 대시보드 상세 모드: (Sidebar) | Live Preview | Code Viewer */
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 xl:flex-row xl:overflow-hidden">
          <main className="min-w-0 flex-1 xl:overflow-y-auto">
            <BrowserFrame
              pattern={selectedPattern}
              viewport={viewport}
              onChangeViewport={setViewport}
              previewMode={previewMode}
              onChangePreviewMode={setPreviewMode}
              selectedZone={selectedZone}
              onSelectZone={setSelectedZone}
            />
          </main>

          <section className="h-[520px] w-full shrink-0 xl:h-full xl:w-[440px] 2xl:w-[500px]">
            <CodeViewer pattern={selectedPattern} />
          </section>
        </div>
      )}
    </div>
  );
}
