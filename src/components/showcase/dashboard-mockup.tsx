import {
  TrendUp,
  Envelope,
  CursorClick,
  Percent,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

/**
 * Mockup statico della dashboard onespec: serve a far vedere al cliente che
 * aspetto avra il pannello. Nessuna logica, nessun dato reale collegato.
 */

const ICONS = [Envelope, CursorClick, Percent, TrendUp];

/** Altezze barre in percentuale: dato di esempio, non collegato. */
const BARS = [38, 52, 44, 61, 55, 72, 66, 84, 70, 91, 78, 96];
const MONTHS = ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"];

type Kpi = { label: string; value: string; delta: string };
type RecentRow = { product: string; size: string; value: string };

export function DashboardMockup() {
  const t = useTranslations("dashboardMockup");
  const kpis = t.raw("kpis") as Kpi[];
  const recent = t.raw("recent") as RecentRow[];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
      role="img"
      aria-label={t("ariaLabel")}
    >
      {/* Barra finestra */}
      <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[11px] text-[var(--color-text-secondary)]">
          {t("windowLabel")}
        </span>
      </div>

      <div className="p-5 sm:p-7" aria-hidden="true">
        {/* KPI */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {kpis.map((k, i) => {
            const Icon = ICONS[i] ?? Envelope;
            return (
              <div
                key={k.label}
                className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-4"
              >
                <div className="flex items-center gap-2">
                  <Icon
                    size={14}
                    weight="bold"
                    className="text-[var(--color-mint-dark)]"
                  />
                  <span className="truncate text-[11px] font-medium text-[var(--color-text-secondary)]">
                    {k.label}
                  </span>
                </div>
                <p className="mt-2.5 font-mono text-xl font-semibold tabular-nums tracking-tight text-[var(--color-text)]">
                  {k.value}
                </p>
                <span className="mt-1 inline-block text-[11px] font-semibold text-[var(--color-mint-dark)]">
                  {k.delta}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr]">
          {/* Grafico andamento */}
          <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[13px] font-semibold text-[var(--color-text)]">
                {t("chartTitle")}
              </h3>
              <span className="rounded-full bg-[var(--color-mint-light)] px-2.5 py-1 text-[10px] font-semibold text-[var(--color-mint-dark)]">
                2026
              </span>
            </div>

            <div className="mt-5 flex h-32 items-end gap-1.5 sm:gap-2">
              {BARS.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className={
                        i === BARS.length - 1
                          ? "w-full rounded-t-[3px] bg-[var(--color-mint)]"
                          : "w-full rounded-t-[3px] bg-[var(--color-mint)]/35"
                      }
                      style={{ height: `${h}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-[var(--color-text-secondary)]">
                    {MONTHS[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ultime richieste */}
          <div className="rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-5">
            <h3 className="text-[13px] font-semibold text-[var(--color-text)]">
              {t("recentTitle")}
            </h3>
            <ul className="mt-4 space-y-3.5">
              {recent.map((r) => (
                <li
                  key={r.product}
                  className="flex items-start justify-between gap-3 border-b border-[var(--color-border-subtle)] pb-3.5 last:border-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-medium text-[var(--color-text)]">
                      {r.product}
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] text-[var(--color-text-secondary)]">
                      {r.size} mm
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[12px] font-semibold tabular-nums text-[var(--color-text)]">
                    {r.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
