import { z } from "zod";

const name = z
  .string()
  .min(5, { message: "Debe tener 5 o más caracteres" })
  .max(20, { message: "No debe superar los 20 caracteres" });

const description = z
  .string()
  .min(1, { message: "Debe tener 1 o más caracteres" })
  .max(20, { message: "No debe superar los 20 caracteres" });

export const characteristicSchema = z
  .object({
    name,
    description,
    active: z.boolean().default(true),
  })
  .partial();

export const formSchema = characteristicSchema
  .required()
  .omit({ active: true });

export type characteristicZodType = z.infer<typeof formSchema>;
