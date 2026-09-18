type AdsLeadInput = {
  source: string;
};

function conversionId() {
  const raw = process.env.GOOGLE_ADS_CONVERSION_ID?.trim() ?? "";
  return raw.replace(/^AW-/i, "");
}

function conversionLabel() {
  return process.env.GOOGLE_ADS_CONVERSION_LABEL?.trim() ?? "";
}

/** Envia conversão pelo pixel de servidor — IDs nunca vão ao HTML. */
export async function sendGoogleAdsLead({ source }: AdsLeadInput) {
  const id = conversionId();
  const label = conversionLabel();
  if (!id || !label) return;

  const params = new URLSearchParams({
    label,
    guid: "ON",
    script: "0",
    value: "0",
    event_label: source.slice(0, 80),
  });

  await fetch(
    `https://www.googleadservices.com/pagead/conversion/${id}/?${params.toString()}`,
    { cache: "no-store" },
  );
}
