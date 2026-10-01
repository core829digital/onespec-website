"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  SquaresFour,
  Gear,
  Tray,
  ChartLineUp,
  FileText,
  UsersThree,
  MagnifyingGlass,
  DownloadSimple,
  WhatsappLogo,
  Phone,
  Clock,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Faithful, static-data replica of the platform's "Richieste" page (sidebar,
 * list, request detail with the technical drawing). The rows are clickable so the
 * visitor can feel how the inbox works. Always dark, like the platform default.
 */

type Req = {
  name: string;
  company: string;
  product: string;
  size: string;
  sashes: 1 | 2 | 3;
  door: boolean;
  value: string;
  status: "new" | "contacted" | "quoted" | "won";
  time: string;
  specs: [string, string][];
};

const NAV_ICONS = [SquaresFour, Gear, Tray, ChartLineUp, FileText, UsersThree];
const STATUS_STYLE: Record<Req["status"], string> = {
  new: "bg-[#16d19d]/15 text-[#16d19d]",
  contacted: "bg-[#3b82f6]/15 text-[#7db0ff]",
  quoted: "bg-[#f59e0b]/15 text-[#f5b84b]",
  won: "bg-white/10 text-white/80",
};

/** Technical drawing of the configured piece (frame, sashes, opening symbols, dimensions). */
function Drawing({ sashes, door, size }: { sashes: 1 | 2 | 3; door: boolean; size: string }) {
  const [w, h] = size.split("×").map((n) => Number(n.trim()));
  const ratio = Math.max(0.45, Math.min(1.3, w / h));
  const H = 150;
  const W = Math.round(H * ratio);
  const x0 = 34;
  const y0 = 14;
  const sw = W / sashes;
  return (
    <svg viewBox={`0 0 ${W + 60} ${H + 44}`} className="mx-auto h-full max-h-[210px] w-full" aria-hidden="true">
      <rect x={x0} y={y0} width={W} height={H} rx="2" fill="#0f1a1a" stroke="#cfd8d6" strokeWidth="3" />
      {Array.from({ length: sashes }).map((_, i) => {
        const x = x0 + i * sw;
        // Hinges on the OUTER edges, handles towards the middle; the triangle's tip points
        // to the handle side (the inside of the pair).
        const hingeLeft = sashes === 1 ? true : i !== sashes - 1;
        return (
          <g key={i}>
            <rect x={x + 4} y={y0 + 4} width={sw - 8} height={H - 8} fill="#16d19d" fillOpacity="0.10" stroke="#8fa5a1" strokeWidth="1.5" />
            {/* opening symbol: tilt & turn */}
            <path
              d={hingeLeft ? `M${x + 4} ${y0 + 4} L${x + sw - 4} ${y0 + H / 2} L${x + 4} ${y0 + H - 4}` : `M${x + sw - 4} ${y0 + 4} L${x + 4} ${y0 + H / 2} L${x + sw - 4} ${y0 + H - 4}`}
              fill="none"
              stroke="#16d19d"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <path d={`M${x + 4} ${y0 + H - 4} L${x + sw / 2} ${y0 + 4} L${x + sw - 4} ${y0 + H - 4}`} fill="none" stroke="#16d19d" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="3 3" />
            <rect x={hingeLeft ? x + sw - 10 : x + 6} y={y0 + H / 2 - 6} width="4" height="12" rx="2" fill="#cfd8d6" />
          </g>
        );
      })}
      {door ? <rect x={x0} y={y0 + H - 5} width={W} height="5" fill="#cfd8d6" /> : null}
      {/* dimensions */}
      <line x1={x0} y1={y0 + H + 14} x2={x0 + W} y2={y0 + H + 14} stroke="#6e7a78" strokeWidth="1" />
      <text x={x0 + W / 2} y={y0 + H + 29} textAnchor="middle" fontSize="10" fill="#9aa8a5" fontFamily="ui-monospace, monospace">
        {w}
      </text>
      <line x1={x0 - 14} y1={y0} x2={x0 - 14} y2={y0 + H} stroke="#6e7a78" strokeWidth="1" />
      <text x={x0 - 20} y={y0 + H / 2} textAnchor="middle" fontSize="10" fill="#9aa8a5" fontFamily="ui-monospace, monospace" transform={`rotate(-90 ${x0 - 20} ${y0 + H / 2})`}>
        {h}
      </text>
    </svg>
  );
}

