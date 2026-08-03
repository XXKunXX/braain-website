import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, company, email } = await request.json();

  try {
    await resend.emails.send({
      from: "braain <onboarding@resend.dev>",
      to: "rs@braain.io",
      subject: `Demo-Anfrage von ${name} – ${company}`,
      html: `
        <h2>Neue Demo-Anfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Unternehmen:</strong> ${company}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
