import Image from "next/image";
import React from "react";

type Props = {
  // title: string,
  // genre: string,
};

function BorrowedBook({}: Props) {
  return (
    <div className="max-w-40">
      <div className="flex justify-center p-8 bg-slate-700 rounded-md relative">
        <Image
          src="/icons/book.svg"
          alt="book Cover"
          fill
          className="invert"
        />
      </div>
      <h2>Origin</h2>
      <h3>Author name</h3>
      <p>Genre</p>
      <div className="flex gap-2">
        <img src="/icons/book.svg" className="invert" width={20} height={20} />
        <p> Borrowed on Dec 31</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/icons/calendar.svg"
          className="fill-white"
          width={20}
          height={20}
        />
        <p> Borrowed on Dec 31</p>
      </div>
    </div>
  );
}

export default BorrowedBook;
