import { siteContent } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { SteppingStoneDivider } from "@/components/shared/SteppingStoneDivider";

export function QuemSomosSection() {
  const { quemSomos } = siteContent;

  return (
    <section
      id="quem-somos"
      className="py-16 md:py-24"
      aria-labelledby="quem-somos-title"
    >
      <Container>
        <SectionHeading
          title={quemSomos.title}
          eyebrow="Confiança e vínculo"
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-3">
            <div className="space-y-6 text-base leading-relaxed text-text-muted md:text-lg">
              {quemSomos.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 1
                      ? "rounded-2xl border-l-4 border-cinnamon bg-white/50 p-5 font-medium text-text"
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          {quemSomos.image && (
            <FadeIn delay={0.1} className="lg:col-span-2">
              <PlaceholderImage
                image={quemSomos.image}
                className="sticky top-28"
              />
            </FadeIn>
          )}
        </div>
      </Container>
      <SteppingStoneDivider />
    </section>
  );
}
