import Banner from "@/shared/Banner";
import CategorySection from "@/shared/CategorySection";
import Footer from "@/shared/Footer";
import MarqueeBar from "@/shared/MarqueeBar";
import Navbar from "@/shared/Navbar";
import TestimonialSection from "@/shared/TestimonialSection";
import React from "react";

const AllBooksLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <MarqueeBar></MarqueeBar>
      {children}
      <CategorySection></CategorySection>
      <TestimonialSection></TestimonialSection>
      <Footer></Footer>
    </div>
  );
};

export default AllBooksLayout;
