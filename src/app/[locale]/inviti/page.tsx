import { useLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Link } from "@/i18n/navigation";
import { PRICING_TIERS_META, PLATFORM_URL, platformRegister } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "referralPage" });
  return { title: `${t("metaTitle")} — onespec`, description: t("metaDescription") };
}

export default async function InvitiPage({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <InvitiContent />;
}

/** 10% of the VAT-excluded list price, rounded to the cent (mirrors the platform's calculation). */
const credit = (price: number) => Math.round(price * 10) / 100;

type PricingCopy = { id: string; name: string };
type Step = { title: string; description: string };

function InvitiContent() {
  const t = useTranslations("referralPage");
  const tRoot = useTranslations();
  const locale = useLocale();
  const money = (n: number) => new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(n);
  const steps = t.raw("steps") as Step[];
  const rules = t.raw("rules") as string[];
  const names = tRoot.raw("pricingTiers") as PricingCopy[];
  const rows = PRICING_TIERS_META.filter((p) => p.id !== "enterprise").map((p) => ({
    id: p.id,
    name: names.find((n) => n.id === p.id)?.name ?? p.id,
    monthly: p.monthly,
    annual: p.annual,
  }));
  const referralPageUrl = `${PLATFORM_URL}${locale === "it" ? "" : `/${locale}`}/app/account/referral`;

  return (
    <>
      <section className="pt-20 pb-12 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-light)] px-3.5 py-1.5 text-[12px] font-semibold text-[var(--color-mint-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-dark)]" />
              {t("badge")}
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={platformRegister(locale)}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("ctaRegister")}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={referralPageUrl}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--color-border-subtle)] px-6 py-3.5 text-[15px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
              >
                {t("ctaCode")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)]">{t("stepsTitle")}</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <RevealItem key={s.title} className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-mint-light)] text-sm font-bold text-[var(--color-mint-dark)]">{i + 1}</span>
                <h3 className="mt-4 text-[17px] font-semibold text-[var(--color-text)]">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">{s.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-16">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)]">{t("amountsTitle")}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("amountsNote")}</p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl overflow-x-auto rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]">
            <table className="w-full text-left text-[13px] sm:text-[14px]">
              <thead>
                <tr className="text-[12px] text-[var(--color-text-secondary)]">
                  <th scope="col" className="px-4 py-3 font-medium">{t("colPlan")}</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">{t("colPrice")}</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">{t("colCredit")}</th>
                  <th scope="col" className="px-4 py-3 text-right font-medium">{t("colDiscount")}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-[var(--color-border-subtle)]">
                    <th scope="row" className="px-4 py-3 font-semibold text-[var(--color-text)]">{r.name}</th>
                    <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-[var(--color-text-secondary)]">{money(r.monthly)}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-right font-semibold tabular-nums text-[var(--color-text)]">{money(credit(r.monthly))}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-right tabular-nums text-[var(--color-text-secondary)]">{money(credit(r.monthly))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[12px] text-[var(--color-text-secondary)]">{t("annualNote")}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl">
            <h2 className="text-center text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)]">{t("rulesTitle")}</h2>
            <ul className="mt-8 space-y-3">
              {rules.map((r) => (
                <li key={r} className="flex gap-3 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-[13px] text-[var(--color-text-secondary)]">
              {t("legalPrefix")}{" "}
              <Link href="/legale/regolamento-inviti" className="font-medium text-[var(--color-text)] underline underline-offset-4">
                {t("legalLink")}
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
