import type { SiteContent } from "@/types/content";
import { siteConfig } from "@/constants/site";

const placeholder = (label: string) => ({
  src: "",
  alt: `Foto ilustrativa: ${label} — Passo a Passo Recreação Infantil`,
});

export const siteContent: SiteContent = {
  meta: {
    title: "Passo a Passo | Recreação Infantil",
    description:
      "Espaço acolhedor de recreação infantil para crianças até 12 anos. Acolhimento, vínculo, natureza, leveza e segurança emocional. Aqui a infância é tratada com carinho e afeto.",
  },
  hero: {
    eyebrow: "Recreação infantil com acolhimento e afeto",
    title:
      "Um ambiente pensado para que cada criança se sinta segura, livre e principalmente acolhida.",
    subtitle:
      "Na Passo a Passo, acreditamos que o desenvolvimento acontece através do vínculo, do brincar e de experiências vividas com presença e acolhimento.",
    cta: { label: "Falar conosco", href: siteConfig.urls.whatsapp },
    secondaryCta: { label: "Conheça a vivência", href: "#vivencia" },
    image: {
      src: "/semtelas.jpeg",
      alt: "Criança brincando ao ar livre — Passo a Passo Recreação Infantil",
    },
    secondaryImage: {
      src: "/atividades.jpeg",
      alt: "Criança em atividade ao ar livre — Passo a Passo Recreação Infantil",
    },
  },
  quemSomos: {
    title: "Quem Somos",
    paragraphs: [
      "A Passo a Passo nasceu de um sonho antigo, antes mesmo da maternidade: criar um espaço acolhedor, respeitoso e seguro para viver a infância com leveza, afeto e presença.",
      "Sou Agnes, mãe do Kaleo, moro em Garopaba desde que nasci, meu sonho sempre foi ser mãe e antes mesmo da maternidade já existia em mim o desejo profundo de compreender a infância de forma mais humana e consciente, sempre estudei sobre a infância e desenvolvimento das crianças. Mas hoje realizo um sonho ainda mais antigo, criar um espaço acolhedor, respeitoso e cheio de significado para as crianças e suas familias.",
      "Nossa proposta une acolhimento emocional, diversão, rotina equilibrada e aprendizagem leve, sempre priorizando a segurança emocional e o bem-estar das crianças.",
      "Também acreditamos na importância da confiança e da parceria com as famílias, construindo uma relação transparente, próxima e respeitosa",
      "A Passo a Passo foi pensada para que seja uma extensão de cuidado, pertencimento e afeto — quase como uma segunda casa.",
    ],
    image: {
      src: "/quem-somos.png",
      alt: "Agnes e Kaleo no ambiente natural, maternidade e leveza — Passo a Passo Recreação Infantil",
    },
  },
  vivencia: {
    title: "Como Vivemos a Infância",
    quote:
      "Acreditamos em uma infância leve, presente e vivida com tempo para brincar, explorar, sentir e criar memórias afetivas.",
    items: [
      {
        label: "Brincar livre",
        image: {
          src: "/brincar-livre.png",
          alt: "Criança brincando livre em escada de corda na natureza — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Imaginação",
        image: {
          src: "/imaginacao.jpg",
          alt: "Crianças brincando com imaginação no pneu azul — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Sem telas",
        image: {
          src: "/semtelas.jpeg",
          alt: "Criança brincando ao ar livre sem telas — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Atividades sensoriais",
        image: {
          src: "/atividades-sensoriais.jpg",
          alt: "Crianças em atividade sensorial com pintura ao ar livre — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Natureza",
        image: {
          src: "/atividades.jpeg",
          alt: "Criança em contato com a natureza — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Leitura",
        image: {
          src: "/Dia-D-da-Leitura.jpg",
          alt: "Criança lendo e vivendo o Dia D da Leitura — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Musicalização",
        image: {
          src: "/infantil-3.png",
          alt: "Criança tocando instrumentos em atividade de musicalização — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Acolhimento emocional",
        image: {
          src: "/acolhimento-emocional.jpg",
          alt: "Criança em ambiente acolhedor e brincadeira ao ar livre — Passo a Passo Recreação Infantil",
        },
      },
      {
        label: "Mediação afetiva nos conflitos",
        image: {
          src: "/mediacao-afetiva.jpg",
          alt: "Crianças em mediação afetiva e convivência respeitosa — Passo a Passo Recreação Infantil",
        },
      },
    ],
  },
  adaptacao: {
    title: "Adaptação e Acolhimento",
    body: "Entendemos que cada criança vivencia o processo de adaptação de forma única. Por isso, esse momento acontece com acolhimento, respeito e construção gradual de vínculo e segurança, sempre considerando o tempo, as emoções e a individualidade de cada criança.",
  },
  alimentacaoRotina: {
    title: "Alimentação e rotina",
    body: "O lanche faz parte da experiência de cuidado do espaço. As famílias acompanham antecipadamente as propostas da semana, atividades e alimentação oferecida, criando uma relação mais próxima, segura e transparente entre os pais e a rotina da criança.",
  },
  ambiente: {
    title: "O Ambiente",
    images: [
      placeholder("madeira e luz natural"),
      placeholder("tecidos e livros"),
      placeholder("brinquedos simples"),
      placeholder("terra e horta"),
      placeholder("água e natureza"),
      placeholder("organização calma"),
    ],
  },
  informacoes: {
    title: "Informações Práticas",
    items: [
      { label: "Faixa etária", value: "Até 12 anos" },
      { label: "Horário", value: "Segunda a Sexta - 13h às 18h" },
      { label: "Período", value: "Vespertino, vagas limitadas para manter o olhar individual." },
      {
        label: "Endereço",
        value: "R. Arlindo Alcebíades de Andrade",
      },
      {
        label: "Alimentação",
        value: "Incluso, cardápio disponibilizado antecipadamente.",
      },
      { label: "Adaptação", value: "Adaptação gradual" },
      { label: "Contato", value: siteConfig.contact.phone },
    ],
  },
  ctaFinal: {
    title: "Conheça a Passo a Passo",
    actions: [
      {
        label: "Falar no WhatsApp",
        href: siteConfig.urls.whatsapp,
        variant: "primary",
      },
    ],
  },
  footer: {
    tagline: siteConfig.anchorPhrase,
    address: "R. Arlindo Alcebíades de Andrade",
    social: {
      instagram: siteConfig.urls.instagram,
      whatsapp: siteConfig.urls.whatsapp,
    },
    mapUrl: process.env.NEXT_PUBLIC_MAP_URL,
  },
};
