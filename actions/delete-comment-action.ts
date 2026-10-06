"use server";

import { createClient } from "@/lib/supabase/serverClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export const DeleteCommentAction = async (commentId: string) => {
  const supabase = await createClient();

  const { error } = await supabase
    .from("Comments")
    .delete()
    .eq("id", commentId);

  if (error) console.log("Error", error);

  revalidatePath("/");
};
