import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Comment financer ma formation ?",
    a: "Plusieurs dispositifs existent selon votre situation : OPCO et plan de développement des compétences pour les entreprises, France Travail pour les demandeurs d'emploi, ou financement sur fonds propres. Je vous oriente vers la solution la plus adaptée dès la phase de cadrage.",
  },
  {
    q: "Quels délais pour mettre en place une session ?",
    a: "Comptez en général 2 à 6 semaines entre la demande de devis et le démarrage de la formation, selon la complexité du cahier des charges et le mode de financement retenu. Les sessions urgentes peuvent être étudiées au cas par cas.",
  },
  {
    q: "Présentiel ou distanciel ?",
    a: "Les deux modalités sont possibles, partout en France. Le présentiel est privilégié pour les gestes techniques et les mises en situation chantier ; la classe virtuelle convient pour les contenus de pilotage, lecture de plan ou réglementation.",
  },
  {
    q: "Quelle est la taille des groupes ?",
    a: "Les sessions sont volontairement limitées à 6 à 8 participants. Ce format garantit un suivi individualisé, des échanges riches et la possibilité d'ajuster le contenu aux problématiques concrètes de chaque stagiaire.",
  },
  {
    q: "Faites-vous des formations sur mesure ?",
    a: "Oui, la majorité des interventions intra-entreprise sont conçues à partir de vos contextes de chantier, de vos méthodes et de votre cadre QHSE. On part de vos cas réels pour bâtir un programme directement opérationnel.",
  },
  {
    q: "Comment se passe l'accueil des personnes en situation de handicap ?",
    a: "PROCESSBTP est référencé RPSH et dispose d'un référent handicap dédié. Avant l'entrée en formation, nous échangeons sur les besoins spécifiques afin d'adapter les modalités pédagogiques, matérielles et logistiques. Un contact direct est mis à disposition pour préparer le parcours.",
  },
];

export function FAQ() {
  return (
    <section className="bg-accent/35 py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">FAQ</p>
          <h2 id="faq-title" className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <Accordion type="multiple" className="mt-10 rounded-lg border border-border bg-card">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="px-6 last:border-b-0">
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline [&>svg]:motion-reduce:transition-none">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground motion-reduce:animate-none">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}