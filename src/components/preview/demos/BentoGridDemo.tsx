import { ArrowUpRight, TrendingUp } from 'lucide-react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

export default function BentoGridDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const isMobile = viewport === 'mobile';
  const mainZone = getZone('bento', 'bento-main');
  const accentZone = getZone('bento', 'bento-accent');
  const tallZone = getZone('bento', 'bento-tall');
  const subZone = getZone('bento', 'bento-sub');

  return (
    <div className="w-full bg-[#F2F4F6] p-4 sm:p-6">
      <div
        className={`grid gap-3.5 ${
          isMobile ? 'grid-cols-1' : 'grid-cols-3 auto-rows-[132px]'
        }`}
      >
        {/* 좌상단 와이드 메인 셀 */}
        <button
          type="button"
          onClick={() => onSelectZone(mainZone)}
          className={`flex flex-col justify-between rounded-3xl p-5 text-left ${
            isMobile ? 'min-h-[140px]' : 'col-span-2'
          } ${
            isWireframe
              ? 'border-2 border-dashed border-[#3182F6]/35 bg-[#E8F3FF]/70'
              : 'bg-[#E8F3FF] ring-1 ring-[#3182F6]/10'
          } ${zoneRingClass(selectedZoneId === mainZone.id)}`}
        >
          {isWireframe ? (
            <>
              <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#3182F6]">
                COL-SPAN-2 (WIDE CELL)
              </span>
              <div className="space-y-2">
                <div className="h-4 w-2/3 rounded-full bg-[#333D4B]/70" />
                <div className="h-3 w-1/2 rounded-full bg-[#6B7684]/50" />
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full items-center justify-between">
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#3182F6]">
                  AI 소비 리포트
                </span>
                <TrendingUp className="h-4 w-4 text-[#3182F6]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#191F28] sm:text-lg">
                  이번 달 고정 지출을 18% 줄였어요
                </h3>
                <p className="mt-0.5 text-xs text-[#4E5968]">
                  미사용 구독 3건이 자동 해지되어 매월 42,000원을 아끼고 있습니다.
                </p>
              </div>
            </>
          )}
        </button>

        {/* 우상단 포인트 액센트 셀 */}
        <button
          type="button"
          onClick={() => onSelectZone(accentZone)}
          className={`flex flex-col justify-between rounded-3xl p-5 text-left ${
            isMobile ? 'min-h-[120px]' : 'col-span-1'
          } ${
            isWireframe
              ? 'border-2 border-dashed border-white/60 bg-[#3182F6]'
              : 'bg-[#3182F6] text-white shadow-sm'
          } ${zoneRingClass(selectedZoneId === accentZone.id, true)}`}
        >
          {isWireframe ? (
            <>
              <span className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white">
                ACCENT (1x1)
              </span>
              <div className="h-5 w-2/3 rounded-full bg-white/80" />
            </>
          ) : (
            <>
              <div className="flex w-full items-center justify-between">
                <span className="text-[11px] font-semibold text-white/80">오늘의 적금</span>
                <ArrowUpRight className="h-4 w-4 text-white/90" />
              </div>
              <div>
                <p className="text-2xl font-extrabold tracking-tight">연 4.2%</p>
                <p className="mt-0.5 text-[11px] text-white/85">조건 없이 바로 적용</p>
              </div>
            </>
          )}
        </button>

        {/* 하단 좌측 2개 보조 셀 */}
        <button
          type="button"
          onClick={() => onSelectZone(subZone)}
          className={`flex flex-col justify-between rounded-3xl p-5 text-left ${
            isWireframe
              ? 'border border-dashed border-[#B0B8C1] bg-white'
              : 'bg-white shadow-xs ring-1 ring-black/[0.04]'
          } ${zoneRingClass(selectedZoneId === subZone.id)}`}
        >
          {isWireframe ? (
            <>
              <span className="text-[10px] font-bold text-[#8B95A1]">SUB CELL (1x1)</span>
              <div className="h-4 w-1/2 rounded-full bg-[#D1D6DB]" />
            </>
          ) : (
            <>
              <span className="text-xs font-semibold text-[#8B95A1]">신용점수</span>
              <div>
                <p className="text-xl font-bold text-[#191F28]">945점</p>
                <p className="mt-0.5 text-[11px] font-semibold text-[#3182F6]">상위 4%</p>
              </div>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={() => onSelectZone(subZone)}
          className={`flex flex-col justify-between rounded-3xl p-5 text-left ${
            isWireframe
              ? 'border border-dashed border-[#B0B8C1] bg-white'
              : 'bg-white shadow-xs ring-1 ring-black/[0.04]'
          } ${zoneRingClass(selectedZoneId === subZone.id)}`}
        >
          {isWireframe ? (
            <>
              <span className="text-[10px] font-bold text-[#8B95A1]">SUB CELL (1x1)</span>
              <div className="h-4 w-1/2 rounded-full bg-[#D1D6DB]" />
            </>
          ) : (
            <>
              <span className="text-xs font-semibold text-[#8B95A1]">이번 주 캐시백</span>
              <div>
                <p className="text-xl font-bold text-[#191F28]">24,800원</p>
                <p className="mt-0.5 text-[11px] text-[#6B7684]">금요일 자동 입금</p>
              </div>
            </>
          )}
        </button>

        {/* 우측 세로 확장 셀 */}
        <button
          type="button"
          onClick={() => onSelectZone(tallZone)}
          className={`flex flex-col justify-between rounded-3xl p-5 text-left ${
            isMobile ? 'min-h-[160px]' : 'col-start-3 row-start-2 row-span-2'
          } ${
            isWireframe
              ? 'border border-dashed border-[#B0B8C1] bg-[#E5E8EB]/60'
              : 'bg-white shadow-xs ring-1 ring-black/[0.04]'
          } ${zoneRingClass(selectedZoneId === tallZone.id)}`}
        >
          {isWireframe ? (
            <>
              <span className="text-[10px] font-bold text-[#4E5968]">ROW-SPAN-2 (TALL)</span>
              <div className="w-full space-y-2.5">
                <div className="h-3 w-full rounded-full bg-[#D1D6DB]" />
                <div className="h-3 w-4/5 rounded-full bg-[#D1D6DB]" />
                <div className="h-3 w-3/5 rounded-full bg-[#D1D6DB]" />
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-[11px] font-semibold text-[#8B95A1]">자동 저축</span>
                <h4 className="mt-0.5 text-sm font-bold text-[#191F28]">최근 적립 내역</h4>
              </div>
              <div className="my-3 w-full space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">잔돈 모으기</span>
                  <span className="font-bold text-[#3182F6]">+1,400원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">주간 챌린지</span>
                  <span className="font-bold text-[#3182F6]">+30,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4E5968]">월 이자 지급</span>
                  <span className="font-bold text-[#191F28]">+8,920원</span>
                </div>
              </div>
              <span className="w-full rounded-xl bg-[#F2F4F6] py-2 text-center text-[11px] font-semibold text-[#333D4B]">
                전체 보기
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
