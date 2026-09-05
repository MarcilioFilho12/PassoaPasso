import { siteContent } from "@/data/site-content";
import { HeroSection } from "@/components/sections/HeroSection";
import { QuemSomosSection } from "@/components/sections/QuemSomosSection";
import { VivenciaSection } from "@/components/sections/VivenciaSection";
import { TextBlockSection } from "@/components/sections/TextBlockSection";
// import { AmbienteSection } from "@/components/sections/AmbienteSection";
import { InformacoesSection } from "@/components/sections/InformacoesSection";
import { MapSection } from "@/components/sections/MapSection";
import { CtaFinalSection } from "@/components/sections/CtaFinalSection";
import { SteppingStoneDivider } from "@/components/shared/SteppingStoneDivider";
import { SectionWave } from "@/components/shared/SectionWave";

export default function HomePage() {
  const { adaptacao, alimentacaoRotina } = siteContent;

  return (
    <>
      <HeroSection />
      <SteppingStoneDivider />
      <SectionWave from="linen" to="cream" />
      <QuemSomosSection />
      <SteppingStoneDivider />
      <SectionWave from="cream" to="linen" />
      <VivenciaSection />
      <SteppingStoneDivider />
      <TextBlockSection
        id="adaptacao"
        title={adaptacao.title}
        body={adaptacao.body}
        eyebrow="Segurança emocional"
        variant="accent"
      />
      <SteppingStoneDivider />
      <SectionWave from="linen" to="cream" />
      <TextBlockSection
        id="alimentacao-rotina"
        title={alimentacaoRotina.title}
        body={alimentacaoRotina.body}
        eyebrow="Transparência e cuidado no dia a dia"
      />
      {/* <AmbienteSection /> — reativar quando as fotos do ambiente estiverem prontas */}
      <SteppingStoneDivider />
      <InformacoesSection />
      <SteppingStoneDivider />
      <SectionWave from="cream" to="linen" />
      <MapSection />
      <SectionWave from="linen" to="olive-deep" />
      <CtaFinalSection />
    </>
  );
}
