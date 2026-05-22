import LeftSidebar from "@/components/homepage/books/LeftSide";
import { getAllBooks } from "@/lib/data";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

const CategoryPageLayout = async ({ children }) => {
  const books = await getAllBooks();
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12">
        <div className="grid col-span-3">
          <LeftSidebar books={books}></LeftSidebar>
        </div>
        <div
          className="grid col-span-9
         "
        >
          {children}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CategoryPageLayout;
