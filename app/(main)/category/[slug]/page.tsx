import { getCategory } from "@/lib/supabase/queries";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const { data, error } = await getCategory(slug);

  return (
    <div className="mx-auto w-full max-w-4xl p-4 md:py-12">
      {data && (
        <>
          <h1 className="heading mb-4">{data?.name}</h1>
          <nav className="mb-4 flex items-center gap-1 text-base md:text-sm text-ink/60">
            <Link href="/" className="hover:text-accent-dark">
              Forums
            </Link>
            <ChevronRight className="h-5 w-5" />
            <span className="text-ink">{data?.name}</span>
          </nav>
          <div className="overflow-hidden rounded-md border border-line bg-white">
            <h2 className="bg-steel px-4 py-2 font-bold text-white">Threads</h2>
            {data?.Posts.map((post) => (
              <Link
                key={post.id}
                href={`/${post.slug}`}
                className="flex items-center gap-3 border-t border-line px-4 py-3 hover:bg-ice"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-sm font-bold text-white">
                  {post.author.username?.[0]?.toUpperCase()}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-navy">{post.title}</p>
                  <p className="text-sm text-ink/60">
                    by {post.author.username}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-ink/60">
                  {new Date(post.created_at).toLocaleDateString()}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PostPage;
