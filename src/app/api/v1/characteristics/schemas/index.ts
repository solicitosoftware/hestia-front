import { z } from "zod";

export const characteristicSchema = z
  .object({
    name: z.string(),
    description: z.string(),
  })
  .partial();

export const idSchema = z.number({
  invalid_type_error: "[id] Expected number",
});

export const takeSchema = z.number({
  invalid_type_error: "[take] Expected number",
});

export const skipSchema = z.number({
  invalid_type_error: "[skip] Expected number",
});
