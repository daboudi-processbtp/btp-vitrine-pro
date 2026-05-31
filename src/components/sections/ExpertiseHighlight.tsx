import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { whyItems } from "./WhyProcessBTP";

export function ExpertiseHighlight() {
  return (
    <section className="bg-accent/35 py-20" aria-labelledby="expertise-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
            L'expertise PROCESSBTP
          </p>
          <h2
            id="expertise-title"
            className="mt-2 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl"
          >
            Vos équipes formées par quelqu'un qui a tenu chaque poste qu'il enseigne.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80">
            23 ans sur les chantiers, double Master en génie civil et management, parcours Vinci.
            Une transmission qui part du terrain, pas du manuel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/a-propos"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-primary px-6 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Découvrir mon parcours
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}