import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TrainingCard, getModalities, type Modality } from "@/components/ui/TrainingCard";
import { CtaLink } from "@/components/brand/CtaButton";
import { catalogue } from "@/lib/trainings";

const TITLE = "Catalogue des formations BTP — PROCESSBTP";
const DESCRIPTION =
  "Toutes les formations PROCESSBTP : exécution & terrain, encadrement de chantier, pilotage & ingénierie. Éligibles CPF, Qualiopi.";

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
  const [familyFilter, setFamilyFilter] = useState<string>("all");
  const [modalityFilter, setModalityFilter] = useState<"all" | Modality>("all");
  const [cpfOnly, setCpfOnly] = useState(false);

  const filteredCatalogue = useMemo(() => {
    return catalogue
      .filter((g) => familyFilter === "all" || g.id === familyFilter)
      .map((g) => ({
        ...g,
        trainings: g.trainings.filter((t) => {
          if (cpfOnly && !t.cpf) return false;
          if (modalityFilter !== "all" && !getModalities(t).includes(modalityFilter)) return false;
          return true;
        }),
      }))
      .filter((g) => g.trainings.length > 0);
  }, [familyFilter, modalityFilter, cpfOnly]);

  const totalCount = filteredCatalogue.reduce((n, g) => n + g.trainings.length, 0);

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

      <section className="border-b border-border bg-card" aria-label="Filtres">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="filter-family" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Famille
              </label>
              <select
                id="filter-family"
                value={familyFilter}
                onChange={(e) => setFamilyFilter(e.target.value)}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground"
              >
                <option value="all">Toutes les familles</option>
                {catalogue.map((g) => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="filter-modality" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Modalité
              </label>
              <select
                id="filter-modality"
                value={modalityFilter}
                onChange={(e) => setModalityFilter(e.target.value as "all" | Modality)}
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground"
              >
                <option value="all">Toutes modalités</option>
                <option value="presentiel">Présentiel</option>
                <option value="distanciel">Distanciel</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-background px-3 py-2.5 text-sm font-medium text-foreground">
                <input
                  type="checkbox"
                  checked={cpfOnly}
                  onChange={(e) => setCpfOnly(e.target.checked)}
                  className="h-4 w-4 accent-primary"
                />
                Éligible CPF uniquement
              </label>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground" aria-live="polite">
            {totalCount} formation{totalCount > 1 ? "s" : ""} affichée{totalCount > 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {totalCount === 0 ? (
        <section className="bg-background py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Aucune formation ne correspond à ces filtres.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Élargissez votre sélection ou contactez-nous pour un parcours sur mesure.
            </p>
            <div className="mt-6">
              <CtaLink href="/contact" variant="amber">Demander un devis</CtaLink>
            </div>
          </div>
        </section>
      ) : (
        filteredCatalogue.map((group, idx) => (
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
        ))
      )}

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Un besoin spécifique ?</h2>
          <p className="mt-3 text-white/85">
            Nous construisons des parcours sur mesure pour vos équipes — partout en France.
          </p>
          <div className="mt-6">
            <CtaLink href="/contact" variant="amber" size="lg">
              Demander un devis
            </CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
