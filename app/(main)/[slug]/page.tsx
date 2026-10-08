import { getSinglePost } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";
import DeleteButton from "./deleteButton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CommentsContainer from "./CommentsContainer";
import AddComment from "./AddComment";

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
    <div className="mx-auto w-full max-w-7xl p-4 md:p-12">
      {data && (
        <>
          <nav className="mb-4 flex items-center gap-1 text-base text-ink/60 md:text-sm">
            <Link href="/" className="hover:text-accent-dark">
              Forums
            </Link>
            <ChevronRight className="h-5 w-5" />
            <Link
              href={`/category/${data.category?.slug}`}
              className="hover:text-accent-dark"
            >
              {data.category?.name}
            </Link>
            <ChevronRight className="h-5 w-5" />
            <span className="text-ink">{data.title}</span>
          </nav>
          <article className="overflow-hidden rounded-md border border-line bg-white md:flex">
            <div className="flex items-center gap-3 border-b border-line bg-ice/50 p-4 md:w-44 md:flex-col md:border-b-0 md:border-r">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-navy text-xl font-bold text-white">
                {data.author.username?.[0]?.toUpperCase()}
              </span>
              <p className="font-semibold text-navy">{data.author.username}</p>
            </div>
            <div className="flex-1 p-6">
              <h1 className="text-2xl font-semibold text-navy">{data.title}</h1>
              <p className="mt-1 mb-6 text-sm text-ink/60">
                by {data.author.username}
              </p>

              {data.image && (
                <img
                  src={data.image}
                  alt={data.title}
                  className="mt-6 max-h-96 rounded-md"
                />
              )}
              {data.content && (
                <p className="whitespace-pre-line leading-relaxed text-ink">
                  {data.content}
                </p>
              )}

              {isAuthor && (
                <div className="mt-8 flex justify-end gap-2 border-t border-line pt-4">
                  <DeleteButton id={data.id} />
                  <Link className="button-secondary" href={`/${slug}/edit`}>
                    Edit post
                  </Link>
                </div>
              )}
            </div>
          </article>
          <CommentsContainer postid={data.id} isAuthor={isAuthor} userid={user ? user.id : null} />
          {user &&  <AddComment postid={data.id} />}
        </>
      )}
    </div>
  );
};

export default PostPage;
