"use client";

import { DeletePost } from "@/actions/delete-action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const DeleteButton = ({ id }: { id: string }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: DeletePost,
    onSettled: () => toast("Your post has been deleted"),
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <button onClick={() => mutate(id)} className="button-secondary">
      Delete Post
    </button>
  );
};

export default DeleteButton;
