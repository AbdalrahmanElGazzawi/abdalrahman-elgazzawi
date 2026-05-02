import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ContactCTA } from "@/components/ContactCTA";
import { ConfidentialityNote } from "@/components/ConfidentialityNote";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact — Abdalrahman ElGazzawi",
  description: "Get in touch about commercial systems, sponsorship architecture, pricing methodology, or hiring for senior commercial roles in esports.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-hairline">
          <div className="container-page py-16 sm:py-20 lg:py-24">
            <div className="eyebrow mb-4">// Contact</div>
            <h1 className="font-serif text-display-m sm:text-display-l leading-[0.98] max-w-[18ch]">
              Let's build the commercial layer<br /><span className="text-gold italic">behind your esports ambition.</span>
            </h1>
            <p className="mt-7 text-paper text-[16px] sm:text-[17px] leading-[1.7] max-w-prose">
              Available for select commercial, partnership, and operating roles — and for org-side advisory on pricing methodology, sponsorship architecture, and pipeline control.
            </p>
          </div>
        </header>

        <ContactCTA />

        <section className="border-t border-hairline py-16 sm:py-20">
          <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow">// Direct</div>
              <h2 className="mt-3 font-serif text-display-s">Reach out directly.</h2>
              <dl className="mt-7 grid grid-cols-[100px_1fr] gap-x-6 gap-y-4 max-w-[480px]">
                <dt className="text-gold text-[10px] font-mono tracking-[0.18em] uppercase pt-1.5">Email</dt>
                <dd className="font-serif text-[17px]"><a className="text-gold hover:underline" href={`mailto:${site.email}`}>{site.email}</a></dd>
                <dt className="text-gold text-[10px] font-mono tracking-[0.18em] uppercase pt-1.5">Phone</dt>
                <dd className="font-serif text-[17px]">{site.phone}</dd>
                <dt className="text-gold text-[10px] font-mono tracking-[0.18em] uppercase pt-1.5">LinkedIn</dt>
                <dd className="font-serif text-[17px]"><a className="text-gold hover:underline" href={site.linkedin}>{site.linkedinDisplay}</a></dd>
                <dt className="text-gold text-[10px] font-mono tracking-[0.18em] uppercase pt-1.5">Based</dt>
                <dd className="font-serif text-[17px]">{site.location}</dd>
              </dl>
              <ConfidentialityNote className="mt-10" />
            </div>
            <div className="lg:col-span-7">
              <div className="eyebrow">// Or use the form</div>
              <h2 className="mt-3 font-serif text-display-s">Send a message.</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
