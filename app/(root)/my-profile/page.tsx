"use client";

import BorrowedBook from "@/components/BorrowedBook";
import ProfileCard from "@/components/ProfileCard";
import { useGetUserDetails } from "@/hooks/useGetUserDetails";
import React, { useEffect } from "react";

const page = () => {
  const { data, error } = useGetUserDetails();

    console.log("Checker _____");
    console.log(data);
    console.log(error);

  return (
    <div className="flex grow-0 gap-16 justify-between">
      <div className="self-start min-w-md">
        <ProfileCard
          username="DionJW"
          email="djw@gmail.com"
          registeredDate="10/04/2024"
          pastBorrowCount={5}
          currentBorrowCount={2}
          remainingBorrowCount={4}
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
