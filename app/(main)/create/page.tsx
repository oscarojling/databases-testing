"use client";

import { CreatePost } from "@/actions/create-post-action";
import { createPostSchema } from "@/actions/schemas";
import ErrorMessage from "@/components/ErrorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCategories } from "@/lib/supabase/queries";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";

const CreatePostPage = () => {
  const postImageSchema = createPostSchema.omit({ image: true }).extend({
    image: z
      .unknown()
      .transform((value) => {
        return value as FileList;
      })
      .optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postImageSchema),
  });

  const { mutate, error } = useMutation({
    mutationFn: CreatePost,
  });

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data, error } = await getCategories();
      if (error) throw new Error();
      return data;
    },
  });

  return (
    <div className="mx-auto w-full max-w-2xl p-4 md:py-12">
      <h1 className="heading mb-4">Create a post</h1>
      <form
        onSubmit={handleSubmit((values) => {
          const imageForm = new FormData();
          if (values.image) imageForm.append("image", values.image[0]);
          mutate({
            title: values.title,
            content: values.content,
            category: values.category,
            image: imageForm,
          });
        })}
        className="flex flex-col rounded-md border border-line bg-white p-4 md:p-6"
      >
        <label htmlFor="title" className="label">
          Add a title
        </label>
        <input className="input" {...register("title")}></input>
        {errors.title && <ErrorMessage error={errors.title.message!} />}
        <label htmlFor="content" className="label">
          Add some content (optional)
        </label>
        <textarea className="input" {...register("content")}></textarea>
        {errors.content && <ErrorMessage error={errors.content.message!} />}
        <label htmlFor="category" className="label">
          Choose a forum
        </label>
        <select className="input" {...register("category")}>
          {data?.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.category && <ErrorMessage error={errors.category.message!} />}
        <label htmlFor="image" className="label">
          Add an image (optional)
        </label>
        <input className="input" type="file" {...register("image")} />
        {errors.image && <ErrorMessage error={errors.image.message!} />}
        <button className="button mt-6 self-end">Create post</button>
        {error && <ErrorMessage error={error.message} />}
      </form>
    </div>
  );
};

export default CreatePostPage;
