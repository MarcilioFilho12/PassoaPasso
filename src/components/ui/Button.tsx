import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-cinnamon text-linen hover:bg-cinnamon-dark shadow-md shadow-cinnamon/20",
  secondary:
    "bg-olive text-linen hover:bg-olive-light shadow-md shadow-olive/20",
  outline:
    "border-2 border-cinnamon text-cinnamon hover:bg-cinnamon hover:text-linen",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 md:text-base",
    variants[variant],
    className,
  );

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
