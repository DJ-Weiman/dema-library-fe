'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { URLSearchParams } from "url";


const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) params.set("query", term);
    else params.delete("query");
    replace(`${pathName}?${params.toString}`);
  }

  return (
    <input
      placeholder="Enter book title"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
};

export default Search;
