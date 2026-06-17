"use client";

import { useState } from "react";
import { navLinks } from "@/constants/nav";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-b-3xl border border-t-0 border-olive/10 bg-linen/90 px-4 py-2 shadow-sm backdrop-blur-md md:rounded-b-full md:px-6 md:py-2.5">
        <Logo variant="header" />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-olive/10 hover:text-cinnamon-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-olive/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <span
            className={cn(
              "block h-0.5 w-5 bg-cinnamon transition-transform",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-cinnamon transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-cinnamon transition-transform",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-olive/10 bg-linen/95 shadow-lg backdrop-blur-md transition-all lg:hidden",
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0 border-transparent",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col p-4" aria-label="Menu mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-text hover:bg-olive/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
