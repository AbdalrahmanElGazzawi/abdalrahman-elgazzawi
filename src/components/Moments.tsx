import Image from "next/image";

const moments = [
  { src: "/photos/keynote-leap.jpg",     alt: "Keynote at Saudi LEAP 24 — Ministry of Media stage", w: "lg", caption: "LEAP 24 · keynote · Riyadh" },
  { src: "/photos/ewc-grand-final.jpg",  alt: "Esports World Cup Grand Final — Qiddiya Arena",       w: "sm", caption: "EWC · Grand Final · Day 4" },
  { src: "/photos/qiddiya-arena.jpg",    alt: "Qiddiya Arena entrance during EWC",                   w: "sm", caption: "Qiddiya Arena · EWC 2024" },
  { src: "/photos/sef-flag.jpg",         alt: "Saudi Esports Federation flag at activation",         w: "sm", caption: "Saudi Esports Federation activation" },
  { src: "/photos/ewc-venue-night.jpg",  alt: "EWC archway · stc play gaming hall",                  w: "lg", caption: "EWC · venue · stc play gaming hall" },
  { src: "/photos/racing-sim.jpg",       alt: "EWC sim racing activation",                           w: "sm", caption: "EWC · racing activation" },
];

export function Moments() {
  return (
    <section id="moments" className="scroll-mt-20 bg-bg">
      <div className="container-page py-24 md:py-32">
        <div className="flex items-baseline justify-between flex-wrap gap-y-3 mb-10">
          <div>
            <p className="eyebrow mb-3">On the ground</p>
            <h2 className="text-display-s sm:text-display-m font-light leading-[1.05] max-w-[820px]">
              Selected moments —<br />
              <em className="italic text-gold">conferences, finals, federation work.</em>
            </h2>
          </div>
        </div>

        {/* Row 1: 2 large */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <FigureLarge m={moments[0]} priority />
          <FigureLarge m={moments[4]} />
        </div>

        {/* Row 2: 4 small */}
        <div className="mt-3 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <FigureSmall m={moments[1]} />
          <FigureSmall m={moments[2]} />
          <FigureSmall m={moments[3]} />
          <FigureSmall m={moments[5]} />
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-gold/25" /></div>
    </section>
  );
}

function FigureLarge({ m, priority }: { m: typeof moments[number]; priority?: boolean }) {
  return (
    <figure className="group relative overflow-hidden ring-1 ring-hairline bg-deep">
      <div className="relative aspect-[16/10]">
        <Image src={m.src} alt={m.alt} fill priority={priority}
               sizes="(max-width: 768px) 100vw, 50vw"
               className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-bg/95 to-transparent">
        <span className="text-[11px] tracking-[0.18em] uppercase text-gold/90 font-mono">{m.caption}</span>
      </figcaption>
    </figure>
  );
}

function FigureSmall({ m }: { m: typeof moments[number] }) {
  return (
    <figure className="group relative overflow-hidden ring-1 ring-hairline bg-deep">
      <div className="relative aspect-[3/4]">
        <Image src={m.src} alt={m.alt} fill
               sizes="(max-width: 768px) 50vw, 25vw"
               className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-bg/95 to-transparent">
        <span className="text-[10px] tracking-[0.16em] uppercase text-gold/90 font-mono">{m.caption}</span>
      </figcaption>
    </figure>
  );
}
