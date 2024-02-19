"use client";

import { characteristics } from "@prisma/client";
import CharacteristicCard from "./CharacteristicCard";
import * as characteristicsApi from "@/characteristics/helpers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { removeCharacteristics } from "@/redux/characteristic/characteristicSlice";

interface Props {
  characteristics: characteristics[];
}

const Characteristic = ({ characteristics }: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const inactivos = characteristics.some((x) => !x.active);
    dispatch(removeCharacteristics(inactivos));
  }, [dispatch, characteristics]);

  const onClick = async (id: number, active: boolean) => {
    await characteristicsApi.updateState(id, active);
    router.refresh();
  };
  return (
    <div className="flex flex-wrap m-4 gap-4">
      {characteristics.map((characteristic) => (
        <CharacteristicCard
          key={characteristic.id}
          characteristic={characteristic}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Characteristic;
