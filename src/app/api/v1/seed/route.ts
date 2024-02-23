import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await prisma.roles.create({
      data: {
        name: "Propietario",
        user: {
          create: [
            { name: "Usuario prueba", email: "car.yho@yopmail.com" },
            { name: "Daniel Meneses", email: "daniel@yopmail.com" },
          ],
        },
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
