import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BTC Tax Consultant — Certified Brevet C | PT Bintang Konsultama Prima",
  description:
    "BTC Tax Consultant (PT Bintang Konsultama Prima) assists individuals and businesses in fulfilling all tax obligations, backed by over 20 years of professional experience. Certified Brevet C consultants licensed by the Director General of Taxes, Ministry of Finance.",
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
    title: "BTC Tax Consultant — Certified Brevet C Tax Consultants",
    description: "Professional tax consultation services backed by over 20 years of experience.",
    url: "https://btconsultant.id",
    siteName: "BTC Tax Consultant",
    locale: "en_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://btconsultant.id",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
