"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type LeafDecorProps = {
  className?: string;
  delay?: number;
};

export function LeafDecor({ className, delay = 0 }: LeafDecorProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <svg
        aria-hidden
        viewBox="0 0 24 32"
        className={cn("h-6 w-4 shrink-0 text-olive opacity-70", className)}
        fill="currentColor"
      >
        <path d="M12 0C6 8 2 16 4 24c2 6 6 8 8 8s6-2 8-8c2-8-2-16-8-24z" />
      </svg>
    );
  }

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 24 32"
      className={cn("h-6 w-4 shrink-0 text-olive opacity-70", className)}
      fill="currentColor"
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: 0.7,
        y: [0, -6, 0],
        rotate: [-4, 4, -4],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <path d="M12 0C6 8 2 16 4 24c2 6 6 8 8 8s6-2 8-8c2-8-2-16-8-24z" />
    </motion.svg>
  );
}
