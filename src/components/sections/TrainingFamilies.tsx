import { Link } from "@tanstack/react-router";
import { HardHat, ClipboardList, Compass, Briefcase, ArrowRight } from "lucide-react";

const families = [
  {
    icon: HardHat,
    name: "Exécution & terrain",
    hash: "execution",
    desc: "Maîtrise des techniques d'exécution, sécurité, lecture de plan, gestes professionnels.",
  },
  {
    icon: ClipboardList,
    name: "Encadrement de chantier",
    hash: "encadrement",
    desc: "Chef de chantier, conduite d'équipe, organisation, qualité, sécurité.",
  },
  {
    icon: Compass,
    name: "Pilotage & ingénierie",
    hash: "pilotage",
    desc: "Conducteur de travaux, planning, coûts, contractualisation, performance de chantier.",
  },
  {
    icon: Briefcase,
    name: "Gestion & développement (artisans)",
    hash: "gestion-developpement",
    desc: "Artisans et dirigeants TPE/PME : outils de gestion, développement commercial, pilotage d'activité.",
  },
];

export function TrainingFamilies() {
  return (
    <section className="bg-background py-20" aria-labelledby="families-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Notre offre</p>
          <h2 id="families-title" className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Trois familles de formations, un même fil rouge&nbsp;: l'efficacité chantier.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {families.map(({ icon: Icon, name, desc, hash }) => (
            <Link
              key={name}
              to="/formations"
              hash={hash}
              className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Voir le catalogue
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
