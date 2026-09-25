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
        className="flex flex-col max-w-md mx-auto mb-4 rounded-md border border-line bg-white p-4 text-left md:p-6"
      >
        <label htmlFor="username">Enter your Username</label>
        <input
          className="input"
          {...register("username")}
          placeholder="Username..."
          autoComplete="username"
        />
        {errors.username && <ErrorMessage error={errors.username.message!} />}

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

        <button className="button mt-2 cursor-pointer">{isPending ? "Signing up..." : "Sign Up"}</button>
        {error && <ErrorMessage error={error.message} />}
      </form>
    </div>
  );
};

export default SignUpForm;
