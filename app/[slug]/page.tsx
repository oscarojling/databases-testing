import { getSinglePost } from "@/lib/supabase/queries";

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const { data, error } = await getSinglePost(slug);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      {data && (
        <article className="relative rounded-3xl border-2 border-plum/10 bg-white p-8 shadow-[4px_4px_0_var(--color-plum)] sm:p-10">
          <span className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-peach text-lg shadow-[2px_2px_0_var(--color-plum)]">
            📖
          </span>

          <h1 className="text-3xl font-bold text-plum [text-shadow:2px_2px_0_var(--color-bubblegum)] sm:text-4xl">
            {data.title}
          </h1>

          <div className="mt-4 mb-6 inline-flex items-center gap-2 rounded-full bg-mint/60 px-3 py-1 text-sm font-semibold text-plum">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bubblegum text-[10px] text-cream">
              {data.author.username?.[0]?.toUpperCase()}
            </span>
            Created by {data.author.username}
          </div>

          {data.content && (
            <p className="whitespace-pre-line text-lg leading-relaxed text-plum/90">
              {data.content}
            </p>
          )}
        </article>
      )}
    </div>
  );
};

export default PostPage;
