import { Book, BookType } from "@/lib/definitions";
import React from "react";
import BookItem from "./BookItem";
import Pagination from "./Pagination";

type Props = {
  title: string;
  numberOfPages: number,
  books: BookType[];
};

const BookList = ({ title, books, numberOfPages }: Props) => {
  return (
    <section>
      <h2 className="font-bebas-neue text-4xl ">Popular books</h2>
      <div className="mt-8 flex gap-4 flex-wrap">
        {books.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            coverUrl={book.coverUrl}
            title={book.title}
            genre={book.genre}
          />
        ))}
      </div>
      <div className="text-end pt-8">
        <Pagination totalPages={numberOfPages} />
      </div>
    </section>
  );
};

export default BookList;
