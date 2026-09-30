import { useTranslations, useLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { PlanCard, type PricingCopy } from "@/components/pricing/plan-card";
import { PRICING_TIERS_META, SITE } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

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
  const groups = ["widget", "platform"] as const;

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
              {t("cancelNote")}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-8">
        <div className="container-onespec space-y-16">
          {groups.map((family) => (
            <div key={family}>
              <Reveal className="mb-8 max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                  {t(`families.${family}.title`)}
                </h2>
                <p className="mt-2 text-[14px] text-[var(--color-text-secondary)]">
                  {t(`families.${family}.body`)}
                </p>
              </Reveal>
              <RevealGroup
                className={
                  family === "widget"
                    ? "grid grid-cols-1 gap-6 md:grid-cols-3"
                    : "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
                }
              >
                {PRICING_TIERS_META.map((meta, i) =>
                  meta.family === family ? (
                    <PlanCard key={meta.id} meta={meta} copy={pricingCopy[i]} locale={locale} />
                  ) : null,
                )}
              </RevealGroup>
            </div>
          ))}

          <Reveal className="text-center">
            <p className="text-[13px] text-[var(--color-text-secondary)]">{t("taxFootnote")}</p>
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
