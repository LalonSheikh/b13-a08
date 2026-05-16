import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
