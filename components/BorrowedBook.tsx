import Image from "next/image";
import React from "react";

type Props = {
  // title: string,
  // genre: string,
};

function BorrowedBook({}: Props) {
  return (
    <div className="max-w-40 flex flex-col gap-2">
      <div className="flex justify-center p-8 bg-slate-700 rounded-md relative h-40">
        <Image src="/icons/book.svg" alt="book Cover" fill className="invert" />
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="font-bold text-lg">Origin</h2>
        <p className="text-sm">Author name</p>
        <p className="text-xs">Genre</p>
      </div>
      <div className="flex gap-2">
        <img src="/icons/book.svg" className="invert" width={20} height={20} />
        <p className="text-sm"> Borrowed on Dec 31</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/icons/calendar.svg"
          className="fill-white"
          width={20}
          height={20}
        />
        <p className="text-sm"> Borrowed on Dec 31</p>
      </div>
    </div>
  );
}

export default BorrowedBook;
