import { CaretDown, MagnifyingGlass, Trash } from "@phosphor-icons/react/dist/ssr";
import { useLocale, useTranslations } from "next-intl";

/**
 * Static copy of the platform's Requests page (/app/requests): same title, filters, search, columns, status badges and row actions,
 * with the platform's own labels in every language. Sample rows only, nothing is connected. Times are relative ("2 minutes ago") so
 * the picture never goes stale between deploys.
 */

type Status = "new" | "contacted" | "quoted" | "won" | "lost" | "spam";
type Row = { name: string; email: string; phone: string; company: string; cents: number; status: Status; minutesAgo: number };

// The platform's StatusBadge tones.
const TONE: Record<Status, string> = {
  new: "border-[var(--color-mint)]/40 bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]",
  contacted: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  quoted: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  won: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  lost: "border-red-500/40 bg-red-500/10 text-red-400",
  spam: "border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text-secondary)]",
};

function ago(minutes: number, rtf: Intl.RelativeTimeFormat) {
  if (minutes < 60) return rtf.format(-minutes, "minute");
  if (minutes < 1440) return rtf.format(-Math.round(minutes / 60), "hour");
  return rtf.format(-Math.round(minutes / 1440), "day");
}

export function RequestsMockup() {
  const t = useTranslations("requestsMockup");
  const locale = useLocale();
  const filters = t.raw("filters") as string[];
  const rows = t.raw("rows") as Row[];
  // "always": the platform shows 4.313,48 € in the browser, and the server-side default would print 4313,48 € for Italian.
  const eur = new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", useGrouping: "always" });
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const th = "px-4 py-3 text-left text-[12px] font-medium";

  return (
    <div
      className="overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
      role="img"
      aria-label={t("ariaLabel")}
    >
      {/* Window bar */}
      <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-[11px] text-[var(--color-text-secondary)]">{t("windowLabel")}</span>
        <span className="ml-auto shrink-0 rounded-full border border-[var(--color-border-subtle)] px-2 py-0.5 text-[10px] text-[var(--color-text-secondary)]">
          {t("sample")}
        </span>
      </div>

      <div className="space-y-4 p-4 sm:p-6" aria-hidden="true">
        {/* Page header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xl font-bold text-[var(--color-text)] sm:text-2xl">{t("title")}</p>
            <p className="mt-0.5 text-[13px] text-[var(--color-text-secondary)]">{t("subtitle")}</p>
          </div>
          <span className="shrink-0 rounded-lg border border-[var(--color-border-subtle)] px-3 py-2 text-[12px] font-medium text-[var(--color-text)]">
            {t("export")}
          </span>
        </div>

        {/* Status filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f, i) => (
            <span
              key={f}
              className={
                i === 0
                  ? "rounded-full border border-[var(--color-mint)] bg-[var(--color-mint)] px-3 py-1 text-[11px] font-bold text-[#04231a]"
                  : "rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] px-3 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]"
              }
            >
              {f}
            </span>
          ))}
        </div>

        {/* Search + sort */}
        <div className="flex gap-2">
          <span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[var(--color-border-subtle)] px-3 py-2 text-[12px] text-[var(--color-text-secondary)]">
            <MagnifyingGlass size={13} className="shrink-0" />
            <span className="truncate">{t("search")}</span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 rounded-lg border border-[var(--color-border-subtle)] px-3 py-2 text-[12px] text-[var(--color-text)]">
            {t("sort")}
            <CaretDown size={11} weight="bold" />
          </span>
        </div>

        {/* Phone: one card per request (the table would not fit) */}
        <ul className="divide-y divide-[var(--color-border-subtle)] overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] sm:hidden">
          {rows.map((r) => (
            <li key={r.email} className="flex items-center gap-3 px-3.5 py-3">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate text-[13px] text-[var(--color-text)]">{r.name}</span>
                  <span className={`shrink-0 whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-medium ${TONE[r.status]}`}>
                    {t(`status.${r.status}`)}
                  </span>
                </div>
                <div className="mt-0.5 text-[11px] text-[var(--color-text-secondary)]">
                  <span className="tabular-nums text-[var(--color-text)]">{eur.format(r.cents / 100)}</span> · {ago(r.minutesAgo, rtf)}
                </div>
              </div>
              <span className="shrink-0 rounded-lg bg-[var(--color-mint)] px-3 py-1.5 text-[12px] font-bold text-[#04231a]">{t("open")}</span>
            </li>
          ))}
        </ul>

        {/* Table */}
        <div className="hidden overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] sm:block">
          <table className="w-full text-[13px]">
            <thead className="bg-[var(--color-bg)] text-[var(--color-text-secondary)]">
              <tr>
                <th className={th}>{t("cols.client")}</th>
                <th className={`${th} hidden lg:table-cell`}>{t("cols.email")}</th>
                <th className={`${th} hidden xl:table-cell`}>{t("cols.phone")}</th>
                <th className={`${th} hidden xl:table-cell`}>{t("cols.company")}</th>
                <th className={`${th} text-right`}>{t("cols.value")}</th>
                <th className={th}>{t("cols.status")}</th>
                <th className={`${th} hidden text-right md:table-cell`}>{t("cols.date")}</th>
                <th className={th} />
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-subtle)]">
              {rows.map((r) => (
                <tr key={r.email}>
                  <td className="px-4 py-3 text-[var(--color-text)]">
                    {r.name}
                  </td>
                  <td className="hidden px-4 py-3 text-[var(--color-text-secondary)] lg:table-cell">{r.email}</td>
                  <td className="hidden whitespace-nowrap px-4 py-3 text-[var(--color-text-secondary)] xl:table-cell">{r.phone}</td>
                  <td className="hidden px-4 py-3 text-[var(--color-text-secondary)] xl:table-cell">{r.company || "—"}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-[var(--color-text)]">{eur.format(r.cents / 100)}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block whitespace-nowrap rounded-full border px-2 py-0.5 text-[11px] font-medium ${TONE[r.status]}`}>
                      {t(`status.${r.status}`)}
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-3 text-right text-[var(--color-text-secondary)] md:table-cell">
                    {ago(r.minutesAgo, rtf)}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <span className="rounded-lg bg-[var(--color-mint)] px-3 py-1.5 text-[12px] font-bold text-[#04231a]">{t("open")}</span>
                      <span className="inline-flex rounded-lg border border-red-500/50 p-1.5 text-red-400">
                        <Trash size={13} />
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
