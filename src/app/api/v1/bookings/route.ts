import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { skipSchema, takeSchema } from "../schemas";
import { formSchema } from "@/bookings/schemas";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const take = takeSchema.parse(+(searchParams.get("take") ?? "50"));
    const skip = skipSchema.parse(+(searchParams.get("skip") ?? "0"));
    const data = await prisma.bookings.findMany({
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
    const body = formSchema.parse(await request.json());
    const result = await prisma.bookings.create({ data: body });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const result = await prisma.bookings.deleteMany({
      where: { active: false },
    });
    return NextResponse.json(
      { message: `Bookings delete ${result.count}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
