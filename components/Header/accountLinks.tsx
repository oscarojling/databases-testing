import Link from "next/link";

const AccountLinks = () => {
  return (
    <div className="flex gap-4">
      <Link className="button-secondary" href="/login">Log In</Link>
      <Link className="button-secondary" href="/signup">Sign Up</Link>
    </div>
  );
};

export default AccountLinks;
