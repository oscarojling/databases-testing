import { z } from "zod";

export const logInSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export const signUpSchema = z.object({
  email: z.email("Enter a valid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  username: z.string().min(6, "Username must be at least 6 characters"),
});

export const createPostSchema = z.object({
  title: z.string().min(6, "Title must be at least 6 characters"),
  content: z.string().optional(),
  category: z.string().min(1, "Choose a forum for your post"),
  image: z.instanceof(FormData).optional(),
});

export const editPostSchema = z.object({
  title: z.string().min(6, "Title must be at least 6 characters"),
  content: z.string().optional(),
  image: z.instanceof(FormData).optional(),
});

export const commentSchema = z.object({
  content: z.string().min(3, "Comments must be at least 3 characters"),
});
