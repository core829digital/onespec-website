/**
 * The visitor's choice in the cookie banner, kept in this browser only (localStorage, key "onespec-site-consent", described in the
 * cookie policy). Necessary storage needs no consent; "statistics" (Vercel Web Analytics) runs only once accepted. The stored value
 * carries a version: raising CONSENT_VERSION asks everyone again (e.g. when a new optional tool is added).
 */
export const CONSENT_VERSION = 1;
const KEY = "onespec-site-consent";
const CHANGE = "onespec:site-consent";
const OPEN = "onespec:open-cookie-preferences";

export type SiteConsent = { v: number; statistics: boolean; at: string };

let cache: { raw: string | null; value: SiteConsent | null } = { raw: null, value: null };

/** The stored choice, or null when the visitor has not decided yet (or decided under an older version). Stable between calls. */
export function readConsent(): SiteConsent | null {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return null;
  }
  if (raw === cache.raw) return cache.value;
  let value: SiteConsent | null = null;
  try {
    const parsed = raw ? (JSON.parse(raw) as Partial<SiteConsent>) : null;
    if (parsed && parsed.v === CONSENT_VERSION && typeof parsed.statistics === "boolean") {
      value = { v: CONSENT_VERSION, statistics: parsed.statistics, at: String(parsed.at ?? "") };
    }
  } catch {
    value = null;
  }
  cache = { raw, value };
  return value;
}

export function saveConsent(statistics: boolean) {
  const value: SiteConsent = { v: CONSENT_VERSION, statistics, at: new Date().toISOString() };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* storage blocked: the choice holds for this page only */
    cache = { raw: "__memory__", value };
  }
  window.dispatchEvent(new Event(CHANGE));
}

export function onConsentChange(cb: () => void): () => void {
  window.addEventListener(CHANGE, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(CHANGE, cb);
    window.removeEventListener("storage", cb);
  };
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN));
}

export function onOpenCookiePreferences(cb: () => void): () => void {
  window.addEventListener(OPEN, cb);
  return () => window.removeEventListener(OPEN, cb);
}
