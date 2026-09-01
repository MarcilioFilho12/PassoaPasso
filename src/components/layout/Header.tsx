"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-2.5">
        <Link
          href="#inicio"
          className="flex min-w-0 items-center gap-3"
          aria-label="Passo a Passo — voltar ao início"
        >
          <Image
            src={siteConfig.brand.logoCircle}
            alt="Passo a Passo Recreação Infantil"
            width={112}
            height={112}
            className="h-20 w-20 shrink-0 rounded-full object-contain sm:h-24 sm:w-24"
            priority
            quality={100}
          />
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-semibold sm:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted transition-colors hover:text-olive-deep"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton
            href={siteConfig.urls.whatsapp}
            leadSource="WhatsApp Header"
            className="rounded-full bg-olive-deep px-4 py-2 text-cream shadow-sm transition-colors hover:opacity-90"
          >
            Fale conosco
          </WhatsAppButton>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-olive-deep sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border/60 bg-cream sm:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-base font-semibold text-text hover:bg-olive/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <WhatsAppButton
            href={siteConfig.urls.whatsapp}
            leadSource="WhatsApp Header Mobile"
            className="mt-2 w-full justify-center rounded-full bg-olive-deep px-4 py-3 font-semibold text-cream"
            onClick={() => setOpen(false)}
          >
            Fale conosco
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
