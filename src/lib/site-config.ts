/**
 * Dati strutturali (id, percorsi, numeri, date, flag booleani). I testi
 * visibili vivono nei cataloghi di traduzione in /messages e si recuperano
 * con useTranslations/getTranslations nei componenti, indicizzando questi
 * stessi array per posizione o per id.
 */

/** Indirizzo pubblico del sito (sitemap, metadati, link canonici). */
export const SITE_URL = "https://onespec.eu";

export const SITE = {
  name: "onespec",
  /** Assistenza clienti e richieste per il piano Enterprise su misura. */
  email: "hello@onespec.eu",
};

/**
 * OneSpec è un prodotto digitale di CORE829 SRL. Dati societari verificati
 * dal registro (gli stessi delle pagine legali, src/content/legal-values.ts):
 * unica fonte per footer, pagina «Chi siamo» e hero.
 * Email aziendali pubblicate: solo office@ e sales@ (hello@, projects@ e
 * partnerships@ di core829.net restano interne per scelta della società).
 */
export const COMPANY = {
  legalName: "CORE829 SRL",
  address: "Str. Mihai Eminescu 10, Roman, România",
  /** Codice fiscale / partita IVA romena (CUI/CIF). */
  vatId: "RO54616345",
  /** Numero del Registro del commercio (ONRC). */
  tradeRegister: "J2026029428009",
  emails: {
    support: "hello@onespec.eu",
    office: "office@core829.net",
    sales: "sales@core829.net",
  },
} as const;

export type Founder = {
  id: "stefan" | "vasile";
  name: string;
  /** Chiave di traduzione del ruolo (aboutPage.founders.roles). */
  role: "founder" | "cofounder";
  phones: { display: string; tel: string }[];
  /** Numero WhatsApp in formato internazionale senza «+» (wa.me). */
  whatsapp?: string;
};

export const FOUNDERS: Founder[] = [
  {
    id: "stefan",
    name: "Stefan Serban",
    role: "founder",
    phones: [
      { display: "+40 766 668 482", tel: "+40766668482" },
      { display: "+39 375 946 8881", tel: "+393759468881" },
    ],
  },
  {
    id: "vasile",
    name: "Vasile Serban",
    role: "cofounder",
    phones: [{ display: "+40 766 231 632", tel: "+40766231632" }],
    whatsapp: "40766231632",
  },
];

export const SOCIALS = [
  { id: "tiktok", label: "TikTok", handle: "@onespec_eu", href: "https://www.tiktok.com/@onespec_eu" },
  { id: "instagram", label: "Instagram", handle: "@onespec.eu", href: "https://www.instagram.com/onespec.eu/" },
] as const;

export const NAV_KEYS = ["prodotto", "demo", "prezzi", "chiSiamo", "versioni"] as const;
export const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  prodotto: "/prodotto",
  demo: "/demo",
  prezzi: "/prezzi",
  chiSiamo: "/chi-siamo",
  versioni: "/versioni",
};

export const FOOTER_PRODOTTO_KEYS = ["comeFunziona", "demo", "prezzi", "inviti", "versioni"] as const;
export const FOOTER_PRODOTTO_HREFS: Record<(typeof FOOTER_PRODOTTO_KEYS)[number], string> = {
  comeFunziona: "/prodotto",
  demo: "/demo",
  prezzi: "/prezzi",
  inviti: "/inviti",
  versioni: "/versioni",
};

export const FOOTER_AZIENDA_KEYS = ["chiSiamo", "accedi", "registrati", "assistenza", "contatti"] as const;
export const FOOTER_AZIENDA_HREFS: Record<(typeof FOOTER_AZIENDA_KEYS)[number], string> = {
  chiSiamo: "/chi-siamo",
  accedi: "login",
  registrati: "register",
  assistenza: "support",
  contatti: `mailto:${SITE.email}`,
};

export const FOOTER_LEGALE_KEYS = ["privacy", "termini", "cookie", "noteLegali", "documenti"] as const;
export const FOOTER_LEGALE_HREFS: Record<(typeof FOOTER_LEGALE_KEYS)[number], string> = {
  privacy: "/legale/privacy",
  termini: "/legale/termini-di-servizio",
  cookie: "/legale/cookie",
  noteLegali: "/note-legali",
  documenti: "/legale",
};

/**
 * La piattaforma (repo onespec-platform) vive su questo indirizzo: login,
 * registrazione diretta, pagamento Stripe e app. Il sito non ha account propri.
 */
export const PLATFORM_URL = "https://platform.onespec.eu";
/** The platform in demo mode (a separate host of the same app: in-browser database, nothing is sent). NEXT_PUBLIC_PLATFORM_DEMO_URL points it to a local build in tests. */
export const DEMO_PLATFORM_URL = process.env.NEXT_PUBLIC_PLATFORM_DEMO_URL ?? "https://demo.onespec.eu";

