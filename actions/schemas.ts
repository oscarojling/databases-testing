import { z } from "zod";

export const logInSchema = z.object({
  email: z.email("Zod says incorrect email pattern!"),
  password: z.string().min(5, "Zod says no! Password must be 5 characters"),
});

export const signUpSchema = z.object({
  email: z.email("Zod says incorrect email pattern!"),
  password: z.string().min(5, "Zod says no! Password must be 5 characters"),
  username: z.string().min(6, "You need atleast 6 characters"),
});

export const createPostSchema = z.object({
  title: z.string().min(6, "Your title must be 6 characaters long min!"),
  content: z.string().optional(),
  category: z.string().min(1, "Please choose a forum"),
  image: z.instanceof(FormData).optional(),
});

export const editPostSchema = z.object({
  title: z.string().min(6, "Your title must be 6 characaters long min!"),
  content: z.string().optional(),
  image: z.instanceof(FormData).optional(),
});
