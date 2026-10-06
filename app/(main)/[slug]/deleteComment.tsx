"use client";

import { DeleteCommentAction } from "@/actions/delete-comment-action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const DeleteComment = ({ commentId }: { commentId: string }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: DeleteCommentAction,
    onSettled: () => toast("Your comment has been deleted"),
  });

  return (
    <button onClick={() => mutate(commentId)} className="button-secondary">
      {isPending ? "Deleting..." : "Delete comment"}
    </button>
  );
};

export default DeleteComment;