/** Pagina della piattaforma nella lingua del visitatore (l'italiano non ha prefisso). */
export function platformUrl(path: string, locale: string): string {
  const prefix = locale === "it" ? "" : `/${locale}`;
  return `${PLATFORM_URL}${prefix}${path}`;
}
export const platformLogin = (locale: string) => platformUrl("/auth/login", locale);
export const platformRegister = (locale: string) => platformUrl("/auth/register", locale);
/** Pagina pubblica «Contattaci» della piattaforma (anche per chi non riesce ad accedere). */
export const platformSupport = (locale: string) => platformUrl("/auth/contact", locale);

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
  { version: "1.31.1", date: "2026-10-27", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.31.0", date: "2026-10-27", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.30.0", date: "2026-10-27", tag: "Nuovo", channel: "prodotto" },
  { version: "1.29.13", date: "2026-10-19", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.29.12", date: "2026-10-19", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.29.11", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.10", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.9", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.8", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.7", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.6", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.5", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.4", date: "2026-10-19", tag: "Fix", channel: "prodotto" },
  { version: "1.29.3", date: "2026-10-18", tag: "Nuovo", channel: "prodotto" },
  { version: "1.29.2", date: "2026-10-18", tag: "Nuovo", channel: "prodotto" },
  { version: "1.29.1", date: "2026-10-18", tag: "Fix", channel: "prodotto" },
  { version: "1.29.0", date: "2026-10-18", tag: "Nuovo", channel: "prodotto" },
  { version: "1.28.0", date: "2026-10-18", tag: "Nuovo", channel: "prodotto" },
  { version: "1.27.0", date: "2026-10-17", tag: "Nuovo", channel: "prodotto" },
  { version: "1.26.3", date: "2026-10-17", tag: "Fix", channel: "prodotto" },
  { version: "1.26.2", date: "2026-10-14", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.26.1", date: "2026-10-14", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.26.0", date: "2026-10-14", tag: "Nuovo", channel: "prodotto" },
  { version: "1.25.2", date: "2026-10-13", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.25.1", date: "2026-10-13", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.25.0", date: "2026-10-13", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.24.0", date: "2026-10-13", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.23.0", date: "2026-10-12", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.22.0", date: "2026-10-12", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.21.0", date: "2026-10-12", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.20.0", date: "2026-10-12", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.19.1", date: "2026-10-12", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.19.0", date: "2026-10-12", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.18.0", date: "2026-10-12", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.17.0", date: "2026-10-11", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.16.0", date: "2026-10-11", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.15.0", date: "2026-10-09", tag: "Nuovo", channel: "prodotto" },
  { version: "1.14.0", date: "2026-10-09", tag: "Nuovo", channel: "prodotto" },
  { version: "1.13.0", date: "2026-10-09", tag: "Nuovo", channel: "prodotto" },
  { version: "1.12.0", date: "2026-10-09", tag: "Nuovo", channel: "prodotto" },
  { version: "1.11.0", date: "2026-10-09", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.10.0", date: "2026-10-08", tag: "Nuovo", channel: "prodotto" },
  { version: "1.9.0", date: "2026-10-06", tag: "Nuovo", channel: "prodotto" },
  { version: "1.8.0", date: "2026-10-05", tag: "Nuovo", channel: "prodotto" },
  { version: "1.7.0", date: "2026-10-03", tag: "Nuovo", channel: "prodotto" },
  { version: "1.6.0", date: "2026-09-30", tag: "Nuovo", channel: "prodotto" },
  { version: "1.5.0", date: "2026-09-30", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.4.0", date: "2026-09-29", tag: "Nuovo", channel: "prodotto" },
  { version: "1.3.0", date: "2026-09-29", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.2.0", date: "2026-09-29", tag: "Miglioramento", channel: "prodotto" },
  { version: "1.1.0", date: "2026-09-28", tag: "Nuovo", channel: "prodotto" },
  { version: "1.0.0", date: "2026-09-26", tag: "Nuovo", channel: "prodotto" },
];

const semverParts = (v: string) => v.split(".").map((n) => Number(n));
const semverCompare = (a: string, b: string) => {
  const [pa, pb] = [semverParts(a), semverParts(b)];
  for (let i = 0; i < 3; i++) if ((pa[i] ?? 0) !== (pb[i] ?? 0)) return (pa[i] ?? 0) - (pb[i] ?? 0);
  return 0;
};

/**
 * The product's current version: the highest entry of the changelog above. It is the single source of truth: the "Versioni" page
 * shows it, and the platform reads it from /api/version to print the same number in its side menu (so publishing a new changelog
 * entry here updates the platform by itself, no platform deploy needed).
 */
export function currentVersion(): ChangelogMeta {
  return CHANGELOG_META.reduce((best, m) => (semverCompare(m.version, best.version) > 0 ? m : best));
}
