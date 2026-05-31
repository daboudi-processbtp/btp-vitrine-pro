import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Organisme certifié Qualiopi
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Des formations BTP éligibles CPF, ancrées dans le réel du chantier.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Du geste technique au pilotage de projet — partout en France, en présentiel ou en classe
            virtuelle. Organisme certifié Qualiopi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cta px-6 text-base font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta/90"
            >
              Demander un devis
            </Link>
            <Link
              to="/formations"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border-2 border-white/80 px-6 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
            >
              Voir les formations
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/65">
            Réponse sous 48 h ouvrées · Devis personnalisé · Aucun paiement en ligne
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-white/20 bg-white/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white/60">
              <div className="h-16 w-16 rounded-full border-2 border-dashed border-white/40" aria-hidden="true" />
              <p className="mt-4 text-sm font-medium">Portrait du formateur</p>
              <p className="text-xs text-white/45">(photo à venir)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
