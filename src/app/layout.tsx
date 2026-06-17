import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
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
    <html lang="pt-BR" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
