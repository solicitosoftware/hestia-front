"use client";

import { useForm } from "react-hook-form";
import style from "../styles/UserForm.module.css";
import { Button } from "@/components/button/Button";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiUsers } from "react-icons/fi";
import { formSchema, userZodType } from "../schemas";
import { Input } from "@/components/input/Input";
import { SelectInput } from "@/components/select/Select";
import { CheckInput } from "@/components/checkbox/Checkbox";
import { roles } from "@prisma/client";

const state = [
  {
    name: "Activo",
    value: true,
  },
  {
    name: "Inactivo",
    value: false,
  },
];

interface Props {
  roles: roles[];
}

const UserForm = ({ roles }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    control,
    register,
    watch,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<userZodType>({ resolver: zodResolver(formSchema) });

  const onSubmit = (user: userZodType) => {
    console.log({ user });
    onClose();
  };

  useEffect(() => {
    const subscription = watch(({ state, rol }, { name }) => {
      if (name === "state") {
        const value = state?.value;
        if (value) {
          setValue("isActive", value);
          setError("isActive", {});
        }
      }
      if (name === "rol") {
        setError(
          "rol",
          (rol || []).length > 0
            ? {}
            : { message: "Debe seleccionar al menos un rol" }
        );
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, setError]);

  const onChangeRol = (id: string, checked: boolean) => {
    const roles = watch("rol") ?? [];
    if (checked) setValue("rol", [...roles, id]);
    else
      setValue(
        "rol",
        roles.filter((x) => !x.includes(id))
      );
  };

  const onOpen = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
    reset();
  };

  return (
    <div className={style.container}>
      <Button type="button" onClick={onOpen} styleColor="primary" name="Crear">
        <FiUsers className="pr-2" size={25} />
      </Button>
      <form>
        <Modal size={"4xl"} dismissible show={openModal} onClose={onClose}>
          <Modal.Header>Crear Usuario</Modal.Header>
          <Modal.Body>
            <div className={style.form}>
              <Input
                {...register("name")}
                label="Nombre"
                type="text"
                required
                error={errors.name}
              />
              <Input
                {...register("identification")}
                label="Identificación"
                type="tel"
                required
                error={errors.identification}
              />
              <Input
                {...register("email")}
                label="Correo electrónico"
                type="text"
                required
                error={errors.email}
              />
              <SelectInput
                label="Estado"
                control={control}
                name="state"
                required
                defaultValue={watch("state")}
                error={errors.isActive}
                options={state.map(({ value, name }) => ({
                  value: value,
                  label: name,
                }))}
              />
            </div>
            <CheckInput
              label="Roles"
              required
              {...register("rol")}
              error={errors.rol}
              options={roles.map(({ id, name }) => ({
                value: id,
                label: name,
              }))}
              onChange={onChangeRol}
            />
          </Modal.Body>
          <Modal.Footer>
            <div className={style.button}>
              <Button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                styleColor="primary"
                name="Crear"
              />
              <Button
                type="button"
                onClick={onClose}
                styleColor="clear"
                name="Cancelar"
              />
            </div>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

export default UserForm;
