import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function CtaFinalSection() {
  const { ctaFinal } = siteContent;

  return (
    <section
      id="contato"
      className="bg-olive-deep py-16 text-cream md:py-20"
      aria-labelledby="cta-title"
    >
      <Container className="max-w-3xl text-center">
        <FadeIn>
          <h2
            id="cta-title"
            className="font-display text-3xl font-bold sm:text-4xl"
          >
            {ctaFinal.title}
          </h2>
          <p className="mx-auto mt-3 max-w-lg opacity-90">
            Venha conhecer um espaço onde acolhimento, respeito e presença fazem
            parte de cada dia.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppButton
              href={siteConfig.urls.whatsapp}
              className="rounded-full bg-sun px-6 py-3 font-bold text-text shadow-md transition-opacity hover:opacity-90"
            >
              {siteConfig.contact.phone}
            </WhatsAppButton>
            <a
              href={siteConfig.urls.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/50 px-6 py-3 font-bold transition hover:bg-cream/10"
            >
              <InstagramIcon className="h-4 w-4" />
              @passoapassorecreacao
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
