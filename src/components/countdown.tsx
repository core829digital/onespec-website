"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site-config";

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff === 0,
  };
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const target = new Date(SITE.launchDate).getTime();
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!time) return null;

  if (time.done) {
    return (
      <span className="text-xs font-medium text-[var(--color-mint-dark)]">
        onespec e live
      </span>
    );
  }

  const units = [
    { label: "gg", value: time.days },
    { label: "h", value: time.hours },
    { label: "m", value: time.minutes },
    { label: "s", value: time.seconds },
  ];

  return (
    <div
      className={cnCompact(compact)}
      role="timer"
      aria-live="off"
      aria-label={`Lancio pubblico tra ${time.days} giorni, ${time.hours} ore, ${time.minutes} minuti`}
    >
      <span className="hidden sm:inline text-[11px] font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
        Alpha &middot; lancio in
      </span>
      <span className="inline-flex items-center gap-1 font-mono text-[12px] tabular-nums text-[var(--color-text)]">
        {units.map((u, i) => (
          <span key={u.label} className="inline-flex items-baseline gap-0.5">
            <span className="font-semibold">{String(u.value).padStart(2, "0")}</span>
            <span className="text-[10px] text-[var(--color-text-secondary)]">{u.label}</span>
            {i < units.length - 1 && (
              <span className="mx-0.5 text-[var(--color-text-secondary)]">:</span>
            )}
          </span>
        ))}
      </span>
    </div>
  );
}

function cnCompact(compact: boolean) {
  return compact
    ? "inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-3 py-1.5"
    : "inline-flex items-center gap-2";
}
