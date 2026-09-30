import { redirect } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";

// Vecchio indirizzo dei termini: ora il documento e' "termini-di-servizio", come nella piattaforma.
export default async function TerminiRedirect({ params }: { params: Promise<{ locale: AppLocale }> }) {
  const { locale } = await params;
  redirect({ href: "/legale/termini-di-servizio", locale });
}
