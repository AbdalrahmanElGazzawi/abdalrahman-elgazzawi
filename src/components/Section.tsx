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
          <h2 className="text-display-s sm:text-display-m font-bold text-paper max-w-[22ch]">
            {title}
            {accent && (
              <>
                {" "}
                <span className="text-gold font-bold">{accent}</span>
              </>
            )}
          </h2>
        )}
        {sub && (
          <p className="text-muted text-[15px] sm:text-[16px] mt-4 max-w-prose leading-[1.65]">
            {sub}
          </p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
