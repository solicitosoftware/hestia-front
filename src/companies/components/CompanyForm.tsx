"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { companiesZodType, formSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { createCompanyAction } from "../actions";
import style from "../styles/CompanyForm.module.css";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/botton/Button";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { PiFactoryBold } from "react-icons/pi";

const CompanyForm = () => {
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<companiesZodType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (company: companiesZodType) => {
    createCompanyAction(company);
    handleModal();
    reset();
  };

  const handleModal = () => {
    setOpenModal((state) => !state);
  };

  return (
    <div className={style.container}>
      <Button
        type="button"
        onClick={handleModal}
        styleColor="primary"
        name="Crear"
      >
        <PiFactoryBold className="pr-2" size={25} />
      </Button>
      <form>
        <Modal size={"4xl"} dismissible show={openModal} onClose={handleModal}>
          <Modal.Header>Crear Compañia</Modal.Header>
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
                {...register("nit")}
                label="NIT"
                type="text"
                required
                error={errors.nit}
              />
              <Input
                {...register("email")}
                label="Correo electrónico"
                type="text"
                required
                error={errors.email}
              />
              <Input
                {...register("phone")}
                label="Telefono"
                type="number"
                error={errors.phone}
              />
              <div className="w-full">
                <Input
                  {...register("address")}
                  label="Dirección"
                  type="text"
                  error={errors.address}
                />
              </div>
            </div>
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
                onClick={handleModal}
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

export default CompanyForm;
