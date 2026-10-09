import { NextResponse } from "next/server";
import { currentVersion } from "@/lib/site-config";

/** The current product version, read by the platform (server side) to show the same number in its menu. Public, tiny, cacheable. */
export const dynamic = "force-static";

export function GET() {
  const { version, date } = currentVersion();
  return NextResponse.json(
    { product: "onespec", version, date },
    { headers: { "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=3600" } },
  );
}
