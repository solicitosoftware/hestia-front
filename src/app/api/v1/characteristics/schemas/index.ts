import { z } from "zod";

export const characteristicSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    active: z.boolean(),
  })
  .partial();
