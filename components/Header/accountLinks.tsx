import { LogOut } from "@/actions/logout-action";
import { createClient } from "@/lib/supabase/serverClient";
import Link from "next/link";

const AccountLinks = async () => {
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
            Log Out
          </div>
          <Link className="button-secondary" href="/create">
            Create Post
          </Link>
        </>
      ) : (
        <>
          <Link className="button-secondary" href="/auth/login">
            Log In
          </Link>
          <Link className="button-secondary" href="/auth/signup">
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default AccountLinks;
