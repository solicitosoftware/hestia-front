import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { skipSchema, takeSchema } from "../schemas";
import { typesSchema } from "@/typesCharacteristic/schemas";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const take = takeSchema.parse(+(searchParams.get("take") ?? "50"));
    const skip = skipSchema.parse(+(searchParams.get("skip") ?? "0"));
    const data = await prisma.types.findMany({
      take,
      skip,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = typesSchema.parse(await request.json());
    console.log({ body });
    const result = await prisma.types.create({
      data: {
        name: body.name,
      },
    });
    console.log({ result });
    return NextResponse.json(result);
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ error }, { status: 400 });
  }
}
