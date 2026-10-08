"use client";

import { AddCommentAction } from "@/actions/add-comment-action";
import { commentSchema } from "@/actions/schemas";
import ErrorMessage from "@/components/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddComment = ({ postid }: { postid: string }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(commentSchema),
  });

  const { mutate, error, isPending } = useMutation({
    mutationFn: AddCommentAction,
    onSuccess: () => reset(),
    onSettled: () => toast("Added comment"),
  });

  return (
    <form
      className="mt-4 flex flex-col rounded-md border border-line bg-white p-4 md:p-6"
      onSubmit={handleSubmit((values) =>
        mutate({ commentdata: { content: values.content }, postid }),
      )}
    >
      <label className="label mt-0" htmlFor="content">
        Write a reply
      </label>
      <textarea
        className="input"
        {...register("content")}
        placeholder="Add your comment"
      />
      {errors.content && <ErrorMessage error={errors.content.message!} />}
      <button className="button mt-4 self-end">
        {isPending ? "Posting..." : "Post reply"}
      </button>
      {error && <ErrorMessage error={error.message} />}
    </form>
  );
};

export default AddComment;
