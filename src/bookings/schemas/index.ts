import { z } from "zod";

const name = z
  .string()
  .min(5, { message: "Debe tener 5 o más caracteres" })
  .max(25, { message: "No debe superar los 15 caracteres" });

export const bookingSchema = z
  .object({
    name,
    route: z.string(),
    take: z.number(),
    limit: z.number(),
    active: z.boolean().default(true),
  })
  .partial();

export const formSchema = bookingSchema
  .required()
  .omit({ route: true, take: true, active: true });

export type bookingZodType = z.infer<typeof formSchema>;
