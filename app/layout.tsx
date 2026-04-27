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
  metadataBase: new URL("https://muratkrasniqi-avokat.com"),
  title: "Murat Krasniqi – Avokat në Pejë | Konsulencë Ligjore",
  description:
    "Avokat Murat Krasniqi në Pejë. Shërbime ligjore profesionale: e drejtë civile, penale, biznesore dhe përfaqësim në gjykatë.",
  keywords:
    "avokat Pejë, Murat Krasniqi avokat, avokat Kosovë, e drejtë civile, avokat penal, lawyer Kosovo",
  verification: {
    google: "ADD_CODE_HERE",
  },
  openGraph: {
    title: "Murat Krasniqi – Avokat në Pejë | Konsulencë Ligjore",
    description:
      "Avokat Murat Krasniqi në Pejë. Shërbime ligjore profesionale: e drejtë civile, penale, biznesore dhe përfaqësim në gjykatë.",
    type: "website",
    url: "https://muratkrasniqi-avokat.com",
    locale: "sq_AL",
    images: [
      {
        url: "/images/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Murat Krasniqi – Avokat në Pejë | Konsulencë Ligjore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murat Krasniqi – Avokat në Pejë | Konsulencë Ligjore",
    description:
      "Avokat Murat Krasniqi në Pejë. Shërbime ligjore profesionale: e drejtë civile, penale, biznesore dhe përfaqësim në gjykatë.",
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
