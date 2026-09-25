import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, secretCode } = body || {};

    if (!token && !secretCode) {
      return NextResponse.json(
        { error: "Verification token or secret code is required." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://fishlabsbackend-production.up.railway.app";
    const apiUrl = `${baseUrl}/api/v1/users/web-delete-confirm`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...(token ? { token } : {}),
        ...(secretCode ? { secretCode } : {}),
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch {
      data = { error: "Failed to parse response from server" };
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    console.error("DELETE_ACCOUNT_CONFIRM_PROXY_ERROR:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
