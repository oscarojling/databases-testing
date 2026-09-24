"use server";

import { createClient } from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";

export const SignUp = async (formdata: FormData) => {
  const userdata = {
    username: formdata.get("username") as string,
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
  };

  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.signUp(userdata);
  if (error) throw error;

  if (user && user.email) {
    const { data, error } = await supabase
      .from("Users")
      .insert({ id: user.id, email: user.email, username: userdata.username });
    if (error) throw error;
  }
  redirect("/");
};
