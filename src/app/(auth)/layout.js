import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
