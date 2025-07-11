import Search from "@/components/Search";
import { getBooks } from "@/lib/books";
import React from "react";

type Props = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

const page = async (props: Props) => {
  const searchParams = await props.searchParams;
  // const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const {books} = await getBooks(currentPage, 5)

  console.log(books)

  return (
    <div>
      <h1>Find your next read!</h1>
      <h2>Search our vast library for the book of yor</h2>
      <Search />
    </div>
  );
};

export default page;
