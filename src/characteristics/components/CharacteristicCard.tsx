import { characteristics } from "@prisma/client";
import style from "../styles/Characteristics.module.css";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

interface Props {
  characteristic: characteristics;
  onClick: (id: number, active: boolean) => void;
}

const CharacteristicCard = ({ characteristic, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(characteristic.id, !characteristic.active)}
      className={`${style.container} ${
        characteristic.active
          ? "hover:border-lime-300 hover:bg-lime-100"
          : "hover:border-red-300 hover:bg-red-100"
      }`}
    >
      <div>
        <div
          className={`${style.name} ${
            characteristic.active
              ? "text-primary"
              : "text-error-100 line-through"
          }`}
        >
          {characteristic.name}
        </div>
        <div className={style.description}>{characteristic.description}</div>
      </div>
      <div
        className={`${style.check} ${
          characteristic.active ? "bg-success-200" : "bg-error-100"
        }`}
      >
        {characteristic.active ? (
          <MdOutlineCheckBoxOutlineBlank />
        ) : (
          <MdOutlineCheckBox />
        )}
      </div>
    </div>
  );
};

export default CharacteristicCard;
