import { BorrowingState, PastBorrowingSchemaType } from "@/lib/definitions";
import Image from "next/image";
import React from "react";
import BorrowingStatusChip from "./BorrowingStatusChip";
import { isAfter, parseISO, startOfDay } from 'date-fns'

function BorrowedBook({
  title,
  author,
  borrowed_at,
  return_date,
  returned_at,
}: PastBorrowingSchemaType) {
  function getFormattedDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }

  function getBorrowingState(): BorrowingState {
    if(returned_at)
      return "Returned"

    const currentDate = startOfDay(new Date())
    const borrowDate = parseISO(borrowed_at)
    const dueDate = parseISO(return_date)
    
    if (isNaN(borrowDate.getTime()) || isNaN(dueDate.getTime())) 
      return "unknown"

    if(isAfter(currentDate, dueDate))
      return 'Late'
    else
      return 'Current';
  }

  return (
    <div className="max-w-40 flex flex-col gap-2">
      <div className="relative">
        <div className="flex justify-center p-8 bg-slate-700 rounded-md relative h-40">
          <Image
            src="/icons/book.svg"
            alt="book Cover"
            fill
            className="invert"
          />
        </div>
        <div className="absolute top-2 left-2">
          <BorrowingStatusChip state={getBorrowingState()} />
        </div>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm">{author}</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/icons/calendar.svg"
          className="invert"
          width={20}
          height={20}
        />
        <p className="text-sm">Borrowed on: {getFormattedDate(borrowed_at)}</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/icons/calendar.svg"
          className="fill-white"
          width={20}
          height={20}
        />
        <p className="text-sm">Return Date: {getFormattedDate(return_date)}</p>
      </div>
    </div>
  );
}

export default BorrowedBook;
