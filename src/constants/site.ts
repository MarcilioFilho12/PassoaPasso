export const siteConfig = {
  name: "Passo a Passo",
  tagline: "Recreação Infantil",
  anchorPhrase: "Aqui a infância é tratada com carinho e afeto.",
  keywords: [
    "acolhimento",
    "infância",
    "respeito",
    "vínculo",
    "leveza",
    "natureza",
    "autonomia",
    "pertencimento",
    "presença",
    "segurança",
    "afeto",
  ],
  urls: {
    whatsapp:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ??
      "https://wa.me/5548991096678",
    waitlist: process.env.NEXT_PUBLIC_WAITLIST_URL ?? "#contato",
    visit: process.env.NEXT_PUBLIC_VISIT_URL ?? "#contato",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/passoapassorecreacao/",
  },
  contact: {
    phone: "+55 (48) 99109-6678",
    phoneHref: "tel:+5548991096678",
  },
  brand: {
    logoHeader: "/brand/logo-completo.jpeg",
    logoSquare: "/brand/logo-quadrada.png",
    logoCircle: "/brand/logo-circle.png",
    logoCompact: "/brand/logo-circular-texto.png",
  },
} as const;
