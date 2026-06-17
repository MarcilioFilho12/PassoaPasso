"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const trustHighlights = [
  "3 a 6 anos",
  "Alimentação inclusa",
  "Adaptação gradual",
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path
        d="M7 10H13M13 10L10 7M13 10L10 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSection() {
  const { hero } = siteContent;
  const reducedMotion = useReducedMotion();

  const fadeUp = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-gradient-to-b from-linen via-[#f5f0e4] to-linen"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-sun/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-olive/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky/10 blur-3xl"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-10 md:px-8 md:pb-20 md:pt-16">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex max-w-4xl flex-col items-center text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-olive">
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-semibold leading-[1.12] tracking-tight text-cinnamon-dark"
          >
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg md:leading-8">
            {hero.subtitle}
          </p>

          <motion.div
            {...(reducedMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.97 },
                  animate: { opacity: 1, scale: 1 },
                })}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link
              href={hero.cta.href}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full bg-cinnamon px-7 py-3.5 text-base font-semibold text-linen shadow-md shadow-cinnamon/25 transition-all hover:bg-cinnamon-dark active:scale-[0.98]",
              )}
            >
              {hero.cta.label}
              <ArrowIcon />
            </Link>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-xl font-display text-base italic text-olive md:text-lg"
          >
            &ldquo;{siteConfig.anchorPhrase}&rdquo;
          </motion.p>

          <motion.ul
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
            aria-label="Destaques do espaço"
          >
            {trustHighlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-olive/20 bg-linen/80 px-3 py-1.5 text-xs font-medium text-text-muted backdrop-blur-sm md:text-sm"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
