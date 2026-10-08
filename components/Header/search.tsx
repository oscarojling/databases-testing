"use client";
import { searchPosts, SearchResultType } from "@/lib/supabase/queries";
import Link from "next/link";
import { SetStateAction, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Search = () => {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultType | null>(
    null,
  );

  const pathname = usePathname();

  const handleSearchSubmit = async (
    event: React.SubmitEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const { data, error } = await searchPosts(input);
    if (error) throw new Error();
    setSearchResults(data);
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setInput(e.target.value);
    setSearchResults(null);
  };

  useEffect(() => {
    setSearchResults(null);
    setInput("");
  }, [pathname]);

  return (
    <div className="relative">
      <form
        className="flex items-center overflow-hidden rounded-md border  border-line bg-white focus-within:border-accent"
        onSubmit={handleSearchSubmit}
      >
        <input
          onChange={handleChange}
          placeholder="Search for posts"
          type="text"
          value={input}
          className="flex-1 bg-transparent px-4 py-2 text-ink placeholder-ink/40 outline-none"
        />
        <button
          type="submit"
          className="bg-accent px-4 py-2 font-semibold text-white transition hover:bg-accent-dark"
        >
          Search
        </button>
      </form>
      {searchResults &&
        (searchResults.length > 0 ? (
          <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-line bg-white p-1 shadow-md">
            {searchResults.map((result, index) => (
              <Link
                className="block rounded px-3 py-2 font-semibold text-ink transition hover:bg-ice"
                key={index}
                href={`/${result.slug}`}
              >
                {result.title}
              </Link>
            ))}
          </div>
        ) : (
          <p className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-line bg-white px-3 py-2 font-semibold text-ink shadow-md">
            No posts found
          </p>
        ))}
    </div>
  );
};

export default Search;
