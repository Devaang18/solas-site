import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation (server-side)
    const required = ["firstName", "lastName", "email", "company"]; 
    for (const key of required) {
      if (!body[key]) {
        return NextResponse.json({ ok: false, error: `Missing field: ${key}` }, { status: 400 });
      }
    }

    // Validate consent checkbox
    if (!body.consent) {
      return NextResponse.json({ ok: false, error: "Consent to be contacted is required" }, { status: 400 });
    }

    // Create email transporter using custom SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates if needed
      }
    });

    // Email content
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

---
This request was submitted from the Solas website demo form.
    `;

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'neil@solascompliance.com',
        subject: `New Demo Request - ${body.firstName} ${body.lastName} from ${body.company}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>')
      });

      console.log("Demo request email sent successfully:", body);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      // Still return success to user, but log the error
      // In production, you might want to handle this differently
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Demo request error:", e);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
