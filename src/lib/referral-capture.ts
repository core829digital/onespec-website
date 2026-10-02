/**
 * Invitation links: `https://onespec.eu/?ref=OS-XXXXXX`. The site remembers the code for
 * 30 days (this browser only, localStorage: no cookie, no tracking) and adds it to every
 * link that goes to the platform, where the registration reads it. The platform validates
 * the code, so nothing here is trusted. Same shape/validation as the platform's own copy
 * (onespec-platform/src/lib/referral-capture.ts).
 */
const KEY = "onespec-ref";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const SHAPE = /^[A-Za-z0-9-]{4,20}$/;

export function looksLikeReferralCode(value: string | null | undefined): value is string {
  return typeof value === "string" && SHAPE.test(value.trim());
}

/** Saves `?ref=` from the current URL, if present and well-formed. */
export function captureReferralFromUrl(search: string = typeof window === "undefined" ? "" : window.location.search): void {
  try {
    const ref = new URLSearchParams(search).get("ref");
    if (looksLikeReferralCode(ref)) localStorage.setItem(KEY, JSON.stringify({ code: ref.trim(), at: Date.now() }));
  } catch {
    /* storage unavailable (private mode): the invitation just won't be remembered */
  }
}

/** The remembered code, or undefined when none or older than 30 days. */
export function readStoredReferral(now: number = Date.now()): string | undefined {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as { code?: unknown; at?: unknown };
    if (typeof parsed.code !== "string" || typeof parsed.at !== "number") return undefined;
    if (now - parsed.at > MAX_AGE_MS || !looksLikeReferralCode(parsed.code)) {
      localStorage.removeItem(KEY);
      return undefined;
    }
    return parsed.code;
  } catch {
    return undefined;
  }
}

/** `href` with `ref=<code>` added when it points at `platformOrigin` and has none yet. Pure. */
export function withReferral(href: string, code: string | undefined, platformOrigin: string, base = platformOrigin): string {
  if (!code) return href;
  try {
    const url = new URL(href, base);
    if (url.origin !== platformOrigin || url.searchParams.has("ref")) return href;
    url.searchParams.set("ref", code);
    return url.toString();
  } catch {
    return href;
  }
}
