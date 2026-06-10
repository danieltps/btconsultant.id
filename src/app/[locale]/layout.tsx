import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "tax consultant Indonesia",
      "konsultan pajak",
      "brevet C",
      "SPT",
      "pajak perusahaan",
      "IKPI",
      "Bekasi",
    ],
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://btconsultant.id",
      siteName: "BTC Tax Consultant",
      locale: locale === "id" ? "id_ID" : "en_ID",
      type: "website",
    },
    alternates: {
      canonical: "https://btconsultant.id",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
