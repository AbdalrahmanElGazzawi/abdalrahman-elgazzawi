import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10 text-muted text-[13px]">
      <div className="container-page flex flex-col gap-6">
        {/* Contact row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center sm:text-left">
          <a href={`mailto:${site.email}`} className="hover:text-paper">
            <span className="text-gold">✉</span>  {site.email}
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            <span className="text-gold">●</span>  WhatsApp · {site.whatsappDisplay}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
            <span className="text-gold">in</span>  {site.linkedinDisplay}
          </a>
          <span>{site.location}</span>
        </div>

        <div className="border-t border-hairline pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} {site.name}</div>
          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href="/#work"      className="hover:text-paper">Work</Link>
            <Link href="/about"      className="hover:text-paper">About</Link>
            <Link href="/contact"    className="hover:text-paper">Contact</Link>
            <Link href="/downloads"  className="hover:text-paper">Downloads</Link>
            <a    href={`mailto:${site.email}`} className="hover:tex