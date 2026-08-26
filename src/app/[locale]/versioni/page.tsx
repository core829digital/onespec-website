import { Package, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AlphaBadge } from "@/components/showcase/alpha-badge";
import { CHANGELOG_META, type ChangelogMeta } from "@/lib/site-config";
import type { AppLocale } from "@/i18n/routing";

type ChangelogCopy = { title: string; items: string[] };

const TAG_STYLES: Record<ChangelogMeta["tag"], string> = {
  Nuovo: "bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]",
  Miglioramento: "bg-[#eaf1ff] text-[#2952cc]",
  Fix: "bg-[#fdeeee] text-[#b23a3a]",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: `${t("versioniTitle")} — onespec`, description: t("description") };
}

export default async function VersioniPage({
  params,
}: {
  params: Promise<{ locale: AppLocale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <VersioniContent />;
}

function ChangelogList({
  channel,
  meta,
  copy,
  locale,
  tagLabels,
}: {
  channel: "prodotto" | "alpha";
  meta: ChangelogMeta[];
  copy: ChangelogCopy[];
  locale: string;
  tagLabels: Record<ChangelogMeta["tag"], string>;
}) {
  const t = useTranslations("versioni");
  const entries = meta
    .map((m, i) => ({ meta: m, copy: copy[i] }))
    .filter((e) => e.meta.channel === channel);

  if (entries.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-[var(--color-border)] px-6 py-10 text-center text-[14px] text-[var(--color-text-secondary)]">
        {t("empty")}
      </p>
    );
  }

  return (
    <RevealGroup className="divide-y divide-[var(--color-border-subtle)]">
      {entries.map(({ meta: m, copy: c }) => (
        <RevealItem key={m.version} className="py-8 first:pt-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[13px] font-semibold text-[var(--color-text)]">
              {channel === "alpha" ? m.version : `v${m.version}`}
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${TAG_STYLES[m.tag]}`}
            >
              {tagLabels[m.tag]}
            </span>
            <time
              dateTime={m.date}
              className="text-[12px] text-[var(--color-text-secondary)]"
            >
              {new Date(m.date).toLocaleDateString(locale, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          <h3 className="mt-3 text-[18px] font-semibold text-[var(--color-text)]">
            {c.title}
          </h3>
          <ul className="mt-3 space-y-2">
            {c.items.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-secondary)]" />
                {item}
              </li>
            ))}
          </ul>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function VersioniContent() {
  const t = useTranslations("versioni");
  const tRoot = useTranslations();
  const locale = useLocale();
  const copy = tRoot.raw("changelog") as ChangelogCopy[];
  const tagLabels = t.raw("tags") as Record<ChangelogMeta["tag"], string>;

  return (
    <>
      <section className="pt-20 pb-12 sm:pt-28">
        <div className="container-onespec text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {t("subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Canale 1 — prodotto */}
      <section className="pb-20">
        <div className="container-onespec">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-start gap-4 border-b border-[var(--color-border)] pb-6">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                  <Package size={21} weight="bold" />
                </span>
                <div>
                  <h2 className="text-[22px] font-semibold tracking-tight text-[var(--color-text)]">
                    {t("prodottoTitle")}
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                    {t("prodottoBody")}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-8">
              <ChangelogList
                channel="prodotto"
                meta={CHANGELOG_META}
                copy={copy}
                locale={locale}
                tagLabels={tagLabels}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Canale 2 — programma Alpha */}
      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-alt)] py-20">
        <div className="container-onespec">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-start gap-4 border-b border-[var(--color-border)] pb-6">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mint-light)] text-[var(--color-mint-dark)]">
                  <Sparkle size={21} weight="bold" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-[22px] font-semibold tracking-tight text-[var(--color-text)]">
                      {t("alphaTitle")}
                    </h2>
                    <AlphaBadge />
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                    {t("alphaBody")}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-8">
              <ChangelogList
                channel="alpha"
                meta={CHANGELOG_META}
                copy={copy}
                locale={locale}
                tagLabels={tagLabels}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
