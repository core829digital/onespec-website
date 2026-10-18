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
import { DemoConfigurators } from "@/components/showcase/demo-configurators";
import { IframeExplainer } from "@/components/showcase/iframe-explainer";
import { RequestsMockup } from "@/components/showcase/requests-mockup";
import { platformRegister } from "@/lib/site-config";
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
  const td = useTranslations("demoConfigurators");
  const locale = useLocale();

  const features = t.raw("features.items") as FeatureItem[];

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Configuratore live */}
      <section id="configuratore" className="scroll-mt-24 bg-[var(--color-bg)] pt-16 pb-24">
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
            <DemoConfigurators kinds={["widget"]} />
            <p className="mx-auto mt-6 max-w-2xl text-center text-[12px] text-[var(--color-text-secondary)]">
              {td("noteSingle")}
            </p>
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
            <Link
              href="/prodotto"
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-[15px] font-medium text-[var(--color-mint)] underline-offset-4 hover:underline"
            >
              {t("valueProp.link")}
              <ArrowRight size={16} />
            </Link>
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
            <RequestsMockup />
          </Reveal>
        </div>
      </section>

      {/* Prezzi: i piani e i prezzi stanno nella pagina dedicata */}
      <section className="border-t border-[var(--color-border-subtle)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("pricing.title")}
            </h2>
            <p className="mt-4 text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              {t("pricing.subtitle")}
            </p>
            <Link
              href="/prezzi"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3.5 text-[15px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
            >
              {t("pricing.cta")}
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
              {t("cta.subtitle")}
            </p>
            <a
              href={platformRegister(locale)}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("cta.button")}
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
