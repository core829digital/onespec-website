import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/reveal";
import type { LegalDoc } from "@/content/legal";
import { legalValue } from "@/content/legal-values";

/** Ogni `[[chiave]]` diventa il valore reale; se manca, resta un segnaposto visibile (mai inventato). */
function renderText(text: string, keyBase: string): ReactNode[] {
  return text.split(/(\[\[[^\]]+\]\])/g).map((part, i) => {
    const m = part.match(/^\[\[([^\]]+)\]\]$/);
    if (!m) return <span key={`${keyBase}-${i}`}>{part}</span>;
    const known = legalValue(m[1]);
    if (known) return <span key={`${keyBase}-${i}`}>{known}</span>;
    return (
      <mark
        key={`${keyBase}-${i}`}
        className="rounded bg-amber-500/15 px-1 py-0.5 text-[0.9em] font-medium text-[var(--color-text)]"
      >
        da completare: {m[1]}
      </mark>
    );
  });
}

/**
 * Documento legale. Il testo e' quello della piattaforma (italiano): per le altre
 * lingue compare l'avviso che il testo vincolante e' quello italiano.
 */
export async function LegalDocView({ doc, locale }: { doc: LegalDoc; locale: string }) {
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <section className="pt-20 pb-24 sm:pt-28">
      <div className="container-onespec">
        <Reveal className="mx-auto max-w-2xl">
          {locale !== "it" && (
            <p className="mb-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] px-4 py-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
              {t("notice")}
            </p>
          )}
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {doc.title}
          </h1>
          <p className="mt-2 text-[13px] text-[var(--color-text-secondary)]">
            Ultimo aggiornamento: {new Date(doc.updated).toLocaleDateString("it-IT")}
          </p>
          <p className="mt-4 text-[15px] text-[var(--color-text-secondary)]">{doc.summary}</p>
          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-[var(--color-text)]">
            {doc.sections.map((s, si) => (
              <div key={si}>
                <h2 className="text-[18px] font-semibold text-[var(--color-text)]">{s.h}</h2>
                <div className="mt-3 space-y-3 text-[var(--color-text-secondary)]">
                  {s.p.map((para, pi) => (
                    <p key={pi}>{renderText(para, `${si}-${pi}`)}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
