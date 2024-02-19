import { startTransition, useOptimistic } from "react";
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
  const [data, setData] = useOptimistic(
    characteristic,
    (value, newValue: boolean) => ({ ...value, active: newValue })
  );

  const changeOptimistic = () => {
    startTransition(() => setData(!data.active));
  };

  const onClickOptimistic = () => {
    try {
      changeOptimistic();
      onClick(data.id, !data.active);
    } catch (error) {
      changeOptimistic();
    }
  };

  return (
    <div
      onClick={onClickOptimistic}
      className={`${style.container} ${
        data.active
          ? "hover:border-lime-300 hover:bg-lime-100"
          : "hover:border-red-300 hover:bg-red-100"
      }`}
    >
      <div>
        <div
          className={`${style.name} ${
            data.active ? "text-primary" : "text-error-100 line-through"
          }`}
        >
          {data.name}
        </div>
        <div className={style.description}>{data.description}</div>
      </div>
      <div
        className={`${style.check} ${
          data.active ? "bg-success-200" : "bg-error-100"
        }`}
      >
        {data.active ? (
          <MdOutlineCheckBoxOutlineBlank />
        ) : (
          <MdOutlineCheckBox />
        )}
      </div>
    </div>
  );
};

export default CharacteristicCard;
