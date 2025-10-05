import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const required = ["firstName", "lastName", "email", "company"]; 
    for (const key of required) {
      if (!body[key]) {
        return NextResponse.json({ ok: false, error: `Missing field: ${key}` }, { status: 400 });
      }
    }

    if (!body.consent) {
      return NextResponse.json({ ok: false, error: "Consent to be contacted is required" }, { status: 400 });
    }

    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const emailContent = `
New Demo Request from Solas Website

Contact Information:
- Name: ${body.firstName} ${body.lastName}
- Email: ${body.email}
- Job Title: ${body.jobTitle || 'Not provided'}
- Company: ${body.company}
- Industry: ${body.industry || 'Not provided'}
- Team Size: ${body.teamSize || 'Not provided'}

Use Case:
${body.useCase || 'Not provided'}

Marketing Consent: ${body.marketing ? 'Yes' : 'No'}
    `;

    try {
      const emailResult = await transporter.sendMail({
        from: `"Solas Site Bot" <${process.env.SMTP_USER}>`,
        to: 'devaang@solascompliance.com',
        replyTo: body.email,
        subject: `New Demo Request - ${body.firstName} ${body.lastName} from ${body.company}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>')
      });

      console.log("Demo request email sent successfully:", emailResult.messageId);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json({ 
        ok: false, 
        error: "Failed to send email notification. Please try again or contact us directly." 
      }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Demo request error:", e);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
