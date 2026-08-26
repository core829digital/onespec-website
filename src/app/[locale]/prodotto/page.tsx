import {
  FileArrowUp,
  Palette,
  Code,
  ChartLineUp,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { ConfiguratorEmbed } from "@/components/showcase/configurator-embed";
import { DashboardMockup } from "@/components/showcase/dashboard-mockup";
import { ColorPicker } from "@/components/showcase/color-picker";
import { EmbedCodeCard } from "@/components/showcase/embed-code-card";
import { PerformanceCard } from "@/components/showcase/performance-card";
import { PhonePreview } from "@/components/showcase/phone-preview";
import { SupportTicket } from "@/components/showcase/support-ticket";
import type { AppLocale } from "@/i18n/routing";

const ICONS = { file: FileArrowUp, palette: Palette, code: Code, chart: ChartLineUp };
const VISUALS: Record<string, React.ReactNode> = {
  colorPicker: <ColorPicker />,
  embedCode: <EmbedCodeCard />,
};

type Block = {
  icon: keyof typeof ICONS;
  title: string;
  description: string;
  visual: string | null;
};
type SupportTier = {
  plan: string;
  level: string;
  description: string;
  code: string;
  color: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: `${t("prodottoTitle")} — onespec`, description: t("description") };
}

export default async function ProdottoPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProdottoContent />;
}

function ProdottoContent() {
  const t = useTranslations("prodotto");
  const blocks = t.raw("blocks") as Block[];
  const supportTiers = t.raw("support.tiers") as SupportTier[];

  return (
    <>
      <section className="pt-20 pb-16 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {t("hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Configuratore live */}
      <section className="pb-24">
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

      <section className="pb-24">
        <div className="container-onespec">
          <RevealGroup className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {blocks.map((b) => {
              const Icon = ICONS[b.icon];
              return (
                <RevealItem
                  key={b.title}
                  className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-mint-dark)]">
                    <Icon size={22} weight="bold" />
                  </div>
                  <h2 className="mt-5 text-[19px] font-semibold text-[var(--color-text)]">
                    {b.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                    {b.description}
                  </p>
                  {b.visual && <div className="mt-5">{VISUALS[b.visual]}</div>}
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Dashboard */}
      <section className="border-t border-[var(--color-border-subtle)] pb-24">
        <div className="container-onespec pt-20">
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

      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-inverse)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t("midCta.title")}
            </h2>
            <p className="mt-4 text-[15px] text-white/60">
              {t("midCta.subtitle")}
            </p>
          </Reveal>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
            <Reveal>
              <PerformanceCard />
            </Reveal>
            <Reveal delay={0.1}>
              <PhonePreview />
            </Reveal>
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/prezzi"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("midCta.button")}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {t("support.title")}
            </h2>
            <p className="mt-4 text-[15px] text-[var(--color-text-secondary)]">
              {t("support.subtitle")}
            </p>
          </Reveal>

          <RevealGroup className="mt-14 flex flex-wrap items-center justify-center gap-8">
            {supportTiers.map((s) => (
              <RevealItem key={s.plan}>
                <SupportTicket {...s} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
