import { Characteristic } from "@/characteristics";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Caracteristicas",
  description: "Listado de Caracteristicas",
};

export default async function CharacteristicsPage() {
  const characteristics = await prisma.characteristics.findMany();

  return (
    <div>
      <Characteristic characteristics={characteristics} />
    </div>
  );
}
