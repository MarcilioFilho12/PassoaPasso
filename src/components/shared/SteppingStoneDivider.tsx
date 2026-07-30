"use client";

import { motion, useReducedMotion } from "framer-motion";

const stones = [
  { color: "bg-olive", width: "w-5" },
  { color: "bg-sun", width: "w-7" },
  { color: "bg-sky", width: "w-6" },
  { color: "bg-olive-light", width: "w-5" },
  { color: "bg-cinnamon/70", width: "w-4" },
] as const;

export function SteppingStoneDivider() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div
        aria-hidden
        className="flex items-center justify-center gap-2 py-5 opacity-50"
      >
        {stones.map((stone, i) => (
          <span
            key={i}
            className={`inline-block h-2.5 ${stone.width} rounded-full ${stone.color}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="flex items-center justify-center gap-2.5 py-5"
    >
      {stones.map((stone, i) => (
        <motion.span
          key={i}
          className={`inline-block h-2.5 ${stone.width} rounded-full ${stone.color}`}
          initial={{ opacity: 0, y: 8, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 18,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
