"use client";

import { trackLead } from "@/lib/track-lead";

type LeadLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  leadSource?: string;
};

export function LeadLink({
  href,
  children,
  className,
  leadSource = "WhatsApp",
}: LeadLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackLead(leadSource)}
    >
      {children}
    </a>
  );
}
