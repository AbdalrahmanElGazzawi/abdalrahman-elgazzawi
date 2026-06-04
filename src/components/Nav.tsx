import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-hairline bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="container-page flex items-center justify-between py-3.5">
        <Link href="/" className="font-bold text-[16px] text-paper tracking-tight">
          {site.name}<span className="text-gold">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-5">
          <ul className="flex gap-5 list-none">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted hover:text-paper text-[13px] font-medium transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title={"WhatsApp · " + site.whatsappDisplay} className="text-muted hover:text-paper border border-hairline p-2 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4-.1-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="text-muted hover:text-paper border border-hairline p-2 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8 19H5V8h3v11zM6.5 6.7C5.5 6.7 4.7 5.9 4.7 5s.8-1.7 1.8-1.7S8.3 4.1 8.3 5s-.8 1.7-1.8 1.7zM20 19h-3v-5.6c0-3.4-4-3.1-4 0V19h-3V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z"/>
              </svg>
            </a>
            <a href={"mailto:" + site.email} className="text-[13px] font-semibold text-bg bg-gold hover:bg-gold-soft px-4 py-2 transition-colors">Email</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
