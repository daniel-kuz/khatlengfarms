import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, org, email, phone, type, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    /* Dev fallback — log and return success so the form is testable locally */
    console.log('[contact form]', { name, org, email, phone, type, message });
    return NextResponse.json({ ok: true });
  }

  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Organisation:</strong> ${org || '—'}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || '—'}</p>
    <p><strong>Enquiry type:</strong> ${type || '—'}</p>
    <hr/>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'website@nkoenyane.co.za',
      to: 'info@khatleng.com',
      reply_to: email,
      subject: `[Website Enquiry] ${type || 'General'} — ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('[contact] Resend error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
