import Link from "next/link";
import AccountLinks from "./accountLinks";
import Search from "./search";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col gap-3 bg-navy p-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Talent Boards
        </Link>
        <Search />
      </div>
      <nav className="flex justify-between bg-steel px-4 py-2 border-b-4 border-accent">
        <Link href="/" className="button">
          Forums
        </Link>
        <AccountLinks />
      </nav>
    </header>
  );
};

export default Header;
