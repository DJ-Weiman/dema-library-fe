"use client";

import BorrowedBook from "@/components/BorrowedBook";
import ProfileCard from "@/components/ProfileCard";
import { getPastBorrowings } from "@/hooks/getPastBorrowings";
import { getUserDetails } from "@/hooks/getUserDetails";
import { PastBorrowingSchemaType } from "@/lib/definitions";
import React, { ReactNode } from "react";

const page = () => {
  const { data: userDetails } = getUserDetails();
  const { data: borrowingData } = getPastBorrowings();

  function getBorrowingBookEls(
    borrowingData: PastBorrowingSchemaType[]
  ): ReactNode {
    if (borrowingData.length > 0) {
      return borrowingData.map((borrowing) => (
        <BorrowedBook key={borrowing.id} {...borrowing} />
      ));
    } else {
      return <p>No Data</p>;
    }
  }

  return (
    <div className="flex gap-16 justify-between">
      <div className="flex justify-center flex-row flex-grow-1">
        <div className="min-w-md">
          <ProfileCard
            username={userDetails?.name || "_"}
            email={userDetails?.email || "_"}
            registeredDate={userDetails?.registered_date || "_"}
            pastBorrowCount={userDetails?.past_borrow_count || 0}
            currentBorrowCount={userDetails?.current_borrow_count || 0}
            remainingBorrowCount={userDetails?.remaining_borrow_count || 0}
          />
        </div>
      </div>
      <div className="flex-grow-1">
        <h2 className="font-bold text-3xl">Borrowed books</h2>
        <div className="mt-8 flex flex-wrap gap-8">
          {borrowingData && getBorrowingBookEls(borrowingData)}
        </div>
      </div>
    </div>
  );
};

export default page;
