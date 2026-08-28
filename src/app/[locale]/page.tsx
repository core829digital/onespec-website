import {
  Code,
  Palette,
  Lightning,
  ShieldCheck,
  ChartLineUp,
  FileArrowUp,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Hero } from "@/components/ui/hero";
import { ConfiguratorEmbed } from "@/components/showcase/configurator-embed";
import { IframeExplainer } from "@/components/showcase/iframe-explainer";
import { AlphaProgram } from "@/components/showcase/alpha-program";
import { DashboardMockup } from "@/components/showcase/dashboard-mockup";
import { PRICING_TIERS_META, alphaPrice, ALPHA } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

const ICONS = {
  code: Code,
  palette: Palette,
  file: FileArrowUp,
  shield: ShieldCheck,
  chart: ChartLineUp,
  lightning: Lightning,
};

type FeatureItem = { icon: keyof typeof ICONS; title: string; description: string };
type StepItem = { n: string; title: string; description: string };
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
  return { title: t("title"), description: t("description") };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");
  const tRoot = useTranslations();
  const locale = useLocale();

  const features = t.raw("features.items") as FeatureItem[];
  const steps = t.raw("steps.items") as StepItem[];
  const pricingCopy = tRoot.raw("pricingTiers") as PricingCopy[];

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Configuratore live */}
      <section className="bg-[var(--color-bg)] pt-20 pb-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-mint-dark)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-dark)]" />
              {t("configurator.kicker")}
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("configurator.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {t("configurator.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <ConfiguratorEmbed />
          </Reveal>
        </div>
      </section>

      {/* Value prop */}
      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("valueProp.title")}
            </h2>
            <p className="mt-5 text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {t("valueProp.body")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cos'e un iFrame */}
      <section className="py-24">
        <div className="container-onespec">
          <Reveal>
            <IframeExplainer />
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[var(--color-border-subtle)] py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("features.title")}
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <RevealItem
                  key={f.title}
                  className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-7 transition-colors hover:border-[var(--color-border)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                    <Icon size={22} weight="bold" />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-text)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                    {f.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Dashboard */}
      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("dashboard.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {t("dashboard.subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <DashboardMockup />
          </Reveal>
        </div>
      </section>

      {/* Come funziona */}
      <section className="py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("steps.title")}
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <RevealItem key={s.n}>
                <span className="font-mono text-[13px] font-semibold text-[var(--color-mint-dark)]">
                  {s.n}
                </span>
                <h3 className="mt-3 text-[16px] font-semibold text-[var(--color-text)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  {s.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Programma Alpha */}
      <section className="pb-24">
        <div className="container-onespec">
          <Reveal>
            <AlphaProgram />
          </Reveal>
        </div>
      </section>

      {/* Prezzi */}
      <section className="border-t border-[var(--color-border-subtle)] py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("pricing.title")}
            </h2>
            <p className="mt-4 text-[15px] text-[var(--color-text-secondary)]">
              {t("pricing.subtitle", { percent: ALPHA.discountPercent })}
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRICING_TIERS_META.map((meta, i) => {
              const copy = pricingCopy[i];
              return (
                <RevealItem
                  key={meta.id}
                  className={
                    meta.highlighted
                      ? "rounded-3xl border-2 border-[var(--color-mint)] bg-[var(--color-bg)] p-8"
                      : "rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-8"
                  }
                >
                  {meta.highlighted && (
                    <span className="inline-block rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold text-[var(--color-mint-dark)]">
                      {t("pricing.piuScelto")}
                    </span>
                  )}
                  <h3 className="mt-3 text-[18px] font-semibold text-[var(--color-text)]">
                    {copy.name}
                  </h3>
                  <p className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                      {meta.monthly !== null
                        ? new Intl.NumberFormat(locale, {
                            style: "currency",
                            currency: "EUR",
                            minimumFractionDigits: 0,
                          }).format(meta.monthly)
                        : copy.priceLabel}
                    </span>
                  </p>
                  {meta.alphaEligible && meta.monthly !== null && (
                    <p className="mt-2 text-[12px] font-medium text-[var(--color-mint-dark)]">
                      {alphaPrice(meta.monthly, locale)}
                      {t("pricing.alphaSuffix")}
                    </p>
                  )}
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                    {copy.description}
                  </p>
                </RevealItem>
              );
            })}
          </RevealGroup>

          <Reveal className="mt-10 text-center">
            <Link
              href="/prezzi"
              className="inline-flex cursor-pointer items-center gap-2 text-[15px] font-medium text-[var(--color-mint-dark)] hover:underline"
            >
              {t("pricing.compareLink")}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-[var(--color-bg-inverse)] py-24">
        <div className="container-onespec text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/60">
              {t("cta.subtitle", { seats: ALPHA.totalSeats })}
            </p>
            <Link
              href="/prezzi"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("cta.button")}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
