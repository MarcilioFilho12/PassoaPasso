import { siteConfig, siteUrl } from "@/constants/site";

export function GET() {
  const body = `# ${siteConfig.name} — ${siteConfig.tagline}

> Espaço de recreação infantil em ${siteConfig.location.city} (${siteConfig.location.region}) para crianças até 12 anos, no período vespertino. Acolhimento, brincar livre, natureza e segurança emocional.

## Páginas

- [Início](${siteUrl}/): apresentação do espaço, proposta pedagógica, adaptação, alimentação, informações práticas e localização.

## Contato

- WhatsApp: ${siteConfig.contact.phone}
- Instagram: ${siteConfig.urls.instagram}
- Endereço: ${siteConfig.location.street}, ${siteConfig.location.city} — ${siteConfig.location.region}
- Horário: segunda a sexta, 13h às 18h
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
