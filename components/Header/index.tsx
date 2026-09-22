import Link from "next/link";
import AccountLinks from "./accountLinks";
import Search from "./search";

const Header = () => {
  return (
    <header className="flex justify-between p-4 border-b-4 border-lunar">
      <Link href="/" className="button">
        Oscar
      </Link>
      <Search />
      <AccountLinks />
    </header>
  );
};

export default Header;
