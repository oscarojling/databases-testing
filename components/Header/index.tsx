import Link from "next/link";
import AccountLinks from "./accountLinks";

const Header = () => {
  return (
    <header className="flex justify-between p-4 border-b-4 border-lunar">
      <Link href="/" className="button">
        Oscar
      </Link>
      <AccountLinks />
    </header>
  );
};

export default Header;
