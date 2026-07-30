"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteContent } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { FloatingDecor } from "@/components/shared/FloatingDecor";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { cn } from "@/lib/cn";

const accentStyles = [
  "border-t-olive",
  "border-t-sun",
  "border-t-sky",
  "border-t-cinnamon",
  "border-t-olive-light",
  "border-t-olive",
  "border-t-sun",
  "border-t-sky",
  "border-t-cinnamon",
] as const;

export function VivenciaSection() {
  const { vivencia } = siteContent;
  const reduced = useReducedMotion();

  return (
    <section
      id="vivencia"
      className="relative bg-linen py-16 md:py-24"
      aria-labelledby="vivencia-title"
    >
      <FloatingDecor variant="vivencia" />

      <Container className="relative">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-olive">
              Pertencimento e leveza
            </p>
            <h2
              id="vivencia-title"
              className="mt-2 font-display text-3xl font-bold text-olive-deep sm:text-4xl"
            >
              {vivencia.title}
            </h2>
            <blockquote className="relative mt-6 font-display text-xl italic leading-relaxed text-cinnamon md:text-2xl">
              <span
                aria-hidden
                className="absolute -left-2 -top-4 font-display text-5xl text-sun/40 md:-left-6"
              >
                &ldquo;
              </span>
              {vivencia.quote}
              <span
                aria-hidden
                className="font-display text-5xl text-sun/40"
              >
                &rdquo;
              </span>
            </blockquote>
          </div>
        </FadeIn>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vivencia.items.map((item, index) => {
            const hasImage = Boolean(item.image.src);
            const accent = accentStyles[index % accentStyles.length];

            const card = (
              <li
                className={cn(
                  "group overflow-hidden rounded-3xl border border-border/70 border-t-4 bg-card shadow-sm transition-shadow duration-300",
                  accent,
                  !reduced && "hover:-translate-y-1 hover:shadow-md",
                )}
              >
                {hasImage ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04] group-hover:rotate-[0.5deg]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <PlaceholderImage
                    image={item.image}
                    label={item.label}
                    className="rounded-none border-0 ring-0"
                  />
                )}
                <p className="px-4 py-3 text-center font-display text-lg font-semibold text-olive-deep">
                  {item.label}
                </p>
              </li>
            );

            if (reduced) {
              return (
                <FadeIn key={item.label} delay={index * 0.04}>
                  {card}
                </FadeIn>
              );
            }

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {card}
              </motion.div>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
