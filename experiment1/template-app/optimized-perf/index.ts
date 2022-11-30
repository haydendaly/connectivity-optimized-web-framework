import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function determineNetworkQuality(request: NextRequest): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("network-quality", "low");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}
