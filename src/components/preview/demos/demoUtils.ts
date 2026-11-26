import type { LayoutId, LayoutZoneInfo } from '../../../types/layout';
import { LAYOUT_PATTERNS } from '../../../data/layoutPatterns';

export function getZone(patternId: LayoutId, zoneId: string): LayoutZoneInfo {
  const pattern = LAYOUT_PATTERNS.find((p) => p.id === patternId);
  const found = pattern?.zones.find((z) => z.id === zoneId);
  if (found) return found;
  return {
    id: zoneId,
    label: '레이아웃 영역',
    role: '구조 요소',
    cssRule: 'display: grid;',
    uxTip: '영역을 클릭하여 CSS 속성과 UX 가이드를 확인하세요.',
  };
}

export function zoneRingClass(isSelected: boolean, darkBg = false): string {
  if (!isSelected) {
    return darkBg
      ? 'ring-1 ring-transparent hover:ring-white/40 transition-all'
      : 'ring-1 ring-transparent hover:ring-[#3182F6]/35 transition-all';
  }
  return darkBg
    ? 'ring-2 ring-white ring-offset-2 ring-offset-[#3182F6] transition-all'
    : 'ring-2 ring-[#3182F6] ring-offset-2 ring-offset-[#F2F4F6] transition-all';
}
