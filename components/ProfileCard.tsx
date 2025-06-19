import Image from "next/image";
import React from "react";

type Props = {
  username: string,
  email: string,
  registeredDate: string,
  pastBorrowCount: number,
  currentBorrowCount: number,
  remainingBorrowCount: number
};

function ProfileCard({username, email, registeredDate, pastBorrowCount, currentBorrowCount, remainingBorrowCount}: Props) {
  return (
    <div className="bg-slate-700 w-fit p-8 flex flex-col rounded-lg">
      <div className="flex gap-4">
        <Image
          src="/icons/user.svg"
          alt="user profile Icon"
          width={50}
          height={50}
          className="rounded-full invert"
        />
        <div className="flex flex-col">
            <p>{username}</p>
            <p>{email}</p>
        </div>
      </div>

      <div className="bg-slate-600 mt-10 rounded-md p-4 flex flex-col gap-2">
        <p>Registered Date: {registeredDate}</p>
        <p>Current Borrow Count: {currentBorrowCount}</p>
        <p>Past Borrow Count: {pastBorrowCount}</p>
        <p>Remaning Borrow Count: {remainingBorrowCount}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
