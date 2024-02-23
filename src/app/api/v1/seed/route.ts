import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    //Users
    await prisma.user.deleteMany();

    //Roles
    await prisma.roles.deleteMany();
    await prisma.roles.createMany({
      data: [
        {
          name: "Invitado",
        },
        {
          name: "Residente",
        },
        {
          name: "Propietario",
        },
        {
          name: "Administrador",
        },
        {
          name: "Compañia",
        },
        {
          name: "Super Administrador",
        },
      ],
    });

    //Types
    await prisma.types.deleteMany();
    await prisma.types.createMany({
      data: [
        {
          name: "Apartamento",
        },
        {
          name: "Unidad Res.",
        },
        {
          name: "Condominio",
        },
      ],
    });

    //Characteristics
    await prisma.characteristics.deleteMany();

    //Companies
    await prisma.companies.deleteMany();

    return NextResponse.json({ message: "Completed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
