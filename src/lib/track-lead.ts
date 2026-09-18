/** Envia o lead ao servidor. Tokens e IDs de anúncio não entram no HTML. */
export function trackLead(contentName = "WhatsApp") {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify({ source: contentName });
  const blob = new Blob([payload], { type: "text/plain" });

  try {
    if (navigator.sendBeacon("/api/lead", blob)) return;
  } catch {
    // fallback abaixo
  }

  void fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: payload,
    keepalive: true,
  });
}
