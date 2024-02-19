"use client";

import style from "../styles/CharacteristicForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { characteristicZodType, formSchema } from "../schemas";
import * as characteristicsApi from "@/characteristics/helpers";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectCharacteristics } from "@/redux/selectors";
import {
  createCharacteristicAction,
  removeCharacteristicAction,
} from "../actions/actions";

const CharacteristicForm = () => {
  const { remove } = useAppSelector(selectCharacteristics);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<characteristicZodType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (values: characteristicZodType) => {
    //TODO sin server actions
    // characteristicsApi.createCharacteristic(values);
    // router.refresh();
    createCharacteristicAction(values);
    reset();
  };

  //TODO sin server actions
  // const onDelete = async () => {
  //   await characteristicsApi.removeCharacteristic();
  //   router.refresh();
  // };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div>
          <input
            type="text"
            {...register("name")}
            className={`${
              errors.name ? "border-error-200" : "border-gray-300"
            } ${style.input}`}
            placeholder="Nombre"
          />
          <p className={style.error}>{errors.name?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("description")}
            className={`${
              errors.name ? "border-error-200" : "border-gray-300"
            } ${style.input}`}
            placeholder="Descripción"
          />
          <p className={style.error}>{errors.description?.message}</p>
        </div>

        <button type="submit" className={style.button}>
          Crear
        </button>
      </form>
      {remove && (
        <div
          onClick={() => removeCharacteristicAction()}
          className={`${style.button} ${style.delete}`}
        >
          <RiDeleteBinLine size={18} />
          <p className="pl-1">Eliminar</p>
        </div>
      )}
    </div>
  );
};

export default CharacteristicForm;
