import CategoryList from "@/components/CategoryList";

export const revalidate = 600; //Replaces HomePost Query. Caching
export default async function Home() {

  return (
    <div className="m-4">
      <h1 className="heading">Forum List</h1>
      <CategoryList />
    </div>
  );
}
