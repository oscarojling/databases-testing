import { LogOut } from "@/actions/logout-action";
import { createClient } from "@/lib/supabase/serverClient";
import Link from "next/link";

const Navbar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return (
    <div className="flex gap-4">
      {user ? (
        <>
          <div onClick={LogOut} className="button-secondary">
            Log out
          </div>
          <Link className="button-secondary" href="/create">
            Create post
          </Link>
        </>
      ) : (
        <>
          <Link className="button-secondary" href="/auth/login">
            Log in
          </Link>
          <Link className="button-secondary" href="/auth/signup">
            Sign up
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
