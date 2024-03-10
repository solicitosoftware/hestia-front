"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { companiesZodType, formSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { createCompanyAction, updateCompanyAction } from "../actions";
import style from "../styles/CompanyForm.module.css";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/botton/Button";
import { Modal } from "flowbite-react";
import { useEffect, useState, useCallback } from "react";
import { PiFactoryBold } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCompanies } from "@/redux/selectors";
import { clearCompany } from "@/redux/companies/companiesSlice";

const CompanyForm = () => {
  const company = useAppSelector(selectCompanies);
  const { id } = company;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<companiesZodType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (company: companiesZodType) => {
    if (data) updateCompanyAction(id, company);
    else createCompanyAction(company);
    onClose();
  };

  const setValues = useCallback(
    (company: companiesZodType) => {
      Object.entries(company).forEach(([key, value]) =>
        setValue(key as keyof companiesZodType, value)
      );
    },
    [setValue]
  );

  useEffect(() => {
    setData(Object.values(company).length > 0);
  }, [company]);

  useEffect(() => {
    if (Object.values(company).length > 0) {
      const phone =
        Number(company.phone) !== 0 ? company.phone!.toString() : null;
      setValues({ ...company, phone });
      onOpen();
    }
  }, [setValues, company]);

  const onOpen = () => {
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenModal(false);
    dispatch(clearCompany());
    reset();
  };

  return (
    <div className={style.container}>
      <Button type="button" onClick={onOpen} styleColor="primary" name="Crear">
        <PiFactoryBold className="pr-2" size={25} />
      </Button>
      <form>
        <Modal size={"4xl"} dismissible show={openModal} onClose={onClose}>
          <Modal.Header>{`${data ? "Editar" : "Crear"} Compañia`}</Modal.Header>
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
                disabled={data}
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
                name={`${data ? "Actualizar" : "Crear"}`}
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

export default CompanyForm;
