import Image from "next/image";

const moments = [
  { src: "/photos/rooftop-network.jpg",  alt: "EWC operator dinner — international esports leadership network", caption: "EWC · operator dinner · Riyadh" },
  { src: "/photos/te-team.jpg",          alt: "Telecom Egypt esports squad — building the regional team",       caption: "Telecom Egypt · esports squad" },
  { src: "/photos/qiddiya-arena.jpg",    alt: "Qiddiya Arena entrance during EWC",                              caption: "Qiddiya Arena · EWC 2024" },
  { src: "/photos/sef-flag.jpg",         alt: "Saudi Esports Federation flag at activation",                    caption: "Saudi Esports Federation" },
  { src: "/photos/ewc-venue-night.jpg",  alt: "EWC archway · stc play gaming hall",                             caption: "EWC venue · stc play gaming hall" },
  { src: "/photos/racing-sim.jpg",       alt: "EWC sim racing activation",                                      caption: "EWC · sim racing activation" },
];

export function Moments() {
  return (
    <section id="moments" className="scroll-mt-20 bg-bg">
      <div className="container-page py-20 md:py-28">
        <p className="eyebrow mb-3">On the ground</p>
        <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-medium leading-[1.05] tracking-[-0.015em] max-w-[820px] text-paper">
          Selected moments — <em className="italic font-normal text-gold">conferences, finals, federation work.</em>
        </h2>

        {/* Row 1: 2 large */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <FigureLarge m={moments[0]} priority />
          <FigureLarge m={moments[4]} />
        </div>

        {/* Row 2: 4 small */}
        <div className="mt-4 md:mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <FigureSmall m={moments[1]} />
          <FigureSmall m={moments[2]} />
          <FigureSmall m={moments[3]} />
          <FigureSmall m={moments[5]} />
        </div>
      </div>
      <div className="container-page"><div className="h-px bg-hairline" /></div>
    </section>
  );
}

function FigureLarge({ m, priority }: { m: typeof moments[number]; priority?: boolean }) {
  return (
    <figure className="group relative overflow-hidden rounded-[10px] border border-hairline bg-panel transition-all duration-300 hover:border-gold/60 hover:shadow-[0_18px_50px_-30px_rgba(10,31,61,0.30)]">
      <div className="relative aspect-[16/10]">
        <Image src={m.src} alt={m.alt} fill priority={priority}
               sizes="(max-width: 768px) 100vw, 50vw"
               className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
        <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
          <span className="text-[12px] tracking-[0.16em] uppercase text-white font-medium">{m.caption}</span>
        </figcaption>
      </div>
    </figure>
  );
}

function FigureSmall({ m }: { m: typeof moments[number] }) {
  return (
    <figure className="group relative overflow-hidden rounded-[10px] border border-hairline bg-panel transition-all duration-300 hover:border-gold/60 hover:shadow-[0_18px_50px_-30px_rgba(10,31,61,0.30)]">
      <div className="relative aspect-[3/4]">
        <Image src={m.src} alt={m.alt} fill
               sizes="(max-width: 768px) 50vw, 25vw"
               className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
        <figcaption className="absolute inset-x-0 bottom-0 p-3">
          <span className="text-[10.5px] tracking-[0.14em] uppercase text-white font-medium">{m.caption}</span>
        </figcaption>
      </div>
    </figure>
  );
}
