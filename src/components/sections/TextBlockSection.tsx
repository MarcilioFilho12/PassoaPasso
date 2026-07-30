import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/cn";

type TextBlockSectionProps = {
  id: string;
  title: string;
  body: string;
  eyebrow?: string;
  variant?: "default" | "accent";
};

export function TextBlockSection({
  id,
  title,
  body,
  eyebrow,
  variant = "default",
}: TextBlockSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        variant === "accent" ? "bg-linen" : "bg-cream",
      )}
      aria-labelledby={`${id}-title`}
    >
      <Container className="max-w-3xl">
        <FadeIn>
          {eyebrow && (
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-olive">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-title`}
            className="font-display text-3xl font-bold text-olive-deep sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            {body}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
