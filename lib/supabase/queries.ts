import { createClient } from "./browserClient";

export const getHomePost = async () => {
  const supabase = createClient();

  return await supabase
    .from("Posts")
    .select('id, title, slug, author("id", "username")')
    .order("created_at", { ascending: false });
};