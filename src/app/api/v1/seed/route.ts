import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

//TODO solo ejecutar si la BD esta vacia
//Datos iniciales para el proyecto

export async function GET(request: Request) {
  try {
    await prisma.characteristics.deleteMany();
    await prisma.characteristics.createMany({
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
        {
          name: "oriente",
        },
      ],
    });

    await prisma.bookings.deleteMany();
    await prisma.bookings.createMany({
      data: [
        {
          name: "parqueadero",
          route: "/services/parking.png",
          limit: 100,
        },
        {
          name: "bbq",
          route: "/services/grill.png",
          limit: 5,
        },
        {
          name: "gimnasio",
          route: "/services/gym.png",
          limit: 30,
        },
        {
          name: "piscina",
          route: "/services/pool.png",
          limit: 40,
        },
        {
          name: "canchas",
          route: "/services/courts.png",
        },
        {
          name: "zona wifi",
          route: "/services/wifi.png",
        },
        {
          name: "video juegos",
          route: "/services/console.png",
        },
      ],
    });

    return NextResponse.json({ message: "Completed" }, { status: 200 });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ error }, { status: 400 });
  }
}
