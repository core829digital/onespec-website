/**
 * Dati strutturali (id, percorsi, numeri, date, flag booleani). I testi
 * visibili vivono nei cataloghi di traduzione in /messages e si recuperano
 * con useTranslations/getTranslations nei componenti, indicizzando questi
 * stessi array per posizione o per id.
 */

export const SITE = {
  name: "onespec",
  email: "hello@onespec.eu",
  salesEmail: "sales@onespec.eu",
};

export const NAV_KEYS = ["prodotto", "prezzi", "versioni"] as const;
export const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  prodotto: "/prodotto",
  prezzi: "/prezzi",
  versioni: "/versioni",
};

export const FOOTER_PRODOTTO_KEYS = ["comeFunziona", "prezzi", "versioni"] as const;
export const FOOTER_PRODOTTO_HREFS: Record<(typeof FOOTER_PRODOTTO_KEYS)[number], string> = {
  comeFunziona: "/prodotto",
  prezzi: "/prezzi",
  versioni: "/versioni",
};

export const FOOTER_AZIENDA_KEYS = ["accedi", "registrati", "contatti"] as const;
export const FOOTER_AZIENDA_HREFS: Record<(typeof FOOTER_AZIENDA_KEYS)[number], string> = {
  accedi: "login",
  registrati: "register",
  contatti: `mailto:${SITE.email}`,
};

export const FOOTER_LEGALE_KEYS = ["privacy", "termini", "cookie", "documenti"] as const;
export const FOOTER_LEGALE_HREFS: Record<(typeof FOOTER_LEGALE_KEYS)[number], string> = {
  privacy: "/legale/privacy",
  termini: "/legale/termini-di-servizio",
  cookie: "/legale/cookie",
  documenti: "/legale",
};

/**
 * La piattaforma (repo onespec-platform) vive su questo indirizzo: login,
 * registrazione diretta, pagamento Stripe e app. Il sito non ha account propri.
 */
export const PLATFORM_URL = "https://platform.onespec.eu";

/** Pagina della piattaforma nella lingua del visitatore (l'italiano non ha prefisso). */
export function platformUrl(path: string, locale: string): string {
  const prefix = locale === "it" ? "" : `/${locale}`;
  return `${PLATFORM_URL}${prefix}${path}`;
}
export const platformLogin = (locale: string) => platformUrl("/auth/login", locale);
export const platformRegister = (locale: string) => platformUrl("/auth/register", locale);

export type PricingTierMeta = {
  id: string;
  /** Famiglia: "widget" = preventivi online (Level), "platform" = piattaforma completa. */
  family: "widget" | "platform";
  /** Prezzo di listino mensile in euro, IVA esclusa. */
  monthly: number;
  /** Prezzo annuale in euro (mensile x 10, due mesi gratis); solo dove esiste la fatturazione annuale. */
  annual: number | null;
  highlighted: boolean;
  /** Il widget mostra il badge "Powered by OneSpec"? false = white-label. */
  whitelabel: boolean;
  /** Prova gratuita di 14 giorni (solo Pro). */
  trial: boolean;
};

/**
 * Ordine e id devono restare allineati all'array "pricingTiers" in ogni file
 * messages/*.json (stesso indice = stesso piano).
 *
 * FONTE DI VERITA': repo onespec-platform, convex/lib/billingPlans.ts (prezzi)
 * e convex/lib/entitlements.ts (limiti e funzioni). Aggiornare qui SOLO se
 * cambia il listino reale, e allineare i testi in messages/*.json.
 */
export const PRICING_TIERS_META: PricingTierMeta[] = [
  { id: "essentials", family: "widget", monthly: 49.95, annual: null, highlighted: false, whitelabel: false, trial: false },
  { id: "essentials_plus", family: "widget", monthly: 62.44, annual: null, highlighted: true, whitelabel: true, trial: false },
  { id: "max", family: "widget", monthly: 79.9, annual: null, highlighted: false, whitelabel: true, trial: false },
  { id: "base", family: "platform", monthly: 97, annual: 970, highlighted: false, whitelabel: false, trial: false },
  { id: "pro", family: "platform", monthly: 197, annual: 1970, highlighted: true, whitelabel: true, trial: true },
  { id: "agency", family: "platform", monthly: 397, annual: null, highlighted: false, whitelabel: true, trial: false },
  { id: "enterprise", family: "platform", monthly: 690, annual: null, highlighted: false, whitelabel: true, trial: false },
];

export type ChangelogMeta = {
  version: string;
  date: string;
  tag: "Nuovo" | "Miglioramento" | "Fix";
  channel: "prodotto";
};

/**
 * Ordine deve restare allineato all'array "changelog" in ogni file
 * messages/*.json (stesso indice = stessa voce; tag/channel/date/version
 * sono identici in ogni lingua, solo titolo e items cambiano).
 */
export const CHANGELOG_META: ChangelogMeta[] = [
  { version: "1.2.0", date: "2026-09-30", tag: "Nuovo", channel: "prodotto" },
  { version: "1.1.0", date: "2026-09-29", tag: "Nuovo", channel: "prodotto" },
  { version: "1.0.0", date: "2026-09-29", tag: "Miglioramento", channel: "prodotto" },
];
