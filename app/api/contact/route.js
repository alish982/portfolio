import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, projectType, message } = await req.json();

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "alishacharya.nitv@gmail.com",
      replyTo: email,
      subject: subject,
      html: `
        <h2>New Portfolio Contact</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>

        <hr />

        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
