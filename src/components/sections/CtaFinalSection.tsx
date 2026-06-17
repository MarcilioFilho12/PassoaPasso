import { siteContent } from "@/data/site-content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/shared/FadeIn";

export function CtaFinalSection() {
  const { ctaFinal } = siteContent;

  return (
    <section
      id="contato"
      className="py-16 md:py-24"
      aria-labelledby="cta-title"
    >
      <Container>
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-br from-cinnamon to-cinnamon-dark px-6 py-12 text-center text-linen shadow-xl shadow-cinnamon/25 md:px-12 md:py-16">
            <h2
              id="cta-title"
              className="font-display text-3xl font-semibold md:text-4xl"
            >
              {ctaFinal.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-linen/90">
              Venha conhecer um espaço onde acolhimento, respeito e presença
              fazem parte de cada dia.
            </p>
            <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
              {ctaFinal.actions.map((action) => (
                <Button
                  key={action.label}
                  href={action.href}
                  variant={
                    action.variant === "outline"
                      ? "outline"
                      : action.variant === "primary"
                        ? "primary"
                        : "secondary"
                  }
                  className={
                    action.variant === "primary"
                      ? "!bg-linen !text-cinnamon hover:!bg-white"
                      : action.variant === "outline"
                        ? "!border-linen !text-linen hover:!bg-linen hover:!text-cinnamon"
                        : "!bg-olive !text-linen"
                  }
                  external={action.href.startsWith("http")}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
