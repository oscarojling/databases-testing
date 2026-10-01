import CategoryList from "@/components/CategoryList";
import HomePosts from "@/components/HomePosts";
import { getHomePost } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/serverClient";

export const revalidate = 600; //Replaces HomePost Query. Caching
export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await getHomePost(supabase);

  return (
    <div className="m-4">
      <h1 className="heading">Forum List</h1>
      <CategoryList />
      {data && <HomePosts posts={data} />}
    </div>
  );
}
