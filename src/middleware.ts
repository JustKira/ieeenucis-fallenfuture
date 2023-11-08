import {
  SupabaseClient,
  createMiddlewareClient,
} from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import test from "node:test";

// export async function getFallenFuture(
//   supabase: SupabaseClient<any, "public", any>
// ) {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   const { data: account } = await supabase
//     .schema("fallenfuture")
//     .from("FallenFutureAccount")
//     .select()
//     .eq("id", user?.id)
//     .single();
// }

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: account } = await supabase
    .schema("fallenfuture")
    .from("FallenFutureAccount")
    .select()
    .eq("id", user?.id)
    .single();

  const regexApi = RegExp("/api/*");
  const regexGame = RegExp("/game/squad");

  if (regexApi.test(req.url)) {
    return res;
  }

  if (regexGame.test(req.url)) {
    if (!user) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (!account) {
      return NextResponse.redirect(new URL("/account", req.url));
    }
  }

  const regexAbout = RegExp("/account");

  if (regexAbout.test(req.url)) {
    if (!user) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    if (account) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
