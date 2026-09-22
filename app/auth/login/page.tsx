import Link from "next/link";

const LogInPage = () => {
  return (
    <div className="text-center">
      <h1 className="heading my-4">Log in Page</h1>
      <Link href="/auth/signup">
        Don't have an account? Sign up here{" "}
        <span className="text-bubblegum font-bold">Log In here</span>
      </Link>
    </div>
  );
};

export default LogInPage;
