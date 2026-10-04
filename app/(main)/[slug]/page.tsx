import { getSinglePost } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";
import DeleteButton from "./deleteButton";
import Link from "next/link";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await getSinglePost(slug);

  const isAuthor: boolean =
    user && data && user.id === data.author.id ? true : false;

  return (
    <div className="mx-auto max-w-3xl p-4 md:py-12">
      {data && (
        <article className="rounded-md border border-line bg-white p-6">
          <h1 className="text-2xl font-bold text-navy">{data.title}</h1>
          <p className="mt-1 mb-6 text-sm text-ink/60">
            by {data.author.username}
          </p>
          {data.content && (
            <p className="whitespace-pre-line leading-relaxed text-ink">
              {data.content}
            </p>
          )}

          {data.image && (
            <img
              src={data.image}
              alt={data.title}
              className="mt-6 max-h-96 rounded-md"
            />
          )}

          {isAuthor && (
            <div className="mt-8 flex justify-end gap-2 border-t border-line pt-4">
              <DeleteButton id={data.id} />
              <Link className="button-secondary" href={`/${slug}/edit`}>
                Edit Post
              </Link>
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default PostPage;
