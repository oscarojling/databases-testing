import Link from "next/link";
import LogInForm from "./form";

const LogInPage = () => {
  return (
    <div className="mx-auto w-full max-w-md p-4 md:py-12">
      <h1 className="heading mb-4">Log in</h1>
      <LogInForm />
      <p className="mt-4 text-center text-sm text-ink/70">
        Don't have an account?
        <Link href="/auth/signup" className="font-semibold text-accent-dark">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LogInPage;
