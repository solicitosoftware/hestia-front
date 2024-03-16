export const dynamic = "force-dynamic";
export const revalidate = 0;

import Empty from "@/app/empty";
import style from "@dashboard/styles/dashboard.module.css";
import Characteristic from "@/characteristics/components/Characteristic";
import CharacteristicForm from "@/characteristics/components/CharacteristicForm";
import { TbSitemap } from "react-icons/tb";
import { getCharacteristicsAction } from "@/characteristics/actions";
import { getTypesAction } from "@/typesCharacteristic/actions";

export const metadata = {
  title: "Caracteristicas",
  description: "Listado de Caracteristicas",
};

export default async function CharacteristicsPage() {
  const characteristics = await getCharacteristicsAction();

  const types = await getTypesAction();

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
