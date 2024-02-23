import { z } from "zod";

export const idSchema = z.number({
  invalid_type_error: "[id] Expected number",
});

export const takeSchema = z.number({
  invalid_type_error: "[take] Expected number",
});

export const skipSchema = z.number({
  invalid_type_error: "[skip] Expected number",
});

export const userSchema = z
  .object({
    name: z.string().min(4, { message: "Debe tener 4 o más caracteres" }),
    email: z.string().email({ message: "Correo electrónico invalido" }),
    password: z.string(),
    image: z.string().url({ message: "Invalid url" }),
  })
  .partial({
    image: true,
  });

export type userZodType = z.infer<typeof userSchema>;
