import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { RequestCookies } from "@edge-runtime/cookies";
import { Database } from "@/lib/database";
import { RandomizeCard1 } from "@/lib/RandomizeCard1";
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

  const fallenFutureAccountRes = await supabase
    .schema("fallenfuture")
    .from("FallenFutureAccount")
    .insert({ id: params.uuid, score: 100, username: body.username })
    .select()
    .limit(1)
    .single();

  if (fallenFutureAccountRes.error) {
    return new NextResponse(
      JSON.stringify({
        ...fallenFutureAccountRes,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: fallenFutureAccountRes.status,
      }
    );
  }

  const rarities: Rarity[] = [
    "COMMON",
    "COMMON",
    "COMMON",
    "COMMON",
    "COMMON",
    "UNCOMMON",
    "UNCOMMON",
    "UNCOMMON",
    "UNCOMMON",
    "RARE",
    "RARE",
    "RARE",
    "EPIC",
    "EPIC",
    "LEGENDARY",
  ];
  const generatedCards: Omit<PlayerCard, "id" | "account">[] = [];
  for (let i = 0; i < 15; i++) {
    const rarityIn = rarities[i];
    const randomCard = RandomizeCard1(false, rarityIn);
    if (randomCard)
      generatedCards.push({
        fallenFutureAccountId: fallenFutureAccountRes.data.id,
        ...randomCard,
      });
  }

  const res = await supabase
    .schema("fallenfuture")
    .from("PlayerCard")
    .insert(generatedCards);

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
