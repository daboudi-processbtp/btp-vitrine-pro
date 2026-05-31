import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock, ShieldCheck, FileCheck2, BadgeEuro } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { CalBookingEmbed } from "@/components/ui/CalBookingEmbed";

const TITLE = "Contact — Demander un devis | PROCESSBTP";
const DESCRIPTION =
  "Demandez un devis personnalisé pour vos formations BTP. Réponse sous 24 h ouvrées, ou réservez un appel découverte de 20 minutes.";

// TODO : remplacer par vos vraies coordonnées
const CONTACT_EMAIL = "d.aboudi@processbtp.com";
const CONTACT_PHONE = "+33 6 59 13 72 52";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    formation: typeof search.formation === "string" ? search.formation : undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const REASSURANCE = [
  { icon: Clock, text: "Réponse sous 48 h ouvrées" },
  { icon: ShieldCheck, text: "Organisme certifié Qualiopi" },
  { icon: FileCheck2, text: "Devis personnalisé, sans engagement" },
  { icon: BadgeEuro, text: "Aucun paiement en ligne" },
];

function ContactPage() {
  const { formation } = Route.useSearch();
  return (
    <main id="main">
      <section className="bg-primary py-20 text-primary-foreground" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Contact</p>
            <h1 id="contact-title" className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
              Construisons votre plan de formation BTP.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85">
              Demandez un devis personnalisé — réponse sous 24 h ouvrées. Ou réservez un appel
              découverte de 20 minutes pour cadrer votre besoin.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {REASSURANCE.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-white/90">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cta" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CalBookingEmbed label="Réservez un appel découverte (20 min)" variant="outline-light" />
            </div>

            <dl className="mt-10 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/70" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/70" aria-hidden="true" />
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="text-white hover:underline">
                  {CONTACT_PHONE}
                </a>
              </div>
            </dl>
          </div>

          <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/15 sm:p-8">
            <h2 className="font-display text-xl font-bold">Demander un devis</h2>
            <p className="mt-1 text-sm text-white/75">
              Les champs marqués sont nécessaires pour vous répondre rapidement.
            </p>
            <div className="mt-6">
              <ContactForm variant="dark" initialFormation={formation} />
            </div>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm text-white/85">
                Vous préférez en parler de vive voix ?
              </p>
              <div className="mt-3">
                <CalBookingEmbed label="Réserver un appel découverte" variant="outline-light" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}