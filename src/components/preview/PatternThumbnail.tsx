import type { LayoutId } from '../../types/layout';

interface PatternThumbnailProps {
  id: LayoutId;
}

/**
 * Renders miniature wireframe thumbnails faithfully modeled after layout_name.png
 */
export default function PatternThumbnail({ id }: PatternThumbnailProps) {
  switch (id) {
    case 'hero':
      return (
        <div className="flex h-full w-full flex-col gap-2 rounded-xl border border-[#EAEEF2] bg-[#F9FAFB] p-2.5">
          <div className="flex flex-1 flex-col justify-center gap-1.5 rounded-lg bg-[#E8F3FF] px-3 py-2.5">
            <div className="h-2 w-3/4 rounded-full bg-[#333D4B]" />
            <div className="h-1.5 w-1/2 rounded-full bg-[#4E5968]/80" />
            <div className="mt-1.5 flex h-4 w-14 items-center rounded-full bg-[#3182F6] px-1">
              <span className="ml-2.5 h-3 w-3 rounded-full border border-white bg-[#1B64DA]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="h-5 rounded-md bg-[#E5E8EB]" />
            <div className="h-5 rounded-md bg-[#E5E8EB]" />
            <div className="h-5 rounded-md bg-[#E5E8EB]" />
          </div>
        </div>
      );

    case 'bento':
      return (
        <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1.5 rounded-xl border border-[#EAEEF2] bg-[#F9FAFB] p-2.5">
          <div className="col-span-2 row-span-2 rounded-lg bg-[#E8F3FF]" />
          <div className="rounded-lg bg-[#3182F6]" />
          <div className="row-span-2 rounded-lg bg-[#E5E8EB]" />
          <div className="rounded-lg bg-[#E5E8EB]" />
          <div className="rounded-lg bg-[#E5E8EB]" />
        </div>
      );

    case 'split':
      return (
        <div className="grid h-full w-full grid-cols-2 overflow-hidden rounded-xl border border-[#EAEEF2] bg-white">
          <div className="flex items-center justify-center bg-[#3182F6]">
            <span className="h-5 w-5 rounded-full bg-white" />
          </div>
          <div className="flex flex-col justify-center gap-1.5 p-3">
            <div className="h-2 w-10 rounded-full bg-[#333D4B]" />
            <div className="h-1.5 w-full rounded-full bg-[#D1D6DB]" />
            <div className="h-1.5 w-3/4 rounded-full bg-[#E5E8EB]" />
            <div className="mt-2 h-3.5 w-9 rounded-full bg-[#333D4B]" />
          </div>
        </div>
      );

    case 'card-grid':
      return (
        <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1.5 rounded-xl border border-[#EAEEF2] bg-[#F9FAFB] p-2.5">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-md bg-white p-1.5 ${
                idx === 2 ? 'ring-2 ring-[#3182F6]' : 'ring-1 ring-[#EAEEF2]'
              }`}
            >
              <div
                className={`h-4 w-full rounded-sm ${
                  idx === 1 || idx === 3 || idx === 5 ? 'bg-[#E8F3FF]' : 'bg-[#E5E8EB]'
                }`}
              />
              <div className="h-1 w-3/4 rounded-full bg-[#D1D6DB]" />
            </div>
          ))}
        </div>
      );

    case 'sidebar':
      return (
        <div className="flex h-full w-full overflow-hidden rounded-xl border border-[#EAEEF2] bg-white">
          <div className="flex w-1/3 flex-col gap-1.5 bg-[#262C35] p-2">
            <div className="h-1.5 w-4/5 rounded-full bg-[#6B7684]" />
            <div className="h-4 w-full rounded bg-[#3182F6]" />
            <div className="h-1.5 w-3/4 rounded-full bg-[#6B7684]" />
            <div className="h-1.5 w-2/3 rounded-full bg-[#6B7684]" />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-2.5">
            <div className="h-2 w-2/3 rounded-full bg-[#333D4B]" />
            <div className="h-1.5 w-full rounded-full bg-[#E5E8EB]" />
            <div className="flex-1 rounded-lg bg-[#E8F3FF]" />
          </div>
        </div>
      );

    case 'magazine':
      return (
        <div className="flex h-full w-full flex-col gap-2 rounded-xl border border-[#EAEEF2] bg-white p-2.5">
          <div className="h-2.5 w-full rounded-sm bg-[#333D4B]" />
          <div className="grid flex-1 grid-cols-12 gap-2">
            <div className="col-span-6 rounded-lg bg-[#3182F6]" />
            <div className="col-span-6 flex flex-col justify-center gap-1.5">
              <div className="h-1.5 w-full rounded-full bg-[#D1D6DB]" />
              <div className="h-1.5 w-4/5 rounded-full bg-[#E5E8EB]" />
              <div className="mt-1 h-1.5 w-full rounded-full bg-[#D1D6DB]" />
              <div className="h-1.5 w-2/3 rounded-full bg-[#E5E8EB]" />
            </div>
          </div>
        </div>
      );

    case 'dashboard':
      return (
        <div className="flex h-full w-full flex-col gap-2 rounded-xl border border-[#EAEEF2] bg-[#F2F4F6] p-2.5">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-lg bg-white p-1.5">
              <div className="text-[7px] text-[#8B95A1]">주문</div>
              <div className="text-[11px] font-extrabold leading-tight text-[#191F28]">1,247</div>
            </div>
            <div className="rounded-lg bg-white p-1.5">
              <div className="text-[7px] text-[#8B95A1]">결제율</div>
              <div className="text-[11px] font-extrabold leading-tight text-[#191F28]">86%</div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between gap-1.5 rounded-lg bg-white px-3 pb-2 pt-3">
            <div className="h-1/3 w-full rounded-t bg-[#E8F3FF]" />
            <div className="h-3/5 w-full rounded-t bg-[#E8F3FF]" />
            <div className="h-1/2 w-full rounded-t bg-[#E8F3FF]" />
            <div className="h-5/6 w-full rounded-t bg-[#3182F6]" />
            <div className="h-2/3 w-full rounded-t bg-[#E8F3FF]" />
          </div>
        </div>
      );

    case 'z-pattern':
      return (
        <div className="relative flex h-full w-full flex-col justify-between rounded-xl border border-[#EAEEF2] bg-white p-2.5">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full p-3.5"
          >
            <polyline
              points="14,14 86,14 14,86 86,86"
              fill="none"
              stroke="#3182F6"
              strokeWidth="2"
              strokeDasharray="5 4"
              strokeOpacity="0.6"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-between">
            <div className="h-3 w-7 rounded bg-[#333D4B]" />
            <div className="h-3 w-9 rounded-full bg-[#E5E8EB]" />
          </div>
          <div className="relative z-10 mx-auto h-1.5 w-14 rounded-full bg-[#4E5968]" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="h-2 w-10 rounded-full bg-[#E5E8EB]" />
            <div className="h-4 w-11 rounded-full bg-[#3182F6]" />
          </div>
        </div>
      );

    case 'full-bleed':
      return (
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#3182F6]">
          <div className="absolute -bottom-6 -left-4 h-20 w-20 rounded-full bg-white/18" />
          <div className="absolute right-3 top-3 h-5 w-5 rounded-full bg-white/80" />
        </div>
      );
  }
}
