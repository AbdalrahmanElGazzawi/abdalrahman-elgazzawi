import type { ReactNode } from "react";

export function Section({ id, label, title, accent, lead, children, className = "" }: {
  id?: string; label?: string; title?: ReactNode; accent?: ReactNode; lead?: ReactNode; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`border-t border-hairline py-20 sm:py-24 lg:py-[100px] ${className}`}>
      <div className="container-page">
        {label && <div className="label-eyebrow mb-6">{label}</div>}
        {title && (
          <h2 className="font-serif text-display-sm font-medium leading-[1.1]">
            {title}{accent && <span className="text-gold italic"> {accent}</span>}
          </h2>
        )}
        <div className="gold-rule mt-4 mb-8" />
        {lead && <p className="text-muted text-base max-w-[720px] mb-12">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
