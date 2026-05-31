import { Link } from "@tanstack/react-router";

export function CustomBand() {
  return (
    <section className="bg-background py-16" aria-labelledby="custom-title">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 sm:p-10 md:flex md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Sur mesure</p>
            <h2 id="custom-title" className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Votre besoin n'est pas dans le catalogue ?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Je conçois des formations sur mesure à partir de vos problématiques de chantier.
            </p>
          </div>
          <Link
            to="/contact"
            className="mt-6 inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-cta px-6 text-base font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta/90 md:mt-0"
          >
            Parlons de votre besoin
          </Link>
        </div>
      </div>
    </section>
  );
}