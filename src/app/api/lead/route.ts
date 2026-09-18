import { sendGoogleAdsLead } from "@/lib/google-ads-conversion";
import { sendMetaLead } from "@/lib/meta-capi";
import { siteUrl } from "@/constants/site";

export const runtime = "nodejs";

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim();
  return request.headers.get("x-real-ip")?.trim() || undefined;
}

function sanitizeSource(value: unknown) {
  if (typeof value !== "string") return "WhatsApp";
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
  if (!cleaned) return "WhatsApp";
  return cleaned.slice(0, 80);
}

async function readSource(request: Request) {
  try {
    const text = await request.text();
    if (!text) return "WhatsApp";
    const body = JSON.parse(text) as { source?: unknown };
    return sanitizeSource(body.source);
  } catch {
    return "WhatsApp";
  }
}

export async function POST(request: Request) {
  const source = await readSource(request);
  const eventSourceUrl = request.headers.get("referer") || siteUrl;

  await Promise.allSettled([
    sendMetaLead({
      source,
      clientIp: clientIp(request),
      userAgent: request.headers.get("user-agent") ?? undefined,
      eventSourceUrl,
    }),
    sendGoogleAdsLead({ source }),
  ]);

  return new Response(null, {
    status: 204,
    headers: { "Cache-Control": "no-store" },
  });
}
