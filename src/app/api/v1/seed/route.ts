import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
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
      ],
    });

    //Users
    await prisma.user.deleteMany();
    await prisma.user.create({
      data: {
        name: "Hestia",
        email: process.env.HESTIA_CLIENT_ID!,
        password: bcryptjs.hashSync(process.env.HESTIA_CLIENT_SECRET!),
        roles: {
          create: {
            name: "Super Administrador",
          },
        },
      },
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

    //Districts
    await prisma.districts.deleteMany();
    await prisma.districts.createMany({
      data: [
        {
          name: "norte",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Panorama_del_centro_de_Bello.png/1024px-Panorama_del_centro_de_Bello.png",
        },
        {
          name: "sur",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Panor%C3%A1mica_de_Sabaneta.jpg/1024px-Panor%C3%A1mica_de_Sabaneta.jpg",
        },
        {
          name: "centro",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Metro_de_Medell%C3%ADn%2C_Colombia.jpg/1024px-Metro_de_Medell%C3%ADn%2C_Colombia.jpg",
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
