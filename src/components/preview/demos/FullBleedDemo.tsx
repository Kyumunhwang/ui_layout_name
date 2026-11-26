import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

export default function FullBleedDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [accentShift, setAccentShift] = useState(false);
  const isMobile = viewport === 'mobile';

  const canvasZone = getZone('full-bleed', 'fullbleed-canvas');
  const overlayZone = getZone('full-bleed', 'fullbleed-overlay');

  return (
    /* 풀블리드 특성상 외부 패딩(p-4) 없이 0px 마진으로 끝까지 채움 */
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelectZone(canvasZone)}
      onKeyDown={(e) => e.key === 'Enter' && onSelectZone(canvasZone)}
      className={`relative w-full cursor-pointer overflow-hidden text-white transition-colors ${
        accentShift
          ? 'bg-gradient-to-br from-[#1B64DA] via-[#2272EB] to-[#3182F6]'
          : 'bg-gradient-to-br from-[#3182F6] via-[#2778F0] to-[#1B64DA]'
      } ${zoneRingClass(selectedZoneId === canvasZone.id, true)}`}
    >
      {/* 장식용 배경 오브젝트 (레퍼런스 이미지 09번 원형 그래픽 계승) */}
      <div className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-white/15" />
      <div className="pointer-events-none absolute right-8 top-8 h-14 w-14 rounded-full bg-white/80 opacity-85" />

      <div
        className={`relative z-10 flex min-h-[380px] flex-col justify-between ${
          isMobile ? 'px-6 py-10' : 'px-10 py-14'
        }`}
      >
        {isWireframe ? (
          <div className="flex flex-1 flex-col justify-between">
            <span className="w-fit rounded-md bg-white/20 px-2.5 py-1 text-[10px] font-bold">
              EDGE-TO-EDGE FULL BLEED (PADDING 0 OUTER)
            </span>
            <div className="max-w-sm space-y-3">
              <div className="h-6 w-3/4 rounded-full bg-white/85" />
              <div className="h-3.5 w-full rounded-full bg-white/50" />
              <div className="h-9 w-32 rounded-full bg-white" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur-xs">
                EDGE-TO-EDGE CANVAS
              </span>
              <span className="text-[11px] font-medium text-white/80">100% FULL WIDTH</span>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                onSelectZone(overlayZone);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.stopPropagation();
                  onSelectZone(overlayZone);
                }
              }}
              className={`my-8 max-w-lg cursor-pointer rounded-2xl p-2 ${zoneRingClass(
                selectedZoneId === overlayZone.id,
                true
              )}`}
            >
              <h3
                className={`font-extrabold leading-tight tracking-tight ${
                  isMobile ? 'text-2xl' : 'text-3xl'
                }`}
              >
                경계 없는 화면이
                <br />더 깊은 몰입을 만듭니다
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/85 sm:text-sm">
                카드 테두리와 외부 여백을 제거해 뷰포트 끝에서 끝까지 꽉 차는
                압도적인 비주얼 경험을 제공합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setAccentShift((v) => !v);
                    onSelectZone(overlayZone);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#1B64DA] shadow-md transition hover:bg-[#F2F4F6]"
                >
                  배경 그라데이션 전환
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
