import Image from "next/image";
import { siteContent } from "@/data/site-content";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-linen py-10">
      <Container className="flex flex-col items-center gap-4 text-center text-sm text-text-muted">
        <Image
          src={siteConfig.brand.logoCircle}
          alt="Passo a Passo Recreação Infantil"
          width={128}
          height={128}
          className="h-24 w-24 rounded-full object-contain sm:h-28 sm:w-28"
          quality={100}
        />
        <p className="max-w-sm font-display text-base italic text-olive-deep">
          {footer.tagline}
        </p>
        <address className="not-italic">{footer.address}</address>
       
        <div className="flex gap-4">
          <a
            href={footer.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-olive-deep underline-offset-4 hover:underline"
          >
            Instagram
          </a>
          <a
            href={footer.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-olive-deep underline-offset-4 hover:underline"
          >
            WhatsApp
          </a>
        </div>
        <p className="pt-2">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.tagline}
        </p>
      </Container>
    </footer>
  );
}
