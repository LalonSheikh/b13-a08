import LeftSide from "@/components/homepage/books/LeftSide";
import RightSide from "@/components/homepage/books/RightSide";
import { getAllBooks } from "@/lib/data";
import React from "react";

const HomePageBooks = async () => {
  const books1 = await getAllBooks();
  console.log(books1.title, "books");

  const books = books1.slice(0, 4);

  return (
    <div className=" gap-4 container mx-auto my-[60px]">
      <h2 className="font-bold text-2xl"> Featured Books</h2>
      <div className="space-y-4 mt-6 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {books.length > 0 ? (
          books.map((n) => {
            return (
              <RightSide className="rounded-md border p-6" key={n.id} books={n}>
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
  );
};

export default HomePageBooks;
