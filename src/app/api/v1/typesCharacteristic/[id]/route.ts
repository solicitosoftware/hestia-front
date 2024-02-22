import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { idSchema } from "../../schemas";
import { typesSchema } from "@/typesCharacteristic/schemas";

interface Segments {
  params: {
    id: number;
  };
}

export async function GET(request: Request, { params }: Segments) {
  try {
    const id = idSchema.parse(+params.id);
    const data = await prisma.types.findFirst({ where: { id } });

    if (!data)
      return NextResponse.json(
        { error: `The type with [id:${id}] not found` },
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
    const body = typesSchema.parse(await request.json());
    const result = await prisma.types.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: Segments) {
  try {
    const id = idSchema.parse(+params.id);
    const result = await prisma.types.deleteMany({
      where: { id },
    });
    return NextResponse.json(
      { message: `types delete ${result.count}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
