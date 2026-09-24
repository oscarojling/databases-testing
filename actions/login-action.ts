"use server";

import { createClient } from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";
import { logInSchema } from "./schemas";

export const LogIn = async (formdata: FormData) => {
  const userdata = {
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
  };

  const parsedData = logInSchema.parse(userdata)

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword(parsedData);

  if (error) throw error;

  redirect("/");
};
