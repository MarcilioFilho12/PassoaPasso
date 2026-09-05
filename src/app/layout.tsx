import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import { siteContent } from "@/data/site-content";
import { siteConfig, siteUrl } from "@/constants/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetaPixelHead, MetaPixelNoscript } from "@/components/analytics/MetaPixelHead";
import { MetaPixelPageView } from "@/components/analytics/MetaPixelPageView";
import { GoogleAdsTag } from "@/components/analytics/GoogleAdsTag";
import { LocalBusinessJsonLd } from "@/components/analytics/LocalBusinessJsonLd";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [...siteConfig.keywords],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "kLMg36unUGCRiCOoNCv8ZTGxivxRnn129Ax3NSqBXPI",
  },
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      { url: siteConfig.brand.logoSquare, alt: "Passo a Passo Recreação Infantil" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${baloo.variable}`}>
      <head>
        <MetaPixelHead />
        <GoogleAdsTag />
      </head>
      <body className="min-h-screen antialiased">
        <LocalBusinessJsonLd />
        <MetaPixelNoscript />
        <MetaPixelPageView />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
