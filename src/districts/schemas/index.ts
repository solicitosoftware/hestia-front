import { z } from "zod";

const name = z
  .string()
  .min(5, { message: "Debe tener 5 o más caracteres" })
  .max(20, { message: "No debe superar los 10 caracteres" });

export const districSchema = z
  .object({
    name,
    image: z.string(),
  })
  .partial();

export const formSchema = districSchema.required();

export type districZodType = z.infer<typeof formSchema>;
