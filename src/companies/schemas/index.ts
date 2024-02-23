import { z } from "zod";

const name = z
  .string()
  .min(5, { message: "Debe tener 5 o más caracteres" })
  .max(50, { message: "No debe superar los 50 caracteres" });

const nit = z
  .string()
  .min(1, { message: "Debe tener 1 o más caracteres" })
  .max(10, { message: "No debe superar los 10 caracteres" });

const email = z.string().email({ message: "Correo electrónico invalido" });

const phone = z
  .number()
  .min(10, { message: "Debe tener 10 caracteres" })
  .max(10, { message: "No debe superar los 10 caracteres" })
  .nullable();

const address = z
  .string()
  .min(10, { message: "Debe tener 10 o más caracteres" })
  .max(50, { message: "No debe superar los 50 caracteres" })
  .nullable();

export const companiesSchema = z
  .object({
    name,
    nit,
    email,
    phone,
    address,
  })
  .required();

export const formSchema = companiesSchema;

export type companiesZodType = z.infer<typeof formSchema>;
