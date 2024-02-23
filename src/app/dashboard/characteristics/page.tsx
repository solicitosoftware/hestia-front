export const dynamic = "force-dynamic";
export const revalidate = 0;

import style from "../../styles/dashboard.module.css";
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

  const types = await prisma.types.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div id="characteristics" className={style.page}>
      <CharacteristicForm types={types} />
      <Characteristic characteristics={characteristics} />
    </div>
  );
}
