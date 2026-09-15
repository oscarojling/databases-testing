import Link from "next/link";

const LogInPage = () => {
  return (
    <div>
      <h1>Log in Page</h1>
      <Link href="/signup">Don't have an account? Sign up here</Link>
    </div>
  );
};

export default LogInPage;
