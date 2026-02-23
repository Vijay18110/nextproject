import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 },
      );
    }

    // NOTE: Replace this with real authentication logic.
    // For demo purposes, accept any credentials and return a token.
    const token = "demo-token-" + Date.now();

    return NextResponse.json({ token, user: { email } });
  } catch (err) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
