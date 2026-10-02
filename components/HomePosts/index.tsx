"use client";
import { HomePostType } from "@/lib/supabase/queries";
import Link from "next/link";

const HomePosts = ({ posts }: { posts: HomePostType }) => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/${post.slug}`}
          className="block rounded-md border border-line bg-white p-4 hover:border-accent"
        >
          {post.image && <img className="h-full w-auto" src={post.image} alt={post.title} />}
          <h3 className="text-lg font-bold text-ink">{post.title}</h3>
          <p className="mt-2 text-sm text-ink/60">by {post.author.username}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomePosts;
