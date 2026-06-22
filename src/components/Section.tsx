import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id, eyebrow, title, accent, sub, children, className = "", topRule = true,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  accent?: ReactNode;
  sub?: ReactNode;
  children: ReactNode;
  className?: string;
  topRule?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        topRule && "border-t border-hairline",
        className
      )}
    >
      <div className="container-page">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        {title && (
          <h2 className="font-serif text-display-s sm:text-display-m text-paper max-w-[24ch] font-normal">
            {title}
            {accent && (
              <>
                {" "}
                <span className="text-gold italic">{accent}</span>
              </>
            )}
          </h2>
        )}
        {sub && (
          <p className="text-muted text-[16px] sm:text-[17px] mt-5 max-w-prose leading-[1.7]">
            {sub}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
