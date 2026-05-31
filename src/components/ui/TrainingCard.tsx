import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Users, MonitorPlay, MapPin } from "lucide-react";
import { TrustBadge } from "@/components/brand/Badge";

export type Modality = "presentiel" | "distanciel";

export type Training = {
  slug: string;
  title: string;
  family: "Exécution & terrain" | "Encadrement de chantier" | "Pilotage & ingénierie";
  duration?: string;
  cpf?: boolean;
  summary: string;
  modalities?: Modality[];
  audience?: string;
};

export function getModalities(t: Training): Modality[] {
  return t.modalities && t.modalities.length > 0 ? t.modalities : ["presentiel", "distanciel"];
}

export function getAudience(t: Training): string {
  if (t.audience) return t.audience;
  switch (t.family) {
    case "Exécution & terrain":
      return "Compagnons, chefs d'équipe";
    case "Encadrement de chantier":
      return "Chefs d'équipe, chefs de chantier";
    case "Pilotage & ingénierie":
      return "Conducteurs de travaux, ingénieurs, chargés d'affaires";
  }
}

export function TrainingCard({ training }: { training: Training }) {
  const modalities = getModalities(training);
  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
          {training.family}
        </span>
        {training.cpf && <TrustBadge variant="cpf">CPF</TrustBadge>}
      </div>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
        {training.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{training.summary}</p>
      <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
        {training.duration && (
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Durée</dt>
            <dd>{training.duration}</dd>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          {modalities.includes("presentiel") && modalities.includes("distanciel") ? (
            <>
              <MonitorPlay className="h-3.5 w-3.5" aria-hidden="true" />
              <dd>Présentiel ou distanciel</dd>
            </>
          ) : modalities.includes("distanciel") ? (
            <>
              <MonitorPlay className="h-3.5 w-3.5" aria-hidden="true" />
              <dd>Distanciel</dd>
            </>
          ) : (
            <>
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              <dd>Présentiel</dd>
            </>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" aria-hidden="true" />
          <dt className="sr-only">Public</dt>
          <dd>{getAudience(training)}</dd>
        </div>
      </dl>
      <Link
        to="/formations/$slug"
        params={{ slug: training.slug }}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary"
      >
        Voir la fiche
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
