'use server'

import { createClient } from "@/lib/supabase/serverClient";
import { commentSchema } from "./schemas";
import z from "zod";
import { revalidatePath } from "next/cache";

export const AddCommentAction = async ({
  commentdata,
  postid,
}: {
  commentdata: z.infer<typeof commentSchema>;
  postid: string;
}) => {
  const supabase = await createClient();
  const parsedData = commentSchema.parse(commentdata);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("You need to log in to do this!");

  await supabase
    .from("Comments")
    .insert({ postid: postid, userid: user.id, ...parsedData })
    .throwOnError();

    revalidatePath("/")
};
