import { RandomizeCard1 } from "@/lib/RandomizeCard1";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { uuid: string | null } }
) {
  const searchParams = request.nextUrl.searchParams;
  const amount = searchParams.get("amount");
  if (!amount) {
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

  //@ts-ignore
  let cardsGenerated: any = [];
  for (let i = 0; i < Number(amount); i++) {
    let card = RandomizeCard1();
    cardsGenerated.push(card);
  }

  return new NextResponse(
    JSON.stringify({
      data: cardsGenerated,
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
}
