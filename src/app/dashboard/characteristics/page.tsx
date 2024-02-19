export const dinamic = "force-dynamic";
export const revalidate = 0;

import Characteristic from "@/characteristics/components/Characteristic";
import CharacteristicForm from "@/characteristics/components/CharacteristicForm";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Caracteristicas",
  description: "Listado de Caracteristicas",
};

export default async function CharacteristicsPage() {
  const characteristics = await prisma.characteristics.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <CharacteristicForm />
      <Characteristic characteristics={characteristics} />
    </div>
  );
}
