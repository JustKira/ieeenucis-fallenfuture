import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, text, title } = await request.json();

  if (!email && !text && !title) {
    return new NextResponse("Missing Info", { status: 400 });
  }
}
export async function GET(request: Request) {}
export async function PATCH(request: Request) {}
