import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import { SOCIALS } from "@/lib/site-config";

const ICONS = { tiktok: TiktokLogo, instagram: InstagramLogo } as const;

/**
 * Link ai canali social di OneSpec. `tone="dark"` per sfondi scuri (hero),
 * `tone="auto"` per il resto del sito (segue il tema chiaro/scuro).
 */
export function SocialLinks({
  tone = "auto",
  showHandle = false,
  iconOnly = false,
  className = "",
}: {
  tone?: "auto" | "dark";
  showHandle?: boolean;
  /** Round icon buttons without text (header); the name stays available to screen readers. */
  iconOnly?: boolean;
  className?: string;
}) {
  const base =
    tone === "dark"
      ? "border-white/20 bg-black/45 text-white hover:border-[var(--color-mint)] hover:text-[var(--color-mint)] backdrop-blur-md"
      : "border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text)] hover:border-[var(--color-mint-dark)] hover:text-[var(--color-mint-dark)]";
  if (iconOnly) {
    return (
      <ul className={`flex items-center gap-1 ${className}`}>
        {SOCIALS.map((s) => {
          const Icon = ICONS[s.id];
          return (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} ${s.handle}`}
                title={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-colors hover:bg-white/10 hover:text-[var(--color-mint)]"
              >
                <Icon size={18} weight="fill" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIALS.map((s) => {
        const Icon = ICONS[s.id];
        return (
          <li key={s.id}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} ${s.handle}`}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-3.5 text-[13px] font-medium transition-colors ${base}`}
            >
              <Icon size={18} weight="fill" aria-hidden="true" />
              <span>{showHandle ? s.handle : s.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
