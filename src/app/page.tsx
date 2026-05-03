import { Nav } from "@/components/Nav";
import { Hero } from "@/components/HeroCommandMap";
import { MetricStrip } from "@/components/MetricStrip";
import { ThesisFlow } from "@/components/ThesisFlow";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CompetitiveCred } from "@/components/CompetitiveCred";
import { PricingEngineDiagram } from "@/components/PricingEngineDiagram";
import { CommercialTierTabs } from "@/components/CommercialTierTabs";
import { OperatingPrinciples } from "@/components/OperatingPrinciples";
import { FederationAdvisory } from "@/components/FederationAdvisory";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { BrandInvolvementGrid } from "@/components/BrandInvolvementGrid";
import { SelectedProjects } from "@/components/SelectedProjects";
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
        <CompetitiveCred />
        <PricingEngineDiagram />
        <CommercialTierTabs />
        <OperatingPrinciples />
        <FederationAdvisory />
        <ExperienceTimeline />
        <BrandInvolvementGrid />
        <SelectedProjects />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
