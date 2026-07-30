export type ImageAsset = {
  src: string;
  alt: string;
};

export type CtaAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
};

export type SiteContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: ImageAsset;
    secondaryImage: ImageAsset;
  };
  quemSomos: {
    title: string;
    paragraphs: string[];
    image?: ImageAsset;
  };
  vivencia: {
    title: string;
    quote: string;
    items: { label: string; image: ImageAsset }[];
  };
  adaptacao: { title: string; body: string };
  alimentacaoRotina: { title: string; body: string };
  ambiente: {
    title: string;
    images: ImageAsset[];
  };
  informacoes: {
    title: string;
    items: { label: string; value: string }[];
  };
  ctaFinal: {
    title: string;
    actions: CtaAction[];
  };
  footer: {
    tagline: string;
    address: string;
    social: { instagram: string; whatsapp: string };
    mapUrl?: string;
  };
};
