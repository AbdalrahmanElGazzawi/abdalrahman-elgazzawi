import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { Range } from "@/components/Range";
import { Falcons } from "@/components/Falcons";
import { Methodology } from "@/components/Methodology";
import { Phases } from "@/components/Phases";
import { Pipeline } from "@/components/Pipeline";
import { EWC } from "@/components/EWC";
import { BD } from "@/components/BD";
import { Advisory } from "@/components/Advisory";
import { Earlier } from "@/components/Earlier";
import { Principles } from "@/components/Principles";
import { Stack } from "@/components/Stack";
import { Brands } from "@/components/Brands";
import { Foundations } from "@/components/Foundations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Numbers />
        <Range />
        <Falcons />
        <Methodology />
        <Phases />
        <Pipeline />
        <EWC />
        <BD />
        <Advisory />
        <Earlier />
        <Principles />
        <Stack />
        <Brands />
        <Foundations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
