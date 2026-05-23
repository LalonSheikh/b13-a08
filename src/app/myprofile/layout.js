import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import React from "react";

const ProfileLayoutPage = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer />
    </div>
  );
};

export default ProfileLayoutPage;
