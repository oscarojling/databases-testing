import CategoryList from "@/components/CategoryList";

export const revalidate = 600; //Replaces HomePost Query. Caching
export default async function Home() {

  return (
    <div className="mx-auto w-full max-w-4xl p-4 md:py-12">
      <h1 className="heading mb-4">Forum List</h1>
      <CategoryList />
    </div>
  );
}
