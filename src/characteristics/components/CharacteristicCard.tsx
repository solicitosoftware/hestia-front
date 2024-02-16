import { characteristics } from "@prisma/client";
import style from "../styles/CharacteristicsStyle.module.css";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

interface Props {
  characteristic: characteristics;
}
export const CharacteristicCard = ({ characteristic }: Props) => {
  const estado = true;
  return (
    <div
      className={`${style.container} ${
        estado
          ? "hover:border-lime-300 hover:bg-lime-100"
          : "hover:border-red-300 hover:bg-red-100"
      }`}
    >
      <div>
        <div
          className={`${style.name} ${
            estado ? "text-primary" : "text-error-100 line-through"
          }`}
        >
          {characteristic.name}
        </div>
        <div className={style.description}>{characteristic.description}</div>
      </div>
      <div
        className={`${style.check} ${
          estado ? "bg-success-200" : "bg-error-100"
        }`}
      >
        {estado ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      </div>
    </div>
  );
};
