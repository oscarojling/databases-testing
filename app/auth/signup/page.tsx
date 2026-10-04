import Link from "next/link";
import SignUpForm from "./form";
import LogInForm from "../login/form";

const SignUpPage = () => {
  return (
    <div className="mx-auto w-full max-w-md p-4 md:py-12">
      <h1 className="heading mb-4">Sign up</h1>
      <SignUpForm />
      <p className="mt-4 text-center text-sm text-ink/70">
        Already have an account?
        <Link href="/auth/login" className="font-semibold text-accent-dark">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
