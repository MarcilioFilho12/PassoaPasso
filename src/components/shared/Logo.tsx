import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "header" | "footer" | "compact";
  className?: string;
};

const logoMap = {
  header: { src: siteConfig.brand.logoCircle, width: 72, height: 72 },
  footer: { src: siteConfig.brand.logoSquare, width: 240, height: 96 },
  compact: { src: siteConfig.brand.logoCompact, width: 64, height: 64 },
};

export function Logo({ variant = "header", className }: LogoProps) {
  const { src, width, height } = logoMap[variant];

  return (
    <Link
      href="#inicio"
      className={cn(
        "inline-block shrink-0",
        variant === "header" &&
          "flex h-12 w-12 items-center justify-center rounded-full bg-olive p-1 shadow-sm shadow-olive/30 ring-1 ring-olive-light/40 sm:h-14 sm:w-14 sm:p-1.5 md:h-16 md:w-16",
        className,
      )}
      aria-label="Passo a Passo — voltar ao início"
    >
      <Image
        src={src}
        alt="Passo a Passo Recreação Infantil"
        width={width}
        height={height}
        className={cn(
          variant === "header" && "h-full w-full rounded-full object-contain",
          variant === "footer" &&
            "h-14 w-auto max-w-[200px] object-contain sm:max-w-[240px] md:h-16",
          variant === "compact" && "max-h-12 w-auto object-contain",
        )}
        priority={variant === "header"}
      />
    </Link>
  );
}
