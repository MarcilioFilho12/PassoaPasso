import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

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
      className={
        variant === "accent"
          ? "bg-olive/5 py-16 md:py-20"
          : "py-16 md:py-20"
      }
      aria-labelledby={`${id}-title`}
    >
      <Container className="max-w-3xl">
        <SectionHeading title={title} eyebrow={eyebrow} />
        <FadeIn>
          <p className="text-lg leading-relaxed text-text-muted md:text-xl">
            {body}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
