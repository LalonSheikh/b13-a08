import LeftSide from "@/components/homepage/books/LeftSide";
import RightSide from "@/components/homepage/books/RightSide";
import { getAllBooks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllBooksPage = async () => {
  const books = await getAllBooks();
  console.log(books.title, "books");

  return (
    <div className="">
      <div className="space-y-4 mt-6 grid grid-cols-12 ">
        <div className=" col-span-3 ">
               <LeftSide books={books}></LeftSide>
             </div>
        <div className=" bg-purple-100 col-span-9">
          <div className="grid grid-cols-4">
            {books.length > 0 ? (
              books.map((n) => {
                return (
                  <RightSide
                    className="rounded-md border p-6"
                    key={n.id}
                    books={n}
                  >
                    {" "}
                    {n.title}{" "}
                  </RightSide>
                );
              })
            ) : (
              <div className="text-4xl  text-red-400 text-center font-bold my-7">
                No News Found!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
