import Image from "next/image";
import { Leaf } from "lucide-react";
import { siteContent } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export function QuemSomosSection() {
  const { quemSomos } = siteContent;
  const [intro, ...rest] = quemSomos.paragraphs;

  return (
    <section
      id="quem-somos"
      className="bg-cream py-16 md:py-24"
      aria-labelledby="quem-somos-title"
    >
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {quemSomos.image && (
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-lg">
                <Image
                  src={quemSomos.image.src}
                  alt={quemSomos.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.08} direction="right">
            <p className="text-sm font-bold uppercase tracking-wider text-olive">
              Confiança e vínculo
            </p>
            <h2
              id="quem-somos-title"
              className="mt-2 font-display text-3xl font-bold text-olive-deep sm:text-4xl"
            >
              {quemSomos.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted md:text-lg">
              {intro}
            </p>

            <ul className="mt-6 space-y-3">
              {rest.map((paragraph) => (
                <li
                  key={paragraph.slice(0, 40)}
                  className="flex items-start gap-3 text-text"
                >
                  <Leaf
                    className="mt-1 h-4 w-4 shrink-0 text-olive"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed md:text-base">
                    {paragraph}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
