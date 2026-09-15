import { createClient } from "@/lib/supabase/browserClient";

export default async function Home() {
  const supabase = createClient()
  const {data, error} = await supabase.from('Posts').select("*")
  console.log("data", data);
  console.log("Error", error);
  
  return (
    <div className="m-4">
      <h1 className="heading">こんにちは</h1>
      {data && data.map((item, index) => <div key={index}>{item.title}</div>)}
    </div>
  );
}
