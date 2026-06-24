import Link from "next/link";
import { contactCtas, site } from "@/content/site";

export function ContactCTA() {
  return (
    <section id="contact-cta" className="border-t border-hairline">
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <div className="eyebrow mb-5">// Contact</div>
        <h2 className="font-serif text-display-s sm:text-display-m max-w-[26ch]">
          Let&apos;s build the commercial layer<br />behind your esports ambition.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactCtas.map((c) => (
            <a key={c.audience}
              href={`mailto:${site.email}?subject=${encodeURIComponent(c.subject)}`}
              className="panel lift p-6 sm:p-7 group block">
              <div className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">{c.audience}</div>
              <h3 className="mt-3 font-serif italic text-[20px] text-paper leading-tight">{c.q}</h3>
              <p className="mt-3 text-muted text-[13px] leading-[1.6]">{c.body}</p>
              <div className="mt-6 text-[11px] font-mono tracking-[0.14em] uppercase text-gold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-2">
                Email me directly →
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] font-mono">
          <a href={`mailto:${site.email}`} className="text-paper hover:text-gold transition-colors">{site.email}</a>
          <span className="text-muted">·</span>
          <a href={site.linkedin} className="text-paper hover:text-gold transition-colors">{site.linkedinDisplay}</a>
          <span className="text-muted">·</span>
          <Link href="/contact" className="text-paper hover:text-gold transition-colors">/contact (form)</Link>
          <span className="text-muted">·</span>
          <Link href="/#collaborate" className="text-paper hover:text-gold transition-colors">/ways to collaborate</Link>
        </div>
      </div>
    </section>
  );
}
