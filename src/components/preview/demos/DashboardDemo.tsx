import { useState } from 'react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

const BAR_ITEMS = [
  { day: '월', orders: 640, rate: '78%' },
  { day: '화', orders: 820, rate: '81%' },
  { day: '수', orders: 760, rate: '80%' },
  { day: '목', orders: 1247, rate: '86%' },
  { day: '금', orders: 930, rate: '84%' },
];

export default function DashboardDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [selectedDay, setSelectedDay] = useState('목');
  const activeData = BAR_ITEMS.find((b) => b.day === selectedDay) ?? BAR_ITEMS[3];
  const isMobile = viewport === 'mobile';

  const kpiZone = getZone('dashboard', 'dashboard-kpi');
  const chartZone = getZone('dashboard', 'dashboard-chart');

  return (
    <div className="w-full space-y-3.5 bg-[#F2F4F6] p-4 sm:p-6">
      {/* 상단 KPI 카드 행 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectZone(kpiZone)}
        onKeyDown={(e) => e.key === 'Enter' && onSelectZone(kpiZone)}
        className={`grid cursor-pointer gap-3.5 rounded-2xl p-1 ${
          isMobile ? 'grid-cols-1' : 'grid-cols-2'
        } ${zoneRingClass(selectedZoneId === kpiZone.id)}`}
      >
        <div className="rounded-2xl bg-white p-4 shadow-xs ring-1 ring-black/[0.04]">
          {isWireframe ? (
            <div className="space-y-2">
              <div className="h-2.5 w-12 rounded-full bg-[#D1D6DB]" />
              <div className="h-6 w-24 rounded-lg bg-[#333D4B]" />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6B7684]">주문</span>
                <span className="rounded-full bg-[#E8F3FF] px-2 py-0.5 text-[10px] font-bold text-[#3182F6]">
                  +14.2%
                </span>
              </div>
              <p className="mt-1.5 text-2xl font-extrabold tabular-nums text-[#191F28]">
                {activeData.orders.toLocaleString()}
              </p>
            </>
          )}
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-xs ring-1 ring-black/[0.04]">
          {isWireframe ? (
            <div className="space-y-2">
              <div className="h-2.5 w-12 rounded-full bg-[#D1D6DB]" />
              <div className="h-6 w-20 rounded-lg bg-[#333D4B]" />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#6B7684]">결제율</span>
                <span className="rounded-full bg-[#E8F3FF] px-2 py-0.5 text-[10px] font-bold text-[#3182F6]">
                  {selectedDay}요일 기준
                </span>
              </div>
              <p className="mt-1.5 text-2xl font-extrabold tabular-nums text-[#191F28]">
                {activeData.rate}
              </p>
            </>
          )}
        </div>
      </div>

      {/* 하단 바 차트 카드 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectZone(chartZone)}
        onKeyDown={(e) => e.key === 'Enter' && onSelectZone(chartZone)}
        className={`cursor-pointer rounded-2xl bg-white p-5 shadow-xs ring-1 ring-black/[0.04] ${zoneRingClass(
          selectedZoneId === chartZone.id
        )}`}
      >
        {!isWireframe && (
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-[#191F28]">주간 주문 추이</h4>
              <p className="text-[11px] text-[#8B95A1]">막대를 클릭하면 상단 KPI가 연동됩니다</p>
            </div>
            <span className="text-xs font-bold text-[#3182F6]">
              {selectedDay}요일 · {activeData.orders.toLocaleString()}건
            </span>
          </div>
        )}

        <div className="flex h-40 items-end justify-between gap-3 rounded-xl bg-[#F9FAFB] px-5 pb-3 pt-6">
          {BAR_ITEMS.map((item) => {
            const isSelected = item.day === selectedDay;
            const heightPct = Math.round((item.orders / 1350) * 100);
            return (
              <button
                key={item.day}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDay(item.day);
                  onSelectZone(chartZone);
                }}
                className="group flex h-full flex-1 flex-col items-center justify-end gap-1.5"
              >
                <div
                  style={{ height: `${heightPct}%` }}
                  className={`w-full max-w-[40px] rounded-t-lg transition-all ${
                    isSelected
                      ? 'bg-[#3182F6]'
                      : 'bg-[#E5E8EB] group-hover:bg-[#B0C4DE]'
                  }`}
                />
                {!isWireframe && (
                  <span
                    className={`text-[11px] font-semibold ${
                      isSelected ? 'text-[#3182F6]' : 'text-[#8B95A1]'
                    }`}
                  >
                    {item.day}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
