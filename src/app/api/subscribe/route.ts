import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.log('[subscribe]', email);
    return NextResponse.json({ ok: true });
  }

  const sast = new Date().toLocaleString('en-ZA', {
    timeZone: 'Africa/Johannesburg',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  // Notify you of the new subscriber
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'website@khatleng.com',
      to: 'info@khatleng.com',
      reply_to: email,
      subject: `[New Subscriber] ${email}`,
      html: `
        <p>A new visitor has subscribed to follow the farm.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed:</strong> ${sast} (SAST)</p>
      `,
    }),
  });

  // Send a welcome email to the subscriber
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'website@khatleng.com',
      to: email,
      subject: 'Welcome to Khatleng Farms',
      html: `
        <p>Thank you for following Khatleng Farms.</p>
        <p>You will receive season updates, harvest news and fresh produce availability from our farm in Bethlehem, Free State.</p>
        <br/>
        <p>Visit us at <a href="https://khatleng.com">khatleng.com</a></p>
        <br/>
        <p style="color:#888;font-size:13px;">Khatleng Farms · Bethlehem, Free State · info@khatleng.com</p>
      `,
    }),
  });

  return NextResponse.json({ ok: true });
}
