import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";


const SingleBookLayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
  
      <Footer></Footer>
    </div>
  );
};

export default SingleBookLayoutPage;
