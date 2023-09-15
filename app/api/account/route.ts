import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient<TEMP>({ cookies });
  const uuid = await supabase.auth.getUser();
  const body = (await request.json()) as {
    uuid: string;
    username: string;
    rank: number;
    score: number;
  };

  return new NextResponse(
    JSON.stringify({
      error: {
        message: "no id was provided in query",
        hint: "Please include the 'id' parameter in the query.",
        details: null,
        code: 400,
      },
      data: body,
      status: 400,
      statusText: "Bad Request",
    }),
    { status: 400 }
  );

  // try {
  //   const uuid = await supabase.auth.getUser();
  //   const body = await request.json()
  //   const {username, rank, score} = body
  //   if (!uuid || !username || !rank || !score) {
  //     return new NextResponse("Missing Info", { status: 400 });
  //   }
  // }

  // return new NextResponse()
}

export async function GET(request: Request) {}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const supabase = createRouteHandlerClient<TEMP>({ cookies });

  const uuid = await supabase.auth.getUser();
  const body = (await request.json()) as {
    uuid: string;
    username: string;
    rank: number;
    score: number;
  };

  if (!uuid) {
    return new NextResponse(
      JSON.stringify({
        error: {
          message: "no id was provided in query",
          hint: "Please include the 'id' parameter in the query.",
          details: null,
          code: 400,
        },
        status: 400,
        statusText: "Bad Request",
      }),
      { status: 400 }
    );
  }

  // const query = supabase.update({ ...body });

  // const res = await query;

  // return new NextResponse(
  //   res.error || res.data ? JSON.stringify({ ...res }) : null,
  //   {
  //     status: res.status,
  //   }
  // );
}
