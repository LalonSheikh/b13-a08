"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import LeftSide from "@/components/homepage/books/LeftSide";
import RightSide from "@/components/homepage/books/RightSide";

export default function AllBooksClient({ books }) {
  const [search, setSearch] = useState("");

  const filteredBooks = (books || []).filter((book) =>
    (book?.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* SEARCH BAR */}
      <SearchBar onSearch={setSearch} />

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-12 gap-4 mt-6">

        {/* LEFT SIDE */}
        <div className="col-span-3">
          <LeftSide books={books} />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-9 bg-purple-100 p-3 rounded-md">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <RightSide key={book.id} books={book} />
              ))
            ) : (
              <div className="text-red-500 font-bold text-xl">
                No Books Found
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}