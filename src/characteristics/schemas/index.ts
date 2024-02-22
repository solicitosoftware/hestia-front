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

export const characteristicSchema = z
  .object({
    name,
    description,
    typeId,
    type,
    active: z.boolean().default(true),
  })
  .partial();

export const apiSchema = characteristicSchema.required();

export const formSchema = characteristicSchema
  .required({ name: true, description: true, typeId: true })
  .omit({ active: true });

export type characteristicZodType = z.infer<typeof formSchema>;
