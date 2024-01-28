import React from "react";
import BagReview from "../components/BagReview";
import MenuSidebar from "../components/MenuSidebar";
import Sidebar from "../components/Sidebar";

const Cartpage = () => {
  return (
    <div className="product-container">
      <MenuSidebar />
      <BagReview />
      <Sidebar />
    </div>
  );
};

export default Cartpage;
