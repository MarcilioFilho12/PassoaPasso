"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { LeafDecor } from "@/components/shared/LeafDecor";

type FloatingDecorProps = {
  variant?: "hero" | "vivencia";
};

function Blob({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div aria-hidden className={cn("rounded-full blur-xl", className)} />;
  }

  return (
    <motion.div
      aria-hidden
      className={cn("rounded-full blur-xl", className)}
      animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export function FloatingDecor({ variant = "hero" }: FloatingDecorProps) {
  if (variant === "vivencia") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <LeafDecor
          className="absolute right-6 top-8 h-9 w-6 opacity-40"
          delay={0.5}
        />
        <LeafDecor
          className="absolute bottom-16 left-4 h-7 w-5 rotate-12 opacity-35"
          delay={2}
        />
        <Blob
          className="absolute left-1/4 top-1/3 h-20 w-20 bg-sun/20"
          delay={1}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      <LeafDecor
        className="absolute left-4 top-24 h-8 w-5 opacity-50 sm:left-8"
        delay={0}
      />
      <LeafDecor
        className="absolute right-6 top-32 h-10 w-6 rotate-45 opacity-40 sm:right-12"
        delay={1.5}
      />
      <Blob
        className="absolute right-1/4 top-16 h-24 w-24 bg-sun/20"
        delay={0}
      />
      <Blob
        className="absolute bottom-24 left-1/3 h-16 w-16 bg-sky/20"
        delay={2}
      />
    </div>
  );
}
