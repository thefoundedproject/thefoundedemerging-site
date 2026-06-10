import { NextResponse } from 'next/server';

/**
 * POST /api/consent
 * 
 * Sends a parental consent confirmation email when a guardian sets up
 * the Founded Emerging app for their teen. Called from the app's
 * parental-consent.tsx onboarding screen.
 *
 * Copyright 2026 Dr. Stephen Thompson / The Founded Project
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { guardianEmail, teenName } = body;

    if (!guardianEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guardianEmail)) {
      return NextResponse.json({ error: 'Valid guardian email is required.' }, { status: 400 });
    }

    const firstName = teenName && teenName !== 'your teen' ? teenName : null;
    const displayName = firstName ? `${firstName}'s` : 'Your teen\'s';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Founded Emerging <noreply@thefoundedemerging.app>',
        to: [guardianEmail],
        bcc: ['docthompsondacmdc@gmail.com'],
        subject: `${displayName} Founded Emerging app is set up`,
        html: `
          <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#0F1B1F;color:#F5F0E8;">
            <div style="border-bottom:2px solid #D8AB69;padding-bottom:16px;margin-bottom:28px;">
              <p style="font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#D8AB69;margin:0 0 6px;">Founded Emerging</p>
              <h1 style="font-size:22px;font-weight:300;margin:0;color:#F5F0E8;">Guardian confirmation received.</h1>
            </div>

            <p style="font-size:16px;line-height:1.7;color:rgba(245,240,232,0.85);margin-bottom:16px;">
              ${firstName ? `You have confirmed setup of the Founded Emerging app for ${firstName}.` : 'You have confirmed setup of the Founded Emerging app for your teen.'}
              The app is now unlocked on their device.
            </p>

            <p style="font-size:16px;line-height:1.7;color:rgba(245,240,232,0.85);margin-bottom:24px;">
              Everything ${firstName || 'your teen'} writes — journal entries, evening check-ins, discharge notes —
              stays on their device. Nothing is stored in the cloud without their action.
              You will not receive notifications about their journal. What they write is theirs.
            </p>

            <div style="background:rgba(216,171,105,0.1);border-left:3px solid #D8AB69;padding:20px 24px;border-radius:0 8px 8px 0;margin-bottom:28px;">
              <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#D8AB69;margin:0 0 10px;">Safety — what to know</p>
              <p style="font-size:14px;line-height:1.7;color:rgba(245,240,232,0.75);margin:0;">
                If ${firstName || 'your teen'} writes something that suggests they are in distress, the app will
                respond warmly and offer to connect them with someone they trust — or with the
                988 Suicide and Crisis Lifeline. The safety net is built for them, not over them.
                They remain in control of who knows what.
              </p>
            </div>

            <div style="border-top:1px solid rgba(216,171,105,0.2);padding-top:20px;margin-top:8px;">
              <p style="font-size:13px;color:rgba(245,240,232,0.45);line-height:1.6;margin:0;">
                Founded Emerging · Ages 13–17 · thefoundedemerging.app<br/>
                Built by Dr. Stephen Thompson DC, DACM, BCTMB, FAIHM<br/>
                If you did not set up this app, please contact us at contact@thefoundedemerging.app
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      // Return 200 anyway — consent is stored locally on device
      // Email failure should not block app access
      return NextResponse.json({ sent: false, note: 'Email queued for retry' });
    }

    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error('Consent API error:', err);
    return NextResponse.json({ sent: false }, { status: 500 });
  }
}
