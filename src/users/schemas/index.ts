import { z } from "zod";
import { roles } from "@prisma/client";

export interface users {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isActive: boolean;
  roles: roles[];
}

const name = z.string().min(4, { message: "Debe tener 4 o más caracteres" });
const identification = z
  .string()
  .min(8, { message: "Debe tener 8 o más caracteres" })
  .max(10, { message: "No debe superar los 10 caracteres" })
  .refine((value) => /^[0-9]+$/.test(value), {
    message: "Solo números",
  })
  .transform((value) => Number(value));

const email = z.string().email({ message: "Correo electrónico invalido" });
const password = z.string();
const image = z.string().url({ message: "Url invalida" });
const isActive = z.boolean({ required_error: "Debe seleccionar un estado" });
const state = z.object({
  value: isActive,
  label: z.string(),
});
const rol = z
  .array(z.string(), { required_error: "Debe seleccionar al menos un rol" })
  .min(1, "Debe seleccionar al menos un rol");

export const userSchema = z
  .object({
    name,
    identification,
    email,
    isActive,
    state,
    rol,
  })
  .required();

export const formSchema = userSchema.partial({ state: true });

export type userZodType = z.infer<typeof formSchema>;
