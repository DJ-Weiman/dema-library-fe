"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useBorrowBook } from "@/hooks/useBorrowBook";
import { getErrorMessage } from "@/lib/utils";
import toast from "react-hot-toast";
import { BorrowingSucessResponse } from "@/lib/definitions";

type Props = {
  bookID: string;
};

const BorrowBookButton = ({ bookID }: Props) => {
  const { mutate, data, error } = useBorrowBook();

  function handleBorrowBook() {
    mutate({ book_id: bookID });
  }

  useEffect(() => {
    if (error) {
      toast.error(getErrorMessage(error));
    }

    if (data) {
      const borrowingRes = BorrowingSucessResponse.safeParse(data.data);
      if (borrowingRes.success) {
        toast.success(borrowingRes.data.status);
      }else{
        toast.error("Try Again Later!")
      }
    }
  }, [data, error]);

  return (
    <Button
      onClick={() => handleBorrowBook()}
      className="bg-overview-yellow flex items-center p-6 rounded-sm hover:bg-yellow-600 cursor-pointer"
    >
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-black">Borrow</p>
    </Button>
  );
};

export default BorrowBookButton;
