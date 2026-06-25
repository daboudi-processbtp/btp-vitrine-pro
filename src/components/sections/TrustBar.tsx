import { ShieldCheck, Accessibility, CalendarDays } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Certifié Qualiopi" },
  { icon: Accessibility, label: "Référent Handicap (RPSH)" },
  { icon: CalendarDays, label: "Organisme de formation depuis 2020" },
];

export function TrustBar() {
  return (
    <section aria-label="Certifications et garanties" className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
