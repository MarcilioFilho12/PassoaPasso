import { siteContent } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { ScrollingCarousel } from "@/components/shared/ScrollingCarousel";

export function VivenciaSection() {
  const { vivencia } = siteContent;

  const carouselItems = vivencia.items.map((item) => ({
    label: item.label,
    category: "Vivência",
    image: item.image,
  }));

  return (
    <section
      id="vivencia"
      className="bg-white/40 py-16 md:py-24"
      aria-labelledby="vivencia-title"
    >
      <Container>
        <SectionHeading
          title={vivencia.title}
          eyebrow="Pertencimento e leveza"
        />

        <FadeIn>
          <blockquote className="mb-12 rounded-2xl border border-olive/15 bg-linen px-6 py-8 text-center font-display text-xl italic leading-relaxed text-cinnamon-dark md:text-2xl">
            &ldquo;{vivencia.quote}&rdquo;
          </blockquote>
        </FadeIn>
      </Container>

      <ScrollingCarousel
        items={carouselItems}
        ariaLabel="Galeria de como vivemos a infância"
        fadeFrom="white"
        className="mt-2"
      />
    </section>
  );
}
