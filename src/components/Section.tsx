import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({ id, eyebrow, title, accent, sub, children, className = "", topRule = true }: {
  id?: string; eyebrow?: string; title?: ReactNode; accent?: ReactNode; sub?: ReactNode; children: ReactNode; className?: string; topRule?: boolean;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24 lg:py-28", topRule && "border-t border-hairline", className)}>
      <div className="container-page">
        {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
        {title && (
          <h2 className="font-serif text-display-s sm:text-display-m max-w-[20ch]">
            {title}{accent && <><br /><span className="text-gold italic">{accent}</span></>}
          </h2>
        )}
        {sub && <p className="text-muted text-[15px] sm:text-[16px] mt-5 max-w-prose leading-[1.7]">{sub}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
