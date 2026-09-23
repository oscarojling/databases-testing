"use client";
import { searchPosts, SearchResultType } from "@/lib/supabase/queries";
import Link from "next/link";
import { SetStateAction, useState } from "react";

const Search = () => {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResultType | null>(null)

  const handleClick = async() => {
    const {data, error} = await searchPosts(input)
    if (error) throw new Error
    setSearchResults(data)
  };

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInput(e.target.value)
  };

  return (
    <div className="relative">
    <div className="flex items-center overflow-hidden rounded-md border  border-line bg-white focus-within:border-accent">
      <input
        onChange={handleChange}
        placeholder="Search for posts"
        value={input}
        className="flex-1 bg-transparent px-4 py-2 text-ink placeholder-ink/40 outline-none"
      />
      <button
        onClick={handleClick}
        className="bg-accent px-4 py-2 font-semibold text-white transition hover:bg-accent-dark"
      >
        Search
      </button>
    </div>
    {searchResults && 
    <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-line bg-white p-1 shadow-md">
      {searchResults.map((result, index) => <Link onClick={() => setSearchResults(null)} className="block rounded px-3 py-2 font-semibold text-ink transition hover:bg-ice" key={index} href={`/${result.slug}`}>{result.title}</Link>)}
      </div>
      }
    </div>
  );
};

export default Search