import { useState } from 'react';
import { Check, Copy, Download, FileCode2 } from 'lucide-react';
import type { LayoutPattern } from '../../types/layout';

interface CodeViewerProps {
  pattern: LayoutPattern;
}

type CodeTab = 'react' | 'html';

export default function CodeViewer({ pattern }: CodeViewerProps) {
  const [activeTab, setActiveTab] = useState<CodeTab>('react');
  const [copied, setCopied] = useState(false);

  const code = activeTab === 'react' ? pattern.codeReact : pattern.codeHtml;
  const lines = code.split('\n');
  const fileExt = activeTab === 'react' ? 'tsx' : 'html';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${pattern.id}-layout.${fileExt}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#191F28] text-white shadow-sm ring-1 ring-black/10">
      {/* 상단 탭 & 복사 버튼 */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
        <div className="inline-flex rounded-xl bg-white/8 p-0.5">
          <button
            type="button"
            onClick={() => setActiveTab('react')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              activeTab === 'react'
                ? 'bg-[#3182F6] text-white shadow-xs'
                : 'text-[#B0B8C1] hover:text-white'
            }`}
          >
            React + Tailwind
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('html')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
              activeTab === 'html'
                ? 'bg-[#3182F6] text-white shadow-xs'
                : 'text-[#B0B8C1] hover:text-white'
            }`}
          >
            HTML + CSS + JS
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleDownload}
            title="파일 다운로드"
            aria-label="코드 파일 다운로드"
            className="inline-flex items-center gap-1 rounded-xl bg-white/8 px-2.5 py-1.5 text-xs font-semibold text-[#D1D6DB] transition hover:bg-white/15 hover:text-white"
          >
            <Download className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition ${
              copied
                ? 'bg-[#28C840] text-[#0B2912]'
                : 'bg-[#3182F6] text-white hover:bg-[#1B64DA]'
            }`}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                복사 완료!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                코드 복사
              </>
            )}
          </button>
        </div>
      </div>

      {/* 파일명 메타 바 */}
      <div className="flex items-center justify-between border-b border-white/5 bg-black/20 px-4 py-2 text-[11px] text-[#8B95A1]">
        <span className="inline-flex items-center gap-1.5 font-mono">
          <FileCode2 className="h-3.5 w-3.5 text-[#3182F6]" />
          {pattern.id}-layout.{fileExt}
        </span>
        <span>{lines.length}줄 · 의존성 없음</span>
      </div>

      {/* 코드 영역 */}
      <div className="flex-1 overflow-auto p-4 font-mono text-[12px] leading-relaxed">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-white/[0.04]">
                <td className="w-9 select-none pr-3 text-right text-[11px] text-[#4E5968]">
                  {idx + 1}
                </td>
                <td className="whitespace-pre text-[#E5E8EB]">{line || ' '}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
}
