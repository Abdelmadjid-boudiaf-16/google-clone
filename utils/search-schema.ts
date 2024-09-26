import { z } from "zod";
export const searchSchema = z.object({
  inputSearch: z.string(),
});
