import { site, contactCtas } from "@/content/site";
import { Section } from "./Section";

export function MultiCTA() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's get the messy"
      accent="clear and shipping."
      sub="Email or LinkedIn — both go straight to me."
    >
      {/* Three giant CTAs: Email · WhatsApp · LinkedIn */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <a
          href={`mailto:${site.email}?subject=Commercial%20partnerships%20enquiry`}
          className="panel lift p-6 sm:p-7 group"
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">Email</div>
          <div className="text-paper text-[19px] sm:text-[21px] font-bold tracking-tight mt-2 group-hover:text-gold transition-colors break-all">
            {site.email}
          </div>
          <div className="text-muted text-[13px] mt-2">
            Direct inbox. Reply within 24h on business days.
          </div>
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="panel lift p-6 sm:p-7 group"
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">WhatsApp</div>
          <div className="text-paper text-[19px] sm:text-[21px] font-bold tracking-tight mt-2 group-hover:text-gold transition-colors">
            {site.whatsappDisplay}
          </div>
          <div className="text-muted text-[13px] mt-2">
            Tap to chat — fastest channel for time-sensitive briefs.
          </div>
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="panel lift p-6 sm:p-7 group"
        >
          <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">LinkedIn</div>
          <div className="text-paper text-[19px] sm:text-[21px] font-bold tracking-tight mt-2 group-hover:text-gold transition-colors break-all">
            {site.linkedinDisplay}
          </div>
          <div className="text-muted text-[13px] mt-2">
            Open to relevant inbound — roles, projects, advisory.
          </div>
        </a>
      </div>

      {/* Segmented CTAs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contactCtas.map((c) => (
          <a
            key={c.audience}
            href={`mailto:${site.email}?subject=${encodeURIComponent(c.subject)}`}
            className="panel lift p-5 sm:p-6 block g