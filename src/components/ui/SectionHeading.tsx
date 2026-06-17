import { cn } from "@/lib/cn";
import { LeafDecor } from "@/components/shared/LeafDecor";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-olive",
            align === "center" && "mx-auto",
          )}
        >
          {eyebrow}
        </p>
      )}
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <LeafDecor className="hidden sm:block" />
        <h2 className="font-display text-3xl font-semibold leading-tight text-cinnamon-dark md:text-4xl lg:text-[2.5rem]">
          {title}
        </h2>
        <LeafDecor className="hidden rotate-180 sm:block" />
      </div>
    </div>
  );
}
