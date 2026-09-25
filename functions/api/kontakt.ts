// Cloudflare Pages Function: POST /api/kontakt
// Modtager kontaktformularen, tjekker Turnstile (spam) og sender en mail via Simply (SMTP).
// Intet gemmes – data findes kun i den mail, der sendes.
//
// Miljøvariabler (Cloudflare Pages → Settings → Variables and secrets):
//   SMTP_USER         fx hjemmeside@legaards.dk   (tekst)
//   SMTP_PASS         adgangskode til postkassen  (secret)
//   MAIL_TO           modtager, fx mail@legaards.dk (tekst)
//   TURNSTILE_SECRET  secret key fra Turnstile    (secret)
//   SMTP_HOST         valgfri, standard smtp.simply.com
//   SMTP_PORT         valgfri, standard 587

import { WorkerMailer } from 'worker-mailer';

interface Env {
  SMTP_USER: string;
  SMTP_PASS: string;
  MAIL_TO: string;
  TURNSTILE_SECRET?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8' } });

const clean = (v: unknown, max = 2000) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Ugyldig forespørgsel' }, 400);
  }

  // Honeypot – robotter udfylder det skjulte felt
  if (clean(data.website)) return json({ ok: true });

  const navn = clean(data.navn, 120);
  const telefon = clean(data.telefon, 40);
  const email = clean(data.email, 160);
  const emne = clean(data.emne, 80);
  const adresse = clean(data.adresse, 200);
  const besked = clean(data.besked, 5000);
  const side = clean(data.side, 200);

  if (!navn || !telefon || !besked) return json({ ok: false, error: 'Udfyld navn, telefon og besked' }, 400);
  if (email && !isEmail(email)) return json({ ok: false, error: 'Ugyldig e-mail' }, 400);

  // Turnstile (spamfilter) – springes over, hvis der ikke er sat en secret endnu
  if (env.TURNSTILE_SECRET) {
    const token = clean(data['cf-turnstile-response'], 4096);
    const form = new FormData();
    form.append('secret', env.TURNSTILE_SECRET);
    form.append('response', token);
    const ip = request.headers.get('CF-Connecting-IP');
    if (ip) form.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
    const out = (await res.json()) as { success: boolean };
    if (!out.success) return json({ ok: false, error: 'Spamtjek fejlede – prøv igen' }, 403);
  }

  const rows: [string, string][] = [
    ['Navn', navn],
    ['Telefon', telefon],
    ['E-mail', email],
    ['Emne', emne],
    ['Adresse på opgaven', adresse],
    ['Sendt fra side', side],
  ];
  const text =
    rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nBesked:\n${besked}\n`;
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#243647">
      <h2 style="margin:0 0 12px">Ny henvendelse fra hjemmesiden</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="color:#6b7a88">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`).join('')}
      </table>
      <p style="margin:16px 0 6px;color:#6b7a88">Besked:</p>
      <p style="white-space:pre-wrap;margin:0">${esc(besked)}</p>
    </div>`;

  try {
    await WorkerMailer.send(
      {
        host: env.SMTP_HOST || 'smtp.simply.com',
        port: Number(env.SMTP_PORT || 587),
        secure: false,
        startTls: true,
        credentials: { username: env.SMTP_USER, password: env.SMTP_PASS },
        authType: ['plain', 'login'],
        socketTimeoutMs: 15000,
        responseTimeoutMs: 15000,
      },
      {
        from: { name: 'Ny henvendelse - Legaards.dk', email: env.SMTP_USER },
        to: env.MAIL_TO,
        reply: email ? { name: navn, email } : undefined,
        subject: `Ny henvendelse${emne ? `: ${emne}` : ''} – ${navn}`,
        text,
        html,
      },
    );
  } catch (err) {
    console.error('Mail fejlede', err);
    return json({ ok: false, error: 'Mailen kunne ikke sendes' }, 502);
  }

  return json({ ok: true });
};
