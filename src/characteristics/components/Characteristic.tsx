"use client";

import { characteristics } from "@prisma/client";
import CharacteristicCard from "./CharacteristicCard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { removeCharacteristics } from "@/redux/characteristic/characteristicSlice";
import { updateStateAction } from "../actions";

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

  return (
    <div className="flex flex-wrap m-4 gap-4">
      {characteristics.map((characteristic) => (
        <CharacteristicCard
          key={characteristic.id}
          characteristic={characteristic}
          onClick={updateStateAction}
        />
      ))}
    </div>
  );
};

export default Characteristic;
