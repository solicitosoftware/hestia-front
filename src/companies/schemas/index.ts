import { z } from "zod";

const name = z
  .string()
  .min(5, { message: "Debe tener 5 o más caracteres" })
  .max(50, { message: "No debe superar los 50 caracteres" });

const nit = z
  .string()
  .min(11, { message: "Debe tener 11 caracteres" })
  .max(11, { message: "No debe superar los 11 caracteres" })
  .refine((value) => /^[0-9]+$/.test(value), {
    message: "Solo números",
  });

const email = z.string().email({ message: "Correo electrónico invalido" });

const phone = z
  .string()
  .superRefine((val, ctx) => {
    if (val.length > 10) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_big,
        maximum: 10,
        type: "string",
        inclusive: true,
        message: "No debe superar los 10 caracteres",
      });
    }
    if (val !== "" && !/^[0-9]+$/.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_type,
        expected: "number",
        received: "string",
        message: `Solo números.`,
      });
    }
  })
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

export const formSchema = companiesSchema.partial({
  phone: true,
});

export type companiesZodType = z.infer<typeof formSchema>;
