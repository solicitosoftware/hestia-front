"use client";

import style from "../styles/CharacteristicForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { characteristicZodType, formSchema } from "../schemas";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppSelector } from "@/redux/hooks";
import { selectCharacteristics } from "@/redux/selectors";
import {
  createCharacteristicAction,
  removeCharacteristicAction,
} from "../actions";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/botton/Button";

const CharacteristicForm = () => {
  const { remove } = useAppSelector(selectCharacteristics);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<characteristicZodType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: characteristicZodType) => {
    createCharacteristicAction(values);
    reset();
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Input
          {...register("name")}
          title="Nombre"
          type="text"
          error={errors.name}
        />
        <Input
          {...register("description")}
          title="Descripción"
          type="text"
          error={errors.description}
        />
        <Button type="submit" styleColor="primary" name="Crear" />
      </form>
      {remove && (
        <Button
          type="button"
          styleColor="delete"
          name="Eliminar"
          onClick={() => removeCharacteristicAction()}
        >
          <RiDeleteBinLine size={20} className="pr-1" />
        </Button>
      )}
    </div>
  );
};

export default CharacteristicForm;
