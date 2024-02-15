import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//TODO solo ejecutar si la BD esta vacia
//Datos iniciales para el proyecto

export async function GET(request: Request) {
  try {
    const result = await prisma.characteristics.createMany({
      data: [
        {
          name: "Área construida",
          description: "54,69 mt2",
        },
        {
          name: "Área privada",
          description: "48,23 mt2",
        },
        {
          name: "Baños",
          description: "2",
        },
        {
          name: "Habitaciones",
          description: "3",
        },
        {
          name: "Parqueaderos",
          description: "1",
        },
        {
          name: "Balcones",
          description: "5",
        },
      ],
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
