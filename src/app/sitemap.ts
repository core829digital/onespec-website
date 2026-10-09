import type { MetadataRoute } from "next";
import { LEGAL_DOCS } from "@/content/legal";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site-config";

const PATHS = ["", "/prodotto", "/demo", "/prezzi", "/inviti", "/versioni", "/legale", ...LEGAL_DOCS.map((d) => `/legale/${d.slug}`)];

/** Indirizzo pubblico di una pagina: l'italiano (lingua predefinita) non ha prefisso. */
const url = (locale: string, path: string) =>
  `${SITE_URL}${locale === routing.defaultLocale ? "" : `/${locale}`}${path}` || SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: url(locale, path),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, url(l, path)])),
      },
    })),
  );
}
