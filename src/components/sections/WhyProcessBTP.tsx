import { Hammer, GraduationCap, Wrench, Settings2, Users, BadgeCheck } from "lucide-react";

const items = [
  { icon: Hammer, title: "23 ans sur les chantiers", desc: "Une expertise terrain qui précède la salle de classe — les cas pratiques viennent du réel." },
  { icon: GraduationCap, title: "Double Master", desc: "Solides fondamentaux techniques et managériaux, ancrés dans la pratique du génie civil." },
  { icon: Wrench, title: "Expertise hands-on", desc: "Les concepts s'incarnent en gestes, en plans, en situations rencontrées sur opération." },
  { icon: Settings2, title: "Contenus sur mesure", desc: "Cadrage précis du besoin entreprise et adaptation des programmes à votre contexte." },
  { icon: Users, title: "Petits groupes (6 à 8)", desc: "Un format qui garantit l'individualisation, l'échange et le passage à l'acte." },
  { icon: BadgeCheck, title: "Rigueur ISO 9001", desc: "Process qualité Qualiopi : traçabilité, évaluation continue, amélioration permanente." },
];

export function WhyProcessBTP() {
  return (
    <section id="a-propos" className="bg-background py-20" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Pourquoi PROCESSBTP</p>
          <h2 id="why-title" className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            La transmission d'un vétéran du BTP, structurée comme un process qualité.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            PROCESSBTP, c'est l'expertise personnelle d'un fondateur qui a porté 23 ans de chantiers
            avant de la transmettre. Nos formations sont conçues pour des professionnels qui veulent
            une pédagogie utile, exigeante, et opérationnelle dès le retour sur site.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
