import {
  ArrowRight,
  Buildings,
  ChartLineUp,
  CheckCircle,
  EnvelopeSimple,
  FileText,
  Globe,
  Handshake,
  Phone,
  Stack,
  Storefront,
  Timer,
  Wrench,
  WhatsappLogo,
  ChatCircleText,
  ArrowsClockwise,
} from "@phosphor-icons/react/dist/ssr";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Link } from "@/i18n/navigation";
import { SocialLinks } from "@/components/social-links";
import { BrandCube } from "@/components/showcase/brand-cube";
import { COMPANY, FOUNDERS, platformRegister } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return { title: `${t("metaTitle")} — onespec`, description: t("metaDescription") };
}

export default async function ChiSiamoPage({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}

type Item = { title: string; text: string };
type Solution = { kicker: string; title: string; text: string; points: string[] };

const PAIN_ICONS = [Timer, ChartLineUp, FileText, Globe];
const SOLUTION_ICONS = [Storefront, Stack];
const HOW_ICONS = [Wrench, ArrowsClockwise, ChatCircleText, Globe];

const sectionTitle = "text-balance text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl";
const card = "rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] p-7";

function AboutContent() {
  const t = useTranslations("aboutPage");
  const locale = useLocale();
  const pains = t.raw("pains") as Item[];
  const solutions = t.raw("solutions") as Solution[];
  const how = t.raw("how") as Item[];

  const companyRows: { label: string; value: string; href?: string }[] = [
    { label: t("company.legalName"), value: COMPANY.legalName },
    { label: t("company.address"), value: COMPANY.address },
    { label: t("company.vat"), value: COMPANY.vatId },
    { label: t("company.register"), value: COMPANY.tradeRegister },
    { label: t("company.support"), value: COMPANY.emails.support, href: `mailto:${COMPANY.emails.support}` },
    { label: t("company.office"), value: COMPANY.emails.office, href: `mailto:${COMPANY.emails.office}` },
    { label: t("company.sales"), value: COMPANY.emails.sales, href: `mailto:${COMPANY.emails.sales}` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-14 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mint-light)] px-3.5 py-1.5 text-[12px] font-semibold text-[var(--color-mint-dark)]">
              <Handshake size={14} weight="bold" aria-hidden="true" />
              {t("badge")}
            </span>
            <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {t("hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Il problema */}
      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className={sectionTitle}>{t("painTitle")}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("painIntro")}</p>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {pains.map((p, i) => {
              const Icon = PAIN_ICONS[i % PAIN_ICONS.length];
              return (
                <RevealItem key={p.title} className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-bg-alt)] text-[var(--color-text)]">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[18px] font-semibold text-[var(--color-text)]">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">{p.text}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* La soluzione */}
      <section className="py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className={sectionTitle}>{t("solutionTitle")}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("solutionIntro")}</p>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-2">
            {solutions.map((s, i) => {
              const Icon = SOLUTION_ICONS[i % SOLUTION_ICONS.length];
              return (
                <RevealItem key={s.title} className={`${card} flex flex-col`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                      <Icon size={22} weight="bold" aria-hidden="true" />
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-wide text-[var(--color-mint-dark)]">{s.kicker}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--color-text)]">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{s.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-[14px] text-[var(--color-text)]">
                        <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-[var(--color-mint-dark)]" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Come lavoriamo */}
      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className={sectionTitle}>{t("howTitle")}</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {how.map((h, i) => {
              const Icon = HOW_ICONS[i % HOW_ICONS.length];
              return (
                <RevealItem key={h.title} className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] p-6">
                  <Icon size={24} className="text-[var(--color-mint-dark)]" aria-hidden="true" />
                  <h3 className="mt-4 text-[16px] font-semibold text-[var(--color-text)]">{h.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">{h.text}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Fondatori */}
      <section className="py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className={sectionTitle}>{t("foundersTitle")}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("foundersIntro")}</p>
          </Reveal>
          <RevealGroup className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
            {FOUNDERS.map((f) => (
              <RevealItem key={f.id} className={card}>
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-mint)] text-xl font-semibold text-[#04231a]"
                  >
                    {f.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-[18px] font-semibold text-[var(--color-text)]">{f.name}</p>
                    <p className="text-[13px] text-[var(--color-text-secondary)]">{t(`founders.roles.${f.role}`)}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {f.phones.map((p) => (
                    <li key={p.tel}>
                      <a
                        href={`tel:${p.tel}`}
                        aria-label={`${t("founders.call")} ${f.name} ${p.display}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-bg)] px-4 text-[14px] font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-mint-dark)] hover:text-[var(--color-mint-dark)]"
                      >
                        <Phone size={16} aria-hidden="true" />
                        {p.display}
                      </a>
                    </li>
                  ))}
                  {f.whatsapp ? (
                    <li>
                      <a
                        href={`https://wa.me/${f.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25d366] px-4 text-[14px] font-semibold text-[#05210f] transition-transform hover:scale-[1.02]"
                      >
                        <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                        {t("founders.whatsapp")}
                      </a>
                    </li>
                  ) : null}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Azienda + social */}
      <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec grid gap-8 lg:grid-cols-5">
          <Reveal className={`${card} bg-[var(--color-bg)] lg:col-span-3`}>
            <div className="flex items-center gap-3">
              <Buildings size={24} className="text-[var(--color-mint-dark)]" aria-hidden="true" />
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">{t("companyTitle")}</h2>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("companyText")}</p>
            <dl className="mt-6 divide-y divide-[var(--color-border-subtle)] text-[14px]">
              {companyRows.map((r) => (
                <div key={r.label} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="text-[var(--color-text-secondary)]">{r.label}</dt>
                  <dd className="font-medium text-[var(--color-text)] sm:text-right">
                    {r.href ? (
                      <a href={r.href} className="inline-flex items-center gap-1.5 break-all hover:text-[var(--color-mint-dark)]">
                        <EnvelopeSimple size={14} aria-hidden="true" className="shrink-0" />
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className={`${card} bg-[var(--color-bg)] flex flex-col lg:col-span-2`}>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">{t("socialTitle")}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("socialText")}</p>
            <SocialLinks className="mt-5" showHandle />
            <div className="mt-auto flex justify-center pt-8">
              <BrandCube />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-onespec">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className={sectionTitle}>{t("cta.title")}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{t("cta.text")}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={platformRegister(locale)}
                className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-[var(--color-mint)] px-6 py-3.5 text-[15px] font-medium text-[#04231a] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("cta.primary")}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/demo"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--color-border-subtle)] px-6 py-3.5 text-[15px] font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-bg-alt)]"
              >
                {t("cta.secondary")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
