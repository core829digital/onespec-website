"use client";

import { useEffect } from "react";
import { PLATFORM_URL } from "@/lib/site-config";
import { captureReferralFromUrl, readStoredReferral, withReferral } from "@/lib/referral-capture";

/**
 * Remembers an invitation code from the address bar and carries it to the platform by adding
 * `?ref=` to every link that leads there (login, registration, …), including links added
 * later by navigation. Renders nothing.
 */
export function ReferralLinkDecorator() {
  useEffect(() => {
    captureReferralFromUrl();
    const code = readStoredReferral();
    if (!code) return;

    const decorate = (root: ParentNode) => {
      root.querySelectorAll<HTMLAnchorElement>(`a[href^="${PLATFORM_URL}"]`).forEach((a) => {
        const next = withReferral(a.href, code, PLATFORM_URL);
        if (next !== a.href) a.href = next;
      });
    };
    decorate(document);
    const observer = new MutationObserver(() => decorate(document));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
