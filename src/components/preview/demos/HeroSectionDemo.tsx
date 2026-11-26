import { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

const FEATURE_CARDS = [
  { icon: Zap, badge: '01', title: '1분 만에 간편 개설', desc: '복잡한 서류 없이 본인 인증만으로 즉시 시작합니다.' },
  { icon: Sparkles, badge: '02', title: '수수료 0원 자동이체', desc: '매달 반복되는 정산과 송금을 조건 없이 무료 지원합니다.' },
  { icon: ShieldCheck, badge: '03', title: '24시간 이상 거래 탐지', desc: 'AI 보안 엔진이 의심스러운 접근을 실시간으로 차단합니다.' },
];

export default function HeroSectionDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [ctaClicked, setCtaClicked] = useState(false);
  const isMobile = viewport === 'mobile';

  const bannerZone = getZone('hero', 'hero-banner');
  const ctaZone = getZone('hero', 'hero-cta');
  const featuresZone = getZone('hero', 'hero-features');

  return (
    <div className="w-full space-y-4 bg-[#F2F4F6] p-4 sm:p-6">
      {/* 상단 히어로 배너 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectZone(bannerZone)}
        onKeyDown={(e) => e.key === 'Enter' && onSelectZone(bannerZone)}
        className={`relative cursor-pointer rounded-3xl px-5 text-center ${
          isMobile ? 'py-8' : 'py-12'
        } ${
          isWireframe
            ? 'border-2 border-dashed border-[#3182F6]/35 bg-[#E8F3FF]/60'
            : 'bg-gradient-to-b from-[#E8F3FF] to-[#F5F9FF] shadow-xs ring-1 ring-[#3182F6]/10'
        } ${zoneRingClass(selectedZoneId === bannerZone.id)}`}
      >
        {isWireframe ? (
          <div className="mx-auto flex max-w-md flex-col items-center gap-3">
            <span className="rounded-full bg-[#3182F6]/15 px-2.5 py-0.5 text-[10px] font-bold text-[#3182F6]">
              HERO BANNER · FLEX COLUMN
            </span>
            <div className="h-5 w-3/4 rounded-full bg-[#333D4B]" />
            <div className="h-3.5 w-1/2 rounded-full bg-[#4E5968]/80" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectZone(ctaZone);
                setCtaClicked((v) => !v);
              }}
              className={`mt-2 inline-flex h-10 items-center gap-2 rounded-full bg-[#3182F6] px-5 ${zoneRingClass(
                selectedZoneId === ctaZone.id,
                true
              )}`}
            >
              <span className="h-4 w-4 rounded-full border-2 border-white bg-[#1B64DA]" />
              <span className="h-2.5 w-14 rounded-full bg-white/80" />
            </button>
          </div>
        ) : (
          <div className="mx-auto flex max-w-lg flex-col items-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#3182F6] shadow-xs">
              새로운 금융의 기준
            </span>
            <h2
              className={`mt-3 font-extrabold tracking-tight text-[#191F28] ${
                isMobile ? 'text-xl leading-snug' : 'text-3xl leading-tight'
              }`}
            >
              금융의 모든 순간을
              <br />
              가장 쉽고 투명하게
            </h2>
            <p className="mt-2.5 max-w-md text-xs leading-relaxed text-[#4E5968] sm:text-sm">
              계좌 조회부터 자산 관리, 간편 송금까지 한 화면에서 3초 만에 확인하세요.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectZone(ctaZone);
                  setCtaClicked((v) => !v);
                }}
                className={`inline-flex h-11 items-center gap-2 rounded-full bg-[#3182F6] px-6 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1B64DA] active:scale-[0.98] sm:text-sm ${zoneRingClass(
                  selectedZoneId === ctaZone.id,
                  true
                )}`}
              >
                {ctaClicked ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    시작 화면으로 이동됨
                  </>
                ) : (
                  <>
                    무료로 시작하기
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectZone(bannerZone);
                }}
                className="inline-flex h-11 items-center rounded-full bg-white px-5 text-xs font-semibold text-[#333D4B] ring-1 ring-[#E5E8EB] transition hover:bg-[#F9FAFB] sm:text-sm"
              >
                서비스 둘러보기
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 하단 3열 피처 카드 */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onSelectZone(featuresZone)}
        onKeyDown={(e) => e.key === 'Enter' && onSelectZone(featuresZone)}
        className={`grid cursor-pointer gap-3 rounded-2xl p-1 ${
          isMobile ? 'grid-cols-1' : 'grid-cols-3'
        } ${zoneRingClass(selectedZoneId === featuresZone.id)}`}
      >
        {FEATURE_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.badge}
              className={`rounded-2xl p-4 ${
                isWireframe
                  ? 'border border-dashed border-[#B0B8C1] bg-white'
                  : 'bg-white shadow-xs ring-1 ring-black/[0.04]'
              }`}
            >
              {isWireframe ? (
                <div className="space-y-2.5">
                  <div className="h-6 w-6 rounded-lg bg-[#E5E8EB]" />
                  <div className="h-3 w-3/4 rounded-full bg-[#D1D6DB]" />
                  <div className="h-2.5 w-full rounded-full bg-[#E5E8EB]" />
                </div>
              ) : (
                <>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8F3FF] text-[#3182F6]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-[#191F28]">{card.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B7684]">{card.desc}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
