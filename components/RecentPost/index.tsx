import { getRecentPost } from "@/lib/supabase/queries";
import Link from "next/link";

const RecentPost = async () => {
  const { data, error } = await getRecentPost();

  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <h2 className="flex items-center justify-between bg-steel px-4 py-2 font-bold text-white">
        <span className="text-lg">Latest posts</span>
      </h2>
      {data!.map((post) => (
        <Link
          key={post.id}
          href={`/${post.slug}`}
          className="flex items-center justify-between gap-4 border-t border-line px-4 py-4 hover:bg-ice"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-navy">{post.title}</span>
            <span className="text-sm text-ink/60">
              {post.author.username}
            </span>
            <span className="text-sm text-ink/60">
              {post.category?.name}
            </span>
            <span className="text-sm text-ink/60">
              {new Date(post.created_at).toLocaleDateString()}
            </span>{" "}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentPost;
