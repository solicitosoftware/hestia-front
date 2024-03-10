"use client";

import style from "../styles/CharacteristicForm.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { characteristicZodType, formSchema } from "../schemas";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCharacteristicsRemove } from "@/redux/selectors";
import {
  createCharacteristicAction,
  removeCharacteristicAction,
} from "../actions";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/botton/Button";
import { types } from "@prisma/client";
import { SelectInput } from "@/components/select/Select";
import { useEffect } from "react";
import { TbSitemap } from "react-icons/tb";
import { AiOutlineDelete } from "react-icons/ai";
import { removeCharacteristics } from "@/redux/characteristic/characteristicSlice";

interface Props {
  types: types[];
}

const CharacteristicForm = ({ types }: Props) => {
  const dispatch = useAppDispatch();
  const remove = useAppSelector(selectCharacteristicsRemove);

  const {
    control,
    register,
    watch,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<characteristicZodType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = ({ name, description, typeId }: characteristicZodType) => {
    createCharacteristicAction({ name, description, typeId });
    reset();
  };

  const onRemove = () => {
    removeCharacteristicAction();
    dispatch(removeCharacteristics(false));
  };

  useEffect(() => {
    const subscription = watch(({ type }, { name }) => {
      if (name === "type") {
        const id = Number(type?.value);
        if (id) {
          setValue("typeId", id);
          setError("typeId", {});
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, setError]);

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Input
          {...register("name")}
          label="Nombre"
          type="text"
          required
          error={errors.name}
        />
        <Input
          {...register("description")}
          label="Descripción"
          type="text"
          required
          error={errors.description}
        />
        <SelectInput
          label="Tipo"
          control={control}
          name="type"
          required
          defaultValue={watch("type")}
          error={errors.typeId}
          options={types.map(({ id, name }) => ({
            value: id,
            label: name,
          }))}
        />
        <div className={style.button}>
          <Button type="submit" styleColor="primary" name="Crear">
            <TbSitemap size={20} className="pr-1" />
          </Button>
        </div>
      </form>
      {remove && (
        <div className={style.button}>
          <Button
            type="button"
            styleColor="delete"
            name="Eliminar"
            onClick={() => onRemove()}
          >
            <AiOutlineDelete size={20} className="pr-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CharacteristicForm;
