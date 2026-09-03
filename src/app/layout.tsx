import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MetaPixelHead, MetaPixelNoscript } from "@/components/analytics/MetaPixelHead";
import { MetaPixelPageView } from "@/components/analytics/MetaPixelPageView";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    locale: "pt_BR",
    type: "website",
    images: [{ url: siteConfig.brand.logoSquare, alt: "Passo a Passo" }],
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
        <meta
          name="google-site-verification"
          content="google8c8d16f37ec78420"
        />
      </head>
      <body className="min-h-screen antialiased">
        <MetaPixelNoscript />
        <MetaPixelPageView />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
