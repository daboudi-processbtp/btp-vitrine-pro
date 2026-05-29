import type { ReactNode } from "react";
import { TrustBadge } from "@/components/brand/Badge";

/**
 * Réutilisable template de fiche formation.
 * Pas encore monté dans une route — sera utilisé sur /formations/$slug
 * quand le contenu détaillé sera fourni.
 */
export type TrainingDetail = {
  title: string;
  family: string;
  duration: string;
  modality: string;
  audience: string;
  prerequisites: string;
  objectives: string[];
  program: { title: string; items: string[] }[];
  cpf?: boolean;
  certification?: string;
  accessibility?: string;
  ctaSlot?: ReactNode;
};

export function TrainingDetailTemplate({ data }: { data: TrainingDetail }) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
          {data.family}
        </span>
        {data.cpf && <TrustBadge variant="cpf">CPF</TrustBadge>}
        {data.certification && <TrustBadge>{data.certification}</TrustBadge>}
      </div>
      <h1 className="mt-4 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
        {data.title}
      </h1>
      <dl className="mt-6 grid grid-cols-1 gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-3">
        <div><dt className="text-xs uppercase text-muted-foreground">Durée</dt><dd className="font-semibold">{data.duration}</dd></div>
        <div><dt className="text-xs uppercase text-muted-foreground">Modalité</dt><dd className="font-semibold">{data.modality}</dd></div>
        <div><dt className="text-xs uppercase text-muted-foreground">Public</dt><dd className="font-semibold">{data.audience}</dd></div>
      </dl>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">Objectifs pédagogiques</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-foreground/90">
          {data.objectives.map((o) => <li key={o}>{o}</li>)}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">Programme</h2>
        <div className="mt-4 space-y-5">
          {data.program.map((m) => (
            <div key={m.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-display font-bold text-foreground">{m.title}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/85">
                {m.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold text-foreground">Prérequis</h2>
          <p className="mt-2 text-sm text-foreground/85">{data.prerequisites}</p>
        </div>
        {data.accessibility && (
          <div>
            <h2 className="text-lg font-bold text-foreground">Accessibilité handicap</h2>
            <p className="mt-2 text-sm text-foreground/85">{data.accessibility}</p>
          </div>
        )}
      </section>

      {data.ctaSlot && <div className="mt-10">{data.ctaSlot}</div>}
    </article>
  );
}
