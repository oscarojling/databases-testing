import { createClient } from "./browserClient";
import { type QueryData } from "@supabase/supabase-js";

export const getCategory = async (slug: string) => {
  const supabase = createClient();
  return await supabase
    .from("Categories")
    .select('id, name, slug, Posts ("id", "title", "slug", author("username"))')
    .eq("slug", slug) 
    .single();
};

export const getCategories = async () => {
  const supabase = createClient();
  return await supabase
    .from("Categories")
    .select(`id, name, slug, Posts(count)`)
    .order("created_at", { ascending: false });
};

export const getSinglePost = async (slug: string) => {
  const supabase = createClient();
  return await supabase
    .from("Posts")
    .select(
      'id, title, content, image, author("id", "username"), category("name", "slug")',
    )
    .eq("slug", slug) //How you fetch specific content
    .single();
};

export const searchPosts = async (searchTerm: string) => {
  const supabase = createClient();
  return await supabase
    .from("Posts")
    .select("title, slug")
    .textSearch("title", searchTerm);
};

export type SinglePostType = QueryData<ReturnType<typeof getSinglePost>>;

export type SearchResultType = QueryData<ReturnType<typeof searchPosts>>;
