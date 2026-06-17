import { siteContent } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollingCarousel } from "@/components/shared/ScrollingCarousel";
import type { CarouselItem } from "@/components/shared/ScrollingCarousel";

function imageToLabel(alt: string) {
  return alt.replace(/^Foto ilustrativa: /, "").split(" —")[0];
}

export function AmbienteSection() {
  const { ambiente } = siteContent;

  const carouselItems: CarouselItem[] = ambiente.images.map((image) => ({
    label: imageToLabel(image.alt),
    category: "Ambiente",
    image,
  }));

  return (
    <section
      id="ambiente"
      className="py-16 md:py-24"
      aria-labelledby="ambiente-title"
    >
      <Container>
        <SectionHeading
          title={ambiente.title}
          eyebrow="Segurança e pertencimento"
        />

        <p className="-mt-6 mb-10 max-w-2xl text-text-muted">
          Um espaço pensado com madeira, luz natural, tecidos, livros e
          organização calma — para que cada criança se sinta em casa.
        </p>
      </Container>

      <ScrollingCarousel
        items={carouselItems}
        ariaLabel="Galeria do ambiente Passo a Passo"
        fadeFrom="linen"
      />
    </section>
  );
}
