import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muratkrasniqi.com"),
  title: "Murat Krasniqi — Avokat | Pejë, Kosovë",
  description:
    "Murat Krasniqi — Avokat i kualifikuar në Pejë, Kosovë. Shërbime ligjore profesionale në të drejtën civile, penale, biznesore dhe konsulencë ligjore.",
  keywords: "avokat, lawyer, Pejë, Kosovo, Murat Krasniqi, juridik, ligji",
  openGraph: {
    title: "Murat Krasniqi — Avokat | Pejë, Kosovë",
    description:
      "Shërbime ligjore profesionale me përvojë dhe besueshmëri në Pejë, Kosovë.",
    type: "website",
    locale: "sq_AL",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Murat Krasniqi — Avokat | Pejë, Kosovë",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murat Krasniqi — Avokat | Pejë, Kosovë",
    description: "Shërbime ligjore profesionale në Pejë, Kosovë.",
    images: ["/images/hero-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sq"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
