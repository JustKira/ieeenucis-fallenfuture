import { Database } from "@/lib/database";
import { RequestCookies } from "@edge-runtime/cookies";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { uuid: string | null } }
) {
  const cookies = new RequestCookies(headers()) as any;
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookies,
  });

  if (!params.uuid) {
    return new NextResponse(
      JSON.stringify({
        error: "uuid not provided",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 400,
      }
    );
  }

  const res = await supabase
    .schema("fallenfuture")
    .from("PlayerCard")
    .select()
    .eq("fallenFutureAccountId", params.uuid);

  return new NextResponse(
    JSON.stringify({
      ...res,
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: res.status,
    }
  );
}
