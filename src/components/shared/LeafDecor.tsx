import { cn } from "@/lib/cn";

export function LeafDecor({ className }: { className?: string }) {
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
