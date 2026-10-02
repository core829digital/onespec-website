import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeScript } from "@/components/theme-script";
import { ThemeToggle } from "@/components/theme-toggle";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ReferralLinkDecorator } from "@/components/referral-link-decorator";
import { MotionConfig } from "framer-motion";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    metadataBase: new URL(SITE_URL),
    title: t("title"),
    description: t("description"),
    openGraph: {
      type: "website",
      siteName: "onespec",
      title: t("title"),
      description: t("description"),
      locale,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "onespec" }],
    },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description"), images: ["/og-image.png"] },
    // Light/dark artwork picked by the browser from prefers-color-scheme.
    icons: {
      icon: [
        { url: "/icon-light-32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon-light-16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: dark)" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Attiva il rendering statico per questa lingua durante il build.
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <ThemeScript />
        <NextIntlClientProvider>
          <MotionConfig reducedMotion="user">
            <Header />
            <SmoothScroll />
            <ReferralLinkDecorator />
            <main className="flex-1">{children}</main>
            <Footer />
            <ThemeToggle />
          </MotionConfig>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
