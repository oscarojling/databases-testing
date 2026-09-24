import { email, z } from "zod";

export const logInSchema = z.object({
  email: z.email("Zod says incorrect email pattern!"),
  password: z.string().min(5, "Zod says no! Password must be 5 characters"),
});
