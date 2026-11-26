import { useState } from 'react';
import { Check } from 'lucide-react';
import type { DemoProps } from '../../../types/layout';
import { getZone, zoneRingClass } from './demoUtils';

export default function SplitScreenDemo({
  isWireframe,
  viewport,
  selectedZoneId,
  onSelectZone,
}: DemoProps) {
  const [email, setEmail] = useState('architect@toss.im');
  const [submitted, setSubmitted] = useState(false);

  const isMobile = viewport === 'mobile';
  const leftZone = getZone('split', 'split-left');
  const rightZone = getZone('split', 'split-right');

  return (
    <div className="w-full bg-[#F2F4F6] p-4 sm:p-6">
      <div
        className={`grid overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/[0.05] ${
          isMobile ? 'grid-cols-1' : 'min-h-[380px] grid-cols-2'
        }`}
      >
        {/* 좌측 브랜드 패널 */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(leftZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(leftZone)}
          className={`flex cursor-pointer flex-col items-center justify-center bg-[#3182F6] p-8 text-center text-white ${zoneRingClass(
            selectedZoneId === leftZone.id,
            true
          )}`}
        >
          {isWireframe ? (
            <div className="flex flex-col items-center gap-3">
              <div className="h-14 w-14 rounded-full bg-white" />
              <span className="rounded-md bg-white/20 px-2.5 py-0.5 text-[10px] font-bold">
                LEFT 50% · BRAND PANEL
              </span>
            </div>
          ) : (
            <>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-black text-[#3182F6] shadow-md">
                T
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">
                워크스페이스에 오신 걸 환영해요
              </h3>
              <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-white/85">
                팀원들과 실시간으로 디자인 토큰과 화면 구조를 공유하세요.
              </p>
            </>
          )}
        </div>

        {/* 우측 액션 패널 */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelectZone(rightZone)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectZone(rightZone)}
          className={`flex cursor-pointer flex-col justify-center bg-white p-7 sm:p-9 ${zoneRingClass(
            selectedZoneId === rightZone.id
          )}`}
        >
          {isWireframe ? (
            <div className="mx-auto w-full max-w-[240px] space-y-3">
              <span className="inline-block rounded-md bg-[#F2F4F6] px-2 py-0.5 text-[10px] font-bold text-[#4E5968]">
                RIGHT 50% · ACTION FORM
              </span>
              <div className="h-4 w-3/4 rounded-full bg-[#333D4B]" />
              <div className="h-2.5 w-full rounded-full bg-[#E5E8EB]" />
              <div className="h-2.5 w-2/3 rounded-full bg-[#E5E8EB]" />
              <div className="mt-4 h-9 w-28 rounded-full bg-[#191F28]" />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[280px]">
              <span className="text-[11px] font-bold text-[#3182F6]">10초 만에 시작하기</span>
              <h3 className="mt-1 text-xl font-bold text-[#191F28]">계정 로그인</h3>
              <p className="mt-1 text-xs text-[#6B7684]">
                업무용 이메일을 입력하면 인증 링크를 보내드려요.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                onClick={(e) => e.stopPropagation()}
                className="mt-5 space-y-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="name@company.co.kr"
                  className="w-full rounded-xl border border-[#E5E8EB] bg-[#F9FAFB] px-3.5 py-2.5 text-xs text-[#191F28] outline-none focus:border-[#3182F6] focus:bg-white"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#191F28] py-2.5 text-xs font-semibold text-white transition hover:bg-[#333D4B]"
                >
                  {submitted ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#3182F6]" />
                      인증 메일 발송 완료
                    </>
                  ) : (
                    '인증 메일 받기'
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
