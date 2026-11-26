import { useState } from 'react';
import { Eye } from 'lucide-react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

export default function ZPatternDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [showZPath, setShowZPath] = useState(true);
  const isMobile = viewport === 'mobile';

  const topZone = getZone('z-pattern', 'z-top');
  const centerZone = getZone('z-pattern', 'z-center');
  const bottomZone = getZone('z-pattern', 'z-bottom');

  return (
    <div className="w-full bg-[#F2F4F6] p-4 sm:p-6">
      <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-xs ring-1 ring-black/[0.04] sm:p-8">
        {/* Z-Pattern 시선 흐름 SVG 오버레이 */}
        {(showZPath || isWireframe) && (
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full p-10"
          >
            <polyline
              points="12,12 88,12 12,88 88,88"
              fill="none"
              stroke="#3182F6"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              strokeOpacity="0.45"
            />
          </svg>
        )}

        {/* ① 좌상단 로고 -> ② 우상단 액션 */}
        <header
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(topZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(topZone)}
          className={`relative z-10 flex cursor-pointer items-center justify-between rounded-xl p-2 ${zoneRingClass(
            selectedZoneId === topZone.id
          )}`}
        >
          {isWireframe ? (
            <>
              <div className="h-5 w-14 rounded-md bg-[#333D4B]" />
              <div className="h-5 w-16 rounded-full bg-[#E5E8EB]" />
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-[#191F28] text-[11px] font-black text-white">
                  1
                </span>
                <span className="text-sm font-extrabold text-[#191F28]">PAYFLOW</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowZPath((v) => !v);
                  }}
                  className="inline-flex items-center gap-1 rounded-full bg-[#E8F3FF] px-3 py-1.5 text-[11px] font-semibold text-[#3182F6]"
                >
                  <Eye className="h-3 w-3" />
                  시선 경로 {showZPath ? '숨기기' : '보기'}
                </button>
                <span className="rounded-full bg-[#F2F4F6] px-3.5 py-1.5 text-xs font-semibold text-[#333D4B]">
                  ② 로그인
                </span>
              </div>
            </>
          )}
        </header>

        {/* 대각선 중앙 핵심 메시지 */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(centerZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(centerZone)}
          className={`relative z-10 my-8 cursor-pointer rounded-2xl p-3 text-center ${zoneRingClass(
            selectedZoneId === centerZone.id
          )}`}
        >
          {isWireframe ? (
            <div className="mx-auto h-3.5 w-36 rounded-full bg-[#4E5968]" />
          ) : (
            <>
              <span className="text-[11px] font-bold tracking-wider text-[#3182F6]">
                NATURAL EYE FLOW
              </span>
              <h3
                className={`mt-1.5 font-extrabold tracking-tight text-[#191F28] ${
                  isMobile ? 'text-lg' : 'text-2xl'
                }`}
              >
                단 한 번의 클릭으로 시작되는 팀 정산
              </h3>
              <p className="mx-auto mt-1.5 max-w-sm text-xs text-[#6B7684]">
                좌상단에서 우하단까지 Z자로 이어지는 시선의 끝에 최종 전환 버튼을 배치했습니다.
              </p>
            </>
          )}
        </div>

        {/* ③ 좌하단 신뢰 문구 -> ④ 우하단 최종 CTA */}
        <footer
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(bottomZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(bottomZone)}
          className={`relative z-10 flex cursor-pointer flex-wrap items-center justify-between gap-3 rounded-xl p-2 ${zoneRingClass(
            selectedZoneId === bottomZone.id
          )}`}
        >
          {isWireframe ? (
            <>
              <div className="h-3.5 w-20 rounded-full bg-[#E5E8EB]" />
              <div className="h-8 w-24 rounded-full bg-[#3182F6]" />
            </>
          ) : (
            <>
              <span className="text-xs font-medium text-[#6B7684]">
                ③ 14,000+ 기업이 도입한 자동 정산
              </span>
              <button
                type="button"
                className="rounded-full bg-[#3182F6] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1B64DA]"
              >
                ④ 지금 도입 문의하기
              </button>
            </>
          )}
        </footer>
      </div>
    </div>
  );
}
