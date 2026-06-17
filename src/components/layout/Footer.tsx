import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Logo } from "@/components/shared/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-olive/15 bg-cinnamon-dark/5 py-12 md:py-16">
      <Container className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Logo variant="footer" />
          <p className="max-w-xs font-display text-lg italic text-olive">
            {footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-text-muted">
          <p className="font-semibold text-cinnamon-dark">Contato</p>
          <address className="not-italic">{footer.address}</address>
          <p>
            <a
              href={siteConfig.contact.phoneHref}
              className="font-medium text-olive underline-offset-4 hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
          <ul className="flex flex-col gap-2 md:items-start">
            <li>
              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-olive underline-offset-4 hover:underline"
                aria-label="Instagram da Passo a Passo"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={footer.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-olive underline-offset-4 hover:underline"
                aria-label="WhatsApp da Passo a Passo"
              >
                WhatsApp
              </a>
            </li>
            {footer.mapUrl && (
              <li>
                <a
                  href={footer.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-olive underline-offset-4 hover:underline"
                >
                  Ver localização
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} —{" "}
            {siteConfig.tagline}
          </p>
          <p className="mt-1 opacity-80">
            acolhimento · infância · vínculo · natureza
          </p>
        </div>
      </Container>
    </footer>
  );
}
