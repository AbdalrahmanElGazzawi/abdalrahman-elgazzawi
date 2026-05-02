import Link from "next/link";
export function Footer() {
  return (
    <footer className="border-t border-hairline py-10 text-center text-muted text-[12px] muted-text">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Abdalrahman ElGazzawi · Riyadh · Cairo</div>
        <div className="flex items-center gap-4">
          <Link href="/work/falcons" className="hover:text-paper">Falcons case study</Link>
          <span aria-hidden="true">·</span>
          <Link href="/notes" className="hover:text-paper">Notes</Link>
          <span aria-hidden="true">·</span>
          <Link href="/downloads" className="hover:text-paper">Downloads</Link>
          <span aria-hidden="true">·</span>
          <Link href="/resume" className="hover:text-paper">Résumé</Link>
        </div>
      </div>
    </footer>
  );
}
