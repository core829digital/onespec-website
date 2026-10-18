import {
  FileArrowUp,
  Palette,
  Code,
  ChartLineUp,
  ArrowRight,
  ArrowDown,
  Check,
  Moon,
  PhoneDisconnect,
  Detective,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { PresentationVideo } from "@/components/showcase/presentation-video";
import { ProductStoryboard } from "@/components/showcase/product-storyboard";
import { ColorPicker } from "@/components/showcase/color-picker";
import { EmbedCodeCard } from "@/components/showcase/embed-code-card";
import { SupportTicket } from "@/components/showcase/support-ticket";
import type { AppLocale } from "@/i18n/routing";

const ICONS = { file: FileArrowUp, palette: Palette, code: Code, chart: ChartLineUp };
const PROBLEM_ICONS = [Moon, PhoneDisconnect, Detective];
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
type Item = { title: string; body: string };
type SupportTier = {
  plan: string;
  level: string;
  description: string;
  code: string;
  color: string;
};

const primaryBtn =
  "inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]";
const secondaryBtn =
  "inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-[15px] font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-text-secondary)]";

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

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-mint-light)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-mint-dark)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-mint-dark)]" />
      {children}
    </span>
  );
}

function SectionHead({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{subtitle}</p>
    </Reveal>
  );
}

/**
 * The product page tells one story: a scene every window dealer knows (the hook), what it costs them, how OneSpec changes the ending
 * (real screens, step by step), what the customer can choose, how it goes live, and the dashboard. The live configurators are not
 * repeated here: the widget lives on the home page and the Showroom on /demo.
 */
function ProdottoContent() {
  const t = useTranslations("prodotto");
  const locale = useLocale();
  const problems = t.raw("problem.items") as Item[];
  const options = t.raw("inAction.options") as Item[];
  const blocks = t.raw("blocks") as Block[];
  const callouts = t.raw("dashboard.callouts") as Item[];
  const supportTiers = t.raw("support.tiers") as SupportTier[];

  return (
    <>
      {/* 1. The hook */}
      <section className="pt-20 pb-16 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <Kicker>{t("hero.kicker")}</Kicker>
            <h1 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#in-azione" className={primaryBtn}>
                {t("hero.ctaPrimary")}
                <ArrowDown size={16} />
              </a>
              <Link href={{ pathname: "/", hash: "configuratore" }} className={secondaryBtn}>
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. What it costs today */}
      <section className="pb-24">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">{t("problem.title")}</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {problems.map((p, i) => {
              const Icon = PROBLEM_ICONS[i] ?? Moon;
              return (
                <RevealItem key={p.title} className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <Icon size={22} weight="bold" />
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold text-[var(--color-text)]">{p.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">{p.body}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* 3. The turning point: OneSpec in action, on real screens */}
      <section id="in-azione" className="scroll-mt-24 border-t border-[var(--color-border-subtle)] pt-20 pb-24">
        <div className="container-onespec">
          <SectionHead kicker={t("inAction.kicker")} title={t("inAction.title")} subtitle={t("inAction.subtitle")} />

          <Reveal delay={0.1} className="mt-12">
            <ProductStoryboard />
          </Reveal>

          <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={{ pathname: "/", hash: "configuratore" }} className={primaryBtn}>
              {t("inAction.tryLive")}
              <ArrowRight size={16} />
            </Link>
            <Link href="/demo" className={secondaryBtn}>
              {t("inAction.tryDemo")}
            </Link>
          </Reveal>

          <Reveal>
            <PresentationVideo />
          </Reveal>

          {/* What the customer can choose */}
          <div className="mx-auto mt-20 max-w-5xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h3 className="text-balance text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">{t("inAction.optionsTitle")}</h3>
              <p className="mx-auto mt-3 max-w-xl text-balance text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                {t("inAction.optionsSubtitle")}
              </p>
            </Reveal>
            <RevealGroup className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {options.map((o) => (
                <RevealItem key={o.title} className="flex gap-3 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                    <Check size={13} weight="bold" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-semibold text-[var(--color-text)]">{o.title}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-[var(--color-text-secondary)]">{o.body}</span>
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* 4. How it goes live on the dealer's site */}
      <section className="border-t border-[var(--color-border-subtle)] pt-20 pb-24">
        <div className="container-onespec">
          <SectionHead kicker={t("setup.kicker")} title={t("setup.title")} subtitle={t("setup.subtitle")} />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {blocks.map((b) => {
              const Icon = ICONS[b.icon];
              return (
                <RevealItem key={b.title} className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[var(--color-mint-dark)]">
                    <Icon size={22} weight="bold" />
                  </div>
                  <h3 className="mt-5 text-[19px] font-semibold text-[var(--color-text)]">{b.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">{b.description}</p>
                  {b.visual && <div className="mt-5">{VISUALS[b.visual]}</div>}
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* 5. The dashboard, as it really is */}
      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] pt-20 pb-24">
        <div className="container-onespec">
          <SectionHead kicker={t("dashboard.kicker")} title={t("dashboard.title")} subtitle={t("dashboard.subtitle")} />

          <Reveal delay={0.1} className="mt-12">
            <figure className="overflow-hidden rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
              <div className="flex items-center gap-1.5 border-b border-[var(--color-border-subtle)] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate text-[11px] font-medium text-[var(--color-text-secondary)]">{t("dashboard.windowLabel")}</span>
                <span className="ml-auto shrink-0 rounded-full border border-[var(--color-border-subtle)] px-2 py-0.5 text-[10px] text-[var(--color-text-secondary)]">
                  {t("inAction.sample")}
                </span>
              </div>
              <Image
                src={`/product/dash-${locale}.webp`}
                alt={t("dashboard.alt")}
                width={2000}
                height={958}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="block h-auto w-full"
              />
            </figure>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {callouts.map((c, i) => (
              <RevealItem key={c.title} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-5">
                <span className="text-[12px] font-semibold text-[var(--color-mint)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[15px] font-semibold text-[var(--color-text)]">{c.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">{c.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-10 text-center">
            <Link href="/demo" className={secondaryBtn}>
              {t("dashboard.cta")}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 6. Support */}
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

      {/* 7. The new ending of the story */}
      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-inverse)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("finalCta.title")}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">{t("finalCta.subtitle")}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/prezzi" className={primaryBtn}>
                {t("finalCta.button")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/demo"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:border-white/60"
              >
                {t("finalCta.demo")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
