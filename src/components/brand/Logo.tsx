type Props = { className?: string; variant?: "light" | "dark" };

export function Logo({ className = "", variant = "dark" }: Props) {
  const ink = variant === "light" ? "text-white" : "text-foreground";
  const dot = variant === "light" ? "bg-white" : "bg-primary";
  return (
    <span className={`inline-flex items-center gap-2 font-display font-extrabold tracking-tight ${ink} ${className}`}>
      <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 rounded-sm ${dot}`} />
      <span className="text-lg leading-none">
        PROCESS<span className={variant === "light" ? "text-white/70" : "text-secondary"}>BTP</span>
      </span>
    </span>
  );
}
