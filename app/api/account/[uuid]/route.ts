import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Database } from "../../../../lib/database";

export async function GET(
  request: Request,
  { params }: { params: { uuid: string | null } }
) {
  const supabase = createRouteHandlerClient<Database>({ cookies });

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
 *
 * @description
 * @returns {FallenFutureAccount}
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
  const supabase = createRouteHandlerClient<Database>({ cookies });

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

//TODO-
export async function PATCH(request: Request) {}
