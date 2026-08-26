import Link from "next/link";
import { ArrowRight, SealCheck, Percent, Broadcast } from "@phosphor-icons/react/dist/ssr";
import { AlphaBadge } from "@/components/showcase/alpha-badge";
import { ALPHA } from "@/lib/site-config";

const ICONS = [Percent, SealCheck, Broadcast];

export function AlphaProgram() {
  const seatsLeft = ALPHA.totalSeats - ALPHA.seatsTaken;
  const filledPercent = (ALPHA.seatsTaken / ALPHA.totalSeats) * 100;

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0f11] px-6 py-12 sm:px-12 sm:py-16">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <AlphaBadge size="lg" />

          <h2 className="mt-7 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            250 posti. Poi il prezzo torna pieno.
          </h2>

          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/55">
            L&apos;accesso Alpha e limitato ai primi {ALPHA.totalSeats} clienti su
            piano Starter o Business. Chi entra adesso aiuta a definire il
            prodotto e si porta dietro le condizioni di lancio anche dopo.
          </p>

          {/* Contatore posti */}
          <div className="mt-9 max-w-md">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-2xl font-semibold tabular-nums text-white">
                {seatsLeft}
                <span className="ml-1.5 text-[13px] font-normal text-white/40">
                  / {ALPHA.totalSeats} disponibili
                </span>
              </span>
              <span className="rounded-full bg-[var(--color-mint)]/12 px-2.5 py-1 text-[11px] font-semibold text-[var(--color-mint)]">
                −{ALPHA.discountPercent}%
              </span>
            </div>
            <div
              className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/8"
              role="progressbar"
              aria-valuenow={ALPHA.seatsTaken}
              aria-valuemin={0}
              aria-valuemax={ALPHA.totalSeats}
              aria-label={`${ALPHA.seatsTaken} posti Alpha assegnati su ${ALPHA.totalSeats}`}
            >
              <span
                className="block h-full rounded-full bg-[var(--color-mint)]"
                style={{ width: `${Math.max(filledPercent, 1.5)}%` }}
              />
            </div>
          </div>

          <Link
            href="/prezzi"
            className="group mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
          >
            Prendi uno dei posti Alpha
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <ul className="space-y-7">
          {ALPHA.benefits.map((b, i) => {
            const Icon = ICONS[i] ?? SealCheck;
            return (
              <li key={b.title} className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mint)]/12 text-[var(--color-mint)]">
                  <Icon size={19} weight="bold" />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/50">
                    {b.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
