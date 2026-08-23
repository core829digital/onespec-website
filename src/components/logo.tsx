import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "text-[19px] font-semibold tracking-tight text-[var(--color-text)]",
        className
      )}
    >
      one<span className="text-[var(--color-mint)]">spec</span>
    </span>
  );
}
