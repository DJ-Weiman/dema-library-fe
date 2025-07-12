'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from 'use-debounce'
import React from "react";


const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) params.set("query", term);
    else params.delete("query");
    replace(`${pathName}?${params.toString()}`);
  }, 300)

  return (
    <div
      className="bg-slate-600 px-4 py-2 rounded-sm flex gap-3">
      <MagnifyingGlassIcon className="w-4" />
      <input
        className="focus:outline-none"
        placeholder="Enter book title"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default Search;


