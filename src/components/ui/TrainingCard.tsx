import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TrustBadge } from "@/components/brand/Badge";

export type Training = {
  slug: string;
  title: string;
  family: "Exécution & terrain" | "Encadrement de chantier" | "Pilotage & ingénierie";
  duration?: string;
  cpf?: boolean;
  summary: string;
};

export function TrainingCard({ training }: { training: Training }) {
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
      {training.duration && (
        <p className="mt-4 text-xs font-medium text-muted-foreground">Durée : {training.duration}</p>
      )}
      <Link
        to="/formations"
        hash={training.slug}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary"
      >
        Voir le programme
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}
