import { z } from "zod";

const name = z
  .string()
  .min(5, { message: "Debe tener 5 o más caracteres" })
  .max(20, { message: "No debe superar los 20 caracteres" });

const description = z
  .string()
  .min(1, { message: "Debe tener 1 o más caracteres" })
  .max(20, { message: "No debe superar los 20 caracteres" });

const typeId = z.number({
  required_error: "Debe seleccionar un tipo",
});

const type = z.object({
  value: typeId,
  label: z.string(),
});

const active = z.boolean().default(true);

export const characteristicSchema = z
  .object({
    name,
    description,
    typeId,
    type,
    active,
  })
  .required();

export const formSchema = characteristicSchema
  .partial({ type: true })
  .omit({ active: true });

export type characteristicZodType = z.infer<typeof formSchema>;
