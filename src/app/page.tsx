import { Nav } from "@/components/Nav";
import { Hero } from "@/components/HeroCommandMap";
import { TrustStrip } from "@/components/TrustStrip";
import { ImageCaseStudyGrid } from "@/components/ImageCaseStudyGrid";
import { BrandLogoStrip } from "@/components/BrandLogoStrip";
import { MethodologyCallout } from "@/components/MethodologyCallout";
import { MultiCTA } from "@/components/MultiCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ImageCaseStudyGrid />
        <BrandLogoStrip />
        <MethodologyCallout />
        <MultiCTA />
      </main>
      <Footer />
    </>
  );
}
