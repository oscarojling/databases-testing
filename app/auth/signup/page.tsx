import Link from "next/link";
import SignUpForm from "./form";

const SignUpPage = () => {
  return (
    <div className="text-center">
      <h1 className="heading my-4">Sign Up Page</h1>
      <SignUpForm />
      <span className="flex flex-col">
        Already have an account?
        <Link href="/auth/login" className="text-accent-dark font-bold mx-2">
          Log In here
        </Link>
      </span>
    </div>
  );
};

export default SignUpPage;
