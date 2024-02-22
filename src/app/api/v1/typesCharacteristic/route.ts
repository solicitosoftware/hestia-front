import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { skipSchema, takeSchema } from "../schemas";
import { typesSchema } from "@/typesCharacteristic/schemas";
import { Prisma } from "@prisma/client";
import { ErrorHandlingPrisma } from "../errors";

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
    const result = await prisma.types.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const errorPrisma = ErrorHandlingPrisma(error);
      return NextResponse.json(
        { error: errorPrisma.message },
        { status: errorPrisma.status }
      );
    }
    return NextResponse.json({ error }, { status: 400 });
  }
}
