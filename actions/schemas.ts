import { z } from "zod";

export const logInSchema = z.object({
  email: z.email("Zod says incorrect email pattern!"),
  password: z.string().min(5, "Zod says no! Password must be 5 characters"),
});

export const signUpSchema = z.object({
  email: z.email("Zod says incorrect email pattern!"),
  password: z.string().min(5, "Zod says no! Password must be 5 characters"),
  username: z.string().min(6, "You need atleast 6 characters")
});
