"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/types/content";

export type CarouselItem = {
  label: string;
  category?: string;
  image?: ImageAsset;
  href?: string;
};

type ScrollingCarouselProps = {
  items: CarouselItem[];
  ariaLabel: string;
  className?: string;
  fadeFrom?: "linen" | "white";
  animationTrigger?: "mount" | "inView";
};

const cardGradients = [
  "from-olive/50 via-olive-light/30 to-linen",
  "from-cinnamon/40 via-sun/20 to-linen",
  "from-sky/35 via-olive-light/25 to-linen",
  "from-sun/30 via-cinnamon/20 to-linen",
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;

function CarouselCard({
  item,
  index,
}: {
  item: CarouselItem;
  index: number;
}) {
  const gradient = cardGradients[index % cardGradients.length];
  const hasImage = Boolean(item.image?.src);

  const content = (
    <>
      {hasImage && item.image ? (
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          className="object-cover"
          sizes="320px"
        />
      ) : (
        <div
          aria-hidden
          className={cn("absolute inset-0 bg-gradient-to-br", gradient)}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-cinnamon-dark/80 via-cinnamon-dark/25 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
        {item.category && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-linen/80">
            {item.category}
          </span>
        )}
        <p className="font-display text-xl font-semibold leading-snug text-linen md:text-2xl">
          {item.label}
        </p>
      </div>
    </>
  );

  const cardClass =
    "relative h-[360px] w-[280px] shrink-0 overflow-hidden rounded-3xl shadow-lg shadow-cinnamon/15 ring-1 ring-olive/15 transition-transform duration-300 hover:-translate-y-2 md:h-[420px] md:w-[320px]";

  if (item.href) {
    return (
      <Link href={item.href} className={cn(cardClass, "block")}>
        {content}
      </Link>
    );
  }

  return <article className={cardClass}>{content}</article>;
}

export function ScrollingCarousel({
  items,
  ariaLabel,
  className,
  fadeFrom = "linen",
  animationTrigger = "inView",
}: ScrollingCarouselProps) {
  const reducedMotion = useReducedMotion();
  const loopItems = [...items, ...items];
  const scrollDistance =
    (items.length * CARD_WIDTH + (items.length - 1) * CARD_GAP) / 2;

  const fadeClass =
    fadeFrom === "white"
      ? "from-white/40 to-transparent"
      : "from-linen to-transparent";

  if (items.length === 0) return null;

  const track = (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-5 px-4 md:gap-6 md:px-8"
        animate={
          reducedMotion ? undefined : { x: [0, -scrollDistance] }
        }
        transition={
          reducedMotion
            ? undefined
            : {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: items.length * 4,
                  ease: "linear",
                },
              }
        }
      >
        {loopItems.map((item, index) => (
          <CarouselCard
            key={`${item.label}-${index}`}
            item={item}
            index={index % items.length}
          />
        ))}
      </motion.div>
    </div>
  );

  const entranceTransition = {
    duration: 0.9,
    ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={animationTrigger === "mount" ? { opacity: 1, y: 0 } : undefined}
      whileInView={
        animationTrigger === "inView" ? { opacity: 1, y: 0 } : undefined
      }
      viewport={
        animationTrigger === "inView"
          ? { once: true, margin: "-60px" }
          : undefined
      }
      transition={
        animationTrigger === "mount"
          ? { ...entranceTransition, delay: 0.5 }
          : entranceTransition
      }
      className={cn("relative w-full", className)}
      aria-label={ariaLabel}
      role="region"
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r md:w-28",
          fadeClass,
        )}
      />
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l md:w-28",
          fadeClass,
        )}
      />
      {track}
    </motion.div>
  );
}
