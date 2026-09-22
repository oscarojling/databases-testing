"use client";
import { getHomePost, HomePostType } from "@/lib/supabase/queries";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const HomePosts = ({ posts }: { posts: HomePostType }) => {
  const { data } = useQuery({
    queryKey: ["home-post"],
    queryFn: async () => {
      const { data, error } = await getHomePost();
      if (error) throw new Error();
      console.log("Component", data);
      return data;
    },
    initialData: posts,
    staleTime: 1000,
  });

  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((post) => (
        <Link
          key={post.id}
          href={`/${post.slug}`}
          className="group relative block rounded-3xl border-2 border-plum/10 bg-white p-6 shadow-[4px_4px_0_var(--color-plum)] transition duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:-rotate-1 hover:border-lilac hover:bg-lilac/10 hover:shadow-[6px_6px_0_var(--color-plum)] active:translate-x-0.5 active:translate-y-0.5 active:rotate-0 active:shadow-[1px_1px_0_var(--color-plum)]"
        >
          <span className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-bubblegum text-lg shadow-[2px_2px_0_var(--color-plum)] transition group-hover:rotate-12">
            🐾
          </span>

          <h3 className="text-2xl font-bold leading-snug text-plum">
            {post.title}
          </h3>

          <div className="mt-4 flex items-center justify-end gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint text-xs font-bold text-plum">
              {post.author.username?.[0]?.toUpperCase()}
            </span>
            <p className="text-sm text-plum/70">
              by{" "}
              <span className="font-semibold text-plum">
                {post.author.username}
              </span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePosts;
