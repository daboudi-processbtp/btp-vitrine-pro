import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "amber" | "outline-light" | "outline-dark" | "ghost-light";
type Size = "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  default: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variants: Record<Variant, string> = {
  amber: "bg-cta text-cta-foreground hover:bg-cta/90 shadow-sm",
  "outline-light": "border-2 border-white/80 text-white hover:bg-white hover:text-primary",
  "outline-dark": "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  "ghost-light": "text-white underline-offset-4 hover:underline",
};

type CommonProps = { variant?: Variant; size?: Size; className?: string };

export const CtaButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & CommonProps>(
  ({ variant = "amber", size = "default", className, ...props }, ref) => (
    <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...props} />
  ),
);
CtaButton.displayName = "CtaButton";

export const CtaLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps>(
  ({ variant = "amber", size = "default", className, ...props }, ref) => (
    <a ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...props} />
  ),
);
CtaLink.displayName = "CtaLink";
