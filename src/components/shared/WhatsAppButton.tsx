"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackLead } from "@/lib/track-lead";

type WhatsAppButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
  trackLead?: boolean;
  leadSource?: string;
};

export function WhatsAppButton({
  href,
  children,
  className,
  iconClassName,
  onClick,
  trackLead: shouldTrackLead = true,
  leadSource = "WhatsApp",
}: WhatsAppButtonProps) {
  const reduced = useReducedMotion();

  function handleClick() {
    if (shouldTrackLead) trackLead(leadSource);
    onClick?.();
  }

  if (reduced) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn("inline-flex items-center gap-2", className)}
      >
        <Phone className={cn("h-4 w-4", iconClassName)} aria-hidden />
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn("inline-flex items-center gap-2", className)}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <motion.span
        aria-hidden
        animate={{ rotate: [0, -8, 8, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
        className="inline-flex"
      >
        <Phone className={cn("h-4 w-4", iconClassName)} />
      </motion.span>
      {children}
    </motion.a>
  );
}
