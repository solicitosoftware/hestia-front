"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { companiesZodType, formSchema } from "../schemas";
import { useForm } from "react-hook-form";
import { createCompanyAction } from "../actions";
import style from "../styles/CompanyForm.module.css";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/botton/Button";

const CompanyForm = () => {
  const {
    control,
    register,
    watch,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<companiesZodType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (company: companiesZodType) => {
    createCompanyAction(company);
    reset();
  };

  return (
    <div className="bg-white rounded-md p-5">
      <span className="flex justify-center uppercase">Crear Compañia</span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" grid my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3 md:gap-y-0 lg:gap-y-3"
      >
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
          {...register("phone")}
          label="Telefono"
          type="number"
          error={errors.phone}
        />
        <Input
          {...register("email")}
          label="Correo electrónico"
          type="text"
          required
          error={errors.email}
        />
        <Input
          {...register("address")}
          label="Direccón"
          type="text"
          error={errors.address}
        />
        {/* <Button type="submit" styleColor="primary" name="Crear" /> */}
      </form>
    </div>
  );
};

export default CompanyForm;