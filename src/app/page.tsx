import { siteContent } from "@/data/site-content";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuemSomosSection } from "@/components/sections/QuemSomosSection";
// Seções temporariamente ocultas enquanto as fotos são montadas — não apagar
// import { VivenciaSection } from "@/components/sections/VivenciaSection";
import { TextBlockSection } from "@/components/sections/TextBlockSection";
// import { AmbienteSection } from "@/components/sections/AmbienteSection";
import { InformacoesSection } from "@/components/sections/InformacoesSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";

export default function HomePage() {
  const { adaptacao, alimentacaoRotina } = siteContent;

  return (
    <>
      <HeroSection />
      <QuemSomosSection />
      {/* <VivenciaSection /> — reativar quando as fotos da vivência estiverem prontas */}
      <TextBlockSection
        id="adaptacao"
        title={adaptacao.title}
        body={adaptacao.body}
        eyebrow="Segurança emocional"
        variant="accent"
      />
      <TextBlockSection
        id="alimentacao-rotina"
        title={alimentacaoRotina.title}
        body={alimentacaoRotina.body}
        eyebrow="Transparência e cuidado no dia a dia"
      />
      {/* <AmbienteSection /> — reativar quando as fotos do ambiente estiverem prontas */}
      <InformacoesSection />
      <CtaFinalSection />
    </>
  );
}
