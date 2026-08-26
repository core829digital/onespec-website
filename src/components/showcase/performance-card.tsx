import { ArrowUpRight, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

const BARS = [40, 60, 75, 45, 88, 65, 96];
const BAR_FILLS = [60, 40, 80, 50, 90, 70, 85];

export function PerformanceCard() {
  const t = useTranslations("performanceCard");
  return (
    <div className="group relative flex w-full max-w-sm flex-col rounded-2xl bg-[#0b0c0e] p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--color-mint)] via-[#7ce8c9] to-[var(--color-mint-dark)] opacity-15 blur-sm transition-opacity duration-300 group-hover:opacity-25" />
      <div className="absolute inset-px rounded-[15px] bg-[#0b0c0e]" />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-mint)] to-[var(--color-mint-dark)]">
              <TrendUp size={16} weight="bold" className="text-[#04231a]" />
            </div>
            <h3 className="text-sm font-semibold text-white">{t("title")}</h3>
          </div>

          <span className="flex items-center gap-1 rounded-full bg-[var(--color-mint)]/10 px-2 py-1 text-[11px] font-medium text-[var(--color-mint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint)]" />
            {t("live")}
          </span>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/5 p-3">
            <p className="text-[11px] font-medium text-white/50">{t("visits")}</p>
            <p className="text-lg font-semibold text-white">24,5K</p>
            <span className="text-[11px] font-medium text-[var(--color-mint)]">+12,3%</span>
          </div>

          <div className="rounded-lg bg-white/5 p-3">
            <p className="text-[11px] font-medium text-white/50">{t("quotes")}</p>
            <p className="text-lg font-semibold text-white">1.240</p>
            <span className="text-[11px] font-medium text-[var(--color-mint)]">+8,1%</span>
          </div>
        </div>

        <div className="mb-4 h-24 w-full overflow-hidden rounded-lg bg-white/5 p-3">
          <div className="flex h-full w-full items-end justify-between gap-1.5">
            {BARS.map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-sm bg-[var(--color-mint)]/25"
                style={{ height: `${h}%` }}
              >
                <div
                  className="w-full rounded-sm bg-[var(--color-mint)] transition-all duration-300"
                  style={{ height: `${BAR_FILLS[i]}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-white/50">{t("last7days")}</span>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 rounded-lg bg-gradient-to-r from-[var(--color-mint)] to-[var(--color-mint-dark)] px-3 py-1.5 text-[11px] font-medium text-[#04231a] transition-transform duration-200 hover:scale-[1.03]"
          >
            {t("details")}
            <ArrowUpRight size={13} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
