import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, org, email, phone, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.log('[memorandum request]', { name, org, email, phone, message });
    return NextResponse.json({ ok: true });
  }

  const html = `
    <h2>Investment Memorandum Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Organisation:</strong> ${org || '—'}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || '—'}</p>
    ${message ? `<hr/><p>${message.replace(/\n/g, '<br/>')}</p>` : ''}
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'website@nkoenyane.co.za',
      to: 'daniel@khatleng.com',
      reply_to: email,
      subject: `[Memorandum Request] ${name}${org ? ` — ${org}` : ''}`,
      html,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
