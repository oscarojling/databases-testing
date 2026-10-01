import { getSinglePost } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";
import DeleteButton from "./deleteButton";

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
    <div className="mx-auto max-w-2xl p-4 md:py-12">
      {data && (
        <article className="rounded-md border border-line bg-white p-4 md:p-8">
          <h1 className="text-2xl font-bold text-navy md:text-3xl">
            {data.title}
          </h1>

          <p className="mt-2 mb-6 text-sm text-ink/60">
            by {data.author.username}
          </p>

          {data.content && (
            <p className="whitespace-pre-line  leading-relaxed text-ink">
              {data.content}
            </p>
          )}
          {isAuthor && (
            <div>
              <DeleteButton id={data.id} />
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default PostPage;
