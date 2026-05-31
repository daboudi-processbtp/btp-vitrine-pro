import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaLink } from "@/components/brand/CtaButton";
import { founderJsonLd } from "@/lib/seo";

const TITLE = "À propos — PROCESSBTP, organisme de formation BTP";
const DESCRIPTION =
  "PROCESSBTP, organisme de formation certifié Qualiopi, fondé par un vétéran du BTP : 23 ans de chantier, double Master, transmission structurée comme un process qualité.";

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
            PROCESSBTP est né d'une conviction simple : la meilleure pédagogie BTP vient du terrain.
            Notre fondateur a porté 23 ans de chantiers — gros œuvre, génie civil, encadrement — avant
            de structurer son expérience en parcours de formation opérationnels.
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
              Demander un devis
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