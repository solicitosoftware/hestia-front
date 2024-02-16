import { characteristics } from "@prisma/client";
import { CharacteristicCard } from "./CharacteristicCard";

interface Props {
  characteristics: characteristics[];
}

export const Characteristic = ({ characteristics }: Props) => {
  return (
    <div className="flex flex-wrap m-4 gap-4">
      {characteristics.map((characteristic) => (
        <CharacteristicCard
          key={characteristic.id}
          characteristic={characteristic}
        />
      ))}
    </div>
  );
};
