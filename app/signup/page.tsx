import Link from "next/link";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <Link href="/login">Already have an account? Log In here</Link>
    </div>
  );
};

export default SignUpPage;
