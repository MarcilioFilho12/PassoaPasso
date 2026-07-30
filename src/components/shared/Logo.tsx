import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  variant?: "header" | "footer" | "compact";
  className?: string;
};

const logoMap = {
  header: { src: siteConfig.brand.logoCircle, width: 112, height: 112 },
  footer: { src: siteConfig.brand.logoCircle, width: 128, height: 128 },
  compact: { src: siteConfig.brand.logoCircle, width: 64, height: 64 },
};

export function Logo({ variant = "header", className }: LogoProps) {
  const { src, width, height } = logoMap[variant];

  return (
    <Link
      href="#inicio"
      className={cn("inline-block shrink-0", className)}
      aria-label="Passo a Passo — voltar ao início"
    >
      <Image
        src={src}
        alt="Passo a Passo Recreação Infantil"
        width={width}
        height={height}
        className={cn(
          "rounded-full object-contain",
          variant === "header" && "h-20 w-20 sm:h-24 sm:w-24",
          variant === "footer" && "h-24 w-24 sm:h-28 sm:w-28",
          variant === "compact" && "h-12 w-12",
        )}
        priority={variant === "header"}
        quality={100}
      />
    </Link>
  );
}
