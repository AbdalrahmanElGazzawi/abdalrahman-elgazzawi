import { Nav } from "@/components/Nav";
import { Hero } from "@/components/HeroCommandMap";
import { MetricStrip } from "@/components/MetricStrip";
import { ThesisFlow } from "@/components/ThesisFlow";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { PricingEngineDiagram } from "@/components/PricingEngineDiagram";
import { CommercialTierTabs } from "@/components/CommercialTierTabs";
import { OperatingPrinciples } from "@/components/OperatingPrinciples";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { BrandInvolvementGrid } from "@/components/BrandInvolvementGrid";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricStrip />
        <ThesisFlow />
        <CaseStudyGrid />
        <PricingEngineDiagram />
        <CommercialTierTabs />
        <OperatingPrinciples />
        <ExperienceTimeline />
        <BrandInvolvementGrid />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
