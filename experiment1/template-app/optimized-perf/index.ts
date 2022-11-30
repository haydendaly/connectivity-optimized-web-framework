import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// this defines the types and interface for the method
export function determineNetworkQuality(request: NextRequest): NextResponse {
  const requestHeaders = new Headers(request.headers);
  // this is where our classification algorithm will go
  requestHeaders.set("network-quality", "low");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}
