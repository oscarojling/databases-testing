"use client";

import { EditPost } from "@/actions/edit-page-actions";
import { editPostSchema } from "@/actions/schemas";
import ErrorMessage from "@/components/ErrorMessage";
import { type Tables } from "@/lib/supabase/database.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import z from "zod";

const EditPageForm = ({
  initialValues,
  postId,
}: {
  initialValues: Pick<Tables<"Posts">, "title" | "content" | "image">;
  postId: string;
}) => {
  const postImageSchema = editPostSchema.omit({ image: true }).extend({
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
    defaultValues: {
      title: initialValues.title,
      content: initialValues.content || undefined,
      image: initialValues.image || undefined,
    },
  });

  const { mutate, error } = useMutation({
    mutationFn: EditPost,
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        let imageForm = undefined;
        if (values.image && typeof values.image !== "string") {
          imageForm = new FormData();
          imageForm.append("image", values.image[0]);
        }
        mutate({
          postdata: {
            title: values.title,
            content: values.content,
            image: imageForm,
          },
          postId,
        });
      })}
      className="flex flex-col rounded-md border border-line bg-white p-4 md:p-6"
    >
      <label htmlFor="title" className="label">
        Title
      </label>
      <input className="input" {...register("title")}></input>
      {errors.title && <ErrorMessage error={errors.title.message!} />}
      <label htmlFor="content" className="label">
        Content (optional)
      </label>
      <textarea className="input" {...register("content")}></textarea>
      {initialValues.image && (
        <img
          src={initialValues.image}
          alt={initialValues.title}
          className="self-center mt-2 max-h-48 w-fit rounded-md border border-line"
        />
      )}
      <label htmlFor="image" className="label">
        Change the image (optional)
      </label>
      <input className="input" type="file" {...register("image")} />
      {errors.image && <ErrorMessage error={errors.image.message!} />}
      <button className="button mt-6 self-end">Save changes</button>
      {error && <ErrorMessage error={error.message} />}
    </form>
  );
};

export default EditPageForm;
