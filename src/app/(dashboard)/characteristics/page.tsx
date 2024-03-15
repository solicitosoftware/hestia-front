export const dynamic = "force-dynamic";
export const revalidate = 0;

import Empty from "@/app/empty";
import style from "@dashboard/styles/dashboard.module.css";
import Characteristic from "@/characteristics/components/Characteristic";
import CharacteristicForm from "@/characteristics/components/CharacteristicForm";
import prisma from "@/lib/prisma";
import { TbSitemap } from "react-icons/tb";

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
      {characteristics.length > 0 ? (
        <Characteristic characteristics={characteristics} />
      ) : (
        <Empty title="caracteristicas" icon={<TbSitemap size={50} />} />
      )}
    </div>
  );
}
