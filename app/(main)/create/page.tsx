"use client";

import { CreatePost } from "@/actions/create-post-action";
import { createPostSchema } from "@/actions/schemas";
import ErrorMessage from "@/components/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const CreatePostPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createPostSchema),
  });

  const { mutate, error } = useMutation({
    mutationFn: CreatePost,
  });

  return (
    <div className="w-lg mx-auto">
      <h1 className="heading">Create a Post</h1>
      <form
        onSubmit={handleSubmit((values) => mutate(values))}
        className="flex flex-col w-full m-auto mb-4 rounded-md border-line bg-white p-4 text-left md:p-6"
      >
        <label htmlFor="title">Add a title</label>
        <input className="input" {...register("title")}></input>
        {errors.title && <ErrorMessage error={errors.title.message!} />}
        <label htmlFor="content">Add some content (optional)</label>
        <textarea className="input" {...register("content")}></textarea>
        {errors.content && <ErrorMessage error={errors.content.message!} />}
        <button className="button mt-4">Create Post</button>
        {error && <ErrorMessage error={error.message} />}
      </form>
    </div>
  );
};

export default CreatePostPage;
