import { Check, Minus } from "@phosphor-icons/react/dist/ssr";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AlphaProgram } from "@/components/showcase/alpha-program";
import { PRICING_TIERS_META, alphaPrice, ALPHA, SITE } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

type PricingCopy = {
  id: string;
  name: string;
  description: string;
  quotesLimit: string;
  features: string[];
  cta: string;
  priceLabel?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: `${t("prezziTitle")} — onespec`,
    description: t("description"),
  };
}

export default async function PrezziPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrezziContent />;
}

function PrezziContent() {
  const t = useTranslations("prezzi");
  const tRoot = useTranslations();
  const locale = useLocale();
  const pricingCopy = tRoot.raw("pricingTiers") as PricingCopy[];

  return (
    <>
      <section className="pt-20 pb-8 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {t("hero.subtitle")}
            </p>
            <p className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-light)] px-3.5 py-1.5 text-[12px] font-semibold text-[var(--color-mint-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-dark)]" />
              {t("hero.alphaNote", { percent: ALPHA.discountPercent, seats: ALPHA.totalSeats })}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-8">
        <div className="container-onespec">
          <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_TIERS_META.map((meta, i) => {
              const copy = pricingCopy[i];
              return (
                <RevealItem
                  key={meta.id}
                  className={
                    meta.highlighted
                      ? "flex flex-col rounded-3xl border-2 border-[var(--color-mint)] bg-[var(--color-bg)] p-8"
                      : "flex flex-col rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-8"
                  }
                >
                  {meta.highlighted ? (
                    <span className="inline-block w-fit rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold text-[var(--color-mint-dark)]">
                      {t("piuScelto")}
                    </span>
                  ) : (
                    <span className="h-[22px]" />
                  )}
                  <h2 className="mt-3 text-[19px] font-semibold text-[var(--color-text)]">
                    {copy.name}
                  </h2>
                  <p className="mt-1 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-[var(--color-text)]">
                      {meta.monthly !== null
                        ? new Intl.NumberFormat(locale, {
                            style: "currency",
                            currency: "EUR",
                            minimumFractionDigits: 0,
                          }).format(meta.monthly)
                        : copy.priceLabel}
                    </span>
                    {meta.monthly !== null && (
                      <span className="text-[13px] text-[var(--color-text-secondary)]">
                        {t("priceNote")} {t("taxNote")}
                      </span>
                    )}
                  </p>
                  {meta.alphaEligible && meta.monthly !== null ? (
                    <p className="mt-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-[15px] font-semibold text-[var(--color-mint-dark)]">
                        {alphaPrice(meta.monthly, locale)}
                        {t("alphaPriceSuffix")}
                      </span>
                      <span className="text-[12px] text-[var(--color-text-secondary)]">
                        {t("alphaWithPrefix", { percent: ALPHA.discountPercent })}
                      </span>
                    </p>
                  ) : (
                    <p className="mt-2.5 text-[12px] text-[var(--color-text-secondary)]">
                      {t("enterpriseNote")}
                    </p>
                  )}
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                    {copy.description}
                  </p>

                  <div className="mt-6 rounded-xl bg-[var(--color-bg-alt)] px-4 py-3">
                    <p className="text-[13px] font-medium text-[var(--color-text)]">
                      {copy.quotesLimit}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[var(--color-text-secondary)]">
                      {meta.whitelabel ? (
                        <Check size={14} className="text-[var(--color-mint-dark)]" />
                      ) : (
                        <Minus size={14} />
                      )}
                      {meta.whitelabel ? t("whitelabelYes") : t("whitelabelNo")}
                    </p>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {copy.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13px] text-[var(--color-text)]">
                        <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-mint-dark)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${SITE.email}`}
                    className={
                      meta.highlighted
                        ? "mt-8 inline-flex cursor-pointer items-center justify-center rounded-full bg-[var(--color-mint)] px-5 py-3 text-[14px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
                        : "mt-8 inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] px-5 py-3 text-[14px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
                    }
                  >
                    {copy.cta}
                  </a>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal className="mt-8 text-center">
            <p className="text-[13px] text-[var(--color-text-secondary)]">
              {t("taxFootnote")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Programma Alpha */}
      <section className="pb-20">
        <div className="container-onespec">
          <Reveal>
            <AlphaProgram />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              {t("standalone.title")}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {t.rich("standalone.body", {
                link: (chunks) => (
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-[var(--color-mint-dark)] hover:underline"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
