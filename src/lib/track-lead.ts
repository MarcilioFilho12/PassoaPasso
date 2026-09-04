import { trackMetaLead } from "@/lib/meta-pixel";
import { trackGoogleAdsLead } from "@/lib/google-ads";

/** Dispara Lead no Meta Pixel e no Google Ads */
export function trackLead(contentName = "WhatsApp") {
  trackMetaLead(contentName);
  trackGoogleAdsLead(contentName);
}
