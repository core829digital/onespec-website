import type { LegalDoc } from "../legal";
import { LEGAL_VALUES } from "../legal-values";
import type { LegalI18nSet } from "./types";
import { EN } from "./en";
import { FR } from "./fr";
import { DE } from "./de";
import { NL } from "./nl";
import { RO } from "./ro";

/**
 * Courtesy translations of the legal documents. The Italian text in `legal.ts` (mirrored from the platform) is the only binding one;
 * these follow it section by section and paragraph by paragraph, with the values of `legal-values.ts` written out in each language.
 *
 * What they were translated from: when an Italian document gets a new `updated` date, its structure changes or `legal-values.ts`
 * changes, the page falls back to the Italian text (never a stale translation) and scripts/check-legal-i18n.mjs fails until the
 * translations are brought up to date and these markers are moved.
 */
export const LEGAL_I18N_SOURCE = {
  values: "bjiipv",
  docs: {
    privacy: "2026-10-18",
    "termini-di-servizio": "2026-10-12",
    "termini-di-utilizzo": "2026-09-02",
    cookie: "2026-10-18",
    gdpr: "2026-10-12",
    sicurezza: "2026-09-02",
    "regolamento-inviti": "2026-10-02",
    qualita: "2026-09-02",
  } as Record<string, string>,
};

const SETS: Record<string, LegalI18nSet> = { en: EN, fr: FR, de: DE, nl: NL, ro: RO };

/** Short fingerprint of the placeholder values the translations spell out. */
export function legalValuesFingerprint(): string {
  const text = JSON.stringify(LEGAL_VALUES);
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = (Math.imul(h, 33) ^ text.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

const PLACEHOLDER = /\[\[[^\]]+\]\]/g;

/** Why a translation cannot be shown for this document (null when it can). */
export function legalTranslationProblem(doc: LegalDoc, locale: string): string | null {
  const t = SETS[locale]?.[doc.slug];
  if (!t) return "missing";
  if (LEGAL_I18N_SOURCE.docs[doc.slug] !== doc.updated) return `source date ${LEGAL_I18N_SOURCE.docs[doc.slug]} != ${doc.updated}`;
  if (LEGAL_I18N_SOURCE.values !== legalValuesFingerprint()) return "legal-values.ts changed";
  if (t.sections.length !== doc.sections.length) return `sections ${t.sections.length} != ${doc.sections.length}`;
  for (let i = 0; i < doc.sections.length; i++) {
    const a = doc.sections[i].p;
    const b = t.sections[i].p;
    if (a.length !== b.length) return `section ${i + 1}: paragraphs ${b.length} != ${a.length}`;
    for (let j = 0; j < a.length; j++) {
      // Placeholders still unresolved in Italian must stay as they are; resolved ones are written out in the translation.
      const open = (a[j].match(PLACEHOLDER) ?? []).filter((m) => !LEGAL_VALUES[m.slice(2, -2)]?.trim());
      const got = b[j].match(PLACEHOLDER) ?? [];
      if (open.join("|") !== got.join("|")) return `section ${i + 1}, paragraph ${j + 1}: placeholders differ`;
    }
  }
  return null;
}

/** The document in the visitor's language when a translation exists, otherwise the Italian original. */
export function localizedLegalDoc(doc: LegalDoc, locale: string): { doc: LegalDoc; translated: boolean } {
  const t = SETS[locale]?.[doc.slug];
  if (!t || legalTranslationProblem(doc, locale)) return { doc, translated: false };
  return { doc: { ...doc, title: t.title, summary: t.summary, sections: t.sections }, translated: true };
}

export const LEGAL_I18N_SETS = SETS;
