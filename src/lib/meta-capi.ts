import { siteUrl } from "@/constants/site";

type MetaLeadInput = {
  source: string;
  clientIp?: string;
  userAgent?: string;
  eventSourceUrl?: string;
};

function pixelId() {
  return process.env.META_PIXEL_ID?.trim() ?? "";
}

function accessToken() {
  return process.env.META_CAPI_TOKEN?.trim() ?? "";
}

export async function sendMetaLead({
  source,
  clientIp,
  userAgent,
  eventSourceUrl,
}: MetaLeadInput) {
  const id = pixelId();
  const token = accessToken();
  if (!id || !token) return;

  const user_data: Record<string, string> = {};
  if (clientIp) user_data.client_ip_address = clientIp;
  if (userAgent) user_data.client_user_agent = userAgent;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: crypto.randomUUID(),
        action_source: "website",
        event_source_url: eventSourceUrl || siteUrl,
        user_data,
        custom_data: { content_name: source },
      },
    ],
  };

  const testCode = process.env.META_CAPI_TEST_EVENT_CODE?.trim();
  if (testCode) payload.test_event_code = testCode;

  const url = `https://graph.facebook.com/v21.0/${id}/events?access_token=${encodeURIComponent(token)}`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
}
