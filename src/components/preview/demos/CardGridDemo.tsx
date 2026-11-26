import { useState } from 'react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

const CARD_ITEMS = [
  { id: 'c1', category: '금융', title: '매일 이자 통장', metric: '연 3.5%', tone: 'bg-[#F2F4F6]' },
  { id: 'c2', category: '투자', title: '주식 모으기', metric: '수수료 0원', tone: 'bg-[#E8F3FF]' },
  { id: 'c3', category: '인기', title: '올인원 체크카드', metric: '최대 5% 적립', tone: 'bg-[#F2F4F6]' },
  { id: 'c4', category: '보험', title: '미니 여행자보험', metric: '하루 900원', tone: 'bg-[#E8F3FF]' },
  { id: 'c5', category: '대출', title: '비상금 한도조회', metric: '1분 완료', tone: 'bg-[#F2F4F6]' },
  { id: 'c6', category: '혜택', title: '브랜드 캐시백', metric: '매주 지급', tone: 'bg-[#E8F3FF]' },
];

export default function CardGridDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [activeCardId, setActiveCardId] = useState('c3');
  const gridColsClass =
    viewport === 'mobile'
      ? 'grid-cols-1'
      : viewport === 'tablet'
        ? 'grid-cols-2'
        : 'grid-cols-3';

  const containerZone = getZone('card-grid', 'card-grid-container');
  const activeZone = getZone('card-grid', 'card-grid-active');

  return (
    <div className="w-full bg-[#F2F4F6] p-4 sm:p-6">
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectZone(containerZone)}
        onKeyDown={(e) => e.key === 'Enter' && onSelectZone(containerZone)}
        className={`grid gap-3.5 rounded-2xl p-1 ${gridColsClass} ${zoneRingClass(
          selectedZoneId === containerZone.id
        )}`}
      >
        {CARD_ITEMS.map((item) => {
          const isSelected = activeCardId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveCardId(item.id);
                onSelectZone(isSelected ? activeZone : containerZone);
              }}
              className={`flex flex-col rounded-2xl bg-white p-3.5 text-left transition hover:-translate-y-0.5 ${
                isSelected
                  ? 'ring-2 ring-[#3182F6] shadow-md shadow-[#3182F6]/10'
                  : 'ring-1 ring-black/[0.05] hover:shadow-xs'
              }`}
            >
              {isWireframe ? (
                <>
                  <div className={`h-16 w-full rounded-xl ${item.tone}`} />
                  <div className="mt-3 h-2.5 w-3/4 rounded-full bg-[#D1D6DB]" />
                  <div className="mt-1.5 h-2 w-1/2 rounded-full bg-[#E5E8EB]" />
                </>
              ) : (
                <>
                  <div className={`flex h-20 w-full items-start justify-between rounded-xl p-2.5 ${item.tone}`}>
                    <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#3182F6]">
                      {item.category}
                    </span>
                    {isSelected && (
                      <span className="rounded-full bg-[#3182F6] px-2 py-0.5 text-[10px] font-bold text-white">
                        선택됨
                      </span>
                    )}
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-[#191F28]">{item.title}</h4>
                  <p className="mt-0.5 text-xs font-medium text-[#6B7684]">{item.metric}</p>
                </>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
