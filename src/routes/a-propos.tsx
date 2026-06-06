import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaLink } from "@/components/brand/CtaButton";
import { TrustBadge } from "@/components/brand/Badge";
import { founderJsonLd } from "@/lib/seo";

const TITLE = "À propos — PROCESSBTP, organisme de formation BTP";
const DESCRIPTION =
  "PROCESSBTP, organisme de formation certifié Qualiopi, fondé par un vétéran du BTP : 25 ans de chantier, double Master, transmission structurée comme un process qualité.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(founderJsonLd()) },
    ],
  }),
  component: AProposPage,
});

function AProposPage() {
  return (
    <main id="main">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">À propos</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Le BTP transmis par ceux qui l'ont bâti.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">
            PROCESSBTP est né d'une conviction simple : la meilleure pédagogie BTP vient du terrain. J'ai porté 25 ans de chantiers – gros œuvre, génie civil, encadrement –, de mon premier coffrage en 2000 jusqu'à la conduite de chantiers de génie civil industriel à plus de 5 M€. J'ai structuré cette expérience en parcours de formation opérationnels, pour transmettre exactement ce que j'ai pratiqué.
          </p>
        </div>
      </section>

      {/* Section 1 — intro + portrait */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[260px_1fr] md:items-start lg:px-8">
          <div className="mx-auto w-full max-w-[260px] md:mx-0">
            <div
              role="img"
              aria-label="Portrait du fondateur de PROCESSBTP"
              className="flex aspect-[4/5] w-full items-end justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/10 to-accent/40 p-4 text-center text-xs font-semibold uppercase tracking-wider text-primary/70"
            >
              Portrait du fondateur
            </div>
            <p className="mt-3 text-center text-xs text-foreground/60 md:text-left">
              Photo professionnelle à intégrer
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              J'ai occupé chaque poste que je forme aujourd'hui.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/85">
              En 2000, je posais mon premier coffrage. Vingt-trois ans plus tard, je dirigeais des
              chantiers de génie civil industriel à plus de 5 M€. Entre les deux, j'ai gravi tous
              les échelons. C'est ce parcours que je transmets.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Du terrain au pilotage */}
      <section className="bg-accent/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Du terrain au pilotage
          </h2>

          <ol className="mt-8 space-y-0 border-l-2 border-primary/30 pl-6">
            {[
              "Maçon-coffreur-bancheur",
              "Chef d'équipe gros œuvre",
              "Chef de chantier",
              "Chef de chantier principal",
              "Conducteur de travaux",
              "Conducteur de travaux principal en génie civil chez Vinci Construction",
            ].map((step, i) => (
              <li key={step} className="relative pb-6 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary"
                >
                  {i + 1}
                </span>
                <p className="text-base font-semibold text-foreground sm:text-lg">{step}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-base leading-relaxed text-foreground/85 sm:text-lg">
            J'ai livré des ouvrages industriels exigeants – usine pharmaceutique, station de
            traitement d'eau potable, centre de revalorisation énergétique, sites classés – sur
            des budgets de 900 000 € à 5 M€, ainsi que des logements collectifs et des maisons
            individuelles. Je ne forme pas à partir d'un manuel : je forme à partir de ce que
            j'ai construit.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-foreground/70">
            Entreprises : Vinci, SPIE Batignolles, Rabot Dutilleul, Ramery. Ouvrages : GSK, SUEZ,
            SIAVED, L'Oréal, SOTRENOR.
          </p>
        </div>
      </section>

      {/* Section 3 — Du chantier à la transmission */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Du chantier à la transmission
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Depuis 2020, je forme les équipes de grands groupes du BTP. Maître de conférences associé en génie civil à l'IUT de Béthune depuis 2025, intervenant à Polytech Lille, formateur à l'ESCT, pour Le Moniteur et pour La Solive. En 2024, j'ai fondé PROCESSBTP pour mettre cette double culture, terrain et académique, au service de la montée en compétence de vos équipes.
          </p>
        </div>
      </section>

      {/* Section 4 — Diplômes et certifications */}
      <section className="bg-accent/30 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Mes diplômes et certifications
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Double Master 2 : Management de projet génie civil à l'École Supérieure de Conduite de Travaux, et Management et développement des entreprises à l'Institut d'Administration des Entreprises (IAE) de Lille. Titre Professionnel Chef de chantier. Habilitation membre de jury pour le Titre Professionnel Conducteur de travaux. Organisme certifié Qualiopi, Référent Handicap (RPSH), Référent OPPBTP. Formations éligibles CPF.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <TrustBadge variant="qualiopi">Qualiopi</TrustBadge>
            <TrustBadge>RPSH</TrustBadge>
            <TrustBadge variant="cpf">CPF</TrustBadge>
          </div>
        </div>
      </section>

      {/* Section 5 — Ma façon de former */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Ma façon de former
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Le geste avant la théorie. Des groupes volontairement limités (6 à 8 stagiaires) pour un suivi réel. Des contenus construits sur mesure, ancrés dans vos chantiers et vos contraintes. Je forme en présentiel, en visio collective (groupe) ou en visio individuelle, selon le format le plus adapté à votre équipe. Parce qu'une compétence qui ne se transpose pas sur le terrain ne sert à rien.
          </p>
        </div>
      </section>

      <section className="bg-accent/35 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground">Discutons de votre besoin</h2>
          <p className="mt-3 text-foreground/80">
            Parcours sur mesure, intra ou inter-entreprises — partout en France.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CtaLink href="/contact" variant="amber" size="lg">
              Échangeons sur votre besoin
            </CtaLink>
            <Link
              to="/formations"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-6 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}