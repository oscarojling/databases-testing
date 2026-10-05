"use client";

import { SignUp } from "@/actions/signup-action";
import { signUpSchema } from "@/actions/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const { mutate, error, isPending } = useMutation({
    mutationFn: SignUp,
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => mutate(values))}
        className="flex flex-col rounded-md border border-line bg-white p-4 md:p-6"
      >
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          className="input"
          {...register("username")}
          placeholder="Username..."
          autoComplete="username"
        />
        {errors.username && <ErrorMessage error={errors.username.message!} />}

        <label htmlFor="Email" className="label">
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
          {isPending ? "Signing up..." : "Sign up"}
        </button>
        {error && <ErrorMessage error={error.message} />}
      </form>
    </div>
  );
};

export default SignUpForm;
