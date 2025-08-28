"use client";
import { NextResponse } from "next/server"
import { mockSchools } from "@/lib/mock-data/schools"

export async function GET(request: Request) {
  // Extract schoolSlug from the URL
  const { pathname } = new URL(request.url);
  const schoolSlug = pathname.split("/").pop();

  const school = mockSchools.find((s) => s.schoolSlug === schoolSlug);

  if (!school) {
    return NextResponse.json({ error: "School not found" }, { status: 404 });
  }

  return NextResponse.json(school);
}
