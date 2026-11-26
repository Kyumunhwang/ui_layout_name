import { useState } from 'react';
import { BarChart3, CreditCard, Settings, Users } from 'lucide-react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

const NAV_ITEMS = [
  { id: 'home', label: '대시보드 홈', icon: BarChart3, summary: '오늘의 결제 승인율 98.4% · 신규 가입 142건' },
  { id: 'users', label: '회원 관리', icon: Users, summary: '승인 대기 중인 기업 회원 18건을 바로 검토할 수 있어요.' },
  { id: 'billing', label: '정산 내역', icon: CreditCard, summary: '이번 주 자동 정산 예정 금액은 48,200,000원입니다.' },
  { id: 'settings', label: '시스템 설정', icon: Settings, summary: '웹훅 엔드포인트 및 알림 채널 상태를 확인합니다.' },
];

export default function SidebarLayoutDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [activeNavId, setActiveNavId] = useState('users');
  const current = NAV_ITEMS.find((n) => n.id === activeNavId) ?? NAV_ITEMS[0];
  const isMobile = viewport === 'mobile';

  const navZone = getZone('sidebar', 'sidebar-nav');
  const contentZone = getZone('sidebar', 'sidebar-content');

  return (
    <div className="w-full bg-[#F2F4F6] p-4 sm:p-6">
      <div
        className={`flex overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.05] ${
          isMobile ? 'flex-col' : 'min-h-[360px] flex-row'
        }`}
      >
        {/* 좌측 고정 사이드바 */}
        <aside
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(navZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(navZone)}
          className={`flex shrink-0 cursor-pointer gap-1.5 bg-[#262C35] p-3 text-white ${
            isMobile ? 'flex-row overflow-x-auto' : 'w-44 flex-col p-3.5'
          } ${zoneRingClass(selectedZoneId === navZone.id, true)}`}
        >
          {!isMobile && (
            <div className="px-2.5 pb-2 text-[10px] font-bold tracking-wider text-white/45">
              WORKSPACE
            </div>
          )}
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = item.id === activeNavId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveNavId(item.id);
                  onSelectZone(navZone);
                }}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-medium transition ${
                  active
                    ? 'bg-[#3182F6] text-white shadow-xs'
                    : 'text-[#B0B8C1] hover:bg-white/10 hover:text-white'
                }`}
              >
                {isWireframe ? (
                  <span className="h-2.5 w-16 rounded-full bg-current opacity-80" />
                ) : (
                  <>
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.label}</span>
                  </>
                )}
              </button>
            );
          })}
        </aside>

        {/* 우측 가변 콘텐츠 */}
        <main
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(contentZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(contentZone)}
          className={`min-w-0 flex-1 cursor-pointer bg-white p-6 ${zoneRingClass(
            selectedZoneId === contentZone.id
          )}`}
        >
          {isWireframe ? (
            <div className="space-y-4">
              <span className="inline-block rounded-md bg-[#F2F4F6] px-2 py-0.5 text-[10px] font-bold text-[#4E5968]">
                FLUID CONTENT AREA (FLEX-1)
              </span>
              <div className="h-4 w-1/2 rounded-full bg-[#333D4B]" />
              <div className="h-2.5 w-4/5 rounded-full bg-[#E5E8EB]" />
              <div className="mt-4 h-36 w-full rounded-2xl border border-dashed border-[#3182F6]/30 bg-[#E8F3FF]/70" />
            </div>
          ) : (
            <>
              <div className="border-b border-[#F2F4F6] pb-3.5">
                <span className="text-[11px] font-bold text-[#3182F6]">ADMIN CONSOLE</span>
                <h3 className="mt-0.5 text-lg font-bold text-[#191F28]">{current.label}</h3>
                <p className="mt-1 text-xs text-[#6B7684]">{current.summary}</p>
              </div>
              <div className="mt-5 rounded-2xl bg-[#E8F3FF]/75 p-5">
                <p className="text-xs font-bold text-[#1B64DA]">활성 패널 · {current.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#4E5968]">
                  좌측 사이드바 항목을 클릭하면 우측 메인 작업 영역만 즉시 교체됩니다.
                  고정 폭 메뉴와 가변 폭 콘텐츠의 조화를 확인해보세요.
                </p>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
