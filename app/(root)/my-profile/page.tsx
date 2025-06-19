import BorrowedBook from "@/components/BorrowedBook";
import ProfileCard from "@/components/ProfileCard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-around">
      <ProfileCard 
        username="DionJW"
        email="djw@gmail.com"
        registeredDate="10/04/2024"
        pastBorrowCount={5}
        currentBorrowCount={2}
        remainingBorrowCount={4}
      />
      <div>
        <h2>Borrowed books</h2>
        <div>
          <BorrowedBook 
          
        />
        </div>
      </div>
    </div>
  );
};

export default page;
