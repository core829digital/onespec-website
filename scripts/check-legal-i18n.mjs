#!/usr/bin/env node
// The courtesy translations of the legal documents (src/content/legal-i18n) must follow the Italian text they were made from.
// A translation that drifted is never shown (the page falls back to Italian); this check makes the drift visible.
// Usage: npm run check:legal-i18n
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);
const { LEGAL_DOCS } = await jiti.import("../src/content/legal.ts");
const { LEGAL_I18N_SETS, LEGAL_I18N_SOURCE, legalTranslationProblem, legalValuesFingerprint } = await jiti.import(
  "../src/content/legal-i18n/index.ts",
);

let bad = 0;
if (LEGAL_I18N_SOURCE.values !== legalValuesFingerprint()) {
  console.error(`legal-values.ts changed: update the translations, then set LEGAL_I18N_SOURCE.values to "${legalValuesFingerprint()}"`);
  bad++;
}
for (const locale of Object.keys(LEGAL_I18N_SETS)) {
  for (const doc of LEGAL_DOCS) {
    const problem = legalTranslationProblem(doc, locale);
    if (problem && problem !== "legal-values.ts changed") {
      console.error(`${locale} ${doc.slug}: ${problem}`);
      bad++;
    }
  }
}
if (bad) process.exit(1);
console.log(`legal translations in sync (${Object.keys(LEGAL_I18N_SETS).length} languages × ${LEGAL_DOCS.length} documents)`);
