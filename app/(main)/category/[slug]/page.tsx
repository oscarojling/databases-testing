import { getCategory } from "@/lib/supabase/queries";
import Link from "next/link";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const { data, error } = await getCategory(slug);

  return (
    <div className="mx-auto max-w-4xl p-4 md:py-12">
      {data && (
        <>
          <h1 className="heading mb-4">{data?.name}</h1>
          <div className="grid gap-2">
            {data?.Posts.map((post) => (
              <Link
                key={post.id}
                href={`/${post.slug}`}
                className="block rounded-md border border-line bg-white p-4 hover:border-accent"
              >
                <h3 className="font-bold text-ink">{post.title}</h3>
                <p className="text-sm text-ink/60">by {post.author.username}</p>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PostPage;
