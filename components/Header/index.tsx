import Link from "next/link";
import Search from "./search";
import Navbar from "../Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col gap-3 bg-navy p-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Binoculars" width={53} height={40} />
          <span className="text-2xl font-bold text-white">
            Scout
            <span className="ml-2 text-accent">Boards</span>
          </span>
        </Link>
        <Search />
      </div>
      <nav className="flex justify-between bg-steel px-4 py-2 border-b-4 border-accent">
        <Link href="/" className="button">
          Forums
        </Link>
        <Navbar />
      </nav>
    </header>
  );
};

export default Header;
