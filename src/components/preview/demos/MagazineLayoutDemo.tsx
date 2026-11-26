import { useState } from 'react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

const ARTICLES = [
  { id: 'a1', tag: '디자인', title: '토스 스타일 컬러 시스템이 신뢰를 만드는 방식', time: '4분 읽기' },
  { id: 'a2', tag: '엔지니어링', title: 'CSS Grid만으로 구현하는 0ms 반응형 아키텍처', time: '6분 읽기' },
  { id: 'a3', tag: '프로덕트', title: '사용자의 첫 3초를 사로잡는 마이크로 카피 원칙', time: '3분 읽기' },
];

export default function MagazineLayoutDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [focusedArticleId, setFocusedArticleId] = useState('a1');
  const isMobile = viewport === 'mobile';

  const mastheadZone = getZone('magazine', 'magazine-masthead');
  const featuredZone = getZone('magazine', 'magazine-featured');
  const listZone = getZone('magazine', 'magazine-list');

  return (
    <div className="w-full bg-[#F2F4F6] p-4 sm:p-6">
      <div className="rounded-3xl bg-white p-5 shadow-xs ring-1 ring-black/[0.04] sm:p-6">
        {/* 상단 매거진 헤더 바 */}
        <header
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(mastheadZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(mastheadZone)}
          className={`flex cursor-pointer items-center justify-between border-b-2 border-[#191F28] pb-3 ${zoneRingClass(
            selectedZoneId === mastheadZone.id
          )}`}
        >
          {isWireframe ? (
            <div className="h-4 w-48 rounded-full bg-[#333D4B]" />
          ) : (
            <>
              <span className="text-base font-black tracking-tight text-[#191F28] sm:text-lg">
                DESIGN JOURNAL
              </span>
              <span className="text-[11px] font-semibold text-[#6B7684]">VOL. 24 · 프로덕트</span>
            </>
          )}
        </header>

        {/* 비대칭 에디토리얼 그리드 */}
        <div
          className={`mt-5 grid gap-5 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-12'
          }`}
        >
          {/* 좌측 커버스토리 */}
          <article
            role="button"
            tabIndex={0}
            onClick={() => onSelectZone(featuredZone)}
            onKeyDown={(e) => e.key === 'Enter' && onSelectZone(featuredZone)}
            className={`cursor-pointer rounded-2xl ${
              isMobile ? '' : 'col-span-7'
            } ${zoneRingClass(selectedZoneId === featuredZone.id)}`}
          >
            {isWireframe ? (
              <div className="flex aspect-[4/3] w-full flex-col justify-between rounded-2xl bg-[#3182F6] p-4 text-white">
                <span className="w-fit rounded bg-white/20 px-2 py-0.5 text-[10px] font-bold">
                  FEATURED (7/12)
                </span>
                <div className="space-y-1.5">
                  <div className="h-3 w-3/4 rounded-full bg-white/80" />
                  <div className="h-3 w-1/2 rounded-full bg-white/60" />
                </div>
              </div>
            ) : (
              <div className="flex aspect-[4/3] w-full flex-col justify-between rounded-2xl bg-[#3182F6] p-5 text-white">
                <span className="w-fit rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold">
                  COVER STORY
                </span>
                <div>
                  <h3 className="text-base font-bold leading-snug sm:text-lg">
                    좋은 화면 배치는 설명하지 않아도
                    <br />
                    사용자가 먼저 이해합니다
                  </h3>
                  <p className="mt-1.5 text-[11px] text-white/80">에디터 팀 · 2026. 11</p>
                </div>
              </div>
            )}
          </article>

          {/* 우측 서브 기사 목록 */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => onSelectZone(listZone)}
            onKeyDown={(e) => e.key === 'Enter' && onSelectZone(listZone)}
            className={`flex cursor-pointer flex-col justify-between divide-y divide-[#F2F4F6] rounded-2xl p-1 ${
              isMobile ? '' : 'col-span-5'
            } ${zoneRingClass(selectedZoneId === listZone.id)}`}
          >
            {ARTICLES.map((article) => {
              const focused = focusedArticleId === article.id;
              return (
                <button
                  key={article.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFocusedArticleId(article.id);
                    onSelectZone(listZone);
                  }}
                  className="py-3 text-left first:pt-0 last:pb-0"
                >
                  {isWireframe ? (
                    <div className="space-y-1.5">
                      <div className="h-2.5 w-14 rounded-full bg-[#3182F6]/40" />
                      <div className="h-3 w-full rounded-full bg-[#D1D6DB]" />
                      <div className="h-2.5 w-2/3 rounded-full bg-[#E5E8EB]" />
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-[#3182F6]">{article.tag}</span>
                        <span className="text-[10px] text-[#8B95A1]">{article.time}</span>
                      </div>
                      <h4
                        className={`mt-1 text-xs font-bold leading-snug sm:text-sm ${
                          focused ? 'text-[#3182F6]' : 'text-[#191F28]'
                        }`}
                      >
                        {article.title}
                      </h4>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
