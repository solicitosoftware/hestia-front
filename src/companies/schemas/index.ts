import { z } from "zod";

const name = z
  .string()
  .min(5, { message: "Debe tener 5 o más caracteres" })
  .max(50, { message: "No debe superar los 50 caracteres" });

const nit = z
  .string()
  .min(11, { message: "Debe tener 11 caracteres" })
  .max(11, { message: "No debe superar los 11 caracteres" })
  .refine((value) => /^\d+$/.test(value), {
    message: "Solo números",
  })
  .transform((val) => val.slice(0, -1) + "-" + val.slice(-1));

const email = z.string().email({ message: "Correo electrónico invalido" });

const phone = z
  .string()
  .refine((val) => val.length <= 10, {
    message: "No debe superar los 10 caracteres",
  })
  .transform((val) => Number(val))
  .nullable();

const address = z
  .string()
  .refine((val) => val.length <= 25, {
    message: "No debe superar los 25 caracteres",
  })
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
