import { NextRequest, NextResponse } from "next/server";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

const allowedReasons = new Set([
  "Research collaboration",
  "Project development",
  "Suggestions or ideas",
  "Miscellaneous",
]);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function redisCommand(command: Array<string | number>) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!response.ok) return null;
  return response.json() as Promise<{ result?: unknown; error?: string }>;
}

async function isRateLimited(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const key = `portfolio:contact:${ip}`;

  const countResult = await redisCommand(["INCR", key]);
  if (!countResult || typeof countResult.result !== "number") return false;

  if (countResult.result === 1) {
    await redisCommand(["EXPIRE", key, 600]);
  }

  return countResult.result > 5;
}

export async function POST(request: NextRequest) {
  try {
    if (await isRateLimited(request)) {
      return NextResponse.json(
        { message: "Too many messages. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as Record<string, unknown>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const reason = String(body.reason ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "").trim();

    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !reason || !subject || !message) {
      return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }
    if (!allowedReasons.has(reason)) {
      return NextResponse.json({ message: "Please select a valid contact reason." }, { status: 400 });
    }
    if (name.length > 100 || subject.length > 180 || message.length > 5000) {
      return NextResponse.json({ message: "The message is too long." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || "Mahbub Sarwar Portfolio";
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!apiKey || !senderEmail || !recipientEmail) {
      console.error("Brevo contact environment variables are not configured.");
      return NextResponse.json({ message: "Contact service is not configured yet." }, { status: 503 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeReason = escapeHtml(reason);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const brevoResponse = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email: recipientEmail, name: "Mahbub Sarwar" }],
        replyTo: { email, name },
        subject: `[Portfolio · ${reason}] ${subject}`,
        textContent: [
          "New portfolio message",
          `Name: ${name}`,
          `Email: ${email}`,
          `Reason: ${reason}`,
          `Subject: ${subject}`,
          "",
          message,
        ].join("\n"),
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#0f172a">
            <div style="padding:24px;border-radius:18px;background:#f8fafc;border:1px solid #e2e8f0">
              <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#0284c7">Portfolio enquiry</p>
              <h2 style="margin:0 0 20px;font-size:24px">${safeSubject}</h2>
              <table style="width:100%;border-collapse:collapse;font-size:14px">
                <tr><td style="padding:7px 0;color:#64748b;width:110px">From</td><td style="padding:7px 0;font-weight:700">${safeName}</td></tr>
                <tr><td style="padding:7px 0;color:#64748b">Email</td><td style="padding:7px 0">${safeEmail}</td></tr>
                <tr><td style="padding:7px 0;color:#64748b">Reason</td><td style="padding:7px 0">${safeReason}</td></tr>
              </table>
              <div style="height:1px;background:#e2e8f0;margin:20px 0"></div>
              <p style="margin:0;line-height:1.7;font-size:15px">${safeMessage}</p>
            </div>
          </div>`,
      }),
      cache: "no-store",
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error("Brevo send failed:", brevoResponse.status, errorText);
      return NextResponse.json({ message: "Could not send your message right now." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ message: "Something went wrong while sending your message." }, { status: 500 });
  }
}
