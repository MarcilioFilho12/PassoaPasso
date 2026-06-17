import { siteContent } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function InformacoesSection() {
  const { informacoes } = siteContent;

  return (
    <section
      id="informacoes"
      className="bg-cinnamon/5 py-16 md:py-24"
      aria-labelledby="informacoes-title"
    >
      <Container>
        <SectionHeading
          title={informacoes.title}
          eyebrow="Clareza para as famílias"
          align="center"
        />

        <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {informacoes.items.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <li className="rounded-2xl border border-olive/15 bg-linen p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-olive">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-lg font-medium text-cinnamon-dark">
                  {item.value}
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
