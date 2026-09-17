import HomePosts from "@/components/HomePosts";
import { getHomePost } from "@/lib/supabase/queries";

export default async function Home() {
  const {data, error} =  await getHomePost()


  console.log("data", data);
  console.log("Error", error);
  
  return (
    <div className="m-4">
      <h1 className="heading">こんにちは</h1>
      {data && <HomePosts posts={data} />}
    </div>
  );
}

