import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { RequestCookies } from "@edge-runtime/cookies";
export const dynamic = "force-dynamic";
/**
 * @description gets a single account using its associated uuid
 * @param request
 * @param param.uuid - uuid associated with account
 * @returns account details as a response
 */
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
    .from("FallenFutureAccount")
    .select()
    .eq("id", params.uuid)
    .single();

  const abc = await supabase
    .schema("fallenfuture")
    .from("PlayerCard")
    .insert([]);

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

/**
 * @description uses uuid to create new account record in database
 * @param request
 * @param param.uuid - uuid associated with account
 * @returns {FallenFutureAccount}  request body with account details
 */
export async function POST(
  request: Request,
  { params }: { params: { uuid: string | null } }
) {
  const body = (await request.json()) as {
    username: string;
  };

  if (!body) {
    return new NextResponse(
      JSON.stringify({
        error: "body not provided",
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
  const cookies = new RequestCookies(headers()) as any;
  const supabase = createRouteHandlerClient({ cookies: () => cookies });

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
    .from("FallenFutureAccount")
    .insert({ id: params.uuid, score: 100, username: body.username });

  return new NextResponse(
    res.error
      ? JSON.stringify({
          ...res,
        })
      : null,
    {
      headers: { "Content-Type": "application/json" },
      status: res.status,
    }
  );
}

//TODO -
export async function PATCH(request: Request) {}
