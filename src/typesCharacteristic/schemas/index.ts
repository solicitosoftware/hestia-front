import { z } from "zod";

export const typesSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Debe tener 4 o más caracteres" })
    .max(15, { message: "No debe superar los 15 caracteres" }),
});

export type typesZodType = z.infer<typeof typesSchema>;
