import jwt_decode from "jwt-decode";
import { getCookie } from "cookies-next";

export function getUUID(): string | null {
  const cookie = getCookie("sb-dcgmuqkfibypvjrupifr-auth-token");

  const jwttoken = JSON.parse(cookie ?? "[]")[0] ?? null;
  //@ts-ignore
  if (jwttoken) {
    const token = jwt_decode(jwttoken) as any;
    return token.sub;
  }

  return null;
}

// e34c24f8-2964-4357-9516-d067cbaf9280
