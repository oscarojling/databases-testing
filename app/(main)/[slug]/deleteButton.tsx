"use client";

import { DeletePost } from "@/actions/delete-action";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const DeleteButton = ({ id }: { id: string }) => {
  const { mutate, isPending } = useMutation({
    mutationFn: DeletePost,
    onSettled: () => toast("Your post has been deleted"),
  });

  return (
    <button onClick={() => mutate(id)} className="button-secondary">
      {isPending ? "Deleting..." : "Delete post"}
    </button>
  );
};

export default DeleteButton;
