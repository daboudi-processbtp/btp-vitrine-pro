import { createFileRoute } from "@tanstack/react-router";
import { TrainingCard, type Training } from "@/components/ui/TrainingCard";
import { CtaLink } from "@/components/brand/CtaButton";

const TITLE = "Catalogue des formations BTP — PROCESSBTP";
const DESCRIPTION =
  "Toutes les formations PROCESSBTP : exécution & terrain, encadrement de chantier, pilotage & ingénierie. Éligibles CPF, certifiantes, Qualiopi.";

const catalogue: { id: string; name: string; trainings: Training[] }[] = [
  {
    id: "execution",
    name: "Exécution & terrain",
    trainings: [
      {
        slug: "lecture-de-plan",
        family: "Exécution & terrain",
        title: "Lecture de plan",
        duration: "2 à 3 jours",
        summary:
          "Décoder plans d'architecte et plans d'exécution, repérer les côtes critiques, anticiper les incohérences.",
      },
      {
        slug: "securite-chantier",
        family: "Exécution & terrain",
        title: "Sécurité chantier — fondamentaux",
        duration: "1 jour",
        summary:
          "Identifier les risques majeurs en gros œuvre et adopter les bonnes pratiques au quotidien.",
      },
      {
        slug: "gestes-pro-go",
        family: "Exécution & terrain",
        title: "Gestes professionnels — gros œuvre",
        duration: "Sur mesure",
        summary:
          "Acquisition et perfectionnement des gestes techniques selon vos besoins opérationnels.",
      },
    ],
  },
  {
    id: "encadrement",
    name: "Encadrement de chantier",
    trainings: [
      {
        slug: "tp-chef-de-chantier",
        family: "Encadrement de chantier",
        title: "Accompagnement TP — Chef de chantier gros œuvre",
        duration: "Parcours sur mesure",
        cpf: true,
        summary:
          "Préparation au titre professionnel : organisation, sécurité, qualité, conduite d'équipe.",
      },
      {
        slug: "management-equipe",
        family: "Encadrement de chantier",
        title: "Management d'équipe chantier",
        duration: "2 jours",
        summary: "Posture managériale, communication, gestion des conflits sur le terrain.",
      },
      {
        slug: "qualite-chantier",
        family: "Encadrement de chantier",
        title: "Qualité &amp; non-conformités",
        duration: "2 jours",
        summary: "Mettre en place un suivi qualité opérationnel inspiré des standards ISO 9001.",
      },
    ],
  },
  {
    id: "pilotage",
    name: "Pilotage & ingénierie",
    trainings: [
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
        slug: "planning-couts",
        family: "Pilotage & ingénierie",
        title: "Planning & maîtrise des coûts",
        duration: "3 jours",
        summary: "Construire un planning fiable, suivre les coûts, anticiper les dérives.",
      },
      {
        slug: "marches-publics-btp",
        family: "Pilotage & ingénierie",
        title: "Lecture de marchés publics BTP",
        duration: "2 jours",
        summary: "Décrypter CCAP, CCTP, BPU, DPGF et sécuriser l'exécution contractuelle.",
      },
    ],
  },
];

export const Route = createFileRoute("/formations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/formations" },
    ],
    links: [{ rel: "canonical", href: "/formations" }],
  }),
  component: Catalogue,
});

function Catalogue() {
  return (
    <main id="main">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">Catalogue</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Toutes nos formations BTP.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            Présentiel ou classe virtuelle, intra ou inter-entreprises. Tous nos parcours peuvent
            être adaptés à votre contexte.
          </p>
        </div>
      </section>

      <nav aria-label="Familles de formations" className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2 px-4 py-4 text-sm font-semibold sm:px-6 lg:px-8">
          {catalogue.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="text-foreground/80 hover:text-primary">
              {g.name}
            </a>
          ))}
        </div>
      </nav>

      {catalogue.map((group, idx) => (
        <section
          key={group.id}
          id={group.id}
          className={idx % 2 === 0 ? "bg-background py-16" : "bg-accent/35 py-16"}
          aria-labelledby={`${group.id}-title`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id={`${group.id}-title`} className="text-2xl font-extrabold text-foreground sm:text-3xl">
              {group.name}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {group.trainings.map((t) => <TrainingCard key={t.slug} training={t} />)}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Un besoin spécifique ?</h2>
          <p className="mt-3 text-white/85">
            Nous construisons des parcours sur mesure pour vos équipes — partout en France.
          </p>
          <div className="mt-6">
            <CtaLink href="/#contact" variant="amber" size="lg">
              Demander un devis
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
