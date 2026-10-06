import { CommentsType, getPostComment } from "@/lib/supabase/queries";

const CommentContainer = async ({ postid }: { postid: string }) => {
  const comments = await getPostComment(postid);
  return (
    <div className="flex items-center gap-3 border-b border-line bg-ice/50 p-4 md:w-44 md:flex-col md:border-b-0 md:border-r">
      {comments && comments.length ? (
        comments.map((comment) => (
            <div key={comment.id} className="">
              <p className="whitespace-pre-line leading-relaxed text-ink">
                {comment.content}
              </p>
              <p className="whitespace-pre-line leading-relaxed text-ink">
                {comment.userid.username}
              </p>
            </div>
        ))
      ) : (
        <h2 className="font-bold text-ink">Start the conversation</h2>
      )}
    </div>
  );
};

export default CommentContainer;
