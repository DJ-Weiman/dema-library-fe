import { getBookForId } from "@/app/api/api";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { redirect } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

async function page({ params }: { params: Promise<{ id: number }> }) {
  const id = (await params).id;

  const book = await getBookForId(id)

  if(!book) redirect("/404")

  return (
    <div className="flex flex-col bg-slate-800 p-8">
      <BookOverview {...book} />
      <div className="flex">
        <div className="flex flex-col">
            <h1>Summary</h1>
            <p>{book.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
