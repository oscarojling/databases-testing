"use client";
import { getHomePost, HomePostType } from "@/lib/supabase/queries";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/browserClient";

const HomePosts = ({ posts }: { posts: HomePostType }) => {
  const supabase = createClient();
  const { data } = useQuery({
    queryKey: ["home-post"],
    queryFn: async () => {
      const { data, error } = await getHomePost(supabase);
      if (error) throw new Error();
      console.log("Component", data);
      return data;
    },
    initialData: posts,
    staleTime: 1000,
  });

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2">
      {data.map((post) => (
        <Link
          key={post.id}
          href={`/${post.slug}`}
          className="block rounded-md border border-line bg-white p-4 hover:border-accent"
        >
          <h3 className="text-lg font-bold text-ink">{post.title}</h3>
          <p className="mt-2 text-sm text-ink/60">by {post.author.username}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomePosts;
