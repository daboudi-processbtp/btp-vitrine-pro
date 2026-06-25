import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { findTrainingBySlug } from "@/lib/trainings";
import type { Training } from "@/components/ui/TrainingCard";
import { findTrainingDetail, type TrainingDetailContent } from "@/lib/training-details";
import { courseJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/formations/$slug")({
  loader: ({ params }) => {
    const found = findTrainingBySlug(params.slug);
    if (!found) throw notFound();
    const detail = findTrainingDetail(params.slug);
    return { ...found, detail };
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
  const data = Route.useLoaderData();
  const training = data.training as Training;
  const detail = data.detail as TrainingDetailContent | undefined;

  const ctaClasses =
    "inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cta px-6 text-base font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta/90";

  // Compliance: compute the canonical certification label
  const certType =
    training.certificationType ?? detail?.certificationType ?? "attestation";
  const rncpCode = training.rncpCode ?? detail?.rncpCode;
  const certificationLabel =
    certType === "rncp" && rncpCode
      ? `Accompagnement à la certification ${rncpCode}`
      : certType === "rncp"
        ? "Accompagnement à la certification"
        : "Attestation de compétences";
  const outcomeText =
    certType === "rncp" && rncpCode
      ? `Accompagnement à la certification ${rncpCode}.`
      : "Attestation de compétences délivrée sur la base d'une évaluation continue.";

  // Pricing
  const showPrice = training.prixAffiche === true && typeof training.prix === "number";
  const priceLabel = showPrice ? `${training.prix} € HT` : "Sur devis";

  // Stub mode (sur demande)
  const isStub = training.stub === true;

  // Hide any CPF mention in financement (kept hidden until EDOF)
  const filteredFunding = (detail?.funding ?? []).filter(
    (f) => !/\bCPF\b/i.test(f),
  );
  const trainingFunding = (training.financement ?? []).filter(
    (f) => !/\bCPF\b/i.test(f),
  );

  return (
    <main id="main">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to="/formations" className="hover:text-white">Formations</Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link to="/formations" hash={training.family === "Exécution & terrain" ? "execution" : training.family === "Encadrement de chantier" ? "encadrement" : training.family === "Pilotage & ingénierie" ? "pilotage" : "gestion-developpement"} className="hover:text-white">
                  {training.family}
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-white">{training.title}</li>
            </ol>
          </nav>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            {training.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{training.summary}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link to="/contact" search={{ formation: training.title }} className={ctaClasses}>
              {isStub ? "Nous consulter" : "Demander un devis pour cette formation"}
            </Link>
            {!isStub && (
              <span className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white">
                {priceLabel}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {isStub ? (
            <div className="prose prose-slate max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground">Présentation</h2>
              <p className="mt-3 text-foreground/90">{training.summary}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Ce parcours est en cours de structuration. Contactez-nous pour échanger sur
                vos besoins et recevoir un cadrage adapté.
              </p>
              <div className="mt-6 not-prose">
                <Link to="/contact" search={{ formation: training.title }} className={ctaClasses}>
                  Nous consulter
                </Link>
              </div>
            </div>
          ) : detail ? (
            <>
              {/* En résumé */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-secondary">
                  En résumé
                </h2>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
                  <Summary label="Durée" value={detail.duration} />
                  <Summary label="Effectif" value={detail.groupSize} />
                  <Summary label="Modalité" value={detail.modality} />
                  <Summary label="À l'issue" value={certificationLabel} />
                  <Summary label="Public" value={detail.audienceShort} />
                  <Summary label="Tarif" value={priceLabel} />
                </dl>
              </div>

              <Block title="À qui s'adresse cette formation ?">
                {training.publicVise && (
                  <p className="mb-4 text-foreground/90">{training.publicVise}</p>
                )}
                <ul className="space-y-2">
                  {detail.targetProfiles.map((p) => (
                    <li key={p} className="flex gap-2 text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Prérequis">
                {training.prerequis && training.prerequis.length > 0 ? (
                  <ul className="space-y-2">
                    {training.prerequis.map((p) => (
                      <li key={p} className="flex gap-2 text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-foreground/90">{detail.prerequisites}</p>
                )}
              </Block>

              <Block title="Objectifs pédagogiques">
                <p className="mb-3 text-sm text-muted-foreground">
                  {certType === "attestation"
                    ? "Attestation de compétences délivrée sur la base d'une évaluation continue. À l'issue de la formation, le stagiaire sera capable de :"
                    : "À l'issue de la formation, le stagiaire sera capable de :"}
                </p>
                <ul className="space-y-2">
                  {detail.objectives.map((o) => (
                    <li key={o} className="flex gap-2 text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Programme détaillé">
                <div className="space-y-5">
                  {(training.programme && training.programme.length > 0
                    ? training.programme.map((p) => ({ title: p.titre, items: p.items }))
                    : detail.program
                  ).map((m) => (
                    <div key={m.title} className="rounded-lg border border-border bg-card p-5">
                      <h3 className="font-display font-bold text-foreground">{m.title}</h3>
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/85">
                        {m.items.map((i) => <li key={i}>{i}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Block>

              {(training.methodesPedagogiques?.length || detail.methodesPedagogiques?.length) ? (
                <Block title="Méthodes pédagogiques">
                  <ul className="list-disc space-y-1.5 pl-5 text-foreground/90">
                    {(training.methodesPedagogiques ?? detail.methodesPedagogiques ?? []).map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </Block>
              ) : null}

              {(training.supportsPedagogiques?.length || detail.supportsPedagogiques?.length) ? (
                <Block title="Supports pédagogiques">
                  <ul className="list-disc space-y-1.5 pl-5 text-foreground/90">
                    {(training.supportsPedagogiques ?? detail.supportsPedagogiques ?? []).map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </Block>
              ) : null}

              {(training.modalitesEvaluation || detail.modalitesEvaluation) ? (
                <Block title="Modalités d'évaluation">
                  <p className="text-foreground/90">
                    {training.modalitesEvaluation ?? detail.modalitesEvaluation}
                  </p>
                </Block>
              ) : null}

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h2 className="font-display text-lg font-bold text-foreground">Financement</h2>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-foreground/85">
                    {(trainingFunding.length > 0 ? trainingFunding : filteredFunding).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h2 className="font-display text-lg font-bold text-foreground">À l'issue</h2>
                  <p className="mt-3 text-sm text-foreground/85">{outcomeText}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="prose prose-slate max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground">Présentation</h2>
              <p className="mt-3 text-foreground/90">{training.summary}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Le programme détaillé (objectifs pédagogiques, modules, prérequis, modalités
                d'évaluation, accessibilité) est communiqué sur demande, adapté à votre contexte
                entreprise.
              </p>
            </div>
          )}

          {!isStub && (
          <div className="mt-12 rounded-xl border border-border bg-accent/30 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Intéressé par cette formation ?
            </h2>
            <p className="mt-2 text-sm text-foreground/80">
              Demandez un devis personnalisé : nous vous transmettons le programme complet et un
              cadrage adapté à vos équipes.
            </p>
            <div className="mt-5">
              <Link to="/contact" search={{ formation: training.title }} className={ctaClasses}>
                Demander un devis pour cette formation
              </Link>
            </div>
          </div>
          )}
          <div className="mt-8">
            <Link to="/formations" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Retour au catalogue
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-foreground">{value}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}