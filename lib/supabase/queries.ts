import { createClient } from "./browserClient";
import {type QueryData} from '@supabase/supabase-js'

export const getHomePost = async () => {
  const supabase = createClient();

  return await supabase
    .from("Posts")
    .select('id, title, slug, author("id", "username")')
    .order("created_at", { ascending: false });
};

export type HomePostType = QueryData<ReturnType<typeof getHomePost>>;