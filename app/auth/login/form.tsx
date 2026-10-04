"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "@/actions/login-action";
import { logInSchema } from "@/actions/schemas";
import ErrorMessage from "@/components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(logInSchema),
  });

  const { mutate, error, isPending } = useMutation({
    mutationFn: LogIn,
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => mutate(values))}
        className="flex flex-col rounded-md border border-line bg-white p-4 md:p-6"
      >
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input"
          {...register("email")}
          placeholder="Email..."
          autoComplete="email"
        />
        {errors.email && <ErrorMessage error={errors.email.message!} />}
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          className="input"
          {...register("password")}
          type="password"
          placeholder="Password..."
        />
        {errors.password && <ErrorMessage error={errors.password.message!} />}
        <button className="button mt-6">
          {isPending ? "Logging in..." : "Log In"}
        </button>
        {error && <ErrorMessage error={error.message} />}
      </form>
    </div>
  );
};

export default LogInForm;
