import { FileText, Compass, GraduationCap } from "lucide-react";

const steps = [
  { num: "01", icon: FileText, title: "Demande de devis", desc: "Vous formulez votre besoin via le formulaire ou un appel découverte." },
  { num: "02", icon: Compass, title: "Cadrage du besoin", desc: "Analyse des objectifs, du contexte et des contraintes ; proposition pédagogique." },
  { num: "03", icon: GraduationCap, title: "Formation", desc: "Mise en œuvre en présentiel ou classe virtuelle, suivi et évaluation des acquis." },
];

export function ProcessSteps() {
  return (
    <section className="bg-background py-20" aria-labelledby="process-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Comment ça marche</p>
          <h2 id="process-title" className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Trois étapes, zéro ambiguïté.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ num, icon: Icon, title, desc }) => (
            <li key={num} className="relative rounded-lg border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-extrabold text-primary/30">{num}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
