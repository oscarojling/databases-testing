"use server";

import z from "zod";
import { createPostSchema } from "./schemas";
import { createClient } from "@/lib/supabase/serverClient";
import { slugify } from "@/lib/supabase/slugify";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const CreatePost = async (
  postdata: z.infer<typeof createPostSchema>,
) => {
  const parsedData = createPostSchema.parse(postdata);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Unathorized access!");

  const slug = slugify(parsedData.title);

  const { data, error } = await supabase.from("Posts").insert({
    ...parsedData,
    slug: slug,
    author: user.id,
  });

  if (error) console.log(error);

  revalidatePath("/");

  redirect(`/${slug}`);
};
