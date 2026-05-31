import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { TrustBadge } from "@/components/brand/Badge";
import { findTrainingBySlug } from "@/lib/trainings";
import { courseJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/formations/$slug")({
  loader: ({ params }) => {
    const found = findTrainingBySlug(params.slug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Formation — PROCESSBTP" }] };
    const { training } = loaderData;
    const title = `${training.title} — Formation BTP | PROCESSBTP`;
    return {
      meta: [
        { title },
        { name: "description", content: training.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: training.summary },
        { property: "og:url", content: `/formations/${training.slug}` },
      ],
      links: [{ rel: "canonical", href: `/formations/${training.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            courseJsonLd({
              name: training.title,
              description: training.summary,
              cpfEligible: training.cpf,
            }),
          ),
        },
      ],
    };
  },
  component: TrainingDetailPage,
  notFoundComponent: () => (
    <main id="main" className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-extrabold">Formation introuvable</h1>
      <p className="mt-3 text-muted-foreground">
        Cette formation n'existe pas ou n'est plus disponible.
      </p>
      <div className="mt-6">
        <Link
          to="/formations"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <ArrowLeft className="h-4 w-4" /> Retour au catalogue
        </Link>
      </div>
    </main>
  ),
});

function TrainingDetailPage() {
  const { training } = Route.useLoaderData();

  return (
    <main id="main">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/formations"
            className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Catalogue des formations
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
              {training.family}
            </span>
            {training.cpf && <TrustBadge variant="cpf">CPF</TrustBadge>}
          </div>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {training.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{training.summary}</p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Durée</dt>
              <dd className="font-semibold text-foreground">{training.duration ?? "Sur mesure"}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Modalité</dt>
              <dd className="font-semibold text-foreground">Présentiel ou classe virtuelle</dd>
            </div>
            <div>
              <dt className="text-xs uppercase text-muted-foreground">Format</dt>
              <dd className="font-semibold text-foreground">Intra ou inter-entreprises</dd>
            </div>
          </dl>

          <div className="prose prose-slate mt-10 max-w-none">
            <h2 className="font-display text-2xl font-bold text-foreground">Présentation</h2>
            <p className="mt-3 text-foreground/90">{training.summary}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Le programme détaillé (objectifs pédagogiques, modules, prérequis, modalités
              d'évaluation, accessibilité) est communiqué sur demande, adapté à votre contexte
              entreprise.
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-accent/30 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Intéressé par cette formation ?
            </h2>
            <p className="mt-2 text-sm text-foreground/80">
              Demandez un devis personnalisé : nous vous transmettons le programme complet et un
              cadrage adapté à vos équipes.
            </p>
            <div className="mt-5">
              <Link
                to="/contact"
                search={{ formation: training.title }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cta px-6 text-base font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta/90"
              >
                Demander un devis pour cette formation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}