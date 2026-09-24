"use client";

import { LogIn } from "@/actions/login-action";

const LogInForm = () => {
  return (
    <div>
      <form className="flex flex-col max-w-md mx-auto mb-4 rounded-md border-line bg-white p-4 text-left md:p-6">
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
        <button className="button mt-2 cursor-pointer" formAction={LogIn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogInForm;
