import Link from "next/link";
import { navLinks } from "@/content/site";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-bg/[.92] backdrop-blur supports-[backdrop-filter]:bg-bg/75">
      <div className="container-page flex items-center justify-between py-4 text-[13px]">
        <Link href="/" className="font-serif italic text-[18px] text-paper tracking-[0.02em]">
          Abdalrahman ElGazzawi<span className="text-gold">.</span>
        </Link>
        <ul className="hidden md:flex gap-7 list-none">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted hover:text-paper text-[12px] font-medium tracking-[0.08em] uppercase transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
