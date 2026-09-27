/**
 * Dati strutturali (id, percorsi, numeri, date, flag booleani). I testi
 * visibili vivono nei cataloghi di traduzione in /messages e si recuperano
 * con useTranslations/getTranslations nei componenti, indicizzando questi
 * stessi array per posizione o per id.
 */

export const SITE = {
  name: "onespec",
  // Placeholder: aggiorna con data reale di lancio pubblico.
  launchDate: "2026-11-15T09:00:00+01:00",
  email: "hello@onespec.eu",
};

/** Programma Alpha: dati numerici. Testi in messages: "alpha.*". */
export const ALPHA = {
  totalSeats: 250,
  /**
   * Posti gia assegnati. Placeholder: va collegato al dato reale prima di
   * pubblicare, altrimenti il contatore mostra un numero inventato.
   */
  seatsTaken: 0,
  /** Sconto applicato a Base, Pro e Agency per chi entra in Alpha. */
  discountPercent: 15,
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

export const FOOTER_AZIENDA_KEYS = ["accessoAlpha", "contatti"] as const;
export const FOOTER_AZIENDA_HREFS: Record<(typeof FOOTER_AZIENDA_KEYS)[number], string> = {
  accessoAlpha: "/prezzi",
  contatti: `mailto:${SITE.email}`,
};

export const FOOTER_LEGALE_KEYS = ["privacy", "termini", "cookie"] as const;
export const FOOTER_LEGALE_HREFS: Record<(typeof FOOTER_LEGALE_KEYS)[number], string> = {
  privacy: "/legale/privacy",
  termini: "/legale/termini",
  cookie: "/legale/cookie",
};

export type PricingTierMeta = {
  id: string;
  /** Prezzo di listino mensile in euro. null = prezzo su richiesta. */
  monthly: number | null;
  highlighted: boolean;
  whitelabel: boolean;
  /** Se true, il piano rientra nello sconto Alpha. */
  alphaEligible: boolean;
};

/**
 * Ordine e id devono restare allineati all'array "pricingTiers" in ogni file
 * messages/*.json (stesso indice = stesso piano).
 *
 * Prezzi e piani allineati alla piattaforma reale (repo onespec-platform,
 * convex/lib/entitlements.ts + convex/lib/billingPlans.ts — "Plan ladder v2",
 * gia' live su Stripe). Aggiornare qui SOLO se cambia il listino reale.
 */
export const PRICING_TIERS_META: PricingTierMeta[] = [
  { id: "base", monthly: 97, highlighted: false, whitelabel: false, alphaEligible: true },
  { id: "pro", monthly: 197, highlighted: true, whitelabel: true, alphaEligible: true },
  { id: "agency", monthly: 397, highlighted: false, whitelabel: true, alphaEligible: true },
  { id: "enterprise", monthly: null, highlighted: false, whitelabel: true, alphaEligible: false },
];

/** Dove porta la CTA di un piano self-serve (Base/Pro/Agency): registrazione diretta. */
export const SIGNUP_URL = "https://platform.onespec.eu";

/** Prezzo scontato Alpha, arrotondato ai centesimi. */
export function alphaPrice(monthly: number, locale: string): string {
  const value = monthly * (1 - ALPHA.discountPercent / 100);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
}

export type ChangelogMeta = {
  version: string;
  date: string;
  tag: "Nuovo" | "Miglioramento" | "Fix";
  channel: "prodotto" | "alpha";
};

/**
 * Ordine deve restare allineato all'array "changelog" in ogni file
 * messages/*.json (stesso indice = stessa voce; tag/channel/date/version
 * sono identici in ogni lingua, solo titolo e items cambiano).
 */
export const CHANGELOG_META: ChangelogMeta[] = [
  { version: "0.4.0", date: "2026-08-10", tag: "Nuovo", channel: "prodotto" },
  { version: "0.3.2", date: "2026-07-22", tag: "Miglioramento", channel: "prodotto" },
  { version: "0.3.0", date: "2026-06-30", tag: "Nuovo", channel: "prodotto" },
  { version: "0.2.1", date: "2026-06-05", tag: "Fix", channel: "prodotto" },
  { version: "A-03", date: "2026-08-18", tag: "Nuovo", channel: "alpha" },
  { version: "A-02", date: "2026-07-30", tag: "Nuovo", channel: "alpha" },
  { version: "A-01", date: "2026-07-02", tag: "Nuovo", channel: "alpha" },
];
