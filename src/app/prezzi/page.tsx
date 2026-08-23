import Link from "next/link";
import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { PRICING_TIERS } from "@/lib/site-config";

export const metadata = {
  title: "Prezzi — onespec",
  description: "Tre piani onespec in base a richieste preventivo mensili e brandizzazione del configuratore.",
};

export default function PrezziPage() {
  return (
    <>
      <section className="pt-20 pb-8 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              Prezzi semplici, in base a quanto usi il configuratore
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              Piu richieste di preventivo genera il tuo configuratore, piu valore ti porta.
              Scegli il piano in base al volume e a quanto vuoi brandizzarlo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-8">
        <div className="container-onespec">
          <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <RevealItem
                key={tier.id}
                className={
                  tier.highlighted
                    ? "flex flex-col rounded-3xl border-2 border-[var(--color-mint)] bg-[var(--color-bg)] p-8"
                    : "flex flex-col rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-8"
                }
              >
                {tier.highlighted ? (
                  <span className="inline-block w-fit rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold text-[var(--color-mint-dark)]">
                    Piu scelto
                  </span>
                ) : (
                  <span className="h-[22px]" />
                )}
                <h2 className="mt-3 text-[19px] font-semibold text-[var(--color-text)]">
                  {tier.name}
                </h2>
                <p className="mt-1 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight text-[var(--color-text)]">
                    {tier.price}
                  </span>
                  <span className="text-[13px] text-[var(--color-text-secondary)]">
                    {tier.priceNote}
                  </span>
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                  {tier.description}
                </p>

                <div className="mt-6 rounded-xl bg-[var(--color-bg-alt)] px-4 py-3">
                  <p className="text-[13px] font-medium text-[var(--color-text)]">
                    {tier.quotesLimit}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[var(--color-text-secondary)]">
                    {tier.whitelabel ? (
                      <Check size={14} className="text-[var(--color-mint-dark)]" />
                    ) : (
                      <Minus size={14} />
                    )}
                    {tier.whitelabel ? "Widget white-label" : "Badge onespec visibile"}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-[var(--color-text)]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-mint-dark)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#contatti"
                  className={
                    tier.highlighted
                      ? "mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--color-mint)] px-5 py-3 text-[14px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
                      : "mt-8 inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] px-5 py-3 text-[14px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
                  }
                >
                  {tier.cta}
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Serve un configuratore tuo, senza piattaforma?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              Su richiesta realizziamo anche configuratori standalone, sviluppati apposta per il
              tuo sito e senza dipendenza dalla piattaforma onespec.{" "}
              <a href="mailto:hello@onespec.it" className="font-medium text-[var(--color-mint-dark)] hover:underline">
                Scrivici
              </a>{" "}
              per una valutazione.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
