import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { CalBookingEmbed } from "@/components/ui/CalBookingEmbed";

// TODO : remplacer par vos vraies coordonnées
const CONTACT_EMAIL = "d.aboudi@processbtp.com";
const CONTACT_PHONE = "+33 6 59 13 72 52";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-primary py-20 text-primary-foreground" aria-labelledby="cta-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Passons à l'action</p>
          <h2 id="cta-title" className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
            Construisons votre plan de formation BTP.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85">
            Demandez un devis personnalisé — réponse sous 48 h ouvrées. Ou réservez un appel
            découverte de 20 minutes pour cadrer votre besoin.
          </p>

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
          <h3 className="font-display text-xl font-bold">Demander un devis</h3>
          <p className="mt-1 text-sm text-white/75">
            Les champs marqués sont nécessaires pour vous répondre rapidement.
          </p>
          <div className="mt-6">
            <ContactForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
