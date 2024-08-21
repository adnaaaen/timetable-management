import { z } from "zod";
export const LoginValidator = z.object({
  email: z.string().min(1, "Email Required").email("Must be a valid email"),
  password: z.string().min(1, "Password Required").min(8, "Too short"),
});
