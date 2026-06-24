import Link from "next/link";
import { site, contactCtas } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata = { title: "Contact", description: "Email Abdalrahman ElGazzawi directly or send a brief." };

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md border-b border-hairline">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-medium tracking-tight"><span className="font-serif italic text-[18px] mr-1">A.</span>ElGazzawi<span className="text-dim mx-2">·</span><span className="text-muted text-[13px]">Koge</span></Link>
        <Link href="/" className="text-[12px] font-mono uppercase tracking-[0.06em] text-muted hover:text-paper">← Home</Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[13px] text-muted">© {new Date().getFullYear()} {site.name}.</p>
        <p className="text-[13px] text-muted"><span className="font-serif italic">Designed and built by Koge.</span></p>
      </div>
    </footer>
  );
}

export default function Contact() {
  return (
    <>
      <Nav />
      <main>
        <section className="border-b border-hairline">
          <div className="container-page py-20 sm:py-28">
            <div className="eyebrow">// Contact</div>
            <h1 className="mt-4 font-serif text-display-m sm:text-display-l leading-[0.98] max-w-[18ch]">
              Have a brief?<br />Email me directly.
            </h1>
            <div className="mt-10">
              <div className="eyebrow mb-4">// Direct</div>
              <a href={`mailto:${site.email}`} className="font-serif text-[28px] md:text-[44px] tracking-[-0.02em] underline-offset-[6px] decoration-[1px] decoration-gold/30 hover:decoration-gold hover:text-gold transition-colors">{site.email}</a>
            </div>
          </div>
        </section>

        <section className="border-b border-hairline py-20">
          <div className="container-page">
            <div className="eyebrow mb-4">// Audience-segmented intros</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactCtas.map((c) => (
                <a key={c.audience} href={`mailto:${site.email}?subject=${encodeURIComponent(c.subject)}`} className="panel lift p-6 sm:p-7 group block">
                  <div className="text-[10px] font-mono text-gold tracking-[0.18em] uppercase">{c.audience}</div>
                  <h3 className="mt-3 font-serif italic text-[20px] text-paper">{c.q}</h3>
                  <p className="mt-3 text-muted text-[13px] leading-[1.6]">{c.body}</p>
                  <div className="mt-6 text-[11px] font-mono tracking-[0.14em] uppercase text-gold group-hover:translate-x-0.5 transition-transform">EMAIL ME DIRECTLY →</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page max-w-[680px]">
            <div className="eyebrow">// Or use the form</div>
            <h2 className="mt-3 font-serif text-display-s">Send a brief.</h2>
            <div className="mt-10"><ContactForm /></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
