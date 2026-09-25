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
        className="flex flex-col max-w-md mx-auto mb-4 rounded-md border-line bg-white p-4 text-left md:p-6"
      >
        <label htmlFor="Email">Enter your Email</label>
        <input
          className="input"
          {...register("email")}
          placeholder="Email..."
          autoComplete="email"
        />
        {errors.email && <ErrorMessage error={errors.email.message!} />}
        <label htmlFor="password">Enter your Password</label>
        <input
          className="input"
          {...register("password")}
          type="password"
          placeholder="Password..."
        />
        {errors.password && <ErrorMessage error={errors.password.message!} />}
        <button className="button mt-2 cursor-pointer">{isPending ? "Logging in..." : "Log In"}</button>
        {error && <ErrorMessage error={error.message} />}
      </form>
    </div>
  );
};

export default LogInForm;
