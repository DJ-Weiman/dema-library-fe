import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  coverUrl: string | null;
  title: string;
  genre: string;
};

function BookItem({ id, coverUrl, title, genre }: Props) {
  return (
    <Link href={`/books/${id}`}>
      <div className="relative max-w-40">
        <div className="relative w-40 h-50">
          {
            coverUrl ?
              <Image
                src={coverUrl}
                alt="Book Cover"
                fill
                className="rounded-sm object-cover"
              /> :
              <Image
                src='/icons/book.svg'
                alt="Book Cover"
                fill
                className="rounded-sm object-cover invert"
              />
          }
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-xs font-light text-slate-400">{genre}</p>
        </div>
      </div>
    </Link>
  );
}

export default BookItem;
