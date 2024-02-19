"use client";

import style from "../styles/CharacteristicForm.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas";
import * as characteristicsApi from "@/characteristics/helpers";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectCharacteristics } from "@/redux/selectors";

const CharacteristicForm = () => {
  const router = useRouter();
  const { remove } = useAppSelector(selectCharacteristics);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = ({ name, description }: z.infer<typeof formSchema>) => {
    characteristicsApi.createCharacteristic(name, description);
    reset();
    router.refresh();
  };

  const onDelete = async () => {
    await characteristicsApi.removeCharacteristic();
    router.refresh();
  };

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
        <div onClick={onDelete} className={`${style.button} ${style.delete}`}>
          <RiDeleteBinLine size={18} />
          <p className="pl-1">Eliminar</p>
        </div>
      )}
    </div>
  );
};

export default CharacteristicForm;
