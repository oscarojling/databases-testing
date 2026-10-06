import { CommentsType, getPostComment } from "@/lib/supabase/queries";
import DeleteComment from "./deleteComment";

const CommentContainer = async ({ postid, isAuthor, userid }: { postid: string , isAuthor:boolean, userid: string | null}) => {
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
              {(isAuthor || (userid === comment.userid.id)) && <DeleteComment commentId={comment.id} />}
            </div>
        ))
      ) : (
        <h2 className="font-bold text-ink">Start the conversation</h2>
      )}
    </div>
  );
};

export default CommentContainer;
