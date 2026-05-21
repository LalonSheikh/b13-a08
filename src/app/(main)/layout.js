import Banner from "@/shared/Banner";
import Footer from "@/shared/Footer";
import MarqueeBar from "@/shared/MarqueeBar";
import Navbar from "@/shared/Navbar";
import React from "react";

const AllBooksLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <MarqueeBar></MarqueeBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default AllBooksLayout;
