import Image from "next/image";
import { cn } from "@/lib/cn";

type ArtCollageProps = {
  primaryImage: string;
  secondaryImage: string;
  primaryAlt?: string;
  secondaryAlt?: string;
  className?: string;
};

export function ArtCollage({
  primaryImage,
  secondaryImage,
  primaryAlt = "",
  secondaryAlt = "",
  className,
}: ArtCollageProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-lg pb-8", className)}>
      <div className="relative aspect-[4/5] w-[85%] overflow-hidden rounded-[2.5rem] shadow-xl ring-4 ring-cream/80">
        <Image
          src={primaryImage}
          alt={primaryAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10 aspect-square w-[45%] overflow-hidden rounded-[1.75rem] border-4 border-cream shadow-lg">
        <Image
          src={secondaryImage}
          alt={secondaryAlt}
          fill
          className="object-cover"
          sizes="40vw"
        />
      </div>

      <div
        aria-hidden
        className="absolute -right-3 top-8 h-16 w-16 rounded-full bg-sun/30 blur-xl"
      />
    </div>
  );
}
