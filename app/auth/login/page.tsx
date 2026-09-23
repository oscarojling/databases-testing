import Link from "next/link";

const LogInPage = () => {
  return (
    <div className="text-center">
      <h1 className="heading my-4">Log In Page</h1>
      <span className="flex flex-col">
        Don't have an account?
        <Link href="/auth/signup" className="text-accent-dark font-bold mx-2">
          Sign Up here
        </Link>
      </span>
    </div>
  );
};

export default LogInPage;
