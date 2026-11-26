export type LayoutId =
  | 'hero'
  | 'bento'
  | 'split'
  | 'card-grid'
  | 'sidebar'
  | 'magazine'
  | 'dashboard'
  | 'z-pattern'
  | 'full-bleed';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export type PreviewMode = 'live' | 'wireframe';

export type LayoutCategory = '전체' | '랜딩 · 전환' | '콘텐츠 · 탐색' | '앱 · 데이터';

export interface LayoutZoneInfo {
  id: string;
  label: string;
  role: string;
  cssRule: string;
  uxTip: string;
}

export interface UxGuide {
  whenToUse: string[];
  keyPrinciples: string[];
  responsiveTip: string;
  caution: string;
}

export interface LayoutPattern {
  id: LayoutId;
  number: string;
  titleKo: string;
  titleEn: string;
  category: Exclude<LayoutCategory, '전체'>;
  summary: string;
  cssTech: string;
  uxGuide: UxGuide;
  zones: LayoutZoneInfo[];
  codeReact: string;
  codeHtml: string;
}

export interface DemoProps {
  isWireframe: boolean;
  viewport: ViewportMode;
  selectedZoneId: string | null;
  onSelectZone: (zone: LayoutZoneInfo) => void;
}
