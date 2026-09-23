"use client";

import { SignUp } from "@/actions/signup-action";

const SignUpForm = () => {
  return (
    <div>
      <form className="flex flex-col max-w-md mx-auto mb-4 rounded-md border-line bg-white p-4 text-left md:p-6">
        <label htmlFor="username">Enter your Username</label>
        <input
          className="input"
          name="username"
          placeholder="Username..."
          autoComplete="username"
          required
          minLength={3}
          maxLength={20}
        />
        <label htmlFor="Email">Enter your Email</label>
        <input
          className="input"
          name="email"
          placeholder="Email..."
          autoComplete="email"
          required
        />
        <label htmlFor="password">Enter your Password</label>
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Password..."
        />
        <button className="button mt-2 cursor-pointer" formAction={SignUp}>
          Sign Up!
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