export function PlatformShowcase() {
  const t = useTranslations("platformShowcase");
  const nav = t.raw("nav") as string[];
  const tabs = t.raw("tabs") as string[];
  const reqs = t.raw("requests") as Req[];
  const statuses = t.raw("statuses") as Record<Req["status"], string>;
  const [sel, setSel] = useState(0);
  const [tab, setTab] = useState(0);
  const tabStatus: Array<Req["status"] | null> = [null, "new", "contacted", "quoted"];
  const shown = reqs.map((r, i) => ({ r, i })).filter(({ r }) => tabStatus[tab] === null || r.status === tabStatus[tab]);
  const cur = reqs[sel] ?? reqs[0];

  return (
    <div
      className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b0d] text-left shadow-[0_40px_120px_-30px_rgba(22,209,157,0.25)]"
      role="group"
      aria-label={t("ariaLabel")}
    >
      {/* browser bar */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#0e1012] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-[11px] text-white/50">platform.onespec.eu/app/requests</span>
      </div>

      <div className="flex">
        {/* sidebar (hidden on small screens, like the platform) */}
        <aside className="hidden w-52 shrink-0 border-r border-white/10 bg-[#141618]/70 p-3 lg:block">
          <div className="border-b border-white/10 px-2 pb-3">
            <p className="text-[15px] font-bold tracking-tight text-white">
              one<span className="text-[#16d19d]">spec</span>
            </p>
            <p className="mt-0.5 truncate text-[11px] text-white/45">{t("tenant")}</p>
          </div>
          <p className="mt-3 px-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">{t("group")}</p>
          <ul className="mt-1.5 space-y-0.5">
            {nav.map((label, i) => {
              const Icon = NAV_ICONS[i] ?? SquaresFour;
              const active = i === 2;
              return (
                <li
                  key={label}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] font-medium ${active ? "bg-[#16d19d]/15 text-[#16d19d]" : "text-white/55"}`}
                >
                  <Icon size={16} weight={active ? "fill" : "regular"} />
                  <span className="truncate">{label}</span>
                  {active ? (
                    <span className="ml-auto rounded-full bg-[#16d19d] px-1.5 text-[10px] font-bold text-[#04241b]">
                      {reqs.filter((r) => r.status === "new").length}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </aside>

        {/* main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-[17px] font-semibold text-white">{t("title")}</h3>
              <p className="text-[12px] text-white/50">{t("subtitle")}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-2.5 py-1.5 text-[11px] font-medium text-white/70">
              <DownloadSimple size={13} /> {t("export")}
            </span>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            {/* list */}
            <div className="min-w-0">
              <div className="flex flex-wrap gap-1.5">
                {tabs.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setTab(i)}
                    className={`cursor-pointer rounded-full px-3 py-1 text-[11.5px] font-medium transition-colors ${tab === i ? "bg-[#16d19d] text-[#04241b]" : "border border-white/12 text-white/60 hover:text-white"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] text-white/35">
                <MagnifyingGlass size={14} /> {t("search")}
              </div>
              <ul className="mt-2.5 space-y-2">
                {shown.map(({ r, i }) => (
                  <li key={r.name}>
                    <button
                      type="button"
                      onClick={() => setSel(i)}
                      className={`w-full cursor-pointer rounded-xl border px-3.5 py-3 text-left transition-colors ${sel === i ? "border-[#16d19d]/60 bg-[#16d19d]/[0.07]" : "border-white/10 bg-white/[0.02] hover:border-white/25"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-[13px] font-semibold text-white">{r.name}</p>
                          <p className="truncate text-[11.5px] text-white/45">{r.company}</p>
                        </div>
                        <p className="shrink-0 font-mono text-[13px] font-semibold text-white">{r.value}</p>
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <p className="min-w-0 truncate text-[11.5px] text-white/55">
                          {r.product} · <span className="font-mono">{r.size}</span>
                        </p>
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${STATUS_STYLE[r.status]}`}>{statuses[r.status]}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* detail */}
            <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold text-white">{cur.name}</p>
                  <p className="truncate text-[11.5px] text-white/45">{cur.company}</p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLE[cur.status]}`}>{statuses[cur.status]}</span>
              </div>

              <p className="mt-3 flex items-center gap-1.5 rounded-lg bg-[#16d19d]/10 px-3 py-2 text-[11.5px] text-[#7ce8c9]">
                <Clock size={14} weight="bold" className="shrink-0" /> {cur.time} · {t("sla")}
              </p>

              <div className="mt-3 rounded-lg border border-white/10 bg-[#0c0f10] p-3">
                <div className="h-[210px]">
                  <Drawing sashes={cur.sashes} door={cur.door} size={cur.size} />
                </div>
              </div>

              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
                {cur.specs.map(([k, v]) => (
                  <div key={k} className="min-w-0">
                    <dt className="text-[10.5px] uppercase tracking-wide text-white/40">{k}</dt>
                    <dd className="truncate font-medium text-white/90">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-3 flex items-end justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="text-[10.5px] uppercase tracking-wide text-white/40">{t("total")}</p>
                  <p className="font-mono text-xl font-semibold text-white">{cur.value}</p>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-lg bg-[#25D366] px-2.5 py-1.5 text-[11px] font-bold text-[#04231a]">
                    <WhatsappLogo size={13} weight="fill" /> WhatsApp
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-white/20 px-2.5 py-1.5 text-[11px] font-semibold text-white/80">
                    <Phone size={13} /> {t("call")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
