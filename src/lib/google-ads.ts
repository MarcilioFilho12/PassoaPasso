declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18420544154";

/** Opcional: AW-XXXX/label da ação de conversão no Google Ads */
export const GOOGLE_ADS_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO ?? "";

export function trackGoogleAdsEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined" || !window.gtag || !GOOGLE_ADS_ID) return;
  window.gtag("event", event, params);
}

export function trackGoogleAdsLead(contentName = "WhatsApp") {
  if (typeof window === "undefined" || !window.gtag || !GOOGLE_ADS_ID) return;

  window.gtag("event", "generate_lead", {
    send_to: GOOGLE_ADS_ID,
    event_category: "engagement",
    event_label: contentName,
  });

  if (GOOGLE_ADS_CONVERSION_SEND_TO) {
    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
      event_label: contentName,
    });
  }
}
