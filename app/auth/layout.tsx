import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-navy p-4 border-b-4 border-accent">
        <Link href="/" className="text-2xl font-bold text-white">
          Scout Boards
        </Link>
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
