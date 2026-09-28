import { getCategories } from "@/lib/supabase/queries";
import Link from "next/link";

const CategoryList = async () => {
  const { data, error } = await getCategories();

  return (
    <div className="rounded-md border border-line bg-white py-4 overflow-hidden mb-6">
      <h2 className="bg-steel text-white font-bold px-4 py-2">Forums</h2>
      {data!.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="flex items-center justify-between gap-4 px-4 py-3 border-t border-line hover:bg-ice"
        >
          <span className="font-semibold text-ink">{category.name}</span>
          <div className="text-center">
            <p className="font-bold text-ink">
              {category.Posts[0].count}
              {category.Posts[0].count === 1 ? "Post" : "Posts"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
