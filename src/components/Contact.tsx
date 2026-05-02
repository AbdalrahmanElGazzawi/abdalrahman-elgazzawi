import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] border-t border-hairline">
      <div
        className="contact-photo bg-cover bg-center min-h-[300px] lg:min-h-full"
        style={{ backgroundImage: "url('/img/contact.jpg')" }}
        aria-hidden="true"
      />
      <div className="px-7 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
        <div className="text-gold text-[11px] font-bold tracking-[0.25em] uppercase mb-6 gold-text">Let’s talk.</div>
        <h2 className="font-serif text-[clamp(28px,4vw,46px)] leading-[1.2]">
          <span>Available for select </span>
          <span className="text-gold italic gold-text">commercial, partnerships, and operating roles.</span>
        </h2>
        <dl className="mt-10 grid grid-cols-[90px_1fr] gap-x-6 gap-y-3 max-w-[480px]">
          <dt className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase pt-1.5 gold-text">Email</dt>
          <dd className="font-serif text-[17px]"><a className="text-gold hover:underline gold-text" href={`mailto:${site.email}`}>{site.email}</a></dd>
          <dt className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase pt-1.5 gold-text">Phone</dt>
          <dd className="font-serif text-[17px]">{site.phone}</dd>
          <dt className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase pt-1.5 gold-text">LinkedIn</dt>
          <dd className="font-serif text-[17px]"><a className="text-gold hover:underline gold-text" href={site.linkedin}>{site.linkedinDisplay}</a></dd>
          <dt className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase pt-1.5 gold-text">Based</dt>
          <dd className="font-serif text-[17px]">{site.location}</dd>
        </dl>
        <ContactForm />
        <div className="mt-12 font-serif italic text-muted muted-text">— {site.name}</div>
      </div>
    </section>
  );
}
