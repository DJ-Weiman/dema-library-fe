"use client";

import BorrowedBook from "@/components/BorrowedBook";
import ProfileCard from "@/components/ProfileCard";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import React, { useEffect } from "react";

const page = () => {
  const { data, error } = useGetUserDetails();

  return (
    <div className="flex grow-0 gap-16 justify-between">
      <div className="self-start min-w-md">
        <ProfileCard
          username={data?.name || "_"}
          email={data?.email || "_"}
          registeredDate={data?.registered_date || "_"}
          pastBorrowCount={data?.past_borrow_count || 0}
          currentBorrowCount={data?.current_borrow_count || 0}
          remainingBorrowCount={data?.remaining_borrow_count || 0}
        />

      </div>
      <div>
        <h2>Borrowed books</h2>
        <div className="mt-8 flex flex-wrap gap-8">
          <BorrowedBook />
          <BorrowedBook />
          <BorrowedBook />
          <BorrowedBook />
        </div>
      </div>
    </div>
  );
};

export default page;
