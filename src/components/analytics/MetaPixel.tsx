import { MetaPixelHead, MetaPixelNoscript } from "@/components/analytics/MetaPixelHead";
import { MetaPixelPageView } from "@/components/analytics/MetaPixelPageView";

export function MetaPixel() {
  return (
    <>
      <MetaPixelHead />
      <MetaPixelNoscript />
      <MetaPixelPageView />
    </>
  );
}
