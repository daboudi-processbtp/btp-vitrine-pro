type Props = { className?: string; variant?: "light" | "dark" };

export function Logo({ className = "", variant = "dark" }: Props) {
  const ink = variant === "light" ? "text-white" : "text-foreground";
  return (
    <span className={`inline-flex items-center gap-2 font-display font-extrabold tracking-tight ${ink} ${className}`}>
      <span className="text-lg leading-none">
        PROCESS<span className={variant === "light" ? "text-white/70" : "text-secondary"}>BTP</span>
      </span>
    </span>
  );
}
