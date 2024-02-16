import { z } from "zod";

export const disttricSchema = z
  .object({
    name: z.string(),
    image: z.string(),
  })
  .partial();
