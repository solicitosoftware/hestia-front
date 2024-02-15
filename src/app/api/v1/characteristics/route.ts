import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { characteristicSchema, skipSchema, takeSchema } from "./schemas";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const take = takeSchema.parse(+(searchParams.get("take") ?? "10"));
    const skip = skipSchema.parse(+(searchParams.get("skip") ?? "0"));
    const data = await prisma.characteristics.findMany({
      take,
      skip,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = characteristicSchema.required().parse(await request.json());
    const result = await prisma.characteristics.create({ data: body });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
