import type { LegalSection } from "../legal";

/** A courtesy translation of one legal document: same sections and paragraphs as the Italian text, which prevails. */
export type LegalI18nDoc = { title: string; summary: string; sections: LegalSection[] };
export type LegalI18nSet = Record<string, LegalI18nDoc>;
