import Link from "next/link";
import { navLinks } from "@/content/site";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/65">
      <div className="container-page flex items-center justify-between py-3.5">
        <Link href="/" className="font-serif text-[18px] tracking-[0.01em] flex items-center gap-2 group">
          <span className="text-paper italic">Abdalrahman ElGazzawi</span>
          <span className="text-gold transition-colors group-hover:text-gold-soft">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex gap-6 list-none">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted hover:text-paper text-[12px] tracking-[0.06em] uppercase transition-colors font-mono">{l.label}</a>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="text-[12px] tracking-[0.1em] uppercase font-mono text-bg bg-gold hover:bg-gold-soft px-3.5 py-2 transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
