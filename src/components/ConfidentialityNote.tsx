import { confidentialityNote } from "@/content/site";

export function ConfidentialityNote({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-start gap-3 text-[12px] text-muted font-mono leading-[1.6] border border-rule/60 bg-deep/60 px-4 py-3 ${className}`}>
      <span aria-hidden className="text-gold mt-[2px] shrink-0">●</span>
      <span>{confidentialityNote}</span>
    </div>
  );
}
