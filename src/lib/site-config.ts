export const SITE = {
  name: "onespec",
  tagline: "Il configuratore di infissi che vende al posto tuo.",
  description:
    "onespec e il widget di configurazione infissi integrabile via iframe: preventivi automatici, prezzi sempre aggiornati, zero tempo perso con chi vuole solo il prezzo della concorrenza.",
  // Placeholder: aggiorna con data reale di lancio pubblico.
  launchDate: "2026-11-15T09:00:00+01:00",
  email: "hello@onespec.it",
};

export const NAV_LINKS = [
  { href: "/prodotto", label: "Prodotto" },
  { href: "/prezzi", label: "Prezzi" },
  { href: "/versioni", label: "Versioni" },
  { href: "/investitori", label: "Investitori" },
];

export const FOOTER_LINKS = {
  prodotto: [
    { href: "/prodotto", label: "Come funziona" },
    { href: "/prezzi", label: "Prezzi" },
    { href: "/versioni", label: "Versioni e changelog" },
  ],
  azienda: [
    { href: "/investitori", label: "Investitori" },
    { href: "/#contatti", label: "Contatti" },
  ],
  legale: [
    { href: "/legale/privacy", label: "Privacy Policy" },
    { href: "/legale/termini", label: "Termini di Servizio" },
    { href: "/legale/cookie", label: "Cookie Policy" },
  ],
};

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  quotesLimit: string;
  whitelabel: boolean;
  highlighted: boolean;
  features: string[];
  cta: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "€49",
    priceNote: "/mese",
    description: "Per chi vuole testare il configuratore su un solo sito senza rischi.",
    quotesLimit: "Fino a 50 richieste preventivo/mese",
    whitelabel: false,
    highlighted: false,
    features: [
      "1 configuratore attivo",
      "Codice iFrame pronto da incollare",
      "Caricamento listino prezzi da file",
      "Badge \"Powered by onespec\"",
      "Aggiornamenti prezzi in tempo reale",
      "Supporto via email",
    ],
    cta: "Inizia con Starter",
  },
  {
    id: "business",
    name: "Business",
    price: "€149",
    priceNote: "/mese",
    description: "Per chi vende sul serio e vuole il configuratore brandizzato al 100%.",
    quotesLimit: "Fino a 300 richieste preventivo/mese",
    whitelabel: true,
    highlighted: true,
    features: [
      "3 configuratori attivi",
      "Marchio rimosso: solo il tuo brand",
      "Regole di prezzo avanzate e sconti",
      "Multi-listino per linea prodotto",
      "Statistiche richieste e conversioni",
      "Supporto prioritario",
    ],
    cta: "Passa a Business",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Su misura",
    priceNote: "",
    description: "Per reti di rivenditori, franchising e volumi alti di preventivi.",
    quotesLimit: "Richieste preventivo illimitate",
    whitelabel: true,
    highlighted: false,
    features: [
      "Configuratori illimitati",
      "White-label completo + dominio custom",
      "Integrazione API/CRM su richiesta",
      "Import massivo listini multi-sede",
      "Account manager dedicato",
      "SLA e onboarding guidato",
    ],
    cta: "Parla con noi",
  },
];

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  tag: "Nuovo" | "Miglioramento" | "Fix";
  items: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.4.0",
    date: "2026-08-10",
    title: "Regole di prezzo condizionali",
    tag: "Nuovo",
    items: [
      "Aggiunto motore di regole per sconti su quantita e combinazioni prodotto",
      "Nuovo pannello per gestire piu listini nello stesso configuratore",
    ],
  },
  {
    version: "0.3.2",
    date: "2026-07-22",
    title: "Prestazioni widget",
    tag: "Miglioramento",
    items: [
      "Tempo di primo caricamento del widget ridotto del 40%",
      "Ottimizzata la resa su connessioni mobili lente",
    ],
  },
  {
    version: "0.3.0",
    date: "2026-06-30",
    title: "White-label per il piano Business",
    tag: "Nuovo",
    items: [
      "Possibilita di rimuovere il badge onespec dal widget",
      "Editor colori e font per allineare il configuratore al brand cliente",
    ],
  },
  {
    version: "0.2.1",
    date: "2026-06-05",
    title: "Correzioni import listino",
    tag: "Fix",
    items: [
      "Risolto errore su import file listino con caratteri accentati",
      "Corretto arrotondamento prezzi con IVA inclusa",
    ],
  },
];
