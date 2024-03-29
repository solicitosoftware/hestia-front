import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { idSchema } from "../../schemas";
import { characteristicSchema } from "@/characteristics/schemas";

interface Segments {
  params: {
    id: number;
  };
}

export async function GET(request: Request, { params }: Segments) {
  try {
    const id = idSchema.parse(+params.id);
    const data = await prisma.characteristics.findFirst({ where: { id } });

    if (!data)
      return NextResponse.json(
        { error: `The characteristic with [id:${id}] not found` },
        { status: 404 }
      );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(request: Request, { params }: Segments) {
  try {
    const id = idSchema.parse(+params.id);
    const body = characteristicSchema
      .omit({ type: true })
      .parse(await request.json());
    const result = await prisma.characteristics.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
