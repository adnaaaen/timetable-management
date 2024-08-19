import { z } from "zod";
export const SubjectCreateValidator = z.object({
  name: z.string().min(1, "Name Required"),
  display_name: z.string().min(1, "Display Name Required"),
});
