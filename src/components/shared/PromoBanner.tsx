"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { trackLead } from "@/lib/track-lead";
import { softEase } from "@/lib/motion";

const STORAGE_KEY = "promo-banner:periodo-integral-8-set-2026";
const BANNER_SRC = "/banners/periodo-integral-8-setembro.jpg";
const BANNER_WIDTH = 776;
const BANNER_HEIGHT = 1024;

const whatsappHref = `${siteConfig.urls.whatsapp}?text=${encodeURIComponent(
  "Olá! Vi o aviso do período integral no dia 8 de setembro e quero garantir a vaga.",
)}`;

export function PromoBanner() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "dismissed");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "dismissed") return;
    const id = window.setTimeout(() => setOpen(true), 450);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") dismiss();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, dismiss]);

  function handleCta() {
    trackLead("Banner Período Integral");
    dismiss();
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto overscroll-contain px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(3.5rem,env(safe-area-inset-top))] sm:px-6"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.35, ease: softEase }}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[#1c2416]/70 backdrop-blur-[6px]"
            onClick={dismiss}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduced ? false : { opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.5, ease: softEase }}
            className="relative z-10 my-auto w-fit max-w-full"
          >
            <h2 id={titleId} className="sr-only">
              Dia 8 de setembro é período integral. Vagas limitadas.
            </h2>

            <button
              ref={closeRef}
              type="button"
              onClick={dismiss}
              aria-label="Fechar aviso"
              className="absolute -top-[3.25rem] right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-olive-deep shadow-[0_8px_24px_-8px_rgba(38,45,28,0.55)] ring-1 ring-[#264D2D]/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 active:scale-95 sm:-top-14 sm:h-12 sm:w-12"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
              </svg>
            </button>

            <div className="rounded-[1.35rem] bg-cream/80 p-1.5 ring-1 ring-white/50 sm:rounded-[1.75rem] sm:p-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCta}
                className="block overflow-hidden rounded-[1.05rem] sm:rounded-[1.35rem]"
              >
                <Image
                  src={BANNER_SRC}
                  alt="Passo a Passo Recreação Infantil. Dia 8 de setembro é período integral, com almoço e lanche inclusos. Vagas limitadas. Fale conosco no WhatsApp."
                  width={BANNER_WIDTH}
                  height={BANNER_HEIGHT}
                  priority
                  sizes="(max-width: 480px) 92vw, 416px"
                  className="h-auto w-auto max-h-[min(78dvh,40rem)] max-w-[min(100%,26rem)] object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
