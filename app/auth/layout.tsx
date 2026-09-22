import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="flex justify-between p-4 border-b-4 border-lunar">
        <Link href="/" className="button">
          Oscar
        </Link>
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
