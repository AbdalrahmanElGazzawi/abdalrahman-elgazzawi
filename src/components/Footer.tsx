import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-[13px] text-muted">© {new Date().getFullYear()} {site.name}</div>
        <div className="flex items-center flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted">
          <Link href="/#work"      className="hover:text-paper transition-colors">Work</Link>
          <Link href="/#campaigns" className="hover:text-paper transition-colors">Campaigns</Link>
          <Link href="/#federation" className="hover:text-paper transition-colors">Advisory</Link>
          <Link href="/#collaborate" className="hover:text-paper transition-colors">Collaborate</Link>
          <Link href="/about"      className="hover:text-paper transition-colors">About</Link>
          <Link href="/contact"    className="hover:text-paper transition-colors">Contact</Link>
        </div>
        <div className="text-[13px] text-muted italic">
          Designed and built by Koge · Cormorant Garamond
        </div>
      </div>
    </footer>
  );
}
