import type { ReactNode } from "react";

export function TrustBadge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "cpf" | "qualiopi";
}) {
  const styles =
    variant === "cpf"
      ? "bg-cta/15 text-foreground border-cta/40"
      : variant === "qualiopi"
        ? "bg-secondary/10 text-secondary border-secondary/30"
        : "bg-primary/8 text-primary border-primary/20";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${styles}`}
    >
      {children}
    </span>
  );
}
