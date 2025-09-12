import { NextResponse } from "next/server";

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

    // TODO: send to CRM/email or persist to DB
    console.log("Demo request:", body);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
