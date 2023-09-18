import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { RequestCookies } from "@edge-runtime/cookies";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookies = new RequestCookies(headers()) as any;
  const supabase = createRouteHandlerClient({ cookies: () => cookies });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL("/", req.url));
}
