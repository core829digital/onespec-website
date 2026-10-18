import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { LEGAL_DOCS, getLegalDoc } from "@/content/legal";
import { LegalDocView } from "@/components/legal-doc";
import { localizedLegalDoc } from "@/content/legal-i18n";
import { routing, type AppLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => LEGAL_DOCS.map((d) => ({ locale, slug: d.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: AppLocale; slug: string }> }) {
  const { locale, slug } = await params;
  const found = getLegalDoc(slug);
  if (!found) return {};
  const { doc } = localizedLegalDoc(found, locale);
  return { title: `${doc.title} — onespec`, description: doc.summary };
}

export default async function LegalDocPage({
  params,
}: {
  params: Promise<{ locale: AppLocale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const doc = getLegalDoc(slug);
  if (!doc) notFound();
  return <LegalDocView doc={doc} locale={locale} />;
}
