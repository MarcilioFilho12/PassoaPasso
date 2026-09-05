"use client";

import { MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import { siteContent } from "@/data/site-content";

/** Coordenadas do template Google Commutes (Garopaba) */
const MAP_CENTER = {
  lat: -28.0302312,
  lng: -48.6284887,
};

const embedSrc = `https://maps.google.com/maps?q=${MAP_CENTER.lat},${MAP_CENTER.lng}&z=17&hl=pt-BR&output=embed`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${MAP_CENTER.lat},${MAP_CENTER.lng}&travelmode=driving`;

const placeUrl = `https://www.google.com/maps/search/?api=1&query=${MAP_CENTER.lat},${MAP_CENTER.lng}`;

type MapSectionProps = {
  /** Quando true e houver API key, carrega o widget Commutes completo */
  enableCommutesWidget?: boolean;
};

export function MapSection({ enableCommutesWidget = true }: MapSectionProps) {
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
  const useCommutes = Boolean(enableCommutesWidget && mapsApiKey);

  return (
    <section
      id="localizacao"
      className="bg-linen py-16 md:py-24"
      aria-labelledby="localizacao-title"
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-olive">
              Garopaba — SC
            </p>
            <h2
              id="localizacao-title"
              className="mt-2 font-display text-3xl font-bold text-olive-deep sm:text-4xl"
            >
              Onde estamos
            </h2>
            <p className="mt-3 text-text-muted">
              Veja a localização e estime o tempo de deslocamento até a Passo a
              Passo.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-sm">
            <div className="relative aspect-[16/11] w-full min-h-[280px] md:min-h-[420px]">
              {useCommutes ? (
                <iframe
                  title="Mapa e tempo de deslocamento — Passo a Passo"
                  src={`/maps/commutes.html?key=${encodeURIComponent(mapsApiKey)}`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <iframe
                  title="Mapa da Passo a Passo em Garopaba"
                  src={embedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>

            <div className="flex flex-col gap-4 border-t border-border/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/20 text-olive-deep">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-olive-deep">
                    {siteContent.footer.address}
                  </p>
                  <p className="text-sm text-text-muted">Garopaba — Santa Catarina</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-olive-deep px-5 py-2.5 text-sm font-bold text-cream shadow-sm transition hover:opacity-90"
                >
                  <Navigation className="h-4 w-4" aria-hidden />
                  Como chegar
                </a>
                <a
                  href={placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-olive-deep/30 px-5 py-2.5 text-sm font-bold text-olive-deep transition hover:bg-olive/15"
                >
                  Abrir no Maps
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
