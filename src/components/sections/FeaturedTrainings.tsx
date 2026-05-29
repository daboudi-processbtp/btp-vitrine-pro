import { TrainingCard, type Training } from "@/components/ui/TrainingCard";

const featured: Training[] = [
  {
    slug: "tp-chef-de-chantier",
    family: "Encadrement de chantier",
    title: "Accompagnement TP — Chef de chantier gros œuvre",
    duration: "Parcours sur mesure",
    cpf: true,
    summary:
      "Préparation au titre professionnel : organisation, sécurité, qualité, conduite d'équipe en gros œuvre.",
  },
  {
    slug: "tp-conducteur-de-travaux",
    family: "Pilotage & ingénierie",
    title: "Accompagnement TP — Conducteur de travaux",
    duration: "Parcours sur mesure",
    cpf: true,
    summary:
      "Préparation au titre professionnel : pilotage technique, financier et contractuel d'opérations BTP.",
  },
  {
    slug: "lecture-de-plan",
    family: "Exécution & terrain",
    title: "Lecture de plan",
    duration: "2 à 3 jours",
    cpf: false,
    summary:
      "Décoder plans d'architecte et plans d'exécution, repérer les côtes critiques et anticiper les incohérences.",
  },
];

export function FeaturedTrainings() {
  return (
    <section className="bg-accent/35 py-20" aria-labelledby="featured-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">À la une</p>
            <h2 id="featured-title" className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
              Nos formations phares
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/80">
            Trois parcours les plus demandés cette année, conçus pour des effectifs réduits (6 à 8 stagiaires).
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((t) => <TrainingCard key={t.slug} training={t} />)}
        </div>
      </div>
    </section>
  );
}
