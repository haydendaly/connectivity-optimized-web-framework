import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { determineNetworkQuality } from "../optimized-perf";

export function middleware(request: NextRequest) {
  const response = determineNetworkQuality(request);
  return response;
}
