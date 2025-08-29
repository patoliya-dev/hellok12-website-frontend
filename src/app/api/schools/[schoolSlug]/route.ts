// File: src/app/api/schools/[schoolSlug]/route.ts
import { NextResponse } from "next/server";
import { mockSchools } from "@/lib/mock-data/schools";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // Extract the slug from the pathname
  const { pathname } = new URL(request.url);
  const segments = pathname.split("/");
  const schoolSlug = segments[segments.length - 1]; // last segment

  const school = mockSchools.find((s) => s.schoolSlug === schoolSlug);

  if (!school) {
    return NextResponse.json({ error: "School not found" }, { status: 404 });
  }

  return NextResponse.json(school);
}
