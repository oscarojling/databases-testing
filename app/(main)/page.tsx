import HomePosts from "@/components/HomePosts";
import { getHomePost } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";

export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await getHomePost(supabase);

  console.log("data", data);
  console.log("Error", error);

  return (
    <div className="m-4">
      <h1 className="heading">Forum List</h1>
      {data && <HomePosts posts={data} />}
    </div>
  );
}
