import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10 text-center text-muted text-[12px] font-mono">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} {site.name} · {site.location}</div>
        <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-2">
          <Link href="/case-studies/team-falcons-commercial-stack" className="hover:text-paper">Case studies</Link>
          <Link href="/about" className="hover:text-paper">About</Link>
          <Link href="/contact" className="hover:text-paper">Contact</Link>
          <Link href="/downloads" className="hover:text-paper">Downloads</Link>
          <Link href="/notes" className="hover:text-paper">Notes</Link>
        </div>
      </div>
    </footer>
  );
}
