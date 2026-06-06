import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Une formation Chef de chantier dense, directement applicable. Les retours d'expérience du formateur changent tout.",
    name: "Responsable RH",
    role: "Entreprise générale, Hauts-de-France",
  },
  {
    quote:
      "Format petit groupe très efficace. Nos conducteurs de travaux ont gagné en méthode et en confiance.",
    name: "Directeur d'exploitation",
    role: "Groupe TP régional",
  },
  {
    quote:
      "Cadrage du besoin précis, programme sur mesure, suivi post-formation : du sérieux Qualiopi de bout en bout.",
    name: "Référente formation",
    role: "Maître d'ouvrage public",
  },
];

const partners = [
  "IUT de Béthune",
  "Polytech Lille",
  "ESCT",
  "Le Moniteur",
  "La Solive",
];

export function SocialProof() {
  return (
    <section className="bg-accent/35 py-20" aria-labelledby="proof-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Ils nous font confiance</p>
          <h2 id="proof-title" className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Des retours qui parlent du quotidien chantier.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-lg border border-border bg-card p-6">
              <Quote className="h-6 w-6 text-secondary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Partenaires &amp; écoles
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-4">
            {partners.map((p) => (
              <li
                key={p}
                className="flex h-16 min-w-[160px] items-center justify-center rounded-md border border-dashed border-border bg-card px-4 text-center text-sm font-display font-bold text-foreground/70"
                aria-label={`Logo ${p} — à intégrer`}
                title="Logo à intégrer après autorisation"
              >
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-center text-xs italic text-muted-foreground/70">
            Logos officiels à intégrer après autorisation des organismes.
          </p>
        </div>
      </div>
    </section>
  );
}
