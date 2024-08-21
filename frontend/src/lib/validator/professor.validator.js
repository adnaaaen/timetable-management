import { z } from "zod";
export const ProfessorCreateValidator = z.object({
  name: z.string().min(1, "Name Required"),
  email: z.string().min(1, "Email Required").email("Must be a valid email"),
  password: z.string().min(1, "Password Required").min(8, "Too short"),
});
