export const SITE = {
  name: "onespec",
  tagline: "Il configuratore di infissi che vende al posto tuo.",
  description:
    "onespec e il widget di configurazione infissi integrabile via iframe: preventivi automatici, prezzi sempre aggiornati, zero tempo perso con chi vuole solo il prezzo della concorrenza.",
  // Placeholder: aggiorna con data reale di lancio pubblico.
  launchDate: "2026-11-15T09:00:00+01:00",
  email: "hello@onespec.it",
};

/** Programma Alpha: posti limitati, sconto bloccato, badge e canale aggiornamenti. */
export const ALPHA = {
  totalSeats: 250,
  /**
   * Posti gia assegnati. Placeholder: va collegato al dato reale prima di
   * pubblicare, altrimenti il contatore mostra un numero inventato.
   */
  seatsTaken: 0,
  /** Sconto applicato a Starter e Business per chi entra in Alpha. */
  discountPercent: 15,
  benefits: [
    {
      title: "15% di sconto a vita",
      description:
        "Lo sconto resta agganciato al tuo abbonamento Starter o Business anche dopo il lancio pubblico. Il prezzo non sale.",
    },
    {
      title: "Badge Alpha Member",
      description:
        "Un badge verificato che certifica che eri tra i primi 250. Utilizzabile sul tuo sito e nei materiali commerciali.",
    },
    {
      title: "Accesso agli aggiornamenti Alpha",
      description:
        "Ricevi le build in anteprima e il canale changelog riservato, prima che le funzioni arrivino a tutti.",
    },
  ],
};

export const NAV_LINKS = [
  { href: "/prodotto", label: "Prodotto" },
  { href: "/prezzi", label: "Prezzi" },
  { href: "/versioni", label: "Versioni" },
];

export const FOOTER_LINKS = {
  prodotto: [
    { href: "/prodotto", label: "Come funziona" },
    { href: "/prezzi", label: "Prezzi" },
    { href: "/versioni", label: "Versioni e changelog" },
  ],
  azienda: [
    { href: "/prezzi", label: "Accesso Alpha" },
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
  /** Prezzo di listino mensile in euro. null = prezzo su richiesta. */
  monthly: number | null;
  priceLabel: string;
  priceNote: string;
  /** Tutti i prezzi sono al netto: l'IVA si aggiunge in fattura. */
  taxNote: string;
  description: string;
  quotesLimit: string;
  whitelabel: boolean;
  highlighted: boolean;
  /** Se true, il piano rientra nello sconto Alpha. */
  alphaEligible: boolean;
  features: string[];
  cta: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 24,
    priceLabel: "€24",
    priceNote: "/mese",
    taxNote: "+ IVA",
    description: "Per chi vuole testare il configuratore su un solo sito senza rischi.",
    quotesLimit: "Fino a 50 richieste preventivo/mese",
    whitelabel: false,
    highlighted: false,
    alphaEligible: true,
    features: [
      "1 configuratore attivo",
      "Codice iFrame pronto da incollare",
      "Caricamento listino prezzi da file",
      'Badge "Powered by onespec"',
      "Aggiornamenti prezzi in tempo reale",
      "Supporto via email",
    ],
    cta: "Inizia con Starter",
  },
  {
    id: "business",
    name: "Business",
    monthly: 47,
    priceLabel: "€47",
    priceNote: "/mese",
    taxNote: "+ IVA",
    description: "Per chi vende sul serio e vuole il configuratore brandizzato al 100%.",
    quotesLimit: "Fino a 300 richieste preventivo/mese",
    whitelabel: true,
    highlighted: true,
    alphaEligible: true,
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
    monthly: null,
    priceLabel: "Su misura",
    priceNote: "",
    taxNote: "+ IVA",
    description: "Per reti di rivenditori, franchising e volumi alti di preventivi.",
    quotesLimit: "Richieste preventivo illimitate",
    whitelabel: true,
    highlighted: false,
    alphaEligible: false,
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

/** Prezzo scontato Alpha, arrotondato ai centesimi. */
export function alphaPrice(monthly: number): string {
  const value = monthly * (1 - ALPHA.discountPercent / 100);
  return `€${value.toFixed(2).replace(".", ",")}`;
}

/**
 * Il changelog ha due canali distinti:
 * - "prodotto": cosa cambia nel prodotto per chi lo usa gia
 * - "alpha": vita del programma Alpha (posti, build riservate, inviti)
 */
export type ChangelogChannel = "prodotto" | "alpha";

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  tag: "Nuovo" | "Miglioramento" | "Fix";
  channel: ChangelogChannel;
  items: string[];
};

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "0.4.0",
    date: "2026-08-10",
    title: "Regole di prezzo condizionali",
    tag: "Nuovo",
    channel: "prodotto",
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
    channel: "prodotto",
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
    channel: "prodotto",
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
    channel: "prodotto",
    items: [
      "Risolto errore su import file listino con caratteri accentati",
      "Corretto arrotondamento prezzi con IVA inclusa",
    ],
  },
  {
    version: "A-03",
    date: "2026-08-18",
    title: "Badge Alpha Member consegnato",
    tag: "Nuovo",
    channel: "alpha",
    items: [
      "Il badge verificato e ora disponibile nell'area account di chi ha aderito",
      "Aggiunto snippet da incollare sul proprio sito per mostrare il badge",
    ],
  },
  {
    version: "A-02",
    date: "2026-07-30",
    title: "Canale build in anteprima",
    tag: "Nuovo",
    channel: "alpha",
    items: [
      "Attivato il canale riservato con le build prima del rilascio pubblico",
      "Form di segnalazione bug collegato direttamente al team di prodotto",
    ],
  },
  {
    version: "A-01",
    date: "2026-07-02",
    title: "Apertura dei 250 posti Alpha",
    tag: "Nuovo",
    channel: "alpha",
    items: [
      "Aperte le adesioni al programma Alpha, con sconto del 15% bloccato a vita",
      "Lo sconto resta valido su Starter e Business anche dopo il lancio pubblico",
    ],
  },
];
