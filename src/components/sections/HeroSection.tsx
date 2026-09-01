"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { ArtCollage } from "@/components/shared/ArtCollage";
import { FloatingDecor } from "@/components/shared/FloatingDecor";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const trustHighlights = [
  "A partir dos 3 anos",
  "Alimentação inclusa",
  "Adaptação gradual",
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  const { hero } = siteContent;
  const reducedMotion = useReducedMotion();
  const animate = !reducedMotion;

  return (
    <section
      id="inicio"
      className="relative isolate w-full overflow-hidden bg-linen"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-50 blur-2xl"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 100% at 50% 0%, black 45%, transparent 75%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image.src}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>

      <FloatingDecor variant="hero" />

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16"
          variants={animate ? container : undefined}
          initial={animate ? "hidden" : false}
          animate={animate ? "visible" : undefined}
        >
          <motion.div
            variants={animate ? item : undefined}
            className="flex flex-col items-start gap-5"
          >
            <motion.span
              className="inline-flex items-center rounded-full bg-olive/25 px-4 py-1.5 text-sm font-bold text-olive-deep"
              animate={animate ? { scale: [1, 1.02, 1] } : undefined}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
            >
              {hero.eyebrow}
            </motion.span>

            <h1
              id="hero-title"
              className="font-display text-3xl font-bold leading-[1.12] text-balance text-olive-deep sm:text-4xl md:text-5xl"
            >
              {hero.title}
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-text-muted sm:text-base md:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <WhatsAppButton
                href={hero.cta.href}
                leadSource="WhatsApp Hero"
                className="rounded-full bg-cinnamon px-6 py-3 font-bold text-cream shadow-md transition-colors hover:bg-cinnamon-dark"
              >
                {hero.cta.label}
              </WhatsAppButton>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center rounded-full border-2 border-olive-deep/30 px-6 py-3 font-bold text-olive-deep transition hover:bg-olive/15"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>

            <ul
              className="flex flex-wrap gap-2"
              aria-label="Destaques do espaço"
            >
              {trustHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-border bg-cream/80 px-3 py-1.5 text-xs font-semibold text-text-muted md:text-sm"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={animate ? mediaItem : undefined}
            className="relative w-full"
          >
            <ArtCollage
              primaryImage={hero.image.src}
              secondaryImage={hero.secondaryImage.src}
              primaryAlt={hero.image.alt}
              secondaryAlt={hero.secondaryImage.alt}
            />
            <motion.div
              className="absolute bottom-2 left-2 z-20 rounded-2xl bg-card px-5 py-3 shadow-lg sm:left-6"
              initial={animate ? { opacity: 0, y: 12 } : false}
              animate={animate ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-base font-semibold text-cinnamon">
                &ldquo;{siteConfig.anchorPhrase}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
