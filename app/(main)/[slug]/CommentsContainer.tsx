import { getPostComment } from "@/lib/supabase/queries";
import DeleteComment from "./deleteComment";

const CommentContainer = async ({
  postid,
  isAuthor,
  userid,
}: {
  postid: string;
  isAuthor: boolean;
  userid: string | null;
}) => {
  const comments = await getPostComment(postid);
  return (
    <div className="mt-4 flex flex-col gap-4">
      {comments && comments.length ? (
        comments.map((comment) => (
          <article
            key={comment.id}
            className="overflow-hidden rounded-md border border-line bg-white md:flex"
          >
            <div className="flex items-center gap-3 border-b border-line bg-ice/50 p-4 md:w-44 md:flex-col md:border-b-0 md:border-r">
              <span className="flex h-12 w-12 items-center justify-center rounded bg-navy text-xl font-bold text-white">
                {comment.userid.username?.[0]?.toUpperCase()}
              </span>
              <p className="font-semibold text-navy">
                {comment.userid.username}
              </p>
            </div>
            <div className="flex-1 p-6">
              <p className="whitespace-pre-line leading-relaxed text-ink">
                {comment.content}
              </p>
              {(isAuthor || userid === comment.userid.id) && (
                <div className="mt-6 flex justify-end border-t border-line pt-4">
                  <DeleteComment commentId={comment.id} />
                </div>
              )}
            </div>
          </article>
        ))
      ) : (
        <p className="rounded-md border border-line bg-white p-6 text-center text-ink/60">
          No replies yet. Start the conversation.
        </p>
      )}
    </div>
  );
};

export default CommentContainer;
