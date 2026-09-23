import { createClient } from "./browserClient";
import {type QueryData} from '@supabase/supabase-js'

export const getHomePost = async (supabase: ReturnType<typeof createClient>) => {
  return await supabase
    .from("Posts")
    .select('id, title, slug, author("id", "username")')
    .order("created_at", { ascending: false });
};

export const getSinglePost = async(slug: string) => {
    const supabase = createClient(); 
    return await supabase.from('Posts')
            .select('title, content, author("id", "username")')
            .eq('slug', slug) //How you fetch specific content
            .single()
}

export const searchPosts = async(searchTerm: string) => {
      const supabase = createClient();   
      return await supabase.from('Posts')
            .select('title, slug')
            .textSearch('title', searchTerm)
}

export type HomePostType = QueryData<ReturnType<typeof getHomePost>>;

export type SinglePostType = QueryData<ReturnType<typeof getSinglePost>>;

export type SearchResultType = QueryData<ReturnType<typeof searchPosts>>;