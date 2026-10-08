import { getCategories } from "@/lib/supabase/queries";
import Link from "next/link";

const CategoryList = async () => {
  const { data, error } = await getCategories();

  return (
    <div className="overflow-hidden rounded-md border border-line bg-white">
      <h2 className="bg-steel px-4 py-2 font-bold text-white">Forums</h2>
      {data!.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="flex items-center justify-between gap-4 border-t border-line px-4 py-4 hover:bg-ice"
        >
          <span className="font-semibold text-navy">{category.name}</span>
          <span className="shrink-0 text-sm text-center">
            {category.Posts[0].count}{" "}
            {category.Posts[0].count === 1 ? "thread" : "threads"}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
