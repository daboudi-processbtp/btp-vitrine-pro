import { Link } from "@tanstack/react-router";
import { Building2, User, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    eyebrow: "Pour les entreprises",
    title: "Formez vos équipes sur leurs vrais enjeux de chantier.",
    points: [
      "Financement OPCO ou plan de développement des compétences",
      "Présentiel sur site ou en classe virtuelle",
      "Programmes adaptés à votre contexte et à vos process",
    ],
  },
  {
    icon: User,
    eyebrow: "Pour les particuliers",
    title: "Montez en compétences ou préparez une reconversion.",
    points: [
      "Financement CPF (Titres Professionnels RNCP)",
      "France Travail ou financement personnel",
      "Accompagnement individualisé tout au long du parcours",
    ],
  },
];

export function AudienceSplit() {
  return (
    <section className="bg-background py-20" aria-labelledby="audience-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Pour qui ?</p>
          <h2 id="audience-title" className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Deux publics, une même exigence opérationnelle.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {audiences.map(({ icon: Icon, eyebrow, title, points }) => (
            <div
              key={eyebrow}
              className="flex flex-col rounded-lg border border-border bg-card p-7 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  {eyebrow}
                </p>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold leading-snug text-foreground">
                {title}
              </h3>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-foreground/85">
                {points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-cta px-5 text-sm font-semibold text-cta-foreground shadow-sm transition-colors hover:bg-cta/90"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}