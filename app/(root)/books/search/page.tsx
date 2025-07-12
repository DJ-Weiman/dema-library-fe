import BookList from "@/components/BookList";
import Search from "@/components/Search";
import { getBooks, getBooksForSearch } from "@/lib/books";
import React from "react";

type Props = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

const page = async (props: Props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 0;
  const { books, numberOfPages } = await getBooksForSearch(query, currentPage, 10)


  console.log(query)

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <h1 className="text-md">Find your next read!</h1>
        <h2 className="text-3xl font-bold text-center">Search Our <span className="text-overview-yellow">Vast Library</span> For The Book Of Your Choice</h2>
        <Search />
      </div>

      <BookList title="Search Results" books={books} numberOfPages={numberOfPages} />
    </div>

  );
};

export default page;
