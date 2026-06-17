import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/types/content";

type PlaceholderImageProps = {
  image: ImageAsset;
  className?: string;
  label?: string;
};

export function PlaceholderImage({
  image,
  className,
  label,
}: PlaceholderImageProps) {
  const displayLabel =
    label ?? image.alt.replace(/^Foto ilustrativa: /, "").split(" —")[0];
  const hasSrc = Boolean(image.src);

  if (hasSrc) {
    return (
      <figure
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-olive/15",
          className,
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={image.alt}
      className={cn(
        "relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-2xl bg-gradient-to-br from-olive-light/40 via-linen to-sky/20 p-4 ring-1 ring-olive/15",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, var(--olive) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--sun) 0%, transparent 40%)",
        }}
      />
      <p className="relative z-10 rounded-lg bg-linen/80 px-3 py-1.5 text-sm font-medium text-text-muted backdrop-blur-sm">
        {displayLabel}
      </p>
    </div>
  );
}
