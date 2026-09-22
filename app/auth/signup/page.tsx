import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="text-center">
      <h1 className="heading my-4">Sign Up Page</h1>
      <Link href="/auth/login">
        Already have an account?{" "}
        <span className="text-bubblegum font-bold">Log In here</span>
      </Link>
    </div>
  );
};

export default SignUpPage;
