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
    <div className="flex items-center overflow-hidden rounded-full border-2 border-plum/10 bg-white shadow-[4px_4px_0_var(--color-plum)] focus-within:border-lilac">
      <input
        onChange={handleChange}
        placeholder="Search for posts"
        value={input}
        className="flex-1 bg-transparent px-5 py-3 text-plum placeholder-plum/40 outline-none"
      />
      <button
        onClick={handleClick}
        className="bg-bubblegum px-6 py-3 font-bold text-cream transition hover:bg-lilac"
      >
        Search
      </button>
    </div>
    {searchResults && 
    <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-2xl border-2 border-plum/10 bg-white p-2 shadow-[4px_4px_0_var(--color-plum)]">
      {searchResults.map((result, index) => <Link className="block rounded-xl px-3 py-2 font-semibold text-plum transition hover:bg-mint/40" key={index} href={`/${result.slug}`}>{result.title}</Link>)}
      </div>
      }
    </div>
  );
};

export default Search